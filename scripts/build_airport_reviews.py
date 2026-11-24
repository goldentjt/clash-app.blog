import re
import json
import os

with open('data/raw_airports_prompt.txt', 'r', encoding='utf-8') as f:
    text = f.read()

sections = re.split(r'\n(?=\d{2}\s+)', text)[1:]
print(f"Loaded {len(sections)} airport raw sections.")

# Load airports.ts for exact IDs, promoCodes, and invite URLs
with open('data/airports.ts', 'r', encoding='utf-8') as f:
    ts_code = f.read()

# Map num to ID and promo
airports_map = {}
for m in re.finditer(r"id:\s*['\"]([^'\"]+)['\"][\s\S]*?num:\s*['\"]([^'\"]+)['\"][\s\S]*?name:\s*['\"]([^'\"]+)['\"][\s\S]*?inviteUrl:\s*['\"]([^'\"]+)['\"][\s\S]*?promoCode:\s*['\"]([^'\"]+)['\"]", ts_code):
    airports_map[m.group(2)] = {
        'id': m.group(1),
        'num': m.group(2),
        'name': m.group(3),
        'inviteUrl': m.group(4),
        'promoCode': m.group(5)
    }

print(f"Mapped {len(airports_map)} airports from data/airports.ts.")

# Define focus categories and metadata enrichment for each airport
categories = {
    '01': ('视频使用型 / 原生IP长期自用', 'u1s1', ['原生住宅IP', '4K秒开', '不限时流量包', '稳定自用']),
    '02': ('AI使用型 / 纯正IPLC物理专线', 'jilianyun', ['纯正IPLC内网专线', '抗封锁抗QoS', '港日30ms超低延迟', 'ChatGPT/Claude免切线']),
    '03': ('新手友好型 / 独享专线方案', 'guangnianti', ['一键极速导入', '三网智能优化', '新手零门槛', '私人独享专线可选']),
    '04': ('低延迟日常交互型 / BGP入口', 'guangsuyun', ['BGP多线入口', '低延迟中转', '即时通讯极速响应', '不限时流量包可选']),
    '05': ('多协议技术型 / VLESS智能分流', 'weitucloud', ['VLESS主流协议', '60+节点智能负载均衡', '入门年付6.66元/月', '进阶免切线']),
    '06': ('多地区型 / 大流量性价比', 'yuzhoucloud', ['70+全球多国节点', '多地区覆盖', '大流量低单价', '企业级内网专线']),
    '07': ('高带宽专线型 / 晚高峰4K-8K流媒体', 'sujie', ['高带宽IPLC专线', '晚高峰4K/8K秒开', '抗抖动低丢包', '超大流量高阶档']),
    '08': ('多设备型 / 团队与家庭共享', 'sogocloud', ['多端并发支持', '全球专线节点', '大月流量起步', '一次性流量包丰富']),
    '09': ('极低门槛尝鲜型 / 月付平价体验', 'kuaili', ['10元极低门槛', '活动入门档', '中转线路均衡', '适合新手过渡体验']),
    '10': ('轻量低价型 / 日常备用', 'ermaoyun', ['20元轻量月付', '三网中转平价方案', '操作简便', '备用主力双持']),
    '11': ('大流量中转加速型 / 影音冲浪', 'yifanyun', ['150GB起充沛流量', '三网中转优化', '4K高清流畅播放', '阶梯套餐清晰']),
    '12': ('边缘网络优化型 / BGP低抖动', 'edgenova', ['边缘节点智能调度', '低延迟BGP中转', '外贸与办公友好', '稳定抗封锁']),
    '13': ('超低价备用型 / 极简小包', 'kexinyun', ['9元超低月付门槛', '45GB极简小包', '查资料与文献备选', '低成本零负担']),
    '14': ('跨境商务互联型 / 节点分布广', 'quanqiuyun', ['欧美亚主流覆盖', '跨境电商与学术支持', '中转多线优化', '企业协同顺畅']),
    '15': ('学生与轻度预算型 / 极致性价比', 'feimaoyun', ['年付折算7元/月', '学生预算友好', '日常查资料与学术检索', '低门槛稳定访问']),
    '16': ('影音娱乐加速型 / 流媒体解锁', 'muguang', ['主流流媒体解锁', '中转带宽充足', '晚高峰影音体验优化', '操作导入便捷']),
    '17': ('骨干网优质中转型 / 均衡稳定', 'wavenet', ['三网骨干入口', '稳定低丢包率', '支持全平台客户端', '办公与娱乐兼顾']),
    '18': ('不限时大流量型 / 长期无忧储备', 'laddercloud', ['580元/1000G不限时包', '常规月付25元起', '无过期清零焦虑', '多设备自由连接']),
    '19': ('轻巧多端调度型 / 灵活配置', 'lingdongyun', ['多端兼容性强', '智能策略组调度', '月付门槛亲民', '日常网页交互顺滑']),
    '20': ('安全隐私防漏型 / 稳定抗封', 'yinxingren', ['节点混淆防阻断', '私密数据传输', '低丢包稳定连接', '安全科研与商务']),
    '21': ('大吞吐冲浪型 / 高峰大带宽', 'flyv', ['大带宽吞吐能力', '多并发下载加速', '流媒体秒开体验', '高阶用户畅享']),
    '22': ('高性价比大流量型 / 流量单价实惠', 'breezenet', ['25元即享200GB', '超低单GB使用成本', '多节点轮询支持', '重度追剧冲浪']),
    '23': ('平价日常翻墙型 / 阶梯合理', 'worryfree', ['12.92元超值月付', '通用订阅全面兼容', '全平台客户端即导即用', '高性价过渡']),
    '24': ('年付轻量备选型 / 小包长期在线', 'civet', ['85元年付小包', '低成本长期保活', '轻度查资料与即时通信', '不占预算备用']),
    '25': ('微型经济年付型 / IPLC专线宣传', 'flashleap', ['96元年付折合8元/月', '宣称IPLC低延迟', '轻度学习与科研备选', '首年试用低成本']),
    '26': ('稳定年付轻量型 / VLESS多线支持', 'firefly', ['96元年付折合8元/月', 'VLESS协议兼容', '支持主流移动客户端', '经济型自用储备']),
    '27': ('跨境电商与学术型 / 稳定专线', 'kuajieyun', ['跨境电商后台访问', '学术论文顺畅查阅', '20元月付起步', '大流量四档梯度']),
    '28': ('大户阶梯流量型 / 超大带宽承载', 'dalaoyun', ['最高1500GB无界大包', '四档阶梯从轻量到尊享', '多设备重度下载无忧', '企业及团队适宜'])
}

reviews_data = []

for i, sec in enumerate(sections):
    num_str = f"{i+1:02d}"
    if num_str not in airports_map:
        continue
    base = airports_map[num_str]
    cat_info = categories.get(num_str, ('综合实用型', base['id'], ['稳定连接', '客户端适配']))
    
    # Parse lines from raw section
    lines = [l.strip() for l in sec.strip().split('\n') if l.strip()]
    raw_text = "\n".join(lines)
    
    # Extract price
    price_match = re.search(r'(?:最低价格|价格)[：:]\s*([^\n]+)', raw_text)
    min_price = price_match.group(1).strip() if price_match else "20 元/月"
    
    # Extract selling point
    selling_match = re.search(r'(?:主打卖点|卖点)[：:]\s*([^\n]+(?:\n[^\n]+)?)', raw_text)
    selling_points = selling_match.group(1).strip() if selling_match else "节点优化，支持主流客户端订阅。"
    
    # Extract packages block
    pkg_idx = -1
    for idx_l, l in enumerate(lines):
        if '套餐：' in l or '套餐:' in l or '价格轻云' in l:
            pkg_idx = idx_l
            break
    
    pkg_lines = lines[pkg_idx:] if pkg_idx != -1 else lines[4:]
    pkg_text = "；".join([l for l in pkg_lines if not l.startswith('核对提示') and not l.startswith('机场名')])[:300]
    
    # Notes
    note_match = re.search(r'核对提示[：:]\s*([^\n]+)', raw_text)
    note_text = note_match.group(1).strip() if note_match else "购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。"

    review = {
        'id': base['id'],
        'num': base['num'],
        'name': base['name'],
        'inviteUrl': base['inviteUrl'],
        'promoCode': base['promoCode'],
        'minPrice': min_price,
        'focusCategory': cat_info[0],
        'sellingPoints': selling_points,
        'packageSummary': pkg_text,
        'verificationNote': note_text,
        'tags': cat_info[2]
    }
    reviews_data.append(review)

print(f"Generated {len(reviews_data)} reviews metadata.")

with open('data/raw_parsed_reviews.json', 'w', encoding='utf-8') as out:
    json.dump(reviews_data, out, ensure_ascii=False, indent=2)

print("Saved to data/raw_parsed_reviews.json")
