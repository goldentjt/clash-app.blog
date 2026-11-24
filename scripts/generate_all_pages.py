import os

pages_data = [
    {
        "slug": "profiles",
        "path": "/profiles",
        "h1": "Clash配置管理：导入、保存与迁移",
        "h2s": ["配置存放与选择", "备份有效内容", "迁移后核对"],
        "h3s": ["本机完成任务后的检查项", "多配置文件快速切换最佳实践"],
        "content_p1": "Clash 客户端的核心运行依赖于 YAML 格式的配置文件。配置文件不仅包含了你的节点服务器连接凭据（密码、端口、UUID、公钥），还规定了 DNS 解析逻辑、本地监听端口、TUN 虚拟网卡参数以及流量分流策略组。理解配置文件的存放路径与层次结构，是跨设备迁移与灾难备份的核心技能。",
        "content_p2": "在桌面客户端（如 Clash Verge Rev）中，配置文件通常存放在应用的数据目录中（例如 Windows 的 <code>%APPDATA%\\clash-verge\\profiles</code> 或 macOS 的 <code>~/Library/Application Support/clash-verge/profiles</code>）。订阅导入时，客户端会自动将远程 YAML 保存为独立哈希命名的文件，避免直接修改内核的主运行模板。",
        "content_p3": "进行配置备份时，切勿直接将包含私人订阅 Token 的完整文件公开上传至公共 GitHub 仓库或分享给他人。推荐定期压缩 profiles 目录并进行本地离线归档；在迁移至新电脑或新设备时，只需在目标设备上重新导入订阅 URL，或者解压本地备份覆盖即可瞬间还原所有的分流规则和节点选择偏好。",
        "diagram_title": "Clash 配置存储体系与多配置切换结构图",
        "diagram_hint": "本地 profiles 目录与运行时合并配置关系",
        "steps": [
            {"num": 1, "title": "识别本地 profiles 存储目录", "desc": "在客户端配置界面右键点击订阅卡片，选择「打开所在文件夹」，直接定位实际 YAML 文件存放路径。"},
            {"num": 2, "title": "提取并备份有效分流规则", "desc": "若自己编写了自定义扩展脚本（Script）或覆写规则（Merge），单独备份该 yaml 文本文件。"},
            {"num": 3, "title": "迁移后进行语法与核心校验", "desc": "将配置导入新设备后，观察右上角是否提示 YAML 语法解析成功，核对节点数与策略组完整度。"}
        ],
        "checklist": [
            {"text": "已明确本地 profiles 真实物理存放路径，未直接篡改程序安装包目录", "tip": "安装目录与用户数据目录是分离的"},
            {"text": "定期将个性化分流规则和扩展配置脚本进行本地文本备份", "tip": "防范客户端升级意外覆盖用户设置"},
            {"text": "跨设备迁移时优先复制机场订阅链接重新下载最新节点池", "tip": "推荐搭配 U1S1 或 极连云 专线订阅保持节点最新"},
            {"text": "确认新设备上无端口冲突（如 7890 端口未被其他服务抢占）", "tip": "若冲突可在设置中修改监听端口"}
        ],
        "tip_title": "避坑提示：换新客户端后原有规则报错怎么处理？",
        "tip_content": "部分老旧配置使用了已弃用的旧版 Clash 语法（如旧版 proxy-groups 格式）。若在新版 Clash Verge（Mihomo内核）中运行报错，只需右键订阅卡片执行一次「更新订阅」，机场服务端会自动下发兼容最新 Mihomo 内核的规范配置。"
    },
    {
        "slug": "subscriptions",
        "path": "/subscriptions",
        "h1": "Clash订阅管理：跨设备添加与刷新",
        "h2s": ["确认订阅授权", "分别导入", "更新和失效处理"],
        "h3s": ["本机完成任务后的检查项", "订阅链接安全防护与防泄露准则"],
        "content_p1": "订阅链接（Subscription URL）是连接客户端与机场节点服务器的通信纽带。一个标准的 Clash 订阅链接由机场服务商动态生成，内置了鉴权密钥（Token）。客户端向该链接发起 HTTP GET 请求时，服务端会实时返回当前所有可用节点的状态、IP、端口以及预设的分流规则列表。",
        "content_p2": "跨设备使用订阅时，需注意不同平台的添加机制：Windows/macOS 桌面端支持直接粘贴 URL 并设置「自动更新间隔」（推荐设置为 24 小时或 12 小时一次）；Android 手机端可在 Clash Meta for Android 中新建配置输入 URL；iOS 端则可在 Shadowrocket 或 Stash 中选择「类型: Subscribe」一键拉取。",
        "content_p3": "当遇到订阅刷新失败（如提示 Socket Timeout 或 Status 500）时，先确认本地是否有可用的前置网络代理。若当前节点全部失效导致无法访问机场订阅域名，可尝试切换手机热点，或者登录机场后台临时开启「应急备用订阅通道」重新拉取节点列表。",
        "diagram_title": "跨设备订阅同步与防阻断刷新时序图",
        "diagram_hint": "订阅请求通过安全通道获取最新节点池",
        "steps": [
            {"num": 1, "title": "复制机场唯一专属订阅链接", "desc": "在机场控制台（如 U1S1、极连云、光年梯）复制专属 Clash 订阅链接，严防在公共群组公开展示。"},
            {"num": 2, "title": "按设备平台粘贴并设置自动更新", "desc": "在各设备客户端填入链接，设置更新周期（建议 1440 分钟/每天），确保节点变动自动同步。"},
            {"num": 3, "title": "处理订阅刷新异常与域名更换", "desc": "若机场因防封更换了订阅分发域名，及时在客户端编辑原配置中的 URL 地址即可恢复拉取。"}
        ],
        "checklist": [
            {"text": "妥善保管个人专属订阅 URL，未在公共网页或论坛暴露包含 Token 的参数", "tip": "Token 泄露可能导致他人盗刷你的流量"},
            {"text": "在客户端中开启了「自动更新订阅」功能", "tip": "确保敏感时期能够自动获取抗封锁的新节点"},
            {"text": "确认订阅套餐尚未到期且月度流量有剩余额度", "tip": "流量耗尽会导致订阅拉取失败或节点无响应"},
            {"text": "测试多设备并发使用未超出机场设定的最大连接数限制", "tip": "多设备推荐选 浪网 或 FlyV 不限设备方案"}
        ],
        "tip_title": "为什么有时不翻墙就无法更新订阅？",
        "tip_content": "部分机场的订阅分发服务器部署在海外且未被国内直接加速，当你的电脑完全断网或节点全失效时，就无法连接海外订阅服务器。建议在手机上保留一个稳定的轻量备用节点（或手机热点）用来拉取初始订阅。"
    },
    {
        "slug": "proxies",
        "path": "/proxies",
        "h1": "Clash应用里的节点：选择、检测与恢复",
        "h2s": ["认识列表和组", "测试计划使用节点", "恢复已知选择"],
        "h3s": ["本机完成任务后的检查项", "延迟测试超时不代表节点死锁的判断依据"],
        "content_p1": "Clash 的强大之处不仅在于单节点代理，更在于其灵活多样的「策略组（Proxy Groups）」。常见的策略组包括 PROXIES（主代理）、Auto/Url-test（自动优选低延迟）、Fallback（故障自动转移）、Streaming（流媒体专属）以及 Domestic（国内直连）。理解这些策略组的作用，能让你彻底告别频繁手动切节点的繁琐。",
        "content_p2": "在「代理（Proxies）」界面中，点击闪电或 Wi-Fi 图标可以对全量节点进行延迟检测。需要明确的是：这里的延迟测试本质上是客户端向特定目标服务器（如 http://cp.cloudflare.com/generate_204）发送轻量 HTTP 探测包所消耗的往返时间（RTT），它主要反映网络的物理往返响应快慢，而非传输大带宽的绝对下载速率。",
        "content_p3": "当发现某个节点测速显示「Timeout」时，不要慌张。这可能是该节点探测目标超时，或者该节点正在进行零中断热切。若当前正在观看 4K 视频出现缓冲，可直接在策略组中切换至其他绿标节点；在晚高峰期间，推荐优先锁定 IPLC 专线（如极连云专线节点）以确保绝对不丢包。",
        "diagram_title": "Clash 策略组分流与自动优选工作流图解",
        "diagram_hint": "PROXIES 自动检测健康状态并路由流量",
        "steps": [
            {"num": 1, "title": "展开主策略组 PROXIES", "desc": "在客户端点击进入代理面板，查看预置的策略组树状结构，确认顶层控制组。"},
            {"num": 2, "title": "批量触发 HTTP 探测测速", "desc": "点击组右上角测速按钮，观察香港、日本、美国等节点的毫秒延迟数值表现。"},
            {"num": 3, "title": "按业务需求锁定特定出口", "desc": "观看 Netflix 时选择标注「原生解锁」节点；调用 ChatGPT 时选择新加坡或美国家庭宽带节点。"}
        ],
        "checklist": [
            {"text": "已理解测速延迟（ms）与带宽速率（Mbps）的区别，不单纯以毫秒数论好坏", "tip": "美国专线虽然延迟 150ms，但带宽完全能跑满 4K"},
            {"text": "流媒体和 AI 对话推荐选用原生住宅 IP 节点，避免被服务商风控拦截", "tip": "U1S1 原生节点表现出色"},
            {"text": "晚高峰（20:00-23:00）遇到公网抖动，优先切换为 IPLC 专线策略", "tip": "极连云 IPLC 专线抗 QoS 性能极佳"},
            {"text": "知道如何在异常时一键将策略组重置为默认自动优选", "tip": "避免单节点离线后一直卡死在离线线路上"}
        ],
        "tip_title": "节点测速超时（Timeout）常见排查点",
        "tip_content": "1. 检查本地电脑系统时钟是否准确（偏差过大直接导致 TLS 握手失败超时）；2. 检查是否开启了多重代理软件相互拦截；3. 检查机场该节点是否正在临时维护，可切换同地区其他序号节点。"
    },
    {
        "slug": "routing",
        "path": "/routing",
        "h1": "Clash应用规则设置：界面选项对应什么",
        "h2s": ["确认运行模式", "查看有效规则", "更改与验证"],
        "h3s": ["本机完成任务后的检查项", "规则分流冲突导致国内网站走代理的诊断"],
        "content_p1": "Clash 区别于传统全局 VPN 的最大优势就在于「基于规则的智能分流（Rule-based Routing）」。当你打开一个网页时，Clash 会根据域名后缀、IP 归属地、端口号甚至发起请求的应用程序名称，在毫秒级时间内判断该流量是应该「走代理（Proxy）」、「直连（Direct）」还是「拦截（Reject）」。",
        "content_p2": "在客户端界面顶部，通常有三个核心模式可供切换：\n1. **Rule（规则模式，强烈推荐日常使用）：** 按照规则集分流，访问海外被墙网站走节点，访问百度、微信、网易云等国内服务完全直连，不耗费机场流量且速度最快；\n2. **Global（全局模式）：** 本机所有网络请求无论目标为何均强制走选定的代理节点（访问国内网站可能会变慢或显示海外 IP）；\n3. **Direct（直接连接模式）：** 所有流量完全不走代理，相当于直接裸连互联网。",
        "content_p3": "在高级配置中，规则由上至下匹配，遵循「先匹配先执行」原则。例如一条 <code>DOMAIN-SUFFIX,google.com,PROXIES</code> 命中后就会立即走代理，最后一条通常为 <code>MATCH,PROXIES</code> 或 <code>MATCH,DIRECT</code> 承接未被匹配到的兜底流量。",
        "diagram_title": "Clash Rule 模式流量判定与分流路线图解",
        "diagram_hint": "规则匹配链条：命中海外走向节点，命中国内直连",
        "steps": [
            {"num": 1, "title": "检查当前运行模式是否处于 Rule", "desc": "在主界面确认分流模式选项勾选为「Rule / 规则」，杜绝误开全局模式导致国内流量消耗。"},
            {"num": 2, "title": "查看连接面板（Connections）的实际走向", "desc": "在侧边栏「连接」实时查看当前发起网络请求的进程名、目标域名与命中的具体规则。"},
            {"num": 3, "title": "添加自定义分流覆写规则", "desc": "若希望特定学术网站强制走代理，可在个性化配置文件中添加 prepend-rules 规则。"}
        ],
        "checklist": [
            {"text": "日常使用始终保持在「Rule (规则模式)」，确保国内网络完全直连无延迟", "tip": "全局模式仅在特定排障或外服联机时临时开启"},
            {"text": "在连接面板能看到中国大陆 IP 命中 DIRECT 规则", "tip": "访问 国内 IP 归属地显示本地真实网络"},
            {"text": "清楚规则的先后顺序：先域名精确匹配，再 GEOIP 判定，最后 MATCH 兜底", "tip": "避免把宽泛规则写在最前面导致误拦截"},
            {"text": "修改自定义规则前保留原始 YAML 的完整副本", "tip": "方便修改语法错误时快速还原"}
        ],
        "tip_title": "为什么访问某些国内小众网站也走了代理？",
        "tip_content": "这是由于机场配置自带的 GEOIP 数据库未收录该冷门国内域名的 CDN 节点，导致流量落入了末尾的 MATCH 兜底规则。解决方法是在客户端配置覆写中，为该域名添加一条 `DOMAIN-SUFFIX,example.cn,DIRECT` 强制直连即可。"
    },
    {
        "slug": "tun-mode",
        "path": "/tun-mode",
        "h1": "Clash应用TUN：安装组件与系统权限怎样核对",
        "h2s": ["确认平台支持", "查项目的接入前提", "启用和关闭验证"],
        "h3s": ["本机完成任务后的检查项", "TUN模式虚拟网卡残留清理技巧"],
        "content_p1": "传统的「系统代理（System Proxy）」仅通过修改操作系统注册表或网络设置，通知浏览器等遵循标准 HTTP/SOCKS 协议的软件。但许多软件（例如 Windows 终端命令行 git/curl、部分外服游戏、UWP 应用、开发工具 Docker/NodeJS）根本不遵循系统代理，导致出现“开了代理但终端依旧无法 clone 代码”的痛点。TUN（虚拟网卡）模式正是为了彻底根治这一局限而生。",
        "content_p2": "启用 TUN 模式时，Clash 会在操作系统中创建一个高优先级的虚拟网络适配器（Virtual Network Interface），直接在网络第 3 层（IP 层）截获整机进出的所有原始网络数据包，并通过驱动程序将其透明封装进代理隧道中。因此，开启 TUN 模式后，电脑上的任何软件、游戏或命令行工具，无需任何额外配置即可自动实现全局科学上网。",
        "content_p3": "由于 TUN 模式深入操作系统底层网卡驱动，因此必须具备系统管理员权限（Windows 下需安装 Service Mode 服务模式驱动，macOS 下需安装系统辅助拓展 Helper）。开启前请核验系统安全软件未对虚拟网卡驱动进行拦截。",
        "diagram_title": "TUN 模式网络协议栈透明截获原理图解",
        "diagram_hint": "OS 网卡驱动层原始 IP 数据包接管与路由",
        "steps": [
            {"num": 1, "title": "安装并启动系统服务模式（Service Mode）", "desc": "在 Clash Verge Rev 设置中，点击 Service Mode 旁的「Install」，弹出 UAC 提权时点击允许，图标变绿即表示成功。"},
            {"num": 2, "title": "开启 TUN Mode 开关", "desc": "在主界面或设置中打开「Tun Mode」开关，操作系统网络连接中将出现名为 Mihomo / Clash 的虚拟适配器。"},
            {"num": 3, "title": "终端执行 curl 命令验证接管效果", "desc": "打开系统 cmd 或 Terminal，无需设置 export http_proxy，直接执行 curl ipinfo.io 即可返回代理 IP。"}
        ],
        "checklist": [
            {"text": "Windows 系统中已成功安装 Service Mode 服务模式并处于运行状态", "tip": "绿色盾牌图标代表守护进程已加载"},
            {"text": "在网络适配器列表中能看到由 Clash 创建的虚拟网卡", "tip": "一般显示为 wintun 或 Clash TAP/TUN"},
            {"text": "终端执行网络请求已自动走代理，无需额外手动配置环境变量", "tip": "命令行与开发环境体验极大提升"},
            {"text": "日常不建议 TUN 模式与普通系统代理同时强制开启并叠加其他 VPN", "tip": "可能引发网关路由环路冲突"}
        ],
        "tip_title": "关闭 TUN 模式后出现网络无法解析怎么办？",
        "tip_content": "请在 Clash 界面中先点击关闭「Tun Mode」，等待 3 秒驱动卸载虚拟路由；若异常强行重启导致断网，可进入「网络连接」，找到名为 Wintun 的适配器右键点击「禁用」，并重置本地 DNS 为 114.114.114.114 或 8.8.8.8。"
    },
    {
        "slug": "dns-settings",
        "path": "/dns-settings",
        "h1": "Clash应用DNS：覆写设置怎样管理",
        "h2s": ["查有效解析配置", "确认客户端覆盖", "升级后复查"],
        "h3s": ["本机完成任务后的检查项", "防DNS泄漏与Fake-IP模式解析原理"],
        "content_p1": "DNS（域名解析系统）是科学上网过程中最容易被忽视、却又最为核心的环节。传统网络环境下，国内运营商（ISP）的 DNS 服务器存在严重的 DNS 劫持与 DNS 污染（将海外合法域名强行解析为错误或不存在的 IP 地址）。如果在本地直接发起 DNS 查询，甚至会导致访问的目标域名被防火墙直接记录并针对性重置连接。",
        "content_p2": "现代 Clash 内核（如 Mihomo）普遍采用了革命性的 **Fake-IP 模式（198.18.0.0/16 网段）**：\n当应用程序尝试解析 `google.com` 时，Clash 并不立即去向公网发起真实的 DNS 查询，而是在本地伪造并瞬时返回一个合法的私有保留 IP（如 198.18.0.1）。应用程序拿着这个 Fake-IP 发起 TCP 连接，Clash 截获该连接后，在代理隧道内部才将真正的域名发送给远端代理服务器进行安全解析。这种设计实现了「零 DNS 查询延迟」与「绝对防 DNS 污染」的双重飞跃。",
        "content_p3": "在覆写 DNS 配置时，需要配置合理的 `nameserver`（用于解析国内直连域名，推荐使用 223.5.5.5 或 119.29.29.29）与 `fallback`（用于海外安全解析，推荐通过 HTTPS 的 DoH 服务器，如 Cloudflare 或 Google DNS），确保国内外域名各得其所。",
        "diagram_title": "Fake-IP 模式解析与防止 DNS 泄漏全流程图",
        "diagram_hint": "本地毫秒级 Fake-IP 响应与远端安全代理查询",
        "steps": [
            {"num": 1, "title": "查看当前有效 DNS 运行配置", "desc": "在客户端配置界面展开 DNS 模块，确认 enhanced-mode 设置为 fake-ip 或 redir-host。"},
            {"num": 2, "title": "配置国内与海外分离的解析上游", "desc": "国内直连走阿里/腾讯 DNS，海外走专线加密 DoH (DNS over HTTPS)，杜绝运营商嗅探。"},
            {"num": 3, "title": "在线测试防 DNS 泄漏状态", "desc": "访问 browserleaks.com/dns 进行测试，确认检测出的 DNS 服务器属地为远端节点属地。"}
        ],
        "checklist": [
            {"text": "确认 enhanced-mode 选用 fake-ip 模式以获得最佳连接速度与防污染体验", "tip": "兼容性极佳且能极大加速网页打开"},
            {"text": "国内 nameserver 包含权威国内 DNS（如 223.5.5.5），保证国内 CDN 精准调度", "tip": "避免国内网站被解析到偏远节点"},
            {"text": "客户端大版本升级后，复查本地配置中的 DNS 块语法格式是否有效", "tip": "Mihomo 新内核支持更强大的 rule-providers"},
            {"text": "经 browserleaks 检验未暴露本地运营商的真实真实 DNS 地址", "tip": "保障深度匿名与安全防护"}
        ],
        "tip_title": "为什么访问某些企业内部内网域名会解析失败？",
        "tip_content": "在 Fake-IP 模式下，若公司内网域名（如 *.corp.local）被分配了 Fake-IP，内网 VPN 客户端可能会因为无法直接识别该虚拟 IP 而断连。解决方法是在配置文件的 `fake-ip-filter` 列表中加入该内网域名通配符，强制其走真实本地 DNS 解析即可。"
    },
    {
        "slug": "app-errors",
        "path": "/app-errors",
        "h1": "Clash应用无法连接：从安装状态到运行记录",
        "h2s": ["确认软件正常运行", "核对有效配置", "检查节点和目标"],
        "h3s": ["本机完成任务后的检查项", "常见报错日志脱敏提报模板"],
        "content_p1": "“Clash 开了但网页打不开”、“软件界面全是红色超时”、“关闭 Clash 后电脑彻底断网无法上网”——这是新手在使用代理工具时遇到最为频繁的三大拦路虎。面对网络故障，切忌慌乱重装系统，按照标准的「自底向上」排查链路，通常 3 分钟内即可精准定位并化解故障。",
        "content_p2": "排查第一步是确认内核与端口状态：进入任务管理器，确认 `mihomo.exe` 或 `clash-meta` 核心进程正在运行，且本地 7890 端口未被其他下载工具或旧代理残余占用；第二步是确认系统代理开关是否生效；第三步是查看日志面板（Logs），如果日志中大量出现 `handshake failed: certificate has expired`，100% 是系统时间未同步；如果出现 `connect: connection refused`，则是节点服务器离线。",
        "content_p3": "如果是由于关机未正常退出 Clash 导致的断网残疾，核心病因是系统网络设置中的「手动代理服务器」未被自动撤销。只需进入系统设置手动关闭代理即可立刻恢复所有国内网站访问。",
        "diagram_title": "Clash 无法连接故障排障决策树",
        "diagram_hint": "核心-端口-配置-节点-时间五维诊断链",
        "steps": [
            {"num": 1, "title": "检查系统时间是否精准同步", "desc": "打开系统时钟设置执行立即同步，时间误差不能超过 60 秒，化解 90% 的 SSL/TLS 证书握手失败。"},
            {"num": 2, "title": "检查 7890 端口监听与核心状态", "desc": "查看右下角状态指示灯是否为绿色，若提示 Port 7890 in use，在设置中将端口改为 7892 等空闲端口。"},
            {"num": 3, "title": "查看 Logs 日志面板提取真实错误代码", "desc": "在侧边栏「日志」中筛选 Error 级别日志，观察是 DNS 解析失败、握手错误还是节点已下线。"}
        ],
        "checklist": [
            {"text": "系统时间已完成互联网校准（可在 time.is 网站快速复核）", "tip": "最常见却最易被忽视的隐蔽故障原因"},
            {"text": "确认 Clash 运行时无第三方杀毒软件进行静默拦截或断网防火墙阻断", "tip": "临时关闭第三方管家测试"},
            {"text": "确认机场套餐有效且流量充沛（可前往推荐页选备用专线）", "tip": "建议常备如 极连云 或 U1S1 备用节点"},
            {"text": "掌握系统代理残留手工撤销方法，能独立恢复本机默认上网状态", "tip": "Windows设置->网络->代理->关闭代理服务器"}
        ],
        "tip_title": "提报故障给客服时的脱敏日志模板",
        "tip_content": "如需向机场客服或社区提报日志，请先隐藏私密信息：\n1. 隐藏含有 token= 或 password 的私密参数；\n2. 截取最近 10 行带有 [ERROR] 或 [WARN] 的具体信息；\n3. 附带当前客户端版本（如 Verge Rev 1.7.7）与核心版本。"
    },
    {
        "slug": "windows",
        "path": "/windows",
        "h1": "Clash Windows下载与安装维护指南",
        "h2s": ["匹配安装包", "首次连接与设置", "更新迁移和卸载"],
        "h3s": ["本机完成任务后的检查项", "Win11代理开关自动关闭的解决办法"],
        "content_p1": "Windows 平台（涵盖 Windows 10 与 Windows 11）是 Clash 生态最为成熟、用户基数最为庞大的环境。当前官方主流推荐的桌面 GUI 客户端为社区深度维护的 **Clash Verge Rev**，内置了功能强大的 Mihomo (Clash.Meta) 内核，完美支持现代化 WinUI 视觉风格、中文多语言与 Service Mode 系统服务模式。",
        "content_p2": "在安装环节，绝大多数 Intel 与 AMD 64位电脑请下载 `Clash.Verge_x64-setup.exe`；对于搭载高通骁龙处理器的全新 Windows on ARM 轻薄本，必须下载 `arm64-setup.exe` 才能发挥原生能效。安装时建议勾选「为所有用户安装」，并在首次启动时对 Windows Defender 防火墙的所有网络访问弹窗点击「允许访问」。",
        "content_p3": "在日常维护与卸载方面，Clash Verge Rev 提供了开机自启（Auto Launch）与静默启动功能。卸载前请务必在软件中关闭「系统代理」和「服务模式」，避免注册表留存代理指向导致网络瘫痪。",
        "diagram_title": "Clash Verge Rev 在 Windows 系统的标准配置闭环",
        "diagram_hint": "Windows 系统服务注册与系统托盘管理",
        "steps": [
            {"num": 1, "title": "下载并以管理员身份运行安装包", "desc": "下载对应 x64 或 arm64 安装包，跟随向导完成安装并放行防火墙公用/专用网络权限。"},
            {"num": 2, "title": "导入机场 YAML 订阅并启用", "desc": "在「订阅」界面粘贴订阅 URL，右键设为当前主配置，在「代理」中选定香港或日本节点。"},
            {"num": 3, "title": "开启开机自启与服务模式", "desc": "在「设置」中打开「开机启动」和「静默启动」，安装 Service Mode 保障 TUN 模式可用。"}
        ],
        "checklist": [
            {"text": "Windows 10/11 安装包架构匹配正确（x64 或 arm64）", "tip": "可从本站下载页核对安装文件登记表"},
            {"text": "防火墙已放行 Clash Verge 核心进出站规则", "tip": "防止局域网共享与外部连接被误杀"},
            {"text": "已开启「开机自启」并测试系统重启后能自动在托盘正常工作", "tip": "实现开机免手动重复打开"},
            {"text": "知道如何通过 Win+I 快速进入代理设置页面验证代理状态", "tip": "设置 -> 网络和 Internet -> 代理"}
        ],
        "tip_title": "Win11 代理开关为什么总会自动关闭？",
        "tip_content": "部分国产杀毒软件或流氓浏览器会在后台定时轮询并强行重置 Windows 代理注册表。如果遇到系统代理经常被掐断，建议：1. 将 Clash 加入杀毒软件信任白名单；2. 在 Clash Verge 中直接改用 TUN 模式，完全绕过 Windows 注册表代理！"
    },
    {
        "slug": "mac",
        "path": "/mac",
        "h1": "Clash Mac下载与使用：架构、应用与迁移",
        "h2s": ["核对Intel或Apple架构", "安装与首次运行", "备份和卸载"],
        "h3s": ["本机完成任务后的检查项", "macOS已损坏无法打开的安全策略放行"],
        "content_p1": "macOS 平台拥有卓越的能效比与严谨的沙盒安全机制。随着 Apple Silicon（M1、M2、M3、M4 芯片）的全面普及，在 Mac 上使用 Clash 时，**严谨区分芯片架构**成为了获得持久续航与低发热表现的前提。虽然通过 Rosetta 2 转译可以运行 Intel x64 版本，但直接下载针对 ARM64 原生编译的 `aarch64.dmg` 能降低约 40% 的 CPU 唤醒功耗。",
        "content_p2": "由于开源项目未向苹果支付每年高昂的开发者公证签名费，macOS Gatekeeper（门禁系统）首次打开时经常会弹出「“Clash Verge”已损坏，您应该将它移到废纸篓」或「无法打开，因为无法验证开发者」的阻断提示。这并非软件真正损坏，而是苹果的安全拦截。只需打开系统「终端（Terminal）」，执行一行权限命令：`sudo xattr -rd com.apple.quarantine /Applications/Clash\\ Verge.app` 即可永久解除拦截顺利打开。",
        "content_p3": "在 macOS 下，Clash Verge Rev 支持通过菜单栏图标（MenuBar）常驻，点击小猫咪或图标即可快捷切线，轻巧优雅。若需卸载，先关闭系统代理，然后删除 `/Applications/Clash Verge.app` 以及 `~/Library/Application Support/clash-verge` 即可彻底清除配置。",
        "diagram_title": "macOS 架构匹配与 Gatekeeper 放行图解",
        "diagram_hint": "Apple Silicon 原生 DMG 安装与隔离属性解除",
        "steps": [
            {"num": 1, "title": "下载 aarch64.dmg 并拖入应用程序", "desc": "M 系列芯片下载 aarch64.dmg，挂载后将 App 拖拽入 Applications 文件夹。"},
            {"num": 2, "title": "解除 Gatekeeper 隔离属性放行", "desc": "若提示已损坏，在终端执行 sudo xattr -rd com.apple.quarantine 应用路径解除隔离。"},
            {"num": 3, "title": "安装系统辅助工具授权 Helper", "desc": "在系统偏好设置中允许辅助工具运行，开启菜单栏常驻与系统代理接管。"}
        ],
        "checklist": [
            {"text": "在「关于本机」已核对芯片类型，M 系列芯片确保使用 aarch64 原生版本", "tip": "活动监视器中种类显示为 Apple 即代表原生运行"},
            {"text": "掌握 sudo xattr 终端命令，能熟练化解已损坏误报弹窗", "tip": "开源客户端常见的安全策略放行手段"},
            {"text": "在「系统设置」→「隐私与安全性」中为 Clash 授予必要网络控制权限", "tip": "确保系统代理与 Helper 正常生效"},
            {"text": "日常使用善用顶部菜单栏图标快速测速切线与启停代理", "tip": "无需每次打开沉重的大窗口"}
        ],
        "tip_title": "Mac 睡眠唤醒后网络经常断连怎么办？",
        "tip_content": "macOS 的深度睡眠机制（Power Nap）会休眠网络连接，导致长连接节点掉线。进入 Clash Verge 设置，开启「断网后自动恢复连接」，或者将主要策略组设置为自动测速故障转移，Mac 唤醒后 2 秒内即可全自动重连。"
    },
    {
        "slug": "android",
        "path": "/android",
        "h1": "Clash Android应用：包、授权与后台维护",
        "h2s": ["确认包和签名资料", "首次运行授权", "更新和后台检查"],
        "h3s": ["本机完成任务后的检查项", "安卓各大厂商ROM后台保活防杀设置"],
        "content_p1": "Android 平台主流的 Clash 客户端是 **Clash Meta for Android (简称 CMFA)**，它集成了强大的 Mihomo 内核，针对移动设备触摸交互与低功耗做了深度重构。安装包为标准的 `.apk` 格式，支持 arm64-v8a 与 Universal 全架构机型，支持手机、平板以及 Android TV 智能电视系统。",
        "content_p2": "与电脑端修改代理端口不同，Android 系统通过系统级接口 `VpnService` 实现全流量接管。首次点击启动连接时，手机屏幕会弹出「网络连接请求：Clash 想要设置 VPN 连接」的系统警告对话框，必须点击「确定」授权。启动后，状态栏会出现小钥匙 🔑 或 VPN 图标，表示手机的所有移动数据与 Wi-Fi 流量均已开始通过 Clash 规则进行分流。",
        "content_p3": "在安卓生态中，使用代理面临的最大挑战是各大国产厂商 ROM（MIUI/HyperOS、ColorOS、OriginOS、HarmonyOS）激进的**后台省电杀后台机制**。若不进行保活设置，手机锁屏 5 分钟后 Clash 就会被系统强制杀掉导致断网。必须在系统设置中为 Clash 开启「锁定后台应用」、「允许自启动」并将电池管理策略修改为「无限制 / 不优化」。",
        "diagram_title": "Android VpnService 授权与后台防杀三步图解",
        "diagram_hint": "系统 VPN 管道建立与自启动常驻权限配置",
        "steps": [
            {"num": 1, "title": "下载并安装 CMFA Universal APK", "desc": "在手机浏览器下载官方 APK 安装包，安装时允许未知来源安装。"},
            {"num": 2, "title": "导入订阅并确认 VpnService 弹窗", "desc": "进入配置填入订阅 URL 保存，返回主页点击未连接，在系统弹窗中点击「确定」授权。"},
            {"num": 3, "title": "锁定多任务卡片与关闭电池优化", "desc": "在多任务界面下拉锁定卡片小锁，电池策略设为无限制，防止锁屏被杀。"}
        ],
        "checklist": [
            {"text": "状态栏已展示 🔑 钥匙图标，代表系统 VpnService 接口已成功接管", "tip": "手机整机流量开始受规则分流调度"},
            {"text": "在应用信息中已开启「自启动」权限并关闭了「省电策略限制」", "tip": "防止锁屏息屏后后台被杀断连"},
            {"text": "已在设置中开启「分应用代理（绕过指定的国内应用）」", "tip": "让银行、微信等敏感应用直接绕过 VPN"},
            {"text": "测试在 4G/5G 蜂窝数据与家用 Wi-Fi 切换时连接依然平稳", "tip": "CMFA 具备强大的网络切换自动重连机制"}
        ],
        "tip_title": "为什么在 Android 手机上分应用代理极其重要？",
        "tip_content": "部分国内金融、银行类 App（如各大银行掌银、税务应用）检测到手机挂载了 VPN 就会出于风控拒绝登录。在 CMFA 设置中开启「应用分流（Access Control）」，将这些国内应用勾选为 Direct 直连或完全不经由 Clash，即可完美兼顾翻墙与日常金融使用！"
    },
    {
        "slug": "iphone",
        "path": "/iphone",
        "h1": "Clash iPhone应用选择与安装使用指南",
        "h2s": ["确认应用和分发渠道", "核对系统与配置支持", "首次连接和数据迁移"],
        "h3s": ["本机完成任务后的检查项", "美区Apple ID申请与小火箭/Karing配套使用"],
        "content_p1": "由于 iOS 生态严格的 App Store 审查政策，**Clash 并没有官方名义的原名客户端在苹果商店上架**。但在 iOS 平台上，存在多款高度兼容 Clash 订阅格式、规则集和分流机制的顶级第三方网络工具。主流选择包括：\n1. **Shadowrocket（小火箭，最受新手欢迎）：** 售价 2.99 美元，界面亲民，全面支持直接导入 Clash YAML 订阅并自动解析为规则节点；\n2. **Stash（最正统的 iOS 版 Clash）：** 专为 iOS 设计的 Clash 客户端，完美兼容 Clash 配置文件、脚本与网页面板；\n3. **Karing / Sing-box：** 新兴免费或轻量多协议客户端，支持 VLESS 与 Clash 格式转换。",
        "content_p2": "获取上述软件必须使用**非国区 Apple ID**（如美区、日区、港区 Apple ID）。用户可自行注册一个免信用卡的美区账号，或在正规数字礼品卡平台购买 3 美元充值卡兑换下载。下载完成后即可切回原个人日常账号，软件更新与使用均不受影响。",
        "content_p3": "在 iOS 端导入订阅非常简单：以 Shadowrocket 为例，打开软件点击右上角「+」，类型选择「Subscribe」，粘贴机场订阅 URL 并点击右上角完成，节点瞬间刷出。在下方「全局路由」选择「配置（Config）」，点击连接开关并在系统弹窗中通过面容 ID（Face ID）允许添加 VPN 配置即可！",
        "diagram_title": "iOS 生态客户端获取与 Clash 订阅导入流程图",
        "diagram_hint": "非国区 Apple ID 获取与 Shadowrocket/Stash 规则配置",
        "steps": [
            {"num": 1, "title": "登录海外 Apple ID 获取客户端", "desc": "在 App Store 登录非国区账号，搜索获取 Shadowrocket、Stash 或 Karing。"},
            {"num": 2, "title": "添加 Subscribe 订阅并拉取节点", "desc": "新建配置选择 Subscribe 类型，填入机场订阅链接，全量节点列表自动生成。"},
            {"num": 3, "title": "全局路由保持「配置」开启连接", "desc": "全局路由选择「配置」实现国内外自动分流，开启上方开关并验证 Face ID。"}
        ],
        "checklist": [
            {"text": "在 App Store 仅切换个人账号用于下载，切勿在系统「iCloud 设置」中登录未知共享账号", "tip": "防止设备被意外锁死"},
            {"text": "全局路由务必保持在「配置（Config）」，而不是「代理（Proxy）」", "tip": "保证微信、网易云等国内直连走免流"},
            {"text": "测试开启 VPN 后后台持续运行良好，无突发闪退", "tip": "iOS NetworkExtension 机制极度省电稳定"},
            {"text": "已在节点列表中选定主力使用的原生或专线节点", "tip": "搭配本站推荐的 U1S1 或 极连云 体验最佳"}
        ],
        "tip_title": "iOS 客户端节点更新提示「Invalid URL」怎么解决？",
        "tip_content": "这是由于部分输入法在复制粘贴时，自动在 URL 尾部添加了不可见的空格或换行符。长按输入框全选并删除，手动仔细粘贴并检查末尾，确保无多余空格即可顺利拉取。"
    },
    {
        "slug": "linux",
        "path": "/linux",
        "h1": "Clash Linux应用：GUI与核心安装维护",
        "h2s": ["选择运行形式与包", "安装并验证", "更新和停止服务"],
        "h3s": ["本机完成任务后的检查项", "Systemd守护进程与环境变量代理写入"],
        "content_p1": "在 Linux 操作系统（无论是 Ubuntu、Debian、CentOS 还是 Arch Linux）中，Clash 提供了两种截然不同的运行形态：\n1. **GUI 桌面图形界面版本：** 主要代表为 **Clash Verge Rev AppImage / .deb / .rpm**，适合配备了 GNOME、KDE 桌面环境的日常开发者使用，操作与 Windows/Mac 版完全一致；\n2. **Headless 纯命令行核心版本：** 直接运行编译好的 **Mihomo (clash-meta) 二进制核心**，配合 Systemd 服务实现开机常驻，内存开销仅 30MB，极度适合云服务器、软路由以及无头工作站环境。",
        "content_p2": "对于桌面用户，赋予 AppImage 可执行权限即可直接双击运行：`chmod +x Clash.Verge_*.AppImage && ./Clash.Verge_*.AppImage`；对于服务器命令行用户，通常将内核解压至 `/usr/local/bin/mihomo`，配置文件存放在 `/etc/mihomo/config.yaml`，并编写一个标准的 Systemd 守护单元文件实现进程保活与自动拉起。",
        "content_p3": "在终端中让命令行工具（git, apt, docker）享受代理加速，只需在 `~/.bashrc` 或 `~/.zshrc` 中添加快速环境变量别名：`alias setproxy=\"export http_proxy=http://127.0.0.1:7890 https_proxy=http://127.0.0.1:7890\"`，需要时执行 `setproxy` 即可瞬时加速下载！",
        "diagram_title": "Linux 环境 GUI 与 Systemd 核心守护双轨运行结构图",
        "diagram_hint": "AppImage 桌面运行与 /usr/local/bin 守护进程对比",
        "steps": [
            {"num": 1, "title": "选择运行包格式（AppImage / 二进制）", "desc": "桌面开发机下载 AppImage 或 deb 包；服务器下载官方 tar.gz 编译二进制核心。"},
            {"num": 2, "title": "配置 Systemd 守护服务单元文件", "desc": "创建 /etc/systemd/system/mihomo.service，配置 ExecStart 与 Restart=on-failure。"},
            {"num": 3, "title": "验证 RESTful API 与网页面板管理", "desc": "核心启动后监听 9090 端口，可通过浏览器打开 Yacd 远程面板管理节点与测速。"}
        ],
        "checklist": [
            {"text": "Linux 安装包根据自身发行版架构选对（通常为 x86_64 或 aarch64）", "tip": "云服务器注意核对是否为 ARM 实例"},
            {"text": "Systemd 服务已成功执行 systemctl enable --now mihomo", "tip": "服务开机自动常驻运行"},
            {"text": "终端执行 curl -I https://google.com --proxy http://127.0.0.1:7890 验证连通", "tip": "返回 HTTP/2 200 即代表通道成功建立"},
            {"text": "懂得如何通过 systemctl stop 或 kill 正常终止旧实例", "tip": "防止后台僵尸进程占用 7890 端口"}
        ],
        "tip_title": "Linux 下解决 Git Clone 依然奇慢无比的方法",
        "tip_content": "因为系统代理对 Git 命令行无效，必须单独配置 Git 的全局代理指令：\n`git config --global http.proxy http://127.0.0.1:7890`\n`git config --global https.proxy http://127.0.0.1:7890`\n配置后拉取 GitHub 仓库速度将直接飙升跑满带宽！"
    },
    {
        "slug": "faq",
        "path": "/faq",
        "h1": "Clash应用常见问题：安装包、迁移和账户",
        "h2s": ["下载与安装", "配置与服务账号", "更新和卸载"],
        "h3s": [],
        "content_p1": "为了让广大 Clash 新手与进阶用户能够最快速找到答案，本页面将所有高频核心问答全部默认展开呈现。无论是安装包的系统架构匹配、核心版本识别，还是配置跨端迁移、机场服务复用与防断网卸载，均提供可验证的实操指引。",
        "content_p2": "如果遇到了极其罕见的报错代码，欢迎随时查阅本站的各系统专项指南，或通过关于本站页面的联系渠道向我们提报纠错。",
        "content_p3": "同时，选择靠谱稳定的机场服务是避免 90% 虚假报错的根本保证。请参考本站精选的 28 家真实机场评测，尤其推荐关注 4 大主力服务商。",
        "diagram_title": "常见问答与故障速查思维导图",
        "diagram_hint": "全量默认展开问答矩阵",
        "steps": [
            {"num": 1, "title": "查阅下方全量展开的问答明细", "desc": "直接浏览针对安装包、核心版本、配置迁移、机场订阅的权威解答。"},
            {"num": 2, "title": "根据指引进行本地复核与验证", "desc": "核对本机时钟、配置文件路径以及系统代理注册表状态。"},
            {"num": 3, "title": "点击各问题附带的专项教程链接", "desc": "若需深入理解技术原理，点击展开卡片底部的跳转按钮进入完整图解。"}
        ],
        "checklist": [
            {"text": "已完整阅读下方 6 大经典生命周期问题解答", "tip": "涵盖从下载到卸载全流程"},
            {"text": "排查网络前已优先确认电脑时间已联网精准校准", "tip": "解决绝大部分 SSL 证书报错"},
            {"text": "卸载任何客户端前已确认在界面内关闭了系统代理开关", "tip": "防止关机或卸载后断网"},
            {"text": "机场订阅妥善保管，未与未知第三方共享导致流量盗刷", "tip": "保护私有 Token 凭据安全"}
        ],
        "tip_title": "为什么本站的所有 FAQ 全部要求默认展开？",
        "tip_content": "传统网站喜欢用折叠手风琴隐藏答案，迫使用户不断点击翻找。本站坚持「所见即所得、高效信息呈现」的原则，所有问答与实操步骤全部默认直接渲染展开，节省读者的每一秒宝贵时间！"
    },
    {
        "slug": "about",
        "path": "/about",
        "h1": "关于clashapp：下载资料、教程和更新维护",
        "h2s": ["登记与核验下载资料", "联系纠错", "隐私和商业关系"],
        "h3s": [],
        "content_p1": "欢迎访问 clashapp·图解课堂（唯一官方访问域名：https://clash-app.blog）。本站致力于构建一个客观、专业、不弄虚作假的中文 Clash 知识图谱。我们围绕应用从获取、安装、首次运行到迁移、更新和卸载的完整生命周期组织内容，提供高质量的图解与可复现的操作步骤。",
        "content_p2": "【登记与核验下载资料】本站不是任何开源项目的官方开发者或核心维护团队，我们绝不将本站名义冒充为官方身份。本站展示的所有客户端版本信息、架构说明与 Hash 校验值均忠实取自开源上游仓库。未经验证的第三方链接均明确保持「下载地址待提供」状态，正文与教程依然保持完整独立可读。",
        "content_p3": "【隐私与商业关系披露】本站严格尊重每一位访客的隐私，不收集任何用户私人网络日志，不安装任何侵入式追踪脚本。本站的机场推荐属于公开的商业服务入口，我们坚持实测实录，所有跳转至第三方机场网站的推广与邀请链接，均一律明确标记 `rel=\"sponsored nofollow noopener\"` 与 `target=\"_blank\"`，既保障本站权重的纯净，也充分保障读者的知情权与选择权。",
        "diagram_title": "clashapp·图解课堂 运营与技术中立性架构图",
        "diagram_hint": "知识优先、真实核验与透明商业合作标准",
        "steps": [
            {"num": 1, "title": "真实客观的内容编撰体系", "desc": "所有图解步骤均在真实 Windows、Mac、Android 设备上测试截图并制作标注。"},
            {"num": 2, "title": "透明规范的第三方合作", "desc": "合作机场必须具备真实专线、稳定技术团队与良好口碑，杜绝跑路跑包黑心平台。"},
            {"num": 3, "title": "开放的社区勘误与反馈渠道", "desc": "设立清晰的反馈渠道，欢迎各界开发者与用户对陈旧知识点提出修改指正。"}
        ],
        "checklist": [
            {"text": "认准官方唯一访问域名：https://clash-app.blog", "tip": "防范假冒克隆与钓鱼站点"},
            {"text": "理解本站的技术传播者定位，不冒充开源项目开发者", "tip": "致敬开源社区与内核开发者"},
            {"text": "理解推荐链接挂载的 rel=\"sponsored nofollow noopener\" 属性", "tip": "符合 Google 搜索规范与网络伦理"},
            {"text": "遇到失效教程可随时向站长邮箱发送反馈建议", "tip": "保持教程版本与时俱进"}
        ],
        "tip_title": "联系与勘误渠道说明",
        "tip_content": "如果您在阅读过程中发现某项技术参数发生变化，或某个客户端新版调整了界面布局，欢迎发送邮件至反馈邮箱进行指正。我们将在核验后第一时间更新知识库。"
    },
    {
        "slug": "projects",
        "path": "/projects",
        "h1": "Clash官网项目：从项目到分发资料",
        "h2s": ["核对具体应用", "记录维护方与发布来源", "标明镜像和分发身份"],
        "h3s": ["本机完成任务后的检查项", "如何通过GitHub Release鉴别正版开源源码"],
        "content_p1": "在中文搜索引擎中检索“Clash 官网”，会出现大量充斥着高仿 UI、虚假客服甚至捆绑后门病毒的所谓“官网”。要建立正确的防骗意识，首先必须理解：**原版 Clash 核心早于 2023 年底停止维护，目前活跃且被广泛使用的均为开源社区分支或衍生项目**。不存在任何一个自称代表所有 Clash 官方的商业公司网站。",
        "content_p2": "目前最为主流、受到全球开发者广泛认可的核心是 **Mihomo（前身为 Clash.Meta）**，由 MetaCubeX 开源组织在 GitHub 上公开维护；而主流的桌面端应用程序则是 **Clash Verge Rev**，由社区团队基于 Tauri 框架重构维护；安卓端主流为 **Clash Meta for Android**。所有的正规发布版本均以 GitHub Releases 为唯一权威源头。",
        "content_p3": "本站建立此项目索引，旨在清晰记录各项目的真实维护组织、代码仓库出处以及版本演进历史，帮助读者学会通过查看 GitHub 仓库 Star 数、Release 发布签名以及 Commits 提交记录来辨识正版正规项目，杜绝误入钓鱼木马站。",
        "diagram_title": "Clash 开源衍生谱系与真实来源溯源图解",
        "diagram_hint": "原版核心停更后的开源分支生态树",
        "steps": [
            {"num": 1, "title": "认准权威开源维护组织 GitHub 仓库", "desc": "核心认准 MetaCubeX/mihomo，桌面客户端认准 clash-verge-rev/clash-verge-rev。"},
            {"num": 2, "title": "识别仿冒假官网的典型套路", "desc": "警惕页面上只有收费购买套餐按钮、没有任何代码仓库链接的假冒下载站。"},
            {"num": 3, "title": "查验安装包代码签名与 Hash 校验码", "desc": "下载后比对 Release 页面公布的 sha256 字符串，确保安装包未被中间人篡改。"}
        ],
        "checklist": [
            {"text": "已明确认知不存在所谓的「Clash 官方商业独家官网」", "tip": "破除假官网营销洗脑套路"},
            {"text": "能通过 GitHub Release 直接查看软件的原作者提交记录与发布包", "tip": "掌握自主获取正版开源软件的能力"},
            {"text": "认准主流内核为 Mihomo (Meta) 并理解其继承与突破", "tip": "支持 VLESS、Hysteria2 等全新现代协议"},
            {"text": "对任何来路不明的 .exe/.apk 保持警惕，必经杀毒引擎扫描", "tip": "保障个人终端数据资产安全"}
        ],
        "tip_title": "为什么搜索引擎前几个都是假官网？",
        "tip_content": "部分不良黑产团队利用 SEO 黑帽技术与竞价排名，买下了带有 clash 关键词的域名，并在其中捆绑盗版机场或流氓推广软件。只要认准本站整理的项目登记表与 GitHub 官方源头，即可彻底免疫所有李鬼钓鱼站点！"
    },
    {
        "slug": "meta-core",
        "path": "/meta-core",
        "h1": "Clash Meta与应用：怎样核对内置核心",
        "h2s": ["查客户端记录", "确认实际核心版本", "核对格式和能力"],
        "h3s": ["本机完成任务后的检查项", "Mihomo现代内核新特性支持检查清单"],
        "content_p1": "许多读者在选购机场套餐时，经常会看到某些机场标注“要求必须使用 Meta 内核或 Clash Verge 才能连接”。这让很多初学者感到困惑：我用的就是 Clash，为什么连不上？核心原因就在于：**Clash 客户端只是外壳，内部真正执行网络加密与数据传输的是其底层的 Core（内核）**。",
        "content_p2": "传统的开源 Clash Premium 内核停更较早，仅支持 Shadowsocks、Vmess、Trojan 等老旧协议；而 **Clash.Meta（现更名为 Mihomo）** 则是目前最强大的现代化开源内核，引入了对 **VLESS（含 Reality 伪装与 XTLS Vision）**、**Hysteria2**、**TUIC v5**、**WireGuard** 以及 GeoSite/GeoIP 规则集的全面支持。因此，现代机场提供的前沿抗封锁专线，必须依赖 Meta 核心才能识别驱动。",
        "content_p3": "在 Clash Verge Rev 中，可轻松核对当前使用的核心：进入「设置」→「Clash 内核」，界面会明确列出当前核心类型（通常默认为 Clash Meta 或 Mihomo）及其编译版本号（如 v1.18.7）。客户端还支持在 Alpha 测试版内核与 Release 稳定版内核之间一键切换。",
        "diagram_title": "GUI 外壳与内置 Mihomo (Meta) 内核协作架构图",
        "diagram_hint": "前端界面向后端核心发送指令与拉取运行日志",
        "steps": [
            {"num": 1, "title": "在客户端设置中定位 Clash 内核模块", "desc": "进入 Clash Verge 的设置菜单，找到「Clash 内核 / Core」区域查看当前引擎。"},
            {"num": 2, "title": "确认当前核心为 Clash Meta / Mihomo", "desc": "若使用的是其他老旧内核，点击切换为 Meta 内核以解锁全部现代协议支持。"},
            {"num": 3, "title": "核对版本支持的能力范围与配置规范", "desc": "确认当前版本支持你所选机场的 VLESS/Reality 配置，避免语法不识别报错。"}
        ],
        "checklist": [
            {"text": "客户端内置核心已切换为 Clash Meta / Mihomo 最新稳定版本", "tip": "确保能完美解析所有机场的新型协议节点"},
            {"text": "在节点列表中能正常看到 vless:// 或 reality 类型的节点不报错", "tip": "老旧核心会提示 unknown proxy type"},
            {"text": "了解 Meta 内核对 GeoData / Rule-Set 规则集的强大支持", "tip": "分流更精准，内存占用更小"},
            {"text": "搭配优质专线服务商（如 极连云、U1S1、唯兔云）充分释放新协议威力", "tip": "前往推荐页获取专属体验"}
        ],
        "tip_title": "核心升级后为什么有时候会启动失败？",
        "tip_content": "Mihomo 在大版本更迭时，偶尔会废弃个别过时的 YAML 实验性配置参数。如果切换到 Alpha 内核后提示 Core Crash，只需在设置中将内核切回 Release 稳定版，或者更新一次机场订阅即可瞬间恢复。"
    },
    {
        "slug": "verge-rev",
        "path": "/verge-rev",
        "h1": "Clash Verge Rev应用指南：安装、配置与更新",
        "h2s": ["确认项目和版本", "完成首次任务", "备份更新与卸载"],
        "h3s": ["本机完成任务后的检查项", "扩展配置Merge与Script脚本编写入门"],
        "content_p1": "在众多 Clash 桌面客户端中，**Clash Verge Rev** 凭借其现代化的 Rust + Tauri 轻量架构、纯正的中文原生支持、高颜值且克制的交互界面，以及对 Mihomo (Meta) 内核的无缝集成，已成为目前 Windows、macOS 和 Linux 桌面端的第一首选客户端。它彻底告别了旧版 Electron 应用动辄占用数百兆内存的臃肿弊端。",
        "content_p2": "本指南将带你完整走一遍 Clash Verge Rev 的全套关键实操：从官网 Release 页面识别最新的稳定发布版本（当前建议选用 v1.7.7 及以上稳定版），到完成界面的主题美化与语言设置；从订阅链接的拖拽导入与定时刷新配置，到 Service Mode 系统服务模式的安装与 TUN 模式的开启。",
        "content_p3": "进阶玩法中，Clash Verge Rev 还提供了无与伦比的 **Merge（扩展合并配置）** 与 **Script（JavaScript 规则脚本）** 功能。通过编写轻量的小脚本，你可以在不修改原始机场订阅的前提下，动态向配置注入自定义的屏蔽规则、私有 DNS 甚至自定义策略组，实现千人千面的极客级定制。",
        "diagram_title": "Clash Verge Rev 核心功能架构与操作路径全景图",
        "diagram_hint": "订阅管理-代理策略-系统设置-服务扩展闭环",
        "steps": [
            {"num": 1, "title": "下载安装并完成初始首选项配置", "desc": "安装完成后打开设置，可切换为「奶油咖啡 / 浅色 / 深色」主题，开启开机自启。"},
            {"num": 2, "title": "订阅导入与自动更新策略配置", "desc": "在「订阅」添加机场 URL，设置更新间隔 1440 分钟，并右键点击应用规则配置。"},
            {"num": 3, "title": "安装 Service Mode 激活系统级 TUN 网卡", "desc": "点击设置中的 Service Mode 安装服务，开启 Tun Mode 获得整机全流量透明加速。"}
        ],
        "checklist": [
            {"text": "客户端运行版本在 v1.7.7 以上，界面中文渲染完整无乱码", "tip": "确保获得最新的安全补丁与协议优化"},
            {"text": "在「订阅」中成功保存并激活了至少一套主力机场配置文件", "tip": "卡片左侧出现激活高亮即表示生效"},
            {"text": "系统托盘图标状态与「System Proxy」开关同步良好", "tip": "可通过右键托盘小图标一键启停系统代理"},
            {"text": "卸载前已在设置中点击 Uninstall Service 彻底卸载服务驱动", "tip": "保持系统环境干净清爽"}
        ],
        "tip_title": "如何利用 Verge 的 Merge 功能为 OpenAI 强制指定专线节点？",
        "tip_content": "在 Verge 的「订阅」页面下方新建一个 Merge 扩展配置，写入：\n```yaml\nprepend-rules:\n  - DOMAIN-SUFFIX,openai.com,极连云-日本专线\n  - DOMAIN-SUFFIX,claude.ai,U1S1-香港原生\n```\n保存后，无论机场订阅如何刷新变动，你的 ChatGPT 流量都将永远优先走你指定的顶级专线！"
    },
    {
        "slug": "web-panel",
        "path": "/web-panel",
        "h1": "Clash应用与网页面板：桌面界面和浏览器如何配合",
        "h2s": ["核对控制对象", "本机连接前提", "查看状态与退出"],
        "h3s": ["本机完成任务后的检查项", "Yacd与Razord网页面板切换实操"],
        "content_p1": "许多使用过软路由（如 OpenWrt）、远程云主机或无头 Linux 服务器的用户，对 **Yacd** 或 **Razord** 这类 Web Dashboard（网页面板）并不陌生。但很多桌面端新手会好奇：我的电脑上明明已经有了 Clash Verge 桌面软件，为什么还需要网页面板？它们之间到底是谁控制谁？",
        "content_p2": "实际上，Clash 的内部架构是高度解耦的**「Client-Server」模型**。无论是 Clash Verge 还是浏览器里的网页面板，它们本质上都只是一个“前端遥控器”；真正干活的只有后台运行的 Clash/Mihomo 核心。核心在本地开放了一个 RESTful API 端口（通常默认为 `127.0.0.1:9090`，由 `external-controller` 配置项定义）。",
        "content_p3": "网页面板通过这个 9090 端口向核心发送指令：拉取当前所有节点列表、读取实时的上传下载吞吐速率、查看每个活跃连接的命中规则，以及下发切换节点的动作。理解了这一点，你就可以在局域网内的任何一台 iPad 或手机上，打开浏览器直接输入电脑的 IP:9090 远程监控并切换电脑上的 Clash 节点！",
        "diagram_title": "External-Controller RESTful API 与网页面板交互图解",
        "diagram_hint": "9090 控制端口让桌面 GUI 与 Web 面板双向同步",
        "steps": [
            {"num": 1, "title": "确认核心配置中的 external-controller 端口", "desc": "在有效配置中确认 external-controller: 127.0.0.1:9090 及 secret 访问密钥配置。"},
            {"num": 2, "title": "在浏览器中打开 Yacd 网页面板", "desc": "访问 http://yacd.haishan.me 或本地集成的 Web 面板，填入 127.0.0.1 和 9090 端口。"},
            {"num": 3, "title": "实时观测全机并发连接与分流策略", "desc": "在面板的「Connections」标签页查看哪个 App 正在疯狂消耗流量，必要时一键切断连接。"}
        ],
        "checklist": [
            {"text": "明确网页面板只是视图控制器，关闭浏览器标签页并不会杀掉 Clash 核心", "tip": "核心在后台保持独立运行"},
            {"text": "在局域网远程管理时，已为 external-controller 设置了复杂的 secret 密钥", "tip": "防止局域网其他未经授权的设备偷改你的节点"},
            {"text": "能通过网页面板直观查看实时的上传/下载速度波形图", "tip": "测速与下载时观察带宽曲线极其方便"},
            {"text": "知道在桌面客户端与网页面板之间切换节点会实时双向同步", "tip": "两端数据通过 WebSocket 实时刷新"}
        ],
        "tip_title": "网页面板打不开提示「API Error」怎么解决？",
        "tip_content": "1. 检查 Clash 客户端是否处于正在运行状态；2. 检查配置中的 9090 端口是否被其他软件占用；3. 检查浏览器是否开启了强制 HTTPS，如果面板地址是 http 而被浏览器强行跳到 https，会导致无法与本地明文 API 握手。"
    },
    {
        "slug": "system-proxy",
        "path": "/system-proxy",
        "h1": "Clash应用系统代理：启动、开机与退出怎样管理",
        "h2s": ["系统设置与应用范围", "启动后的验证", "退出与残留恢复"],
        "h3s": ["本机完成任务后的检查项", "修复关机未关代理导致的网页打不开状况"],
        "content_p1": "「系统代理（System Proxy）」是几乎所有代理客户端最核心、最日常的接入模式。当你点击开启 Clash 的系统代理时，软件并不会侵入你的网络硬件，而是通过调用操作系统的标准系统 API，向系统的网络代理协议栈登记一个本地代理服务器地址（通常为 `127.0.0.1:7890`）。",
        "content_p2": "系统代理的**作用范围**主要覆盖遵循操作系统通用代理规范的应用程序，包括：Chrome、Edge、Safari、Firefox（默认跟随系统）等主流浏览器，以及大部分桌面办公软件。但必须清楚其边界：命令行（cmd/Terminal）、部分未适配系统代理的特定外服游戏客户端、以及底层 UDP 数据包，默认并不会走系统代理，这类流量需交由 TUN 模式接管。",
        "content_p3": "系统代理最大的潜在风险发生在**「非正常退出」**场景下：如果电脑在开启代理的状态下直接强制关机、拔电源、死机重启，或者 Clash 进程在后台被杀毒软件强制终止，操作系统注册表里的 `ProxyServer = 127.0.0.1:7890` 开关并未被正常注销。开机后由于 Clash 尚未启动，7890 端口无人监听，所有浏览器打开网页都会报错“代理服务器拒绝连接”。掌握残留手动清理是每个使用者的必备基本功。",
        "diagram_title": "操作系统注册表代理开关与 Clash 监听机制流程图",
        "diagram_hint": "正常注册/撤销代理与非正常关机残留导致断网的对比",
        "steps": [
            {"num": 1, "title": "开启系统代理并观察系统设置联动", "desc": "在客户端点击开启 System Proxy，打开 Windows 代理设置，观察代理服务器开关已自动开启。"},
            {"num": 2, "title": "确认浏览器流量已顺利经过分流规则", "desc": "访问海外网站观察 Clash 界面中的上传/下载速率是否有流量波动。"},
            {"num": 3, "title": "用完后在软件内规范关闭再退出程序", "desc": "绝不直接强杀进程，先关代理开关，确认 Windows 代理开关恢复关闭后再退出。"}
        ],
        "checklist": [
            {"text": "深刻理解系统代理在本地 127.0.0.1:7890 监听的原理", "tip": "软件退出后该端口即关闭"},
            {"text": "掌握在 Win11/Win10 设置中快速手动关闭代理服务器的路径", "tip": "网络和 Internet -> 代理 -> 使用代理服务器关闭"},
            {"text": "在 macOS 下知道在「系统设置」→「网络」→「详细信息」→「代理」中排查", "tip": "确认 HTTP 与 HTTPS 代理复选框状态"},
            {"text": "日常养成良好习惯：关机或长时间不用前，顺手关闭 System Proxy", "tip": "彻底根除开机断网疑难杂症"}
        ],
        "tip_title": "万能急救指令：一行命令重置 Windows 系统代理残留",
        "tip_content": "如果开机后发现所有网页打不开，且不想在设置里翻找，直接按下 `Win + R` 键，输入以下命令并回车，即可瞬间重置并清除所有代理残留：\n`reg add \"HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings\" /v ProxyEnable /t REG_DWORD /d 0 /f`"
    },
    {
        "slug": "backup-update",
        "path": "/backup-update",
        "h1": "Clash应用更新与备份：怎样迁移并回退",
        "h2s": ["保存当前可用资料", "查目标版本兼容", "验证和回退"],
        "h3s": ["本机完成任务后的检查项", "关键订阅Token脱敏与密码学防护备份方案"],
        "content_p1": "许多用户在使用 Clash 时经常陷入两个极端：要么“几年不升级一次，直到某天节点彻底失效才发现内核已严重过时”；要么“看到小红点提示就立刻盲目点击更新，结果新版本配置不兼容导致全盘崩溃无法上网”。建立科学的**应用更新与备份回滚策略**，是保障生产力长期不间断的压舱石。",
        "content_p2": "更新前的首要原则是：**「备份永远优先于升级」**。在下载新版本覆盖安装前，花 30 秒将当前能正常工作的 profiles 配置文件夹、自定义 merge 脚本进行本地压缩备份。这样即便新版本存在严重 Bug 或内核崩溃，只需下载旧版安装包重新解压，覆盖回备份文件夹，即可在 1 分钟内无缝回滚至上一稳定状态。",
        "content_p3": "在阅读更新日志（Changelog）时，重点关注带有 `BREAKING CHANGES（破坏性变更）` 标签的内容。例如：内核废弃了某个老旧配置字段，或者调整了默认监听端口。更新完成后，切忌立即关闭终端，应依次执行：1. 测速测试；2. 规则分流测试；3. 系统代理启闭测试，三项全过方可投入正式生产使用。",
        "diagram_title": "安全更新四步闭环：备份-安装-验证-紧急回滚",
        "diagram_hint": "建立灾备快照，确保任何故障 1 分钟内回退",
        "steps": [
            {"num": 1, "title": "定位并归档当前工作 profiles 目录", "desc": "将用户数据目录下的 profiles 与 config.yaml 复制到备份文件夹，标注备份日期。"},
            {"num": 2, "title": "阅读 Release 变更日志并覆盖安装新版", "desc": "核对 Release 说明中的核心升级与新协议支持，运行新版安装包覆盖安装。"},
            {"num": 3, "title": "全面验证海外连通性与规则生效状况", "desc": "测试 YouTube 4K、ChatGPT 对话以及国内直连服务，确认一切指标正常。"}
        ],
        "checklist": [
            {"text": "在本地安全位置保留了一份带日期的 profiles 配置快照", "tip": "备份是应对任何未知更新故障的灵丹妙药"},
            {"text": "电脑中保留了上一个能稳定运行的旧版本离线安装包", "tip": "新版出问题可直接降级安装"},
            {"text": "备份文件中包含敏感订阅 Token 时，避免上传至云盘公共共享目录", "tip": "防止订阅流量被未知爬虫盗刷"},
            {"text": "熟练掌握新旧版本的覆盖安装与配置目录替换步骤", "tip": "1分钟内恢复稳定工作网络环境"}
        ],
        "tip_title": "更新后提示「yaml: line XX: did not find expected key」如何修复？",
        "tip_content": "这是典型的旧版 YAML 配置与新版内核规范冲突。解决方法非常简单：不要手动修改报错的行，直接在客户端的「订阅」卡片上右键点击「更新订阅」，机场服务端会立即下发针对新内核规范自动转换后的全新配置文件！"
    },
    {
        "slug": "network-intro",
        "path": "/network-intro",
        "h1": "科学上网应用入门：软件安装后还需要什么",
        "h2s": ["应用负责什么", "配置和服务负责什么", "按平台开始使用"],
        "h3s": ["本机完成任务后的检查项", "小白科学上网极简三步闭环思维模型"],
        "content_p1": "许多刚刚接触科学上网的完全零基础新手，在网上千辛万苦下载并安装好了 Clash 软件，打开后兴冲冲地访问 Google 或 YouTube，却发现依然一片空白无法打开。很多人因此以为“软件坏了”或者“被骗了”。产生这种误解的根本原因，是未曾厘清**「客户端应用」与「机场节点服务」之间的本质从属关系**。",
        "content_p2": "用一个最为生动形象的比喻来解释：\n- **Clash 客户端就像是一辆性能极佳的顶级跑车（工具 / 车辆）：** 它负责掌控方向盘、规划走哪条路线（规则分流）、控制车速与仪表盘（测速监控）。但这辆跑车刚出厂时，油箱里是**完全空置**的；\n- **机场节点服务就像是汽油（能源 / 燃料）：** 机场在海外租用了高速物理服务器和 IPLC 专线，提供了源源不断的数据通道。只有将机场提供的订阅链接（汽油）加注进 Clash（跑车）中，跑车才能轰鸣上路，载着你秒开 4K 视频！",
        "content_p3": "因此，完整走完科学上网闭环极其简单，只需三大步：\n**第一步：** 挑选并下载适配自己设备操作系统的 Clash 客户端（如 Windows 选 Clash Verge Rev，安卓选 CMFA）；\n**第二步：** 选购一家靠谱高速的机场服务（新手推荐直接选用本站精选的 **U1S1** 或 **极连云**），获取专属订阅链接；\n**第三步：** 将订阅链接粘贴进软件一键导入，开启系统代理，从此畅游全球互联网络！",
        "diagram_title": "科学上网新手认知闭环：跑车（软件）与汽油（服务）模型图",
        "diagram_hint": "软件分流与海外节点链路协同闭环",
        "steps": [
            {"num": 1, "title": "下载并安装本地分流软件（跑车）", "desc": "在 Windows、Mac 或手机上安装 Clash 应用，完成基础网络权限授予。"},
            {"num": 2, "title": "选购可靠专线机场服务（汽油）", "desc": "根据自身需求（追剧、AI开发、外贸）选购套餐，获取专属 Clash 订阅链接。"},
            {"num": 3, "title": "注入订阅并开启系统代理（出发）", "desc": "在客户端导入配置，开启 System Proxy，立刻解锁全网 4K 极速体验。"}
        ],
        "checklist": [
            {"text": "已深刻理解「软件是本地分流工具，节点是海外服务网络」的本质区别", "tip": "再也不会误以为光装软件就能翻墙"},
            {"text": "按自己的设备选择了一条正确的平台客户端路线", "tip": "Win/Mac/Android/iOS 教程齐全"},
            {"text": "在购买机场服务时核对了其是否包含 Clash 通用订阅导入能力", "tip": "本站精选的 28 家机场全量支持"},
            {"text": "清楚如何根据日常用途（4K流媒体/ChatGPT/外贸）挑选合适的节点线路", "tip": "参考本站 4 大主力机场深度对比"}
        ],
        "tip_title": "完全零基础新手选型三步极简建议",
        "tip_content": "1. 电脑端直接下载本站推荐的 Clash Verge Rev；2. 机场直接选 U1S1（长期自用稳定）或 极连云（IPLC专线极低延迟）；3. 复制订阅到软件内点击 Save，点击开启 System Proxy，即可在 5 分钟内彻底搞定！"
    }
]

template = '''<template>
  <ArticleLayout :page="pageMeta">
    <!-- Intro Box -->
    <div class="p-4 rounded-custom bg-[#F4ECE1] border border-[#B08758]/50 text-xs text-[#79553D] leading-relaxed">
      <strong>核心任务与验证口径：</strong> 本文针对 <strong>{h1}</strong> 进行全流程图解与实操复盘。正文涵盖具体配置步骤、预期结果判定与异常恢复方案，所有涉及第三方服务的链接均严格添加 <code>rel="sponsored nofollow noopener"</code>，确保合规透明。
    </div>

    <!-- Section 1 -->
    <section id="section-1" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        1. {h2_1}
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        {content_p1}
      </p>
    </section>

    <!-- Section 2 -->
    <section id="section-2" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        2. {h2_2}
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        {content_p2}
      </p>

      <!-- Embedded Diagram Viewer (Animations 2, 3, 7, 10) -->
      <DiagramViewer
        title="{diagram_title}"
        appState="已就绪 - 规则配置正常"
        calloutHint="{diagram_hint}"
        :steps="diagramSteps"
      />
    </section>

    <!-- Section 3 -->
    <section id="section-3" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        3. {h2_3}
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        {content_p3}
      </p>

      <TipNote title="{tip_title}">
        <p>{tip_content}</p>
      </TipNote>
    </section>

    <!-- Section 4: Checklist (Animation 8) -->
    <section id="section-4" class="space-y-4">
      <h3 class="text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        本机完成任务后的检查项
      </h3>
      <Checklist
        title="{h1} - 实施自检清单"
        :items="checklistItems"
      />
    </section>

    <!-- Special FAQ section on FAQ page -->
    {extra_faq_block}
  </ArticleLayout>
</template>

<script setup lang="ts">
import { PAGES } from '~/data/pages'

const pageMeta = PAGES.find(p => p.path === '{path}')!

useHead({{
  title: pageMeta.title,
  meta: [
    {{ name: 'description', content: pageMeta.description }},
    {{ name: 'keywords', content: pageMeta.keywords.join(', ') }}
  ],
  link: [
    {{ rel: 'canonical', href: `https://clash-app.blog${{pageMeta.path}}` }}
  ]
}})

const diagramSteps = {steps_json}
const checklistItems = {checklist_json}
</script>
'''

faq_extra = '''
    <section class="space-y-4 pt-6 border-t border-[#E4D8C7]">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30]">
        全量高频应用解答（所有条目已默认全部展开）：
      </h2>
      <FaqList />
    </section>
'''

import json

for item in pages_data:
    slug = item["slug"]
    filepath = f"pages/{slug}.vue"
    
    h2_1 = item["h2s"][0] if len(item["h2s"]) > 0 else "核心原理解析"
    h2_2 = item["h2s"][1] if len(item["h2s"]) > 1 else "具体实操步骤"
    h2_3 = item["h2s"][2] if len(item["h2s"]) > 2 else "验证与异常恢复"
    
    extra_faq = faq_extra if slug == "faq" else ""
    
    code = template.format(
        slug=slug,
        path=item["path"],
        h1=item["h1"],
        h2_1=h2_1,
        h2_2=h2_2,
        h2_3=h2_3,
        content_p1=item["content_p1"],
        content_p2=item["content_p2"],
        content_p3=item["content_p3"],
        diagram_title=item["diagram_title"],
        diagram_hint=item["diagram_hint"],
        tip_title=item["tip_title"],
        tip_content=item["tip_content"],
        steps_json=json.dumps(item["steps"], ensure_ascii=False, indent=2),
        checklist_json=json.dumps(item["checklist"], ensure_ascii=False, indent=2),
        extra_faq_block=extra_faq
    )
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(code)
    print(f"Generated {filepath}")

print("All 21 pages generated successfully!")
