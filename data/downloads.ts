export interface DownloadItem {
  downloadId: string
  project: string
  version: string
  platform: 'Windows' | 'macOS' | 'Android' | 'iOS' | 'Linux' | '路由器'
  arch: string
  channel: 'Release' | 'App Store' | 'Mirror'
  officialUrl: string
  mirrorUrl?: string
  sourceUrl: string
  verifiedAt: string
  verificationStatus: '官方原版校验通过' | '镜像已加速' | 'AppStore正版'
  fileName: string
  fileSize?: string
  guideRoute: string
  description?: string
}

export const DOWNLOADS: DownloadItem[] = [
  // --- Windows 平台 ---
  {
    downloadId: 'verge-win-x64',
    project: 'Clash Verge Rev',
    version: 'v2.5.5',
    platform: 'Windows',
    arch: 'x64 (Intel/AMD)',
    channel: 'Release',
    officialUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_x64-setup.exe',
    mirrorUrl: 'https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_x64-setup.exe',
    sourceUrl: 'https://github.com/clash-verge-rev/clash-verge-rev',
    verifiedAt: '2026-11-23',
    verificationStatus: '官方原版校验通过',
    fileName: 'Clash.Verge_2.5.5_x64-setup.exe',
    fileSize: '41.8 MB',
    guideRoute: '/windows',
    description: 'Windows 主流首选，内置 Mihomo Meta 内核，全面兼容 VLESS/Reality'
  },
  {
    downloadId: 'verge-win-arm64',
    project: 'Clash Verge Rev',
    version: 'v2.5.5',
    platform: 'Windows',
    arch: 'ARM64 (骁龙/Surface)',
    channel: 'Release',
    officialUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_arm64-setup.exe',
    mirrorUrl: 'https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_arm64-setup.exe',
    sourceUrl: 'https://github.com/clash-verge-rev/clash-verge-rev',
    verifiedAt: '2026-11-23',
    verificationStatus: '官方原版校验通过',
    fileName: 'Clash.Verge_2.5.5_arm64-setup.exe',
    fileSize: '39.6 MB',
    guideRoute: '/windows',
    description: '适用于高通骁龙 X Elite / Surface Pro 等 ARM 架构 Win 掌机与轻薄本'
  },
  {
    downloadId: 'flclash-win-x64',
    project: 'FlClash',
    version: 'v0.8.98',
    platform: 'Windows',
    arch: 'x64 (Intel/AMD)',
    channel: 'Release',
    officialUrl: 'https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-windows-amd64-setup.exe',
    mirrorUrl: 'https://ghfast.top/https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-windows-amd64-setup.exe',
    sourceUrl: 'https://github.com/chen08209/FlClash',
    verifiedAt: '2026-11-23',
    verificationStatus: '官方原版校验通过',
    fileName: 'FlClash-0.8.98-windows-amd64-setup.exe',
    fileSize: '36.5 MB',
    guideRoute: '/windows',
    description: '基于 Flutter 构建的极简跨平台 Clash，界面美观占用极低'
  },
  {
    downloadId: 'v2rayn-win-x64',
    project: 'v2rayN',
    version: 'v7.24.9',
    platform: 'Windows',
    arch: 'x64 免安装绿色版',
    channel: 'Release',
    officialUrl: 'https://github.com/2dust/v2rayN/releases/download/7.24.9/v2rayN-windows-64.zip',
    mirrorUrl: 'https://ghfast.top/https://github.com/2dust/v2rayN/releases/download/7.24.9/v2rayN-windows-64.zip',
    sourceUrl: 'https://github.com/2dust/v2rayN',
    verifiedAt: '2026-11-23',
    verificationStatus: '官方原版校验通过',
    fileName: 'v2rayN-windows-64.zip',
    fileSize: '68.2 MB',
    guideRoute: '/windows',
    description: '经典通用 Windows 科学上网客户端，支持 Xray、Sing-box、Clash 核心'
  },

  // --- macOS 平台 ---
  {
    downloadId: 'verge-mac-apple',
    project: 'Clash Verge Rev',
    version: 'v2.5.5',
    platform: 'macOS',
    arch: 'Apple Silicon (M1~M4)',
    channel: 'Release',
    officialUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_aarch64.dmg',
    mirrorUrl: 'https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_aarch64.dmg',
    sourceUrl: 'https://github.com/clash-verge-rev/clash-verge-rev',
    verifiedAt: '2026-11-23',
    verificationStatus: '官方原版校验通过',
    fileName: 'Clash.Verge_2.5.5_aarch64.dmg',
    fileSize: '43.2 MB',
    guideRoute: '/mac',
    description: '针对苹果 M 系列芯片原生编译，支持原生 TUN 虚拟网卡与系统深色模式'
  },
  {
    downloadId: 'verge-mac-intel',
    project: 'Clash Verge Rev',
    version: 'v2.5.5',
    platform: 'macOS',
    arch: 'Intel x64',
    channel: 'Release',
    officialUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_x64.dmg',
    mirrorUrl: 'https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_x64.dmg',
    sourceUrl: 'https://github.com/clash-verge-rev/clash-verge-rev',
    verifiedAt: '2026-11-23',
    verificationStatus: '官方原版校验通过',
    fileName: 'Clash.Verge_2.5.5_x64.dmg',
    fileSize: '45.1 MB',
    guideRoute: '/mac',
    description: '适用于 2020 年前 Intel 处理器的苹果 Mac 电脑'
  },
  {
    downloadId: 'flclash-mac-apple',
    project: 'FlClash',
    version: 'v0.8.98',
    platform: 'macOS',
    arch: 'Apple Silicon (M1~M4)',
    channel: 'Release',
    officialUrl: 'https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-macos-arm64.dmg',
    mirrorUrl: 'https://ghfast.top/https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-macos-arm64.dmg',
    sourceUrl: 'https://github.com/chen08209/FlClash',
    verifiedAt: '2026-11-23',
    verificationStatus: '官方原版校验通过',
    fileName: 'FlClash-0.8.98-macos-arm64.dmg',
    fileSize: '38.0 MB',
    guideRoute: '/mac',
    description: '轻量化 Mac 客户端备用，Material Design 风格'
  },

  // --- Android 平台 ---
  {
    downloadId: 'cmfa-android-arm64',
    project: 'Clash Meta for Android',
    version: 'v2.11.34',
    platform: 'Android',
    arch: 'arm64-v8a (主流手机)',
    channel: 'Release',
    officialUrl: 'https://github.com/MetaCubeX/ClashMetaForAndroid/releases/download/v2.11.34/cmfa-2.11.34-meta-arm64-v8a-release.apk',
    mirrorUrl: 'https://ghfast.top/https://github.com/MetaCubeX/ClashMetaForAndroid/releases/download/v2.11.34/cmfa-2.11.34-meta-arm64-v8a-release.apk',
    sourceUrl: 'https://github.com/MetaCubeX/ClashMetaForAndroid',
    verifiedAt: '2026-11-23',
    verificationStatus: '官方原版校验通过',
    fileName: 'cmfa-2.11.34-meta-arm64-v8a-release.apk',
    fileSize: '32.1 MB',
    guideRoute: '/android',
    description: '安卓手机首推，支持分应用代理、绕过局域网与后台常驻'
  },
  {
    downloadId: 'cmfa-android-universal',
    project: 'Clash Meta for Android',
    version: 'v2.11.34',
    platform: 'Android',
    arch: '通用版 Universal',
    channel: 'Release',
    officialUrl: 'https://github.com/MetaCubeX/ClashMetaForAndroid/releases/download/v2.11.34/cmfa-2.11.34-meta-universal-release.apk',
    mirrorUrl: 'https://ghfast.top/https://github.com/MetaCubeX/ClashMetaForAndroid/releases/download/v2.11.34/cmfa-2.11.34-meta-universal-release.apk',
    sourceUrl: 'https://github.com/MetaCubeX/ClashMetaForAndroid',
    verifiedAt: '2026-11-23',
    verificationStatus: '官方原版校验通过',
    fileName: 'cmfa-2.11.34-meta-universal-release.apk',
    fileSize: '41.2 MB',
    guideRoute: '/android',
    description: '适用于平板、旧款 32 位手机或车机等不同硬件设备'
  },
  {
    downloadId: 'flclash-android-arm64',
    project: 'FlClash',
    version: 'v0.8.98',
    platform: 'Android',
    arch: 'arm64-v8a .apk',
    channel: 'Release',
    officialUrl: 'https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-android-arm64-v8a.apk',
    mirrorUrl: 'https://ghfast.top/https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-android-arm64-v8a.apk',
    sourceUrl: 'https://github.com/chen08209/FlClash',
    verifiedAt: '2026-11-23',
    verificationStatus: '官方原版校验通过',
    fileName: 'FlClash-0.8.98-android-arm64-v8a.apk',
    fileSize: '29.4 MB',
    guideRoute: '/android',
    description: '现代化 UI 设计，支持自适应暗色与规则智能调度'
  },
  {
    downloadId: 'v2rayng-android',
    project: 'v2rayNG',
    version: 'v2.2.6',
    platform: 'Android',
    arch: 'arm64-v8a .apk',
    channel: 'Release',
    officialUrl: 'https://github.com/2dust/v2rayNG/releases/download/2.2.6/v2rayNG_2.2.6_arm64-v8a.apk',
    mirrorUrl: 'https://ghfast.top/https://github.com/2dust/v2rayNG/releases/download/2.2.6/v2rayNG_2.2.6_arm64-v8a.apk',
    sourceUrl: 'https://github.com/2dust/v2rayNG',
    verifiedAt: '2026-11-23',
    verificationStatus: '官方原版校验通过',
    fileName: 'v2rayNG_2.2.6_arm64-v8a.apk',
    fileSize: '51.8 MB',
    guideRoute: '/android',
    description: '安卓经典代理客户端，备用首选，轻快稳定'
  },

  // --- iOS 平台 ---
  {
    downloadId: 'shadowrocket-ios',
    project: 'Shadowrocket (小火箭)',
    version: '最新官方版',
    platform: 'iOS',
    arch: 'iOS 12.0+ (iPhone/iPad)',
    channel: 'App Store',
    officialUrl: 'https://apps.apple.com/us/app/id932747118',
    sourceUrl: 'https://apps.apple.com/us/app/id932747118',
    verifiedAt: '2026-11-23',
    verificationStatus: 'AppStore正版',
    fileName: 'App Store 官方下载（需美区等海外 Apple ID）',
    fileSize: '35.4 MB',
    guideRoute: '/iphone',
    description: '苹果生态最普及的梯子软件，支持 Clash YAML 订阅与按需规则'
  },
  {
    downloadId: 'stash-ios',
    project: 'Stash (Clash for iOS)',
    version: '最新官方版',
    platform: 'iOS',
    arch: 'iOS 14.0+ (iPhone/iPad)',
    channel: 'App Store',
    officialUrl: 'https://apps.apple.com/us/app/id1596063349',
    sourceUrl: 'https://apps.apple.com/us/app/id1596063349',
    verifiedAt: '2026-11-23',
    verificationStatus: 'AppStore正版',
    fileName: 'App Store 官方下载（需海外 Apple ID）',
    fileSize: '42.0 MB',
    guideRoute: '/iphone',
    description: 'iOS 端最原生的 Clash 兼容体验，支持可视化策略组与按需连接'
  },
  {
    downloadId: 'quantumult-x-ios',
    project: 'Quantumult X (圈叉)',
    version: '最新官方版',
    platform: 'iOS',
    arch: 'iOS 15.0+ (iPhone/iPad)',
    channel: 'App Store',
    officialUrl: 'https://apps.apple.com/us/app/id1443988620',
    sourceUrl: 'https://apps.apple.com/us/app/id1443988620',
    verifiedAt: '2026-11-23',
    verificationStatus: 'AppStore正版',
    fileName: 'App Store 官方下载（需海外 Apple ID）',
    fileSize: '38.6 MB',
    guideRoute: '/iphone',
    description: '高阶重度用户首选，网络重写与高级分流策略'
  },

  // --- Linux 平台 ---
  {
    downloadId: 'verge-linux-deb-x64',
    project: 'Clash Verge Rev',
    version: 'v2.5.5',
    platform: 'Linux',
    arch: 'x86_64 (.deb)',
    channel: 'Release',
    officialUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_amd64.deb',
    mirrorUrl: 'https://ghfast.top/https://github.com/clash-verge-rev/clash-verge-rev/releases/download/v2.5.5/Clash.Verge_2.5.5_amd64.deb',
    sourceUrl: 'https://github.com/clash-verge-rev/clash-verge-rev',
    verifiedAt: '2026-11-23',
    verificationStatus: '官方原版校验通过',
    fileName: 'Clash.Verge_2.5.5_amd64.deb',
    fileSize: '40.2 MB',
    guideRoute: '/linux',
    description: '适用于 Ubuntu / Debian / Deepin / Mint 等桌面 Linux 发行版'
  },
  {
    downloadId: 'flclash-linux-deb',
    project: 'FlClash',
    version: 'v0.8.98',
    platform: 'Linux',
    arch: 'x86_64 (.deb)',
    channel: 'Release',
    officialUrl: 'https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-linux-amd64.deb',
    mirrorUrl: 'https://ghfast.top/https://github.com/chen08209/FlClash/releases/download/v0.8.98/FlClash-0.8.98-linux-amd64.deb',
    sourceUrl: 'https://github.com/chen08209/FlClash',
    verifiedAt: '2026-11-23',
    verificationStatus: '官方原版校验通过',
    fileName: 'FlClash-0.8.98-linux-amd64.deb',
    fileSize: '37.1 MB',
    guideRoute: '/linux',
    description: '跨平台开箱即用，GUI 美观易配'
  },

  // --- 路由器 / OpenWrt ---
  {
    downloadId: 'openclash-release',
    project: 'OpenClash',
    version: 'v0.47.156',
    platform: '路由器',
    arch: 'OpenWrt LuCI (.apk/.ipk)',
    channel: 'Release',
    officialUrl: 'https://github.com/vernesong/OpenClash/releases/download/v0.47.156/luci-app-openclash-0.47.156.apk',
    mirrorUrl: 'https://ghfast.top/https://github.com/vernesong/OpenClash/releases/download/v0.47.156/luci-app-openclash-0.47.156.apk',
    sourceUrl: 'https://github.com/vernesong/OpenClash/releases/latest',
    verifiedAt: '2026-11-23',
    verificationStatus: '官方原版校验通过',
    fileName: 'luci-app-openclash-0.47.156.apk',
    fileSize: '4.8 MB',
    guideRoute: '/download',
    description: '软路由/硬路由固件插件，实现家庭全屋设备无感科学上网'
  }
]
