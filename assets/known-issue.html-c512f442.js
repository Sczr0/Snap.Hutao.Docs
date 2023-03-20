import{_ as c,X as a,Y as u,Z as l,$ as e,a0 as o,a2 as n,a1 as i,C as s}from"./framework-3fad1c41.js";const r={},_=l("h1",{id:"已知问题",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#已知问题","aria-hidden":"true"},"#"),e(" 已知问题")],-1),h=l("p",null,[e("该文档包含由"),l("strong",null,"程序错误"),e("造成的问题")],-1),p=l("h2",{id:"_1-微软商店下载应用程序",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_1-微软商店下载应用程序","aria-hidden":"true"},"#"),e(" #1 微软商店下载应用程序")],-1),m=l("blockquote",null,[l("p",null,"该问题来源并非胡桃工具箱，属于外部问题 该问题通常仅出现在东亚地区的网络环境下")],-1),f=l("li",null,"发现于 2023/02/07",-1),b=l("li",null,[e("无法从微软商店下载的原因在于微软在东亚的授权服务器 "),l("code",null,"licensing.mp.microsoft.com"),e(" 掉线。当你在商店上下载一个新应用时，这实际上是一个授权/购买的过程。 当授权服务出现问题时，自然不会再进入到下一步下载环节，这就导致了用户无法安装 "),l("ul",null,[l("li",null,[e("目前仅发现于微软商店新加坡授权服务器 "),l("code",null,"52.137.108.250"),e(" 出现了问题，所以你可以使用代理，切换到其它授权服务器，来实现下载。")])])],-1),g=l("li",null,"授权服务器问题 DGP-Studio已反馈给微软，等待解决。",-1),k=l("strong",null,"方法1",-1),w={href:"https://www.dogfight360.com/blog/475/",target:"_blank",rel:"noopener noreferrer"},x=i("<ul><li>在该工具箱内选择 <code>Microsoft Store - 微软商店</code> 中的 <code>微软授权验证</code></li><li>点击<code>检测延迟</code></li><li>选择一个对你而言延迟最低的服务器，选中后点击<code>应用选中</code></li><li>此时重启微软商店后，你应当可以下载应用了</li><li>下载完成后，建议点击<code>清除当前</code>以删除对 <code>Hosts</code> 文件的修改</li></ul>",1),E=i("<li>如果你懒得下载，可以尝试将 <code>licensing.mp.microsoft.com</code> 通过修改 <code>Hosts</code>文件解析到以下 IP 地址之一 （收集于 UsbEAm Hosts Editor） <ul><li><code>124.108.22.138</code></li><li><code>92.38.149.175</code></li><li><code>141.147.180.87</code></li><li><code>103.151.179.4</code></li></ul></li>",1),H=l("li",null,[l("strong",null,"方法2"),e("： "),l("ul",null,[l("li",null,"将系统的DNS服务器设置为4.2.2.1和4.2.2.2（完事后记得改回原本的设置）")])],-1),W=l("strong",null,"方法3",-1),S=l("li",null,"使用北美地区的网络代理",-1),q=l("h2",{id:"_2-服务器切换导致31-4302报错",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_2-服务器切换导致31-4302报错","aria-hidden":"true"},"#"),e(" #2 服务器切换导致31-4302报错")],-1),I=l("ul",null,[l("li",null,[e("使用高级启动器中的服务器切换功能时，可能会出现"),l("code",null,"31-4302"),e("相关错误")]),l("li",null,[e("目前的临时解决方案： "),l("ul",null,[l("li",null,"将原神截图目录中的服务器切换缓存目录删除")])])],-1),L=l("h2",{id:"_3-任务栏右键菜单中没有快速启动游戏的入口",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_3-任务栏右键菜单中没有快速启动游戏的入口","aria-hidden":"true"},"#"),e(" #3 任务栏右键菜单中没有快速启动游戏的入口")],-1),N=i('<ul><li>胡桃使用 Windows 提供的 <code>JumpPath</code> 接口来提供快速启动游戏菜单 <ul><li>该接口需要用户在<code>系统设置 -&gt; 个性化 -&gt; 开始</code> 中启用<code>在“开始”菜单或任务栏的跳转列表中以及资源管理器的“快速使用”中显示最近打开的项</code> （该设置系统默认开启）</li></ul></li><li>在下一版本，我们会使用 <code>JumpTask</code> 接口来代替 <code>JumpPath</code> 接口，用户将不再需要上述设置选项开启</li></ul><h2 id="_4-无法使用管理员模式启动胡桃工具箱" tabindex="-1"><a class="header-anchor" href="#_4-无法使用管理员模式启动胡桃工具箱" aria-hidden="true">#</a> #4 无法使用管理员模式启动胡桃工具箱</h2><blockquote><p>该问题来源并非胡桃工具箱，属于外部问题 该问题仅存在于 Windows 10 低于22H2的版本中</p></blockquote><ul><li>当用户系统版本低于 <code>Windows Build 19045</code>（即 Windows 10 22H2 版本）时，可能无法通过管理员模式启动胡桃工具箱 <ul><li>该问题属于 Windows 内核级别问题，难以判断具体来源，故建议用户升级至 Windows 10 最新版本</li></ul></li></ul><h2 id="_5-服务器转换卡死并持续写入的问题" tabindex="-1"><a class="header-anchor" href="#_5-服务器转换卡死并持续写入的问题" aria-hidden="true">#</a> #5 服务器转换卡死并持续写入的问题</h2>',5),P={href:"https://github.com/DGP-Studio/Snap.Hutao/issues/566",target:"_blank",rel:"noopener noreferrer"};function v(B,C){const d=s("ExternalLinkIcon"),t=s("RouterLink");return a(),u("div",null,[_,h,p,m,l("ul",null,[f,b,g,l("li",null,[e("临时的解决方案： "),l("ul",null,[l("li",null,[k,e("： "),l("ul",null,[l("li",null,[e("使用"),l("a",w,[e("UsbEAm Hosts Editor"),o(d)]),x]),E])]),H,l("li",null,[W,e("： "),l("ul",null,[S,l("li",null,[e("如果使用加速器或网络代理，你需要"),o(t,{to:"/en/advanced/exceptions.html#_502-bad-gateway"},{default:n(()=>[e("解除微软商店的 Windows App Container Loopback 限制")]),_:1})])])])])])]),q,l("blockquote",null,[l("p",null,[e("该问题已于 "),o(t,{to:"/statements/update-log.html#1-4-15"},{default:n(()=>[e("1.4.15")]),_:1}),e(" 版本修复，请及时更新")])]),I,L,l("blockquote",null,[l("p",null,[e("该问题已于 "),o(t,{to:"/statements/update-log.html#1-5-1"},{default:n(()=>[e("1.5.1")]),_:1}),e(" 版本修复，请及时更新")])]),N,l("p",null,[e("相关 Issue："),l("a",P,[e("issues/566"),o(d)])]),l("p",null,[e("该问题已在"),o(t,{to:"/statements/update-log.html#1-5-4"},{default:n(()=>[e("1.5.4")]),_:1}),e(" 版本修复，请及时更新")])])}const A=c(r,[["render",v],["__file","known-issue.html.vue"]]);export{A as default};