import{_ as l,r as i,o as n,c as r,a as e,b as t,d as o,w as c,e as s}from"./app-DjBtaFYX.js";const h={},p=e("h1",{id:"实时便笺",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#实时便笺"},[e("span",null,"实时便笺")])],-1),m={class:"hint-container info"},d=e("p",{class:"hint-container-title"},"相关信息",-1),u=s('<p><img src="https://img.alicdn.com/imgextra/i4/1797064093/O1CN01YUyKil1g6e0x3SpKX_!!1797064093.png_.webp" alt="live-data-tracking" loading="lazy"></p><h2 id="添加角色" tabindex="-1"><a class="header-anchor" href="#添加角色"><span>添加角色</span></a></h2><ul><li>点击 “添加角色” 按钮</li><li>在弹出的 “添加角色” 浮窗中，找到你要添加的游戏角色 UID，并单击其右侧的加号按钮</li><li>此时您添加的游戏角色即可显示在实时便笺页面中 <ul><li>实时便笺是间隔固定时间自动刷新的，你可以点击窗口右上角的 “通知设置” 来设置查询的间隔时间</li></ul></li><li>如您需要立即刷新以获取实时的最新数值，请单击 “立即刷新” 按钮</li><li>如果在数据刷新时出现 <code>1034</code> 错误则意味着触发了米游社反机器人风控，你可以通过在胡桃设置中配置无感验证来解决该问题</li></ul><h2 id="验证用户与角色" tabindex="-1"><a class="header-anchor" href="#验证用户与角色"><span>验证用户与角色</span></a></h2><p>若你使用的是米游社帐号，则你的帐号非常容易受到风控机制的影响而触发验证码。在触发风控的情况下，实时便笺数据将无法刷新。 你可以点击实时便笺页面左上角的 “验证当前用户与角色” 按钮。点击后，胡桃会弹出验证窗口，在你完成验证后即可对受到验证码风控的帐号刷新数据。</p><h2 id="全局通知设置" tabindex="-1"><a class="header-anchor" href="#全局通知设置"><span>全局通知设置</span></a></h2><ul><li>在窗口右上角点击 “通知设置” 可以修改实时便笺的全局设置，包括： <ul><li>启用/禁用数据自动刷新</li><li>数据自动刷新间隔时间</li><li>通知免打扰</li><li>高优先度通知 <ul><li>这将避免胡桃工具箱的通知被自动收入操作中心</li><li>请注意，开启此设置可能会让您在日常使用电脑期间受到打扰</li></ul></li><li>自定义数据转发 Webhook <ul><li>胡桃客户端允许用户将获取到的实时便笺数据转发给其它程序以减少账号对米哈游 API 的请求</li><li>将第三方程序的 <code>HTTP API</code> 接口填写在 <code>实时便笺 Webhook Url</code> 设置中，胡桃将以 <code>POST</code> 的方式将原始数据转发至该接口</li></ul></li></ul></li></ul><h2 id="账号独立设置" tabindex="-1"><a class="header-anchor" href="#账号独立设置"><span>账号独立设置</span></a></h2><ul><li>胡桃工具箱的实时便笺功能允许用户对每一个被监控的账号给予不同的设置</li><li>将鼠标停留在<strong>需要被设置的</strong>角色实时便笺的窗体上</li><li>点击其窗体右上角出现的设置图案按钮，即可修改如下参数 <ul><li>原粹树脂提醒阈值</li><li>洞天宝钱提醒阈值</li><li>启用参量质变仪提醒</li><li>启用每日委托上限提醒</li><li>启用探索派遣完成提醒</li></ul></li><li>点击 “保存”，即可保存您当前所设置的通知选项</li></ul><h2 id="删除角色" tabindex="-1"><a class="header-anchor" href="#删除角色"><span>删除角色</span></a></h2><ul><li>将鼠标停留在需要被设置的角色实时便笺的窗体上</li><li>点击其窗体右上角出现的移除标志按钮，即可移除该角色对应的实时便笺</li></ul><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><h3 id="为什么设置实时便笺的自动刷新会提示-修改计划任务失败" tabindex="-1"><a class="header-anchor" href="#为什么设置实时便笺的自动刷新会提示-修改计划任务失败"><span>为什么设置实时便笺的自动刷新会提示 “修改计划任务失败”</span></a></h3><p>实时便笺的自动刷新依赖于任务计划。为了避免可能的权限问题，胡桃工具箱会强制在非管理员模式设置计划任务。</p><p>如果你在旧版本开启了自动刷新，那你可以通过手动在任务计划程序中删除旧的任务计划来解决问题。任务计划的名称为 <code>SnapHutaoDailyNoteRefreshTask</code>。</p><p>如果你没有在旧版本开启自动刷新，那么此问题是由于你目前使用的 Windows 用户账户权限不足导致的。如果你当前的用户账户是管理员账户，那你只能通过重装系统来解决此问题。</p>',16);function g(f,_){const a=i("RouteLink");return n(),r("div",null,[p,e("div",m,[d,e("p",null,[t("该功能需要你在胡桃工具箱中登录米游社帐号，登录方法可见"),o(a,{to:"/zh/features/mhy-account-switch.html"},{default:c(()=>[t("米游社多账号切换")]),_:1}),t("文档")])]),u])}const k=l(h,[["render",g],["__file","real-time-notes.html.vue"]]),x=JSON.parse('{"path":"/zh/features/real-time-notes.html","title":"实时便笺","lang":"zh-CN","frontmatter":{"headerDepth":0,"category":["功能","教程"],"tag":["实时便笺","派遣","树脂"],"order":7,"comment":false,"description":"实时便笺 相关信息 该功能需要你在胡桃工具箱中登录米游社帐号，登录方法可见文档 live-data-tracking 添加角色 点击 “添加角色” 按钮 在弹出的 “添加角色” 浮窗中，找到你要添加的游戏角色 UID，并单击其右侧的加号按钮 此时您添加的游戏角色即可显示在实时便笺页面中 实时便笺是间隔固定时间自动刷新的，你可以点击窗口右上角的 “通知设...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://hut.ao/en/features/real-time-notes.html"}],["link",{"rel":"alternate","hreflang":"id-id","href":"https://hut.ao/id/features/real-time-notes.html"}],["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://hut.ao/ru/features/real-time-notes.html"}],["meta",{"property":"og:url","content":"https://hut.ao/zh/features/real-time-notes.html"}],["meta",{"property":"og:site_name","content":"胡桃工具箱"}],["meta",{"property":"og:title","content":"实时便笺"}],["meta",{"property":"og:description","content":"实时便笺 相关信息 该功能需要你在胡桃工具箱中登录米游社帐号，登录方法可见文档 live-data-tracking 添加角色 点击 “添加角色” 按钮 在弹出的 “添加角色” 浮窗中，找到你要添加的游戏角色 UID，并单击其右侧的加号按钮 此时您添加的游戏角色即可显示在实时便笺页面中 实时便笺是间隔固定时间自动刷新的，你可以点击窗口右上角的 “通知设..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.alicdn.com/imgextra/i4/1797064093/O1CN01YUyKil1g6e0x3SpKX_!!1797064093.png_.webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"id-ID"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2024-02-25T02:47:10.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"实时便笺"}],["meta",{"property":"article:author","content":"DGP-Studio"}],["meta",{"property":"article:tag","content":"实时便笺"}],["meta",{"property":"article:tag","content":"派遣"}],["meta",{"property":"article:tag","content":"树脂"}],["meta",{"property":"article:modified_time","content":"2024-02-25T02:47:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"实时便笺\\",\\"image\\":[\\"https://img.alicdn.com/imgextra/i4/1797064093/O1CN01YUyKil1g6e0x3SpKX_!!1797064093.png_.webp\\"],\\"dateModified\\":\\"2024-02-25T02:47:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/zh/rss.xml","title":"胡桃工具箱 RSS Feed"}]]},"headers":[{"level":2,"title":"添加角色","slug":"添加角色","link":"#添加角色","children":[]},{"level":2,"title":"验证用户与角色","slug":"验证用户与角色","link":"#验证用户与角色","children":[]},{"level":2,"title":"全局通知设置","slug":"全局通知设置","link":"#全局通知设置","children":[]},{"level":2,"title":"账号独立设置","slug":"账号独立设置","link":"#账号独立设置","children":[]},{"level":2,"title":"删除角色","slug":"删除角色","link":"#删除角色","children":[]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[{"level":3,"title":"为什么设置实时便笺的自动刷新会提示 “修改计划任务失败”","slug":"为什么设置实时便笺的自动刷新会提示-修改计划任务失败","link":"#为什么设置实时便笺的自动刷新会提示-修改计划任务失败","children":[]}]}],"git":{"createdTime":1680310458000,"updatedTime":1708829230000,"contributors":[{"name":"Masterain","email":"i@irain.in","commits":11},{"name":"Mikachu2333","email":"mikachu.23333@zohomail.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"qhy040404","email":"qhy040404@163.com","commits":1}]},"readingTime":{"minutes":3.31,"words":993},"filePathRelative":"zh/features/real-time-notes.md","localizedDate":"2023年4月1日","autoDesc":true}');export{k as comp,x as data};
