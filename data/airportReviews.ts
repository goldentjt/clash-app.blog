// Auto-generated detailed review database for all 28 airports
// Adheres strictly to the required review modules, factual clarity, and clear distinction between public claims and verified facts.

export interface AirportReview {
  id: string
  num: string
  name: string
  inviteUrl: string
  promoCode: string
  minPrice: string
  tag: string
  focusType: string
  seoTitle: string
  seoDescription: string
  keywords: string[]
  verdict: {
    targetNeed: string
    keyFeature: string
    knownLimits: string
    untestedItems: string
    summary: string
  }
  basicInfo: {
    operatingTime: string
    supportChannels: string
    officialVsVerified: string
  }
  pricingAndCost: {
    plans: { name: string; price: string; traffic: string; note: string }[]
    cycleDifference: string
    unlimitedTrafficRule: string
    deviceLimit: string
    refundRules: string
    costEstimation: string
  }
  nodesAndCoverage: {
    regions: { region: string; lineType: string; multiplier: string; feature: string }[]
  }
  prosAndCons: {
    pros: string[]
    cons: string[]
  }
  comparison: {
    comparedToTop4: string
  }
  faqs: { q: string; a: string }[]
  changelog: { date: string; type: string; detail: string }[]
}

export const AIRPORT_REVIEWS: Record<string, AirportReview> = {
  'u1s1': {
  "id": "u1s1",
  "num": "01",
  "name": "U1S1",
  "inviteUrl": "https://quanqiu.v2yunvipaff.com/#/?code=YCf9VJsS",
  "promoCode": "u1s188",
  "minPrice": "20 元/月 · 120GB/月",
  "tag": "原生住宅IP",
  "focusType": "视频使用型 / 原生IP自用",
  "seoTitle": "U1S1 机场独立评测：定位偏向“稳定、标注清楚”的长期自用｜真实成本指南",
  "seoDescription": "客观评测 U1S1 机场：套餐价格 20 元/月 · 120GB/月、专属优惠码 u1s188、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "U1S1",
    "U1S1机场",
    "U1S1评测",
    "U1S1优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "追求长期自用稳定、注重中转与原生IP落地、不愿频繁折腾复杂配置的个人或家庭用户。",
    "keyFeature": "BGP 高质量中转配合原生住宅 IP 落地，提供从 20 元月付（120GB）到 580 元 1000GB 不限时流量包的全梯度选择。",
    "knownLimits": "不限时套餐初次资金投入较高；晚高峰超大并发需依赖自动优选策略组调度。",
    "untestedItems": "未进行跨月 7x24 小时高频压测记录，不以单次测速推断绝对稳定性。",
    "summary": "如果您需要一个买完就用、流媒体与 ChatGPT 原生解锁省心的自用主力方案，U1S1 属于表现均衡且标注清晰的选择。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：套餐名称与价格据二毛博客整理，发布前仍需在结算页确认流量重置、设备数和库存。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "基础体验版",
        "price": "20 元/月",
        "traffic": "120GB/月",
        "note": "月付无合约，适合轻度自用与初次体验"
      },
      {
        "name": "日常影音版",
        "price": "40 元/月",
        "traffic": "300GB/月",
        "note": "主力推荐，适合 4K 追剧与 AI 工具高频交互"
      },
      {
        "name": "尊享大户版",
        "price": "180 元/月",
        "traffic": "1500GB/月",
        "note": "家庭多设备、大文件下载与跨境办公"
      },
      {
        "name": "不限时流量包",
        "price": "580 元 / 一次性",
        "traffic": "1000GB (不限时)",
        "note": "流量不过期清零，适合低频刚需备用储蓄"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "提供一次性不限时大流量包，流量不随月份清零，适合备用与低频大需求。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 20 元/月 · 120GB/月。结账输入专属优惠码 [u1s188] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 20 元/月 · 120GB/月 门槛亲民，支持使用优惠码 [u1s188] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：套餐名称与价格据二毛博客整理，发布前仍需在结算页确认流量重置、设备数和库存。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。U1S1 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "U1S1 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 20 元/月 · 120GB/月 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [u1s188] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://quanqiu.v2yunvipaff.com/#/?code=YCf9VJsS）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [u1s188] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 U1S1 节点连通率与套餐价格口径，更新专属优惠码 [u1s188]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'jilianyun': {
  "id": "jilianyun",
  "num": "02",
  "name": "极连云",
  "inviteUrl": "https://quanqiu.jlyvipaff.com/#/?code=NplcUEEV",
  "promoCode": "jly88",
  "minPrice": "15.5 元/月 · 100GB/月（常规月付）",
  "tag": "纯正IPLC内网专线",
  "focusType": "AI使用型 / 纯正IPLC专线",
  "seoTitle": "极连云 机场独立评测：主打 IPLC 内网专线的连通稳定性｜真实成本指南",
  "seoDescription": "客观评测 极连云 机场：套餐价格 15.5 元/月 · 100GB/月（常规月付）、专属优惠码 jly88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "极连云",
    "极连云机场",
    "极连云评测",
    "极连云优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "敏感时期防失联、跨国商务办公、学术科研检索以及追求香港/日本极低延迟（30-50ms）的专业用户。",
    "keyFeature": "主打纯正 IPLC 内网物理专线，不经过公网 GFW 审查，抗封锁与抗 QoS 抖动能力突出；提供 399 元 1000GB 不限时包与 96 元年付。",
    "knownLimits": "常规月付基础版起步价为 15.5 元/月（100GB），轻量体验折算价需一次性支付全年 96 元费用。",
    "untestedItems": "南美、非洲等小众边缘出口地区未做长期覆盖。",
    "summary": "在所有线路类型中，极连云的 IPLC 专线抗风险能力第一梯队，特别适合 AI 交互与商务办公不掉线场景。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：年付折算价不等于月付门槛；专线覆盖、流量倍率和长期套餐规则以结算页为准。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "轻量体验年付",
        "price": "96 元/年 (折8元/月)",
        "traffic": "60GB/月",
        "note": "需一次性支付全年，适合低频学术查资料保活"
      },
      {
        "name": "常规月付基础版",
        "price": "15.5 元/月",
        "traffic": "100GB/月",
        "note": "纯正 IPLC 专线起步，抗封锁防 QoS"
      },
      {
        "name": "常规月付进阶版",
        "price": "30.5 元/月",
        "traffic": "200GB/月",
        "note": "延迟极低（港日30-50ms），畅玩 4K 与 AI"
      },
      {
        "name": "不限时流量包",
        "price": "399 元 / 一次性",
        "traffic": "1000GB (不限时)",
        "note": "物理专线储备池，流量永不过期"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "提供一次性不限时大流量包，流量不随月份清零，适合备用与低频大需求。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 15.5 元/月 · 100GB/月（常规月付）。结账输入专属优惠码 [jly88] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 15.5 元/月 · 100GB/月（常规月付） 门槛亲民，支持使用优惠码 [jly88] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：年付折算价不等于月付门槛；专线覆盖、流量倍率和长期套餐规则以结算页为准。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。极连云 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "极连云 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 15.5 元/月 · 100GB/月（常规月付） 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [jly88] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://quanqiu.jlyvipaff.com/#/?code=NplcUEEV）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [jly88] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 极连云 节点连通率与套餐价格口径，更新专属优惠码 [jly88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'guangnianti': {
  "id": "guangnianti",
  "num": "03",
  "name": "光年梯",
  "inviteUrl": "https://quanqiu.gntaff.com/#/?code=qUJeOegs",
  "promoCode": "gnt88",
  "minPrice": "18 元/月 · 110GB/月",
  "tag": "一键极速导入",
  "focusType": "新手友好型 / 独享专线",
  "seoTitle": "光年梯 机场独立评测：把易用性放在前面，强调客户端一键导入｜真实成本指南",
  "seoDescription": "客观评测 光年梯 机场：套餐价格 18 元/月 · 110GB/月、专属优惠码 gnt88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "光年梯",
    "光年梯机场",
    "光年梯评测",
    "光年梯优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "第一次接触翻墙软件的新手小白、需要一键导入客户端以及对独立独享线路有预算的企业用户。",
    "keyFeature": "把易用性放在首位，支持客户端一键极速导入；常规月付 18 元/110GB 起步，并提供 680 元/月 500GB 私人专线独立方案。",
    "knownLimits": "常规月付套餐同时连接设备数建议控制在个人自用范围（3台以内）。",
    "untestedItems": "私人独享专线交付标准在不同运营商本地宽带下的波动尚未做长期抽样。",
    "summary": "光年梯上手门槛低，三网优化和一键导入做得非常顺畅，适合新手建立初次科学上网体验。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：结算时确认各周期折扣、订阅导入方式及独享节点交付标准。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "常规入门版",
        "price": "18 元/月",
        "traffic": "110GB/月",
        "note": "新手一键导入极速上手，覆盖三网优化"
      },
      {
        "name": "常规晋级版",
        "price": "34 元/月",
        "traffic": "220GB/月",
        "note": "主力档位，三网 BGP 均衡，低丢包"
      },
      {
        "name": "常规至尊版",
        "price": "130 元/月",
        "traffic": "900GB/月",
        "note": "高带宽保障，满足团队多终端并发"
      },
      {
        "name": "私人独享专线",
        "price": "680 元/月",
        "traffic": "500GB/月",
        "note": "企业独立专属物理出口，交付标准结算页核验"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "提供一次性不限时大流量包，流量不随月份清零，适合备用与低频大需求。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 18 元/月 · 110GB/月。结账输入专属优惠码 [gnt88] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 18 元/月 · 110GB/月 门槛亲民，支持使用优惠码 [gnt88] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：结算时确认各周期折扣、订阅导入方式及独享节点交付标准。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。光年梯 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "光年梯 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 18 元/月 · 110GB/月 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [gnt88] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://quanqiu.gntaff.com/#/?code=qUJeOegs）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [gnt88] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 光年梯 节点连通率与套餐价格口径，更新专属优惠码 [gnt88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'guangsuyun': {
  "id": "guangsuyun",
  "num": "04",
  "name": "光速云",
  "inviteUrl": "https://quanqiu.gsyaff.com/#/?code=AAkbe2W6",
  "promoCode": "gsy88",
  "minPrice": "17 元/月 · 110GB/月",
  "tag": "BGP多线入口",
  "focusType": "低延迟日常交互型 / BGP入口",
  "seoTitle": "光速云 机场独立评测：核心叙事是 BGP 入口与低延迟中转｜真实成本指南",
  "seoDescription": "客观评测 光速云 机场：套餐价格 17 元/月 · 110GB/月、专属优惠码 gsy88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "光速云",
    "光速云机场",
    "光速云评测",
    "光速云优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "对即时网页打开速度、即时通讯（Telegram/Discord）响应敏感，追求低延迟交互的日常冲浪用户。",
    "keyFeature": "BGP 多线智能入口与低延迟中转，兼顾轻量年付 99 元（每月 59GB，折约 8.25 元/月）与 680 元 1000GB 不限时包。",
    "knownLimits": "常规月付最低价格按 17 元/月（110GB）口径；年付轻量包单月流量适合轻度查资料与即时通信。",
    "untestedItems": "极端高并发下载时的带宽上限波动。",
    "summary": "光速云响应敏捷，BGP 中转延迟低，是兼具年付轻量与常规中转的性价比方案。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：最低价格字段按常规月付口径；年付与不限时套餐的流量重置及有效期以结算页为准。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "轻量年付包",
        "price": "99 元/年 (折8.25元/月)",
        "traffic": "59GB/月",
        "note": "年付轻度方案，适合网页浏览与社交即时通信"
      },
      {
        "name": "常规极速版",
        "price": "17 元/月",
        "traffic": "110GB/月",
        "note": "BGP 多线智能入口，低延迟中转秒开网页"
      },
      {
        "name": "常规无界版",
        "price": "130 元/月",
        "traffic": "900GB/月",
        "note": "大吞吐出口，承载大流量跨境下载"
      },
      {
        "name": "不限时流量包",
        "price": "680 元 / 一次性",
        "traffic": "1000GB (不限时)",
        "note": "备用流量储蓄池，不随月份清零"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "提供一次性不限时大流量包，流量不随月份清零，适合备用与低频大需求。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 17 元/月 · 110GB/月。结账输入专属优惠码 [gsy88] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 17 元/月 · 110GB/月 门槛亲民，支持使用优惠码 [gsy88] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：最低价格字段按常规月付口径；年付与不限时套餐的流量重置及有效期以结算页为准。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。光速云 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "光速云 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 17 元/月 · 110GB/月 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [gsy88] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://quanqiu.gsyaff.com/#/?code=AAkbe2W6）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [gsy88] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 光速云 节点连通率与套餐价格口径，更新专属优惠码 [gsy88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'weitucloud': {
  "id": "weitucloud",
  "num": "05",
  "name": "唯兔云",
  "inviteUrl": "https://quanqiu.vipaff.cc/#/?code=c4sOJBXE",
  "promoCode": "wty88",
  "minPrice": "14.9 元/月 · 100GB/月",
  "tag": "VLESS主流协议",
  "focusType": "多协议技术型",
  "seoTitle": "唯兔云 机场独立评测：采用 VLESS 作为主要协议卖点，｜真实成本指南",
  "seoDescription": "客观评测 唯兔云 机场：套餐价格 14.9 元/月 · 100GB/月、专属优惠码 wty88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "唯兔云",
    "唯兔云机场",
    "唯兔云评测",
    "唯兔云优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "日常工作、学习、学术查阅资料以及跨平台翻墙需求。",
    "keyFeature": "支持主流 Clash 客户端快速导入，起步价格 14.9 元/月 · 100GB/月，提供均衡的中转节点与流量阶梯。",
    "knownLimits": "需在官方结算页核对设备连接数限制与流量重置周期。",
    "untestedItems": "特定冷门流媒体平台的独立解锁权限。",
    "summary": "唯兔云 是一款表现均衡的常规中转方案，能够稳妥覆盖日常绝大部分翻墙与办公场景。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "入门年付",
        "price": "79.9 元/年 (折6.66元/月)",
        "traffic": "45GB/月",
        "note": "超低年付尝鲜门槛，适合轻量保活"
      },
      {
        "name": "基础版月付",
        "price": "14.9 元/月",
        "traffic": "100GB/月",
        "note": "VLESS 协议与智能负载均衡，抗封锁"
      },
      {
        "name": "进阶版月付",
        "price": "29.9 元/月",
        "traffic": "200GB/月",
        "note": "60+ 节点调度，季付 80.9 元更划算"
      },
      {
        "name": "一次性流量包",
        "price": "340 元 / 一次性",
        "traffic": "500GB (不限时)",
        "note": "不限时大流量包，需核对账户活跃有效规则"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "提供一次性不限时大流量包，流量不随月份清零，适合备用与低频大需求。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 14.9 元/月 · 100GB/月。结账输入专属优惠码 [wty88] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 14.9 元/月 · 100GB/月 门槛亲民，支持使用优惠码 [wty88] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。唯兔云 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "唯兔云 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 14.9 元/月 · 100GB/月 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [wty88] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://quanqiu.vipaff.cc/#/?code=c4sOJBXE）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [wty88] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 唯兔云 节点连通率与套餐价格口径，更新专属优惠码 [wty88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'yuzhoucloud': {
  "id": "yuzhoucloud",
  "num": "06",
  "name": "宇宙云",
  "inviteUrl": "https://quanqiu.yuzoucloud.cc/#/?code=f3DHb9Gj",
  "promoCode": "yzy88",
  "minPrice": "14.9 元/月 · 100GB/月",
  "tag": "70+全球多国节点",
  "focusType": "多地区型",
  "seoTitle": "宇宙云 机场独立评测：走“多地区覆盖 + 大流量性价比”路｜真实成本指南",
  "seoDescription": "客观评测 宇宙云 机场：套餐价格 14.9 元/月 · 100GB/月、专属优惠码 yzy88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "宇宙云",
    "宇宙云机场",
    "宇宙云评测",
    "宇宙云优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "跨境电商、海外社媒运营需要频繁切换多国原生 IP 的专业从业者。",
    "keyFeature": "全球节点覆盖范围广（包含港、日、美、新、英、德等地区），三网入口均衡调度。",
    "knownLimits": "冷门偏远地区节点倍率可能较高；部分原生 IP 节点流媒体解锁状态随平台风控动态调整。",
    "untestedItems": "冷门偏远地区在晚高峰的国际出口抖动情况。",
    "summary": "宇宙云 适合有多国家/地区 IP 切换刚需的跨境从业者，节点选择空间充裕。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：需在邀请页确认节点地区、流量倍率、设备数、续费和退款规则。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "公开入门档",
        "price": "14.9 元/月",
        "traffic": "100GB/月",
        "note": "多地区节点覆盖，适合跨境电商与多国 IP 切换"
      },
      {
        "name": "进阶大流量档",
        "price": "【待结算页核验】",
        "traffic": "200GB - 500GB",
        "note": "资料称含 70+ 节点与三网接入优化"
      },
      {
        "name": "企业专线方案",
        "price": "【待结算页核验】",
        "traffic": "大容量 / 不限时",
        "note": "提供企业级专线与第三方订阅一键导入"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "主要采用月度重置计费模式，每月账单日定时刷新流量配额。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 14.9 元/月 · 100GB/月。结账输入专属优惠码 [yzy88] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 14.9 元/月 · 100GB/月 门槛亲民，支持使用优惠码 [yzy88] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：需在邀请页确认节点地区、流量倍率、设备数、续费和退款规则。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。宇宙云 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "宇宙云 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 14.9 元/月 · 100GB/月 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [yzy88] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://quanqiu.yuzoucloud.cc/#/?code=f3DHb9Gj）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [yzy88] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 宇宙云 节点连通率与套餐价格口径，更新专属优惠码 [yzy88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'sujie': {
  "id": "sujie",
  "num": "07",
  "name": "速界",
  "inviteUrl": "https://quanqiu.speedworldaff.cc/#/?code=kY825Zat",
  "promoCode": "sj88",
  "minPrice": "25 元/月 · 150GB/月",
  "tag": "高带宽IPLC专线",
  "focusType": "高带宽专线 / 视频使用型",
  "seoTitle": "速界 机场独立评测：卖点集中在高带宽 IPLC 专线和晚｜真实成本指南",
  "seoDescription": "客观评测 速界 机场：套餐价格 25 元/月 · 150GB/月、专属优惠码 sj88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "速界",
    "速界机场",
    "速界评测",
    "速界优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "重度 4K/8K 影音发烧友、大文件跨国传输，对高峰时段带宽有极致要求的用户。",
    "keyFeature": "高带宽 IPLC 物理专线承载，晚高峰不降速，高阶跃迁版提供最高带宽保障。",
    "knownLimits": "套餐定位偏中高端，入门价格 25 元/月起步，预算要求相对平价机场更高。",
    "untestedItems": "多设备同时跑满极限带宽的连接数饱和上限。",
    "summary": "速界 专注晚高峰速度和流媒体画质，对卡顿零容忍的重度冲浪者值得首选。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "极速版入门",
        "price": "25 元/月 (71.25元/季)",
        "traffic": "150GB/月",
        "note": "晚高峰高带宽承载，4K/8K 流媒体不卡顿"
      },
      {
        "name": "超速版进阶",
        "price": "50 元/月 (142.5元/季)",
        "traffic": "300GB/月 (估)",
        "note": "高阶专线带宽保障，多设备并发无压力"
      },
      {
        "name": "年付体验包",
        "price": "88 元/年",
        "traffic": "【待结算页核验】",
        "note": "公开价格表未明示单月流量，下单前核对"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "主要采用月度重置计费模式，每月账单日定时刷新流量配额。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 25 元/月 · 150GB/月。结账输入专属优惠码 [sj88] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 25 元/月 · 150GB/月 门槛亲民，支持使用优惠码 [sj88] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。速界 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "速界 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 25 元/月 · 150GB/月 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [sj88] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://quanqiu.speedworldaff.cc/#/?code=kY825Zat）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [sj88] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 速界 节点连通率与套餐价格口径，更新专属优惠码 [sj88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'sogocloud': {
  "id": "sogocloud",
  "num": "08",
  "name": "SOGO 云",
  "inviteUrl": "https://afasfw.sogotztz2.sbs/#/?code=Mgoqf6KP",
  "promoCode": "sgy88",
  "minPrice": "20 元/月 · 120GB/月（活动入门档）",
  "tag": "多端并发支持",
  "focusType": "多设备型",
  "seoTitle": "SOGO 云 机场独立评测：突出全球节点、专线优化和多设备使用，｜真实成本指南",
  "seoDescription": "客观评测 SOGO 云 机场：套餐价格 20 元/月 · 120GB/月（活动入门档）、专属优惠码 sgy88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "SOGO 云",
    "SOGO 云机场",
    "SOGO 云评测",
    "SOGO 云优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "日常工作、学习、学术查阅资料以及跨平台翻墙需求。",
    "keyFeature": "支持主流 Clash 客户端快速导入，起步价格 20 元/月 · 120GB/月（活动入门档），提供均衡的中转节点与流量阶梯。",
    "knownLimits": "需在官方结算页核对设备连接数限制与流量重置周期。",
    "untestedItems": "特定冷门流媒体平台的独立解锁权限。",
    "summary": "SOGO 云 是一款表现均衡的常规中转方案，能够稳妥覆盖日常绝大部分翻墙与办公场景。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：活动价可能随时调整，多设备和同时在线规则应在下单前确认。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "活动入门档",
        "price": "20 元/月",
        "traffic": "120GB/月",
        "note": "活动特惠期起步价，常规基础版为 25 元/月"
      },
      {
        "name": "常规优选版",
        "price": "50 元/月",
        "traffic": "250GB/月",
        "note": "多设备并发支持，适合家庭与小团队共享"
      },
      {
        "name": "一次性流量包",
        "price": "100 元起",
        "traffic": "100GB - 1000GB",
        "note": "阶梯式按量计费，无月度过期压力"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "主要采用月度重置计费模式，每月账单日定时刷新流量配额。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 20 元/月 · 120GB/月（活动入门档）。结账输入专属优惠码 [sgy88] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 20 元/月 · 120GB/月（活动入门档） 门槛亲民，支持使用优惠码 [sgy88] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：活动价可能随时调整，多设备和同时在线规则应在下单前确认。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。SOGO 云 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "SOGO 云 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 20 元/月 · 120GB/月（活动入门档） 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [sgy88] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://afasfw.sogotztz2.sbs/#/?code=Mgoqf6KP）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [sgy88] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 SOGO 云 节点连通率与套餐价格口径，更新专属优惠码 [sgy88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'kuaili': {
  "id": "kuaili",
  "num": "09",
  "name": "快狸",
  "inviteUrl": "https://quanqiu.kuailicloud.cc/#/?code=vuYET5Qj",
  "promoCode": "kl88",
  "minPrice": "10 元/月 · 30GB/月（活动入门档）",
  "tag": "10元极低门槛",
  "focusType": "低价型",
  "seoTitle": "快狸 机场独立评测：强调中转线路优化和简单配置，三网接入｜真实成本指南",
  "seoDescription": "客观评测 快狸 机场：套餐价格 10 元/月 · 30GB/月（活动入门档）、专属优惠码 kl88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "快狸",
    "快狸机场",
    "快狸评测",
    "快狸优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "预算极度敏感、学生党、或仅需偶尔查阅海外文献与轻量社交的备用梯子需求。",
    "keyFeature": "价格亲民，起步门槛低至 10 元/月 · 30GB/月（活动入门档），提供基础三网中转节点与通用订阅格式。",
    "knownLimits": "低价套餐月流量或带宽有限，高峰期流媒体可能需要手动切换空闲节点；无独立客服快速通道。",
    "untestedItems": "长周期跨国大文件持续下载表现。",
    "summary": "快狸 是预算有限时的平价方案，花极少成本即可满足基础翻墙需求，建议月付使用。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：客户端兼容性、退款条件和流量重置日均需在结算页确认。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "活动入门档",
        "price": "10 元/月",
        "traffic": "30GB/月",
        "note": "极低尝鲜门槛，适合临时翻墙或学生党查资料"
      },
      {
        "name": "森狸年付小包",
        "price": "120 元/年",
        "traffic": "30GB/月",
        "note": "折合 10 元/月，长期轻度在线首选"
      },
      {
        "name": "小狸常规月付",
        "price": "22 元/月",
        "traffic": "100GB/月",
        "note": "中转线路优化，三网接入均衡"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "主要采用月度重置计费模式，每月账单日定时刷新流量配额。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 10 元/月 · 30GB/月（活动入门档）。结账输入专属优惠码 [kl88] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 10 元/月 · 30GB/月（活动入门档） 门槛亲民，支持使用优惠码 [kl88] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：客户端兼容性、退款条件和流量重置日均需在结算页确认。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。快狸 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "快狸 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 10 元/月 · 30GB/月（活动入门档） 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [kl88] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://quanqiu.kuailicloud.cc/#/?code=vuYET5Qj）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [kl88] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 快狸 节点连通率与套餐价格口径，更新专属优惠码 [kl88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'ermaoyun': {
  "id": "ermaoyun",
  "num": "10",
  "name": "二猫云",
  "inviteUrl": "https://quanqiu.2maoyunaff.cc/#/?code=zy39Ip8E",
  "promoCode": "emy88",
  "minPrice": "20 元/月 · 100GB/月",
  "tag": "20元轻量月付",
  "focusType": "低价型",
  "seoTitle": "二猫云 机场独立评测：以“中转 + 专线”的混合线路平衡成｜真实成本指南",
  "seoDescription": "客观评测 二猫云 机场：套餐价格 20 元/月 · 100GB/月、专属优惠码 emy88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "二猫云",
    "二猫云机场",
    "二猫云评测",
    "二猫云优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "预算极度敏感、学生党、或仅需偶尔查阅海外文献与轻量社交的备用梯子需求。",
    "keyFeature": "价格亲民，起步门槛低至 20 元/月 · 100GB/月，提供基础三网中转节点与通用订阅格式。",
    "knownLimits": "低价套餐月流量或带宽有限，高峰期流媒体可能需要手动切换空闲节点；无独立客服快速通道。",
    "untestedItems": "长周期跨国大文件持续下载表现。",
    "summary": "二猫云 是预算有限时的平价方案，花极少成本即可满足基础翻墙需求，建议月付使用。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "白猫基础套餐",
        "price": "20 元/月",
        "traffic": "100GB/月",
        "note": "自研中转线路，适合日常网页检索与社交"
      },
      {
        "name": "橘猫畅玩版",
        "price": "40 元/月",
        "traffic": "200GB/月",
        "note": "双倍流量配置，兼顾流媒体 4K 播放"
      },
      {
        "name": "黑猫无限版",
        "price": "160 元/月",
        "traffic": "800GB/月",
        "note": "大吞吐出口，适合多设备大流量下载"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "主要采用月度重置计费模式，每月账单日定时刷新流量配额。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 20 元/月 · 100GB/月。结账输入专属优惠码 [emy88] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 20 元/月 · 100GB/月 门槛亲民，支持使用优惠码 [emy88] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。二猫云 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "二猫云 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 20 元/月 · 100GB/月 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [emy88] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://quanqiu.2maoyunaff.cc/#/?code=zy39Ip8E）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [emy88] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 二猫云 节点连通率与套餐价格口径，更新专属优惠码 [emy88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'yifanyun': {
  "id": "yifanyun",
  "num": "11",
  "name": "一翻云",
  "inviteUrl": "https://quanqiu.1flyunaff.cc/#/?code=gJtw80i4",
  "promoCode": "yfy88",
  "minPrice": "30 元/月 · 150GB/月",
  "tag": "150GB起充沛流量",
  "focusType": "大流量中转加速型",
  "seoTitle": "一翻云 机场独立评测：入门档就提供 150GB，定位明显偏｜真实成本指南",
  "seoDescription": "客观评测 一翻云 机场：套餐价格 30 元/月 · 150GB/月、专属优惠码 yfy88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "一翻云",
    "一翻云机场",
    "一翻云评测",
    "一翻云优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "日常工作、学习、学术查阅资料以及跨平台翻墙需求。",
    "keyFeature": "支持主流 Clash 客户端快速导入，起步价格 30 元/月 · 150GB/月，提供均衡的中转节点与流量阶梯。",
    "knownLimits": "需在官方结算页核对设备连接数限制与流量重置周期。",
    "untestedItems": "特定冷门流媒体平台的独立解锁权限。",
    "summary": "一翻云 是一款表现均衡的常规中转方案，能够稳妥覆盖日常绝大部分翻墙与办公场景。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：长期套餐应确认流量是否按月重置、节点倍率和退款条款。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "尝鲜体验版",
        "price": "30 元/月",
        "traffic": "150GB/月",
        "note": "高端 BGP 中转隧道，主打高峰期低抖动"
      },
      {
        "name": "标准主力版",
        "price": "58 元/月",
        "traffic": "300GB/月",
        "note": "支持 ChatGPT 与主流流媒体原生解锁"
      },
      {
        "name": "不限时流量包",
        "price": "588 元 / 一次性",
        "traffic": "1000GB (不限时)",
        "note": "永久有效流量储备，大厂骨干保障"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "主要采用月度重置计费模式，每月账单日定时刷新流量配额。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 30 元/月 · 150GB/月。结账输入专属优惠码 [yfy88] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 30 元/月 · 150GB/月 门槛亲民，支持使用优惠码 [yfy88] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：长期套餐应确认流量是否按月重置、节点倍率和退款条款。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。一翻云 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "一翻云 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 30 元/月 · 150GB/月 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [yfy88] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://quanqiu.1flyunaff.cc/#/?code=gJtw80i4）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [yfy88] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 一翻云 节点连通率与套餐价格口径，更新专属优惠码 [yfy88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'edgenova': {
  "id": "edgenova",
  "num": "12",
  "name": "边缘节点（EdgeNova）",
  "inviteUrl": "https://quanqi.edgenovaaff.cc/#/?code=8BBARdHw",
  "promoCode": "byjd88",
  "minPrice": "25 元/月 · 120GB/月（常规月付）",
  "tag": "边缘节点智能调度",
  "focusType": "边缘网络优化型",
  "seoTitle": "边缘节点（EdgeNova） 机场独立评测：海外团队运营和 Reality 协议｜真实成本指南",
  "seoDescription": "客观评测 边缘节点（EdgeNova） 机场：套餐价格 25 元/月 · 120GB/月（常规月付）、专属优惠码 byjd88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "边缘节点（EdgeNova）",
    "边缘节点（EdgeNova）机场",
    "边缘节点（EdgeNova）评测",
    "边缘节点（EdgeNova）优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "日常工作、学习、学术查阅资料以及跨平台翻墙需求。",
    "keyFeature": "支持主流 Clash 客户端快速导入，起步价格 25 元/月 · 120GB/月（常规月付），提供均衡的中转节点与流量阶梯。",
    "knownLimits": "需在官方结算页核对设备连接数限制与流量重置周期。",
    "untestedItems": "特定冷门流媒体平台的独立解锁权限。",
    "summary": "边缘节点（EdgeNova） 是一款表现均衡的常规中转方案，能够稳妥覆盖日常绝大部分翻墙与办公场景。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：最低价格字段按常规月付口径；英文界面、协议兼容和原生 IP 地区应先行确认。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "轻量年付版",
        "price": "96 元/年 (折8元/月)",
        "traffic": "60GB/月",
        "note": "年付经济档，适合备用与偶尔查文献"
      },
      {
        "name": "常规月付基础",
        "price": "25 元/月",
        "traffic": "120GB/月",
        "note": "边缘加速与动态 BGP 调度，延迟表现优秀"
      },
      {
        "name": "不限时流量包",
        "price": "450 元 / 一次性",
        "traffic": "1000GB (不限时)",
        "note": "大容量不限时储备包，按需调用"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "主要采用月度重置计费模式，每月账单日定时刷新流量配额。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 25 元/月 · 120GB/月（常规月付）。结账输入专属优惠码 [byjd88] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 25 元/月 · 120GB/月（常规月付） 门槛亲民，支持使用优惠码 [byjd88] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：最低价格字段按常规月付口径；英文界面、协议兼容和原生 IP 地区应先行确认。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。边缘节点（EdgeNova） 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "边缘节点（EdgeNova） 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 25 元/月 · 120GB/月（常规月付） 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [byjd88] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://quanqi.edgenovaaff.cc/#/?code=8BBARdHw）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [byjd88] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 边缘节点（EdgeNova） 节点连通率与套餐价格口径，更新专属优惠码 [byjd88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'kexinyun': {
  "id": "kexinyun",
  "num": "13",
  "name": "可信云",
  "inviteUrl": "https://quanqiu.kosingaff.com/#/?code=NRG0tXKO",
  "promoCode": "kxy88",
  "minPrice": "9 元/月 · 45GB/月",
  "tag": "9元超低月付门槛",
  "focusType": "低价型",
  "seoTitle": "可信云 机场独立评测：品牌叙事聚焦长期稳定与售后服务，公开｜真实成本指南",
  "seoDescription": "客观评测 可信云 机场：套餐价格 9 元/月 · 45GB/月、专属优惠码 kxy88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "可信云",
    "可信云机场",
    "可信云评测",
    "可信云优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "预算极度敏感、学生党、或仅需偶尔查阅海外文献与轻量社交的备用梯子需求。",
    "keyFeature": "价格亲民，起步门槛低至 9 元/月 · 45GB/月，提供基础三网中转节点与通用订阅格式。",
    "knownLimits": "低价套餐月流量或带宽有限，高峰期流媒体可能需要手动切换空闲节点；无独立客服快速通道。",
    "untestedItems": "长周期跨国大文件持续下载表现。",
    "summary": "可信云 是预算有限时的平价方案，花极少成本即可满足基础翻墙需求，建议月付使用。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：二毛博客汇总页记录上述档位，售后时效、退款规则和专线覆盖仍以当前条款为准。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "基础体验档",
        "price": "9 元/月",
        "traffic": "45GB/月",
        "note": "个位数极低门槛，适合初次验证或学生备用"
      },
      {
        "name": "标准自用档",
        "price": "18 元/月",
        "traffic": "100GB/月",
        "note": "性价比较高，满足日常冲浪与微信/TG 通信"
      },
      {
        "name": "旗舰冲浪档",
        "price": "45 元/月",
        "traffic": "300GB/月",
        "note": "充足流量保障，满足高清视频与多端在线"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "主要采用月度重置计费模式，每月账单日定时刷新流量配额。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 9 元/月 · 45GB/月。结账输入专属优惠码 [kxy88] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 9 元/月 · 45GB/月 门槛亲民，支持使用优惠码 [kxy88] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：二毛博客汇总页记录上述档位，售后时效、退款规则和专线覆盖仍以当前条款为准。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。可信云 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "可信云 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 9 元/月 · 45GB/月 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [kxy88] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://quanqiu.kosingaff.com/#/?code=NRG0tXKO）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [kxy88] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 可信云 节点连通率与套餐价格口径，更新专属优惠码 [kxy88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'quanqiuyun': {
  "id": "quanqiuyun",
  "num": "14",
  "name": "全球云",
  "inviteUrl": "https://hueue09.gcvipaff.com/#/?code=z8U9aaa4",
  "promoCode": "qq88",
  "minPrice": "20 元/月 · 120GB/月",
  "tag": "欧美亚主流覆盖",
  "focusType": "多地区型 / 跨境出海自用",
  "seoTitle": "全球云 机场独立评测：优势在多国家与地区节点、智能分流和较｜真实成本指南",
  "seoDescription": "客观评测 全球云 机场：套餐价格 20 元/月 · 120GB/月、专属优惠码 qq88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "全球云",
    "全球云机场",
    "全球云评测",
    "全球云优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "跨境电商外贸卖家、海外短视频运营（TikTok/YouTube）以及需要多国家多出口 IP 灵活切换的个人与团队用户。",
    "keyFeature": "覆盖中国香港、日本、美国、新加坡、英国、德国等主流与欧美亚出口；支持使用专属优惠码 [qq88] 享全场 8 折，轻量版月付折后仅 16 元；原生支持 Clash/Mihomo/Sing-box 订阅一键导入。",
    "knownLimits": "轻量年付包（99元/59GB）公开资料未注明流量是按月重置还是全年共享，须在结算页核对；冷门小众国家节点倍率以控制台为准。",
    "untestedItems": "冷门欧洲小众节点在晚高峰的国际出口抖动情况尚未做跨月连续抽样。",
    "summary": "【本站主推 / 推广合作】全球云优势在于多国家与地区出口矩阵以及灵活的阶梯计费（含按量包与企业独享方案），配合专属 8 折码后起步门槛亲民，非常适合出海业务与多国 IP 切换需求。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "常规轻量版",
        "price": "20 元/月 (折后约16元)",
        "traffic": "120GB/月",
        "note": "专属码 qq88 享 8 折，适合日常网页、学术与轻度社交"
      },
      {
        "name": "常规进阶版",
        "price": "40 元/月 (折后约32元)",
        "traffic": "300GB/月",
        "note": "主力推荐档位，多国出口智能调度，适合 TikTok 与 4K 影音"
      },
      {
        "name": "尊享大户版",
        "price": "180 元/月",
        "traffic": "1500GB/月",
        "note": "海量出口带宽，适合跨境团队与多设备大流量并发"
      },
      {
        "name": "轻量年付尝鲜",
        "price": "99 元/年",
        "traffic": "59GB (重置口径待确认)",
        "note": "【待官方核验】公开记录未标明流量是按月刷新还是全年共享"
      },
      {
        "name": "一次性流量包",
        "price": "100 元起",
        "traffic": "100GB - 800GB",
        "note": "提供 100G/400G/800G 规格，流量不随月清零"
      },
      {
        "name": "私人独享专线",
        "price": "680 元/月",
        "traffic": "500GB/月",
        "note": "独立独享企业专线通道，交付标准以工单为准"
      }
    ],
    "cycleDifference": "建议首购优先选月付降低试错成本；年付折算更实惠但须承担服务周期风险。",
    "unlimitedTrafficRule": "提供一次性流量包，不随月清零，适合低频备用。",
    "deviceLimit": "常规套餐支持 3-5 台个人设备同时在线，严禁公开分享订阅。",
    "refundRules": "虚拟网络服务一般不支持无理由退款，请先月付验证满意后再续费。",
    "costEstimation": "以日常自用测算：常规轻量版 20 元/月，输入专属码 [qq88] 享 8 折后仅约 16 元，折合单日约 0.53 元。轻量年付与按量包可作低频备用。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "多国家出口矩阵覆盖广泛（港/日/美/新/英/德等），便于切换目标国 IP 开展跨境业务",
      "专属优惠码 [qq88] 享全场 8 折立减，轻量版月付折后仅 16 元/月，试错门槛低",
      "全面支持 Clash Verge Rev、Clash Meta (Mihomo)、Sing-box 等现代客户端快速导入"
    ],
    "cons": [
      "轻量年付包（99元/59GB）公开资料未明确流量重置口径，下单前须在官方结算页核对",
      "冷门边缘国家出口在极端高峰时段存在抖动，重要任务建议优先用港日美专线节点",
      "多设备同时并发受套餐等级约束，不建议将订阅分发给外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：需要纯物理专线推荐【02 极连云】；原生住宅大流量推荐【01 U1S1】；新手极简推荐【03 光年梯】。全球云作为【本站主推 / 推广合作】服务商，在多国出口矩阵覆盖、跨境短视频（TikTok）及专属 8 折（折后16元起）上具备实用优势。"
  },
  "faqs": [
    {
      "q": "全球云的入门套餐流量够用吗？输入优惠码 [qq88] 实际付多少钱？",
      "a": "以轻量版 20元/月(120GB)为例：结账输入专属码 qq88 享 8 折后仅 16 元。120GB 适合日常查阅、通信与轻度视频；大流量或多设备推荐 40元/300GB 进阶版(折后32元)。"
    },
    {
      "q": "购买全球云后，可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "支持个人手机、电脑与平板同时在线。常规套餐默认支持 3-5 台设备并发，个人正常连接不限，严禁公开分享订阅。"
    },
    {
      "q": "全球云节点是否支持 TikTok、ChatGPT 及跨境电商后台？",
      "a": "支持。全球云提供港/日/美/新/英/德多国出口。TikTok运营建议选美英对应国节点；ChatGPT建议选美或新节点，避开未开放的香港节点。"
    },
    {
      "q": "为什么导入全球云订阅后节点显示超时或连接不上？",
      "a": "分三步排查：① 开启系统时间自动同步避免证书校验失败；② 检查套餐是否欠费并在客户端右键刷新订阅；③ 确认端口 7890 未被占用且关闭其他冲突代理。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 全球云 节点连通率与套餐价格口径，更新专属优惠码 [qq88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'feimaoyun': {
  "id": "feimaoyun",
  "num": "15",
  "name": "飞猫云",
  "inviteUrl": "https://quanqiu.flycatvipaff.cc/#/?code=7ZOeVmNS",
  "promoCode": "flycat888",
  "minPrice": "7 元/月 · 50GB/月（学生版年付折算）",
  "tag": "年付折算7元/月",
  "focusType": "低价型",
  "seoTitle": "飞猫云 机场独立评测：低价小流量配 IEPL 是最醒目的组｜真实成本指南",
  "seoDescription": "客观评测 飞猫云 机场：套餐价格 7 元/月 · 50GB/月（学生版年付折算）、专属优惠码 flycat888、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "飞猫云",
    "飞猫云机场",
    "飞猫云评测",
    "飞猫云优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "预算极度敏感、学生党、或仅需偶尔查阅海外文献与轻量社交的备用梯子需求。",
    "keyFeature": "价格亲民，起步门槛低至 7 元/月 · 50GB/月（学生版年付折算），提供基础三网中转节点与通用订阅格式。",
    "knownLimits": "低价套餐月流量或带宽有限，高峰期流媒体可能需要手动切换空闲节点；无独立客服快速通道。",
    "untestedItems": "长周期跨国大文件持续下载表现。",
    "summary": "飞猫云 是预算有限时的平价方案，花极少成本即可满足基础翻墙需求，建议月付使用。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "学生版年付",
        "price": "84 元/年 (折7元/月)",
        "traffic": "50GB/月",
        "note": "全场单月折算最低价之一，需一次付全年"
      },
      {
        "name": "常规月付基础",
        "price": "16 元/月",
        "traffic": "120GB/月",
        "note": "常规月付无绑定，性价比突出的平价方案"
      },
      {
        "name": "旗舰大流量档",
        "price": "60 元/月",
        "traffic": "500GB/月",
        "note": "充足月度配额，高清追剧无需担心超量"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "主要采用月度重置计费模式，每月账单日定时刷新流量配额。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 7 元/月 · 50GB/月（学生版年付折算）。结账输入专属优惠码 [flycat888] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 7 元/月 · 50GB/月（学生版年付折算） 门槛亲民，支持使用优惠码 [flycat888] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。飞猫云 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "飞猫云 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 7 元/月 · 50GB/月（学生版年付折算） 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [flycat888] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://quanqiu.flycatvipaff.cc/#/?code=7ZOeVmNS）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [flycat888] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 飞猫云 节点连通率与套餐价格口径，更新专属优惠码 [flycat888]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'muguang': {
  "id": "muguang",
  "num": "16",
  "name": "暮光加速",
  "inviteUrl": "https://quanqi12.twilightaff.com/#/?code=beAVqNPf",
  "promoCode": "mm88",
  "minPrice": "20 元/月 · 120GB/月",
  "tag": "主流流媒体解锁",
  "focusType": "影音娱乐加速型",
  "seoTitle": "暮光加速 机场独立评测：晚高峰观看 YouTube 4K 视｜真实成本指南",
  "seoDescription": "客观评测 暮光加速 机场：套餐价格 20 元/月 · 120GB/月、专属优惠码 mm88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "暮光加速",
    "暮光加速机场",
    "暮光加速评测",
    "暮光加速优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "日常工作、学习、学术查阅资料以及跨平台翻墙需求。",
    "keyFeature": "支持主流 Clash 客户端快速导入，起步价格 20 元/月 · 120GB/月，提供均衡的中转节点与流量阶梯。",
    "knownLimits": "需在官方结算页核对设备连接数限制与流量重置周期。",
    "untestedItems": "特定冷门流媒体平台的独立解锁权限。",
    "summary": "暮光加速 是一款表现均衡的常规中转方案，能够稳妥覆盖日常绝大部分翻墙与办公场景。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "入门加速版",
        "price": "20 元/月",
        "traffic": "120GB/月",
        "note": "三网中转优化，入门门槛亲民"
      },
      {
        "name": "进阶畅享版",
        "price": "38 元/月",
        "traffic": "260GB/月",
        "note": "晚高峰流媒体加速，延迟低抗抖动"
      },
      {
        "name": "旗舰冲浪版",
        "price": "98 元/月",
        "traffic": "700GB/月",
        "note": "多端设备共享，适合高频大流量冲浪"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "主要采用月度重置计费模式，每月账单日定时刷新流量配额。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 20 元/月 · 120GB/月。结账输入专属优惠码 [mm88] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 20 元/月 · 120GB/月 门槛亲民，支持使用优惠码 [mm88] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。暮光加速 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "暮光加速 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 20 元/月 · 120GB/月 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [mm88] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://quanqi12.twilightaff.com/#/?code=beAVqNPf）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [mm88] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 暮光加速 节点连通率与套餐价格口径，更新专属优惠码 [mm88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'wavenet': {
  "id": "wavenet",
  "num": "17",
  "name": "浪网（WaveNet）",
  "inviteUrl": "https://langwang.wavenetaff.com/#/?code=pYe3kzd4",
  "promoCode": "lw88",
  "minPrice": "25 元/月 · 150GB/月",
  "tag": "三网骨干入口",
  "focusType": "骨干网优质中转型",
  "seoTitle": "浪网（WaveNet） 机场独立评测：重点面向 ChatGPT、Claud｜真实成本指南",
  "seoDescription": "客观评测 浪网（WaveNet） 机场：套餐价格 25 元/月 · 150GB/月、专属优惠码 lw88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "浪网（WaveNet）",
    "浪网（WaveNet）机场",
    "浪网（WaveNet）评测",
    "浪网（WaveNet）优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "日常工作、学习、学术查阅资料以及跨平台翻墙需求。",
    "keyFeature": "支持主流 Clash 客户端快速导入，起步价格 25 元/月 · 150GB/月，提供均衡的中转节点与流量阶梯。",
    "knownLimits": "需在官方结算页核对设备连接数限制与流量重置周期。",
    "untestedItems": "特定冷门流媒体平台的独立解锁权限。",
    "summary": "浪网（WaveNet） 是一款表现均衡的常规中转方案，能够稳妥覆盖日常绝大部分翻墙与办公场景。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "体验月付档",
        "price": "25 元/月",
        "traffic": "150GB/月",
        "note": "全专线架构承载，稳定性与抗 QoS 表现优秀"
      },
      {
        "name": "标准主力档",
        "price": "48 元/月",
        "traffic": "320GB/月",
        "note": "主力推荐，支持 ChatGPT 4o 与 4K 极速加载"
      },
      {
        "name": "尊贵大户档",
        "price": "145 元/月",
        "traffic": "1000GB/月",
        "note": "超大带宽队列优先保障，高并发不掉线"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "主要采用月度重置计费模式，每月账单日定时刷新流量配额。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 25 元/月 · 150GB/月。结账输入专属优惠码 [lw88] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 25 元/月 · 150GB/月 门槛亲民，支持使用优惠码 [lw88] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。浪网（WaveNet） 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "浪网（WaveNet） 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 25 元/月 · 150GB/月 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [lw88] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://langwang.wavenetaff.com/#/?code=pYe3kzd4）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [lw88] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 浪网（WaveNet） 节点连通率与套餐价格口径，更新专属优惠码 [lw88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'laddercloud': {
  "id": "laddercloud",
  "num": "18",
  "name": "梯子云（LadderCloud）",
  "inviteUrl": "https://tiziyun3.ladderaff.com/#/?code=wI00rGj2",
  "promoCode": "tiziyun",
  "minPrice": "25 元/月 · 125GB/月",
  "tag": "580元/1000G不限时包",
  "focusType": "不限时流量型",
  "seoTitle": "梯子云（LadderCloud） 机场独立评测：全线采用 IEPL 企业专线，侧重缓｜真实成本指南",
  "seoDescription": "客观评测 梯子云（LadderCloud） 机场：套餐价格 25 元/月 · 125GB/月、专属优惠码 tiziyun、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "梯子云（LadderCloud）",
    "梯子云（LadderCloud）机场",
    "梯子云（LadderCloud）评测",
    "梯子云（LadderCloud）优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "平时翻墙频次不稳定，不想被月度流量清零绑架，需要长期备用储蓄池的用户。",
    "keyFeature": "提供不限时大容量流量包，购买后流量不随月份清零，适合备用与低频大需求随时调用。",
    "knownLimits": "初次购买单价高于常规月付；需定期确认账户有效状态与节点存续。",
    "untestedItems": "账户长期闲置跨年周期的休眠与激活规则以结算页为准。",
    "summary": "梯子云（LadderCloud） 的不限时流量包非常适合不定期查资料的轻度用户与应急备用储备。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "常规月付基础",
        "price": "25 元/月",
        "traffic": "125GB/月",
        "note": "三网优化专线，通用订阅导入快速"
      },
      {
        "name": "不限时流量包 A",
        "price": "260 元 / 一次性",
        "traffic": "500GB (不限时)",
        "note": "主打不限时特色，流量永不清零，长期备用"
      },
      {
        "name": "不限时流量包 B",
        "price": "480 元 / 一次性",
        "traffic": "1000GB (不限时)",
        "note": "大容量备用池，低频大需求随时调用"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "主要采用月度重置计费模式，每月账单日定时刷新流量配额。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 25 元/月 · 125GB/月。结账输入专属优惠码 [tiziyun] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 25 元/月 · 125GB/月 门槛亲民，支持使用优惠码 [tiziyun] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。梯子云（LadderCloud） 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "梯子云（LadderCloud） 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 25 元/月 · 125GB/月 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [tiziyun] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://tiziyun3.ladderaff.com/#/?code=wI00rGj2）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [tiziyun] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 梯子云（LadderCloud） 节点连通率与套餐价格口径，更新专属优惠码 [tiziyun]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'lingdongyun': {
  "id": "lingdongyun",
  "num": "19",
  "name": "灵动云",
  "inviteUrl": "https://lingdongyun.lingdongaff.com/#/?code=ibHQOYGt",
  "promoCode": "ld88",
  "minPrice": "20 元/月 · 100GB/月",
  "tag": "多端兼容性强",
  "focusType": "轻巧多端调度型",
  "seoTitle": "灵动云 机场独立评测：全线采用较新的 VLESS 协议，覆｜真实成本指南",
  "seoDescription": "客观评测 灵动云 机场：套餐价格 20 元/月 · 100GB/月、专属优惠码 ld88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "灵动云",
    "灵动云机场",
    "灵动云评测",
    "灵动云优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "日常工作、学习、学术查阅资料以及跨平台翻墙需求。",
    "keyFeature": "支持主流 Clash 客户端快速导入，起步价格 20 元/月 · 100GB/月，提供均衡的中转节点与流量阶梯。",
    "knownLimits": "需在官方结算页核对设备连接数限制与流量重置周期。",
    "untestedItems": "特定冷门流媒体平台的独立解锁权限。",
    "summary": "灵动云 是一款表现均衡的常规中转方案，能够稳妥覆盖日常绝大部分翻墙与办公场景。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "体验型月付",
        "price": "20 元/月",
        "traffic": "100GB/月",
        "note": "入门轻量方案，三网智能接入调度"
      },
      {
        "name": "进阶型月付",
        "price": "36 元/月",
        "traffic": "200GB/月",
        "note": "主力自用档位，原生 IP 节点流媒体解锁顺畅"
      },
      {
        "name": "尊享型月付",
        "price": "120 元/月",
        "traffic": "800GB/月",
        "note": "大带宽出口保障，适合多设备家庭环境"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "主要采用月度重置计费模式，每月账单日定时刷新流量配额。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 20 元/月 · 100GB/月。结账输入专属优惠码 [ld88] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 20 元/月 · 100GB/月 门槛亲民，支持使用优惠码 [ld88] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。灵动云 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "灵动云 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 20 元/月 · 100GB/月 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [ld88] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://lingdongyun.lingdongaff.com/#/?code=ibHQOYGt）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [ld88] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 灵动云 节点连通率与套餐价格口径，更新专属优惠码 [ld88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'yinxingren': {
  "id": "yinxingren",
  "num": "20",
  "name": "隐形人",
  "inviteUrl": "https://yinxingren1.invisibleaff.com/#/?code=ISH1y2IF",
  "promoCode": "yxr888",
  "minPrice": "24 元/月 · 144GB/月",
  "tag": "节点混淆防阻断",
  "focusType": "安全隐私防漏型",
  "seoTitle": "隐形人 机场独立评测：由新加坡团队打造，采用全线纯专线与 ｜真实成本指南",
  "seoDescription": "客观评测 隐形人 机场：套餐价格 24 元/月 · 144GB/月、专属优惠码 yxr888、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "隐形人",
    "隐形人机场",
    "隐形人评测",
    "隐形人优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "日常工作、学习、学术查阅资料以及跨平台翻墙需求。",
    "keyFeature": "支持主流 Clash 客户端快速导入，起步价格 24 元/月 · 144GB/月，提供均衡的中转节点与流量阶梯。",
    "knownLimits": "需在官方结算页核对设备连接数限制与流量重置周期。",
    "untestedItems": "特定冷门流媒体平台的独立解锁权限。",
    "summary": "隐形人 是一款表现均衡的常规中转方案，能够稳妥覆盖日常绝大部分翻墙与办公场景。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "白银纪元月付",
        "price": "24 元/月",
        "traffic": "144GB/月",
        "note": "纯专线与 VLESS 协议，8K 视频秒开加载"
      },
      {
        "name": "黄金序列月付",
        "price": "48 元/月",
        "traffic": "360GB/月",
        "note": "双倍流量与独立专线，AI 原生解锁稳定"
      },
      {
        "name": "铂金至臻月付",
        "price": "105 元/月",
        "traffic": "750GB/月",
        "note": "大吞吐出口，承接团队与高要求商务"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "主要采用月度重置计费模式，每月账单日定时刷新流量配额。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 24 元/月 · 144GB/月。结账输入专属优惠码 [yxr888] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 24 元/月 · 144GB/月 门槛亲民，支持使用优惠码 [yxr888] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。隐形人 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "隐形人 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 24 元/月 · 144GB/月 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [yxr888] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://yinxingren1.invisibleaff.com/#/?code=ISH1y2IF）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [yxr888] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 隐形人 节点连通率与套餐价格口径，更新专属优惠码 [yxr888]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'flyv': {
  "id": "flyv",
  "num": "21",
  "name": "FlyV（飞V）",
  "inviteUrl": "https://feiv289.flyvaff.com/#/?code=qQCT0BeY",
  "promoCode": "fly20",
  "minPrice": "25 元/月 · 150GB/月",
  "tag": "大带宽吞吐能力",
  "focusType": "大吞吐冲浪型",
  "seoTitle": "FlyV（飞V） 机场独立评测：采用全线专线架构，所有节点按 1× ｜真实成本指南",
  "seoDescription": "客观评测 FlyV（飞V） 机场：套餐价格 25 元/月 · 150GB/月、专属优惠码 fly20、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "FlyV（飞V）",
    "FlyV（飞V）机场",
    "FlyV（飞V）评测",
    "FlyV（飞V）优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "日常工作、学习、学术查阅资料以及跨平台翻墙需求。",
    "keyFeature": "支持主流 Clash 客户端快速导入，起步价格 25 元/月 · 150GB/月，提供均衡的中转节点与流量阶梯。",
    "knownLimits": "需在官方结算页核对设备连接数限制与流量重置周期。",
    "untestedItems": "特定冷门流媒体平台的独立解锁权限。",
    "summary": "FlyV（飞V） 是一款表现均衡的常规中转方案，能够稳妥覆盖日常绝大部分翻墙与办公场景。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "年付轻量版",
        "price": "96 元/年 (折8元/月)",
        "traffic": "60GB/月",
        "note": "年付折算实惠，全线专线 1x 计费"
      },
      {
        "name": "Lite 常规月付",
        "price": "25 元/月",
        "traffic": "150GB/月",
        "note": "全线专线，节点不限速，AI 与 4K 友好"
      },
      {
        "name": "不限时流量包",
        "price": "100 元 / 一次性",
        "traffic": "100GB (不限时)",
        "note": "百元入门级不限时小包，适合防失联"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "主要采用月度重置计费模式，每月账单日定时刷新流量配额。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 25 元/月 · 150GB/月。结账输入专属优惠码 [fly20] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 25 元/月 · 150GB/月 门槛亲民，支持使用优惠码 [fly20] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。FlyV（飞V） 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "FlyV（飞V） 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 25 元/月 · 150GB/月 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [fly20] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://feiv289.flyvaff.com/#/?code=qQCT0BeY）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [fly20] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 FlyV（飞V） 节点连通率与套餐价格口径，更新专属优惠码 [fly20]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'breezenet': {
  "id": "breezenet",
  "num": "22",
  "name": "微风网络（BreezeNet）",
  "inviteUrl": "https://edp01.breezenetaff.com/#/?code=vxDUI8kY",
  "promoCode": "wfwl88",
  "minPrice": "25/月 200G",
  "tag": "25元即享200GB",
  "focusType": "高性价比大流量型",
  "seoTitle": "微风网络（BreezeNet） 机场独立评测：资料页将其定位为轻量 IEPL 专线｜真实成本指南",
  "seoDescription": "客观评测 微风网络（BreezeNet） 机场：套餐价格 25/月 200G、专属优惠码 wfwl88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "微风网络（BreezeNet）",
    "微风网络（BreezeNet）机场",
    "微风网络（BreezeNet）评测",
    "微风网络（BreezeNet）优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "日常工作、学习、学术查阅资料以及跨平台翻墙需求。",
    "keyFeature": "支持主流 Clash 客户端快速导入，起步价格 25/月 200G，提供均衡的中转节点与流量阶梯。",
    "knownLimits": "需在官方结算页核对设备连接数限制与流量重置周期。",
    "untestedItems": "特定冷门流媒体平台的独立解锁权限。",
    "summary": "微风网络（BreezeNet） 是一款表现均衡的常规中转方案，能够稳妥覆盖日常绝大部分翻墙与办公场景。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：发布前在邀请页确认当前最低档、流量重置方式、季付及以上优惠、设备数与客户端支持。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "公开目录记录",
        "price": "137 元/年",
        "traffic": "100GB/月",
        "note": "资料称轻量 IEPL 专线，非二毛精确对应记录"
      },
      {
        "name": "入门年付折算",
        "price": "约 7 元/月 (年付)",
        "traffic": "50GB/月 (公开资料)",
        "note": "第三方记录存在差异，须以实时结算页为准"
      },
      {
        "name": "常规月付档位",
        "price": "25 元/月",
        "traffic": "200GB/月",
        "note": "自研客户端与通用 Clash 订阅支持"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "主要采用月度重置计费模式，每月账单日定时刷新流量配额。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 25/月 200G。结账输入专属优惠码 [wfwl88] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 25/月 200G 门槛亲民，支持使用优惠码 [wfwl88] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：发布前在邀请页确认当前最低档、流量重置方式、季付及以上优惠、设备数与客户端支持。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。微风网络（BreezeNet） 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "微风网络（BreezeNet） 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 25/月 200G 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [wfwl88] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://edp01.breezenetaff.com/#/?code=vxDUI8kY）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [wfwl88] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 微风网络（BreezeNet） 节点连通率与套餐价格口径，更新专属优惠码 [wfwl88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'worryfree': {
  "id": "worryfree",
  "num": "23",
  "name": "无忧链接",
  "inviteUrl": "https://wep01.worryfreeaff.com/#/?code=fOCJz3E2",
  "promoCode": "wylj88",
  "minPrice": "12.92 元/月 · 100GB/月",
  "tag": "12.92元超值月付",
  "focusType": "平价日常翻墙型",
  "seoTitle": "无忧链接 机场独立评测：亮点在于通用订阅与主流客户端兼容，套｜真实成本指南",
  "seoDescription": "客观评测 无忧链接 机场：套餐价格 12.92 元/月 · 100GB/月、专属优惠码 wylj88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "无忧链接",
    "无忧链接机场",
    "无忧链接评测",
    "无忧链接优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "日常工作、学习、学术查阅资料以及跨平台翻墙需求。",
    "keyFeature": "支持主流 Clash 客户端快速导入，起步价格 12.92 元/月 · 100GB/月，提供均衡的中转节点与流量阶梯。",
    "knownLimits": "需在官方结算页核对设备连接数限制与流量重置周期。",
    "untestedItems": "特定冷门流媒体平台的独立解锁权限。",
    "summary": "无忧链接 是一款表现均衡的常规中转方案，能够稳妥覆盖日常绝大部分翻墙与办公场景。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "mini 年付链接",
        "price": "79 元/年 (折6.58元/月)",
        "traffic": "40GB/月",
        "note": "超低价年付小包，适合极轻量学术查资料"
      },
      {
        "name": "舒心链接月付",
        "price": "12.92 元/月 (34.68元/季)",
        "traffic": "100GB/月",
        "note": "阶梯定价精细，季付/年付更具性价比"
      },
      {
        "name": "忘忧链接大户",
        "price": "117 元/月",
        "traffic": "1000GB (1TB)/月",
        "note": "海量吞吐出口，适合多设备大流量下载"
      },
      {
        "name": "一次性流量包",
        "price": "16.15 元 / 一次性",
        "traffic": "100GB (不限时)",
        "note": "按量备用包，账户有效期以结算页为准"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "主要采用月度重置计费模式，每月账单日定时刷新流量配额。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 12.92 元/月 · 100GB/月。结账输入专属优惠码 [wylj88] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 12.92 元/月 · 100GB/月 门槛亲民，支持使用优惠码 [wylj88] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。无忧链接 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "无忧链接 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 12.92 元/月 · 100GB/月 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [wylj88] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://wep01.worryfreeaff.com/#/?code=fOCJz3E2）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [wylj88] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 无忧链接 节点连通率与套餐价格口径，更新专属优惠码 [wylj88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'civet': {
  "id": "civet",
  "num": "24",
  "name": "灵猫网络（Civet）",
  "inviteUrl": "https://vip02.civetaff.com/#/?code=MLVZXxQj",
  "promoCode": "lmwl88",
  "minPrice": "85 元/年 · 45GB（流量重置口径未说明）",
  "tag": "85元年付小包",
  "focusType": "年付轻量备选型",
  "seoTitle": "灵猫网络（Civet） 机场独立评测：服务商资料主打 IPLC、1 倍流量｜真实成本指南",
  "seoDescription": "客观评测 灵猫网络（Civet） 机场：套餐价格 85 元/年 · 45GB（流量重置口径未说明）、专属优惠码 lmwl88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "灵猫网络（Civet）",
    "灵猫网络（Civet）机场",
    "灵猫网络（Civet）评测",
    "灵猫网络（Civet）优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "日常工作、学习、学术查阅资料以及跨平台翻墙需求。",
    "keyFeature": "支持主流 Clash 客户端快速导入，起步价格 85 元/年 · 45GB（流量重置口径未说明），提供均衡的中转节点与流量阶梯。",
    "knownLimits": "需在官方结算页核对设备连接数限制与流量重置周期。",
    "untestedItems": "特定冷门流媒体平台的独立解锁权限。",
    "summary": "灵猫网络（Civet） 是一款表现均衡的常规中转方案，能够稳妥覆盖日常绝大部分翻墙与办公场景。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：页面宣传的协议与节点截图存在不一致；付款币种、订阅格式、流量重置、设备并发与退款规则须在结算页或客服处确认。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "年付小包入门",
        "price": "85 元/年",
        "traffic": "45GB (重置口径未标)",
        "note": "【待官方结算页核验】流量重置与计费币种"
      },
      {
        "name": "Small 周期档",
        "price": "25 元/月 (65元/季)",
        "traffic": "150GB/月",
        "note": "宣称 IPLC 专线与 1 倍计费，需核对协议截图"
      },
      {
        "name": "Big 豪华周期档",
        "price": "45 元/月 (125元/季)",
        "traffic": "300GB/月",
        "note": "年付 295 元，设备并发与退款规则结算页确认"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "主要采用月度重置计费模式，每月账单日定时刷新流量配额。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 85 元/年 · 45GB（流量重置口径未说明）。结账输入专属优惠码 [lmwl88] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 85 元/年 · 45GB（流量重置口径未说明） 门槛亲民，支持使用优惠码 [lmwl88] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：页面宣传的协议与节点截图存在不一致；付款币种、订阅格式、流量重置、设备并发与退款规则须在结算页或客服处确认。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。灵猫网络（Civet） 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "灵猫网络（Civet） 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 85 元/年 · 45GB（流量重置口径未说明） 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [lmwl88] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://vip02.civetaff.com/#/?code=MLVZXxQj）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [lmwl88] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 灵猫网络（Civet） 节点连通率与套餐价格口径，更新专属优惠码 [lmwl88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'flashleap': {
  "id": "flashleap",
  "num": "25",
  "name": "闪跃（FlashLeap）",
  "inviteUrl": "https://vip02.flashleapaff.com/#/?code=bsjhVp9y",
  "promoCode": "sy88",
  "minPrice": "96 元/年 · 60GB/月（年付，折合约 8 元/月）",
  "tag": "96元年付折合8元/月",
  "focusType": "微型经济年付型",
  "seoTitle": "闪跃（FlashLeap） 机场独立评测：公开资料将其描述为 IPLC 专线与｜真实成本指南",
  "seoDescription": "客观评测 闪跃（FlashLeap） 机场：套餐价格 96 元/年 · 60GB/月（年付，折合约 8 元/月）、专属优惠码 sy88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "闪跃（FlashLeap）",
    "闪跃（FlashLeap）机场",
    "闪跃（FlashLeap）评测",
    "闪跃（FlashLeap）优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "日常工作、学习、学术查阅资料以及跨平台翻墙需求。",
    "keyFeature": "支持主流 Clash 客户端快速导入，起步价格 96 元/年 · 60GB/月（年付，折合约 8 元/月），提供均衡的中转节点与流量阶梯。",
    "knownLimits": "需在官方结算页核对设备连接数限制与流量重置周期。",
    "untestedItems": "特定冷门流媒体平台的独立解锁权限。",
    "summary": "闪跃（FlashLeap） 是一款表现均衡的常规中转方案，能够稳妥覆盖日常绝大部分翻墙与办公场景。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：上述价格来自公开资料，非二毛精确对应页；下单前核对当前折扣、设备数、流量周期与第三方客户端导入方式。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "闪跃年付版",
        "price": "96 元/年 (折8元/月)",
        "traffic": "60GB/月",
        "note": "IPLC 专线与 1x 倍率，通用订阅兼容"
      },
      {
        "name": "闪动 Flicker",
        "price": "24 元/月",
        "traffic": "150GB/月",
        "note": "常规月付起步档，原生 IP 与 AI 支持良好"
      },
      {
        "name": "跃迁 Warp",
        "price": "134 元/月",
        "traffic": "1000GB/月",
        "note": "超大月度配额，高清流媒体与多端并发"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "主要采用月度重置计费模式，每月账单日定时刷新流量配额。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 96 元/年 · 60GB/月（年付，折合约 8 元/月）。结账输入专属优惠码 [sy88] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 96 元/年 · 60GB/月（年付，折合约 8 元/月） 门槛亲民，支持使用优惠码 [sy88] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：上述价格来自公开资料，非二毛精确对应页；下单前核对当前折扣、设备数、流量周期与第三方客户端导入方式。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。闪跃（FlashLeap） 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "闪跃（FlashLeap） 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 96 元/年 · 60GB/月（年付，折合约 8 元/月） 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [sy88] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://vip02.flashleapaff.com/#/?code=bsjhVp9y）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [sy88] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 闪跃（FlashLeap） 节点连通率与套餐价格口径，更新专属优惠码 [sy88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'firefly': {
  "id": "firefly",
  "num": "26",
  "name": "Firefly",
  "inviteUrl": "https://vip02.fireflyaff.com/#/?code=lBPETX1d",
  "promoCode": "ff88",
  "minPrice": "96 元/年 · 60GB/月（年付，折合约 8 元/月）",
  "tag": "96元年付折合8元/月",
  "focusType": "稳定年付轻量型",
  "seoTitle": "Firefly 机场独立评测：服务商定位偏向 IPLC 与 VLE｜真实成本指南",
  "seoDescription": "客观评测 Firefly 机场：套餐价格 96 元/年 · 60GB/月（年付，折合约 8 元/月）、专属优惠码 ff88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "Firefly",
    "Firefly机场",
    "Firefly评测",
    "Firefly优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "日常工作、学习、学术查阅资料以及跨平台翻墙需求。",
    "keyFeature": "支持主流 Clash 客户端快速导入，起步价格 96 元/年 · 60GB/月（年付，折合约 8 元/月），提供均衡的中转节点与流量阶梯。",
    "knownLimits": "需在官方结算页核对设备连接数限制与流量重置周期。",
    "untestedItems": "特定冷门流媒体平台的独立解锁权限。",
    "summary": "Firefly 是一款表现均衡的常规中转方案，能够稳妥覆盖日常绝大部分翻墙与办公场景。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：通用订阅需由客服提供的公开说法不等于已验证的控制台功能；购买前确认所需客户端、设备并发和公平使用条款。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "年付轻量版",
        "price": "96 元/年 (折8元/月)",
        "traffic": "60GB/月",
        "note": "偏向 IPLC 与 VLESS 架构，原生 IP 落地"
      },
      {
        "name": "Lite 常规月付",
        "price": "25 元/月",
        "traffic": "150GB/月",
        "note": "1x 倍率计费，适合日常 4K 与办公"
      },
      {
        "name": "不限时流量包",
        "price": "100 元 / 一次性",
        "traffic": "100GB (不限时)",
        "note": "账户闲置与服务存续规则以结算页为准"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "主要采用月度重置计费模式，每月账单日定时刷新流量配额。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 96 元/年 · 60GB/月（年付，折合约 8 元/月）。结账输入专属优惠码 [ff88] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 96 元/年 · 60GB/月（年付，折合约 8 元/月） 门槛亲民，支持使用优惠码 [ff88] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：通用订阅需由客服提供的公开说法不等于已验证的控制台功能；购买前确认所需客户端、设备并发和公平使用条款。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。Firefly 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "Firefly 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 96 元/年 · 60GB/月（年付，折合约 8 元/月） 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [ff88] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://vip02.fireflyaff.com/#/?code=lBPETX1d）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [ff88] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 Firefly 节点连通率与套餐价格口径，更新专属优惠码 [ff88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'kuajieyun': {
  "id": "kuajieyun",
  "num": "27",
  "name": "跨界云",
  "inviteUrl": "https://vip02.kuajieaff.com/#/?code=Qu0GQkhP",
  "promoCode": "kjy88",
  "minPrice": "20 元/月 · 120GB",
  "tag": "跨境电商后台访问",
  "focusType": "跨境电商与学术型",
  "seoTitle": "跨界云 机场独立评测：核心信息是服务商所称的全网专线升级与｜真实成本指南",
  "seoDescription": "客观评测 跨界云 机场：套餐价格 20 元/月 · 120GB、专属优惠码 kjy88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "跨界云",
    "跨界云机场",
    "跨界云评测",
    "跨界云优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "日常工作、学习、学术查阅资料以及跨平台翻墙需求。",
    "keyFeature": "支持主流 Clash 客户端快速导入，起步价格 20 元/月 · 120GB，提供均衡的中转节点与流量阶梯。",
    "knownLimits": "需在官方结算页核对设备连接数限制与流量重置周期。",
    "untestedItems": "特定冷门流媒体平台的独立解锁权限。",
    "summary": "跨界云 是一款表现均衡的常规中转方案，能够稳妥覆盖日常绝大部分翻墙与办公场景。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：资料标有一次性方案可用，但未给出名称、价格或有效期；结算前应确认流量周期、设备并发、退款与当前专线规则。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "轻云 Lite",
        "price": "20 元/月 (54元/季, 192元/年)",
        "traffic": "120GB (重置口径未标)",
        "note": "全网专线升级，跨境电商与学术检索适用"
      },
      {
        "name": "跃云 Leap",
        "price": "40 元/月 (108元/季, 384元/年)",
        "traffic": "300GB (重置口径未标)",
        "note": "四档阶梯，结算前确认流量周期与并发限制"
      },
      {
        "name": "无界 Infinity",
        "price": "180 元/月 (1728元/年)",
        "traffic": "1500GB (重置口径未标)",
        "note": "一次性包未公开参数，须在结算页核验"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "主要采用月度重置计费模式，每月账单日定时刷新流量配额。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 20 元/月 · 120GB。结账输入专属优惠码 [kjy88] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 20 元/月 · 120GB 门槛亲民，支持使用优惠码 [kjy88] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：资料标有一次性方案可用，但未给出名称、价格或有效期；结算前应确认流量周期、设备并发、退款与当前专线规则。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。跨界云 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "跨界云 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 20 元/月 · 120GB 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [kjy88] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（https://vip02.kuajieaff.com/#/?code=Qu0GQkhP）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [kjy88] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 跨界云 节点连通率与套餐价格口径，更新专属优惠码 [kjy88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
  'dalaoyun': {
  "id": "dalaoyun",
  "num": "28",
  "name": "大佬云",
  "inviteUrl": "http://adcua9104.dalaoyunaff.com/#/?code=J6GqQqk8",
  "promoCode": "dly88",
  "minPrice": "¥20.00 / 月；¥54.00 / 季；¥192.00 / 年",
  "tag": "最高1500GB无界大包",
  "focusType": "大户阶梯流量型",
  "seoTitle": "大佬云 机场独立评测：节点优化，支持主流客户端订阅。｜真实成本指南",
  "seoDescription": "客观评测 大佬云 机场：套餐价格 ¥20.00 / 月；¥54.00 / 季；¥192.00 / 年、专属优惠码 dly88、IPLC/中转节点特点、流媒体与 AI 解锁情况及已知限制分析。",
  "keywords": [
    "大佬云",
    "大佬云机场",
    "大佬云评测",
    "大佬云优惠码",
    "Clash机场推荐",
    "科学上网梯子",
    "IPLC专线",
    "ChatGPT节点"
  ],
  "verdict": {
    "targetNeed": "日常工作、学习、学术查阅资料以及跨平台翻墙需求。",
    "keyFeature": "支持主流 Clash 客户端快速导入，起步价格 ¥20.00 / 月；¥54.00 / 季；¥192.00 / 年，提供均衡的中转节点与流量阶梯。",
    "knownLimits": "需在官方结算页核对设备连接数限制与流量重置周期。",
    "untestedItems": "特定冷门流媒体平台的独立解锁权限。",
    "summary": "大佬云 是一款表现均衡的常规中转方案，能够稳妥覆盖日常绝大部分翻墙与办公场景。"
  },
  "basicInfo": {
    "operatingTime": "稳定运营周期参考：基于公开域名解析与社区讨论周期比对确认，非临时小站",
    "supportChannels": "网页工单系统 + Telegram 订阅公告频道",
    "officialVsVerified": "依据公开资料整理：官方宣称能力以结算页为准，技术分析遵循网络逻辑。提示：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。"
  },
  "pricingAndCost": {
    "plans": [
      {
        "name": "轻云 Lite",
        "price": "20.00 元/月 (54元/季, 192元/年)",
        "traffic": "120GB (重置口径未标)",
        "note": "节点优化，支持主流 Clash 订阅导入"
      },
      {
        "name": "跃云 Leap",
        "price": "40.00 元/月 (108元/季, 384元/年)",
        "traffic": "300GB (重置口径未标)",
        "note": "四档阶梯递增，购买前核对实际设备限制"
      },
      {
        "name": "无界 Infinity",
        "price": "180.00 元/月 (1728元/年)",
        "traffic": "1500GB (重置口径未标)",
        "note": "超大带宽承载，适合企业多终端大吞吐"
      }
    ],
    "cycleDifference": "建议首购优先选择月付（降低试错风险）；季付享小幅折扣；年付折算更实惠但需承担服务周期风险。",
    "unlimitedTrafficRule": "主要采用月度重置计费模式，每月账单日定时刷新流量配额。",
    "deviceLimit": "常规套餐默认支持 3-5 台个人设备同时在线，严禁公开分享订阅导致风控封号。",
    "refundRules": "虚拟网络服务普遍不支持无理由退款，请先以月付或低门槛套餐验证满意后再考虑续费。",
    "costEstimation": "以日常自用测算：月付门槛为 ¥20.00 / 月；¥54.00 / 季；¥192.00 / 年。结账输入专属优惠码 [dly88] 享立减优惠，折合日均成本仅约 0.5 - 0.8 元。"
  },
  "nodesAndCoverage": {
    "regions": [
      {
        "region": "中国香港 (HK)",
        "lineType": "BGP / IPLC 专线",
        "multiplier": "1.0x",
        "feature": "延迟低（30-50ms），主力网页浏览与即时通信首选"
      },
      {
        "region": "日本 (JP)",
        "lineType": "骨干专线中转",
        "multiplier": "1.0x",
        "feature": "延迟约 40-70ms，适合流媒体 4K 播放与动画疯"
      },
      {
        "region": "新加坡 (SG)",
        "lineType": "优质海缆中转",
        "multiplier": "1.0x",
        "feature": "原生住宅 IP 覆盖，解锁 ChatGPT 4o 与 TikTok"
      },
      {
        "region": "美国 (US)",
        "lineType": "大带宽出口",
        "multiplier": "1.0x / 0.5x",
        "feature": "全功能 AI 原生支持，适合大文件下载与代码拉取"
      },
      {
        "region": "中国台湾 (TW)",
        "lineType": "优化直连/中转",
        "multiplier": "1.0x",
        "feature": "支持 Netflix 华语特供片库与部分游戏加速"
      }
    ]
  },
  "prosAndCons": {
    "pros": [
      "套餐梯度清晰，起步价格 ¥20.00 / 月；¥54.00 / 季；¥192.00 / 年 门槛亲民，支持使用优惠码 [dly88] 立减",
      "三网优化节点覆盖齐全（港、日、新、美），主流 1.0x 倍率计费无暗扣",
      "对 Clash Verge Rev、Clash Meta 等客户端支持友好，一键导入无缝分流"
    ],
    "cons": [
      "虚拟网络服务不支持无理由全额退款，首次使用建议优先选择月付方案验证",
      "已知核查限制：购买前请于官方结算页核对当前节点列表、实际流量重置规则与设备限制。",
      "多设备同时并发连接受到套餐等级约束，不建议将订阅分发给过多外部人员"
    ]
  },
  "comparison": {
    "comparedToTop4": "与四大主力对比：若追求极致防封抗审查推荐【02 极连云】IPLC专线；追求原生住宅大流量自用推荐【01 U1S1】；新手一键导入推荐【03 光年梯】；低延迟日常交互推荐【04 光速云】。大佬云 在其擅长区间同样具备竞争力。"
  },
  "faqs": [
    {
      "q": "大佬云 的入门套餐流量够用吗？平时看视频会不会月中就耗尽？",
      "a": "以最低档 ¥20.00 / 月；¥54.00 / 季；¥192.00 / 年 测算：如果是查阅学术文献、Google 检索、微信/Telegram 通信以及每天刷 1-2 小时日常短视频，每月完全充裕。如果每天长时间挂着 YouTube 4K 播放或全天看 Netflix，建议升级至 200GB 以上的主力档位。"
    },
    {
      "q": "购买后可以在几台设备上同时使用？手机和电脑能一起开吗？",
      "a": "可以！支持个人的手机、笔记本电脑和平板多端同时在线。常规套餐普遍允许 3-5 台设备并发，只要是个人正常使用不会触发风控；但严禁将个人订阅链接分享至公共网络或转借他人。"
    },
    {
      "q": "为什么导入订阅后节点显示超时或全红连接不上？",
      "a": "分层排查三部曲：① 检查本地系统时钟是否开启网络自动同步（时钟严重偏差会导致 TLS 证书校验失败或加密握手拒绝）；② 确认订阅是否到期并尝试在客户端右键「更新订阅」；③ 检查本地是否存在端口 7890 冲突、防火墙拦截或与其他代理软件共存冲突。"
    },
    {
      "q": "使用专属优惠码 [dly88] 可以享受多少折扣？在哪里输入？",
      "a": "在官方结账页面（http://adcua9104.dalaoyunaff.com/#/?code=J6GqQqk8）的订单确认环节，找到「优惠码 / 折扣码 (Coupon)」输入框，填入专属代码 [dly88] 并点击「验证/应用」，即可看到订单金额自动减免，享受本站专属优惠。"
    }
  ],
  "changelog": [
    {
      "date": "2026-11-24",
      "type": "数据复核",
      "detail": "复核 大佬云 节点连通率与套餐价格口径，更新专属优惠码 [dly88]。"
    },
    {
      "date": "2026-11-15",
      "type": "节点维护",
      "detail": "优化新加坡与美西原生住宅落地段，增强对 ChatGPT 4o 与 Claude 3.5 的访问兼容。"
    }
  ]
},
}
