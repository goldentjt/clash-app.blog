import json

with open('data/raw_parsed_reviews.json', 'r', encoding='utf-8') as f:
    airports = json.load(f)

print(f"Adding {len(airports)} airport pages to data/pages.ts...")

with open('data/pages.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Check if already added
if '/airport/u1s1' in content:
    print("Airport pages already in data/pages.ts, skipping append.")
    exit(0)

# Generate TypeScript objects for the 28 pages
items = []
for a in airports:
    aid = a['id']
    name = a['name']
    num = a['num']
    price = a['minPrice']
    promo = a['promoCode']
    tag = a['tags'][0] if a['tags'] else '稳定推荐'
    selling = a['sellingPoints'][:30]
    
    item = f"""  {{
    path: '/airport/{aid}',
    title: '{name}机场独立评测：{tag}与选型指南｜clashapp',
    description: '深度实测 {name} 机场：价格 {price}、专属优惠码 {promo}、节点测速、ChatGPT 与 4K 流媒体解锁实况及优缺点分析。',
    h1: '{name} 机场全面深度评测报告',
    h2s: ['购买决策判断与速览结论', '机场基本资料与来源声明', '套餐梯度与真实使用成本', '节点地区与线路架构', '速度延迟丢包稳定性实测', '常见高频使用疑问'],
    category: '服务选择',
    shortTitle: '{name}评测',
    keywords: ['{name}', '{name}机场', '{name}评测', '{name}优惠码', 'Clash机场推荐', '科学上网梯子', '2026好用机场'],
    longTailKeywords: [
      '{name} 机场怎么样好用吗',
      '{name} 优惠码与最新套餐价格',
      '{name} 支持哪些设备和客户端',
      '{name} 能解锁 ChatGPT 和 4K 流媒体吗',
      '{name} 与四大主力机场横向对比'
    ],
    prevPage: {{ title: '28家精选机场总览', path: '/airport-recommend' }},
    nextPage: {{ title: '客户端下载', path: '/download' }},
    featured: {str(aid in ['u1s1', 'jilianyun', 'guangnianti', 'guangsuyun']).lower()},
    readTime: '6 分钟',
    summary: '客观详尽评测 {name} 机场：涵盖从购买决策、资费测算、节点测速、流媒体与 AI 解锁到日常排查的 16 大全方位测评模块。'
  }}"""
    items.append(item)

# Insert before closing bracket of PAGES array
insert_pos = content.rfind(']')
if insert_pos != -1:
    new_content = content[:insert_pos] + ",\n" + ",\n".join(items) + "\n" + content[insert_pos:]
    with open('data/pages.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully appended 28 airport pages to data/pages.ts!")
else:
    print("Could not find closing bracket in data/pages.ts")

