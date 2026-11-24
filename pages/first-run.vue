<template>
  <ArticleLayout :page="pageMeta">
    <div class="p-4 rounded-custom bg-[#F4ECE1] border border-[#B08758]/50 text-xs text-[#79553D] leading-relaxed">
      <strong>标准教学口径：</strong> 本文以目前主流的桌面端 <strong>Clash Verge Rev (v1.7.7)</strong> 为范本，演示从刚解压安装、导入机场订阅、选定节点、开启系统代理到最终用完后干净退出的完整主流程。平台专有权限差异请参考侧栏各平台指南。
    </div>

    <!-- Section 1: 完成安装准备 -->
    <section id="section-1" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        1. 完成安装准备：环境与订阅就绪
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        启动 Clash 前，请务必核对以下两项前置条件：
      </p>
      <div class="space-y-2 text-xs">
        <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] flex items-start gap-2">
          <span class="font-bold text-[#79553D] shrink-0">① 系统时钟校准：</span>
          <span class="text-[#493A30]">Clash 连接节点与更新订阅时依赖强加密 TLS 握手。如果本地设备时钟存在较大偏差或时区不匹配，可能导致节点测速报错或提示证书尚未生效/过期。进入系统日期与时间设置，开启自动授时并点击「立即同步」。</span>
        </div>
        <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] flex items-start gap-2">
          <span class="font-bold text-[#79553D] shrink-0">② 获取机场订阅 URL：</span>
          <span class="text-[#493A30]">登录机场用户后台（推荐使用本站精选的 <strong>U1S1</strong> 或 <strong>极连云</strong>），找到「一键导入」或「复制 Clash 订阅链接」，将类似 <code class="bg-[#F2EAE1] px-1 rounded">https://.../api/v1/client/subscribe?token=...</code> 的链接复制到剪贴板。</span>
        </div>
      </div>
    </section>

    <!-- Section 2: 导入并启用 -->
    <section id="section-2" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        2. 导入并启用：加载配置与开启系统代理
      </h2>
      <p class="text-xs sm:text-sm text-[#493A30] leading-relaxed">
        打开 Clash Verge Rev 主界面，按照以下标准动作顺序操作：
      </p>

      <DiagramViewer
        title="Clash 首次运行与连通四步图解演示"
        appState="Profiles 页面 - 订阅已激活"
        calloutHint="点击「订阅配置」并将新配置设为默认勾选"
        :steps="[
          { num: 1, title: '粘贴并保存订阅', desc: '进入左侧「Profiles / 订阅」，在上方输入框粘贴复制的订阅链接，点击右侧「Save」按钮，等待下载完成出现绿色提示。' },
          { num: 2, title: '选中激活当前配置文件', desc: '在下载好的配置卡片上单击鼠标左键，卡片边框高亮变深，代表该规则文件已被作为当前主运行配置。' },
          { num: 3, title: '在代理组中测速并选择节点', desc: '切换至左侧「Proxies / 代理」，点击右上角闪电测速图标，展开「PROXIES」策略组选择一个延迟较低的节点（如香港或日本）。' },
          { num: 4, title: '开启系统代理（System Proxy）', desc: '在软件左下角或侧边栏点击开启「System Proxy」开关，此时电脑的网络流量已由 Clash 接管分流。' }
        ]"
      />

      <!-- 三层技术架构图解说明 -->
      <div class="p-3 rounded-custom bg-[#FFFCF5] border border-[#E4D8C7] space-y-2 text-xs">
        <h4 class="font-bold text-[#79553D]">💡 运行架构：GUI 界面、配置文件与 Mihomo 内核的关系</h4>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-[#493A30]">
          <div class="p-2 rounded bg-[#F9F5EC] border border-[#E4D8C7] space-y-0.5">
            <strong class="text-[#79553D]">① 前端图形界面 (GUI)</strong>
            <p>Clash Verge Rev 负责可视化渲染、托盘常驻与订阅文件拉取，本身不直接处理底层网络转发。</p>
          </div>
          <div class="p-2 rounded bg-[#F9F5EC] border border-[#E4D8C7] space-y-0.5">
            <strong class="text-[#79553D]">② 本地通信总线 (REST API)</strong>
            <p>前端与内核通过本地端口 <code>127.0.0.1:9097</code> 交互。开关代理或切换节点无需重启进程。</p>
          </div>
          <div class="p-2 rounded bg-[#F9F5EC] border border-[#E4D8C7] space-y-0.5">
            <strong class="text-[#79553D]">③ 运行内核 (Mihomo Core)</strong>
            <p>后台守护进程。读取 YAML 解析出规则、DNS 与出口节点，接管 TUN 网卡与海外 TLS 流量。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: 确认结果与关闭 -->
    <section id="section-3" class="space-y-4">
      <h2 class="text-xl sm:text-2xl font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        3. 确认结果与关闭：验证分流与干净退出
      </h2>
      <div class="text-xs sm:text-sm text-[#493A30] leading-relaxed space-y-3">
        <p>
          开启代理后，不要直接以为万事大吉，建议进行两项验证：
        </p>
        <ul class="list-disc pl-5 space-y-1 text-[#79553D]">
          <li><strong>海外访问测试：</strong> 打开浏览器无痕窗口访问 YouTube 或 Google，确认能瞬间打开且节点 IP 属地符合预期。</li>
          <li><strong>国内直连测试：</strong> 访问百度或淘宝，确认依然是国内真实 IP，不走代理通道，验证分流规则（Rule）生效。</li>
        </ul>

        <TipNote title="核心警示：如何正确退出 Clash 客户端？">
          <p>
            当不需要翻墙时，<strong>绝不能直接强制在任务管理器中杀掉 Clash 进程或关机</strong>。正确步骤是：
          </p>
          <ol class="list-decimal pl-4 space-y-1 pt-1 font-medium">
            <li>先在 Clash 界面中将「System Proxy」开关手动关闭；</li>
            <li>若开启了「TUN 模式」，将其一并关闭；</li>
            <li>右键任务栏托盘图标，选择「退出 / Quit」。</li>
          </ol>
          <p class="text-[11px] text-[#79553D] pt-1">
            这样客户端会自动向操作系统注销代理端口，避免留下代理死锁导致国内网站断网。
          </p>
        </TipNote>
      </div>
    </section>

    <!-- Section 4: 检查项 -->
    <section id="section-4">
      <h3 class="text-lg font-bold text-[#493A30] border-b border-[#E4D8C7] pb-2">
        本机完成任务后的检查项
      </h3>
      <Checklist
        title="首次运行连通检查清单"
        :items="[
          { text: 'Clash 界面右下角显示代理端口 7890 处于正常监听状态', tip: '若报错 Port in use 说明被其他软件占用' },
          { text: '浏览器访问 YouTube 能正常加载高码率 4K 视频', tip: '优质 IPLC 专线可跑满千兆带宽' },
          { text: '访问 国内微信 / 钉钉 能正常发送消息无延迟卡顿', tip: '分流规则为 Rule 确保国内直连' },
          { text: '测试关闭 System Proxy 后电脑恢复原始上网网络正常', tip: '确认系统代理撤销成功' }
        ]"
      />
    </section>
  </ArticleLayout>
</template>

<script setup lang="ts">
import { PAGES } from '~/data/pages'

const pageMeta = PAGES.find(p => p.path === '/first-run')!

useHead({
  title: pageMeta.title,
  meta: [
    { name: 'description', content: pageMeta.description },
    { name: 'keywords', content: pageMeta.keywords.join(', ') }
  ],
  link: [
    { rel: 'canonical', href: `https://clash-app.blog${pageMeta.path}` }
  ]
})
</script>
