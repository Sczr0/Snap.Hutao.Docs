import{_ as r,r as l,o as c,c as s,a as e,b as t,d as n,w as a,e as i}from"./app-C1fVp8-O.js";const d={},u=i('<h1 id="common-program-exceptions" tabindex="-1"><a class="header-anchor" href="#common-program-exceptions"><span>Common Program Exceptions</span></a></h1><p>This document covers solutions of <strong>foreseeable client error</strong></p><h2 id="return-code-10001" tabindex="-1"><a class="header-anchor" href="#return-code-10001"><span>Return Code: -10001</span></a></h2><ul><li>This error comes directly from MiHoYo BBS, hints include <ul><li><code>Return Code: -10001</code></li><li><code>Return Code: -100</code></li></ul></li><li>Issue source <ol><li>Cookie expired</li><li>Network error</li><li>System time is not accurate</li></ol></li><li>Solution <ol><li>In the account panel, execute <code>Refresh Cookies</code></li><li>Remove your account and add it again</li><li>Sync your system time</li></ol></li></ul><h2 id="return-code-1034-verification-failed" tabindex="-1"><a class="header-anchor" href="#return-code-1034-verification-failed"><span>Return Code: 1034 Verification Failed</span></a></h2><ul><li>If Snap Hutao returns <code>1034</code> status code and hints verification failed (usually during the operation of Realtime Notes), it means the operation is blocked by MiHoYo BBS anti-bot system</li><li>Solution: <ul><li>Enter <code>Realtime Notes</code></li><li>Click on <code>Verify Current User and Role</code> button</li><li>Follow the instruction in MiHoYo BBS to verify</li><li>After finishing the verification process, click <code>Complete</code> to close the verification window</li><li>Now, the account should back to normal; If not, process the step above again<div class="hint-container tip"><p class="hint-container-title">Tips</p></div></li></ul></li></ul><p>If the risk prompt is too frequent, or the verification cannot be triggered at all, it means that the risk of your account is too high, please change the password, so that the simultaneous login status of multiple devices will be reset</p><p>:::</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><ul><li>You hardly cannot pass imperceptible verification when your account is <strong>login at other remote Genshin tools</strong> or <strong>login at multiple devices</strong>. This is a security designing of MiHoYo BBS, and cannot bypass</li><li>If you are using <strong>multiple MiHoYo BBS account in your device</strong>, <strong>frequent usage with MiHoYo BBS API</strong> will result in your IP address being banned for a period of time (usually no more than 24 hours). This is a security designing of MiHoYo BBS, and cannot bypass</li></ul></div><h2 id="httprequestexception-metadata-download-failed" tabindex="-1"><a class="header-anchor" href="#httprequestexception-metadata-download-failed"><span>HttpRequestException Metadata Download Failed</span></a></h2><h3 id="connectionerror" tabindex="-1"><a class="header-anchor" href="#connectionerror"><span>ConnectionError</span></a></h3><p>Failed to connect to Snap Hutao server, please check your connection</p>',12),h=e("h3",{id:"_403-forbidden-404-not-found",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_403-forbidden-404-not-found"},[e("span",null,"403 (Forbidden) / 404 (Not Found)")])],-1),p=i('<h3 id="_502-bad-gateway" tabindex="-1"><a class="header-anchor" href="#_502-bad-gateway"><span>502 (Bad Gateway)</span></a></h3><p>Failed to connect to Snap Hutao server, please check your connection</p><h2 id="_653366069-request-exception" tabindex="-1"><a class="header-anchor" href="#_653366069-request-exception"><span><code>653366069</code> Request Exception</span></a></h2><ul><li>Failed to connect to MiYouShe/HoYoLAB server <ul><li>if the error occurs not frequently, you may ignore it</li><li>if the error constantly occurs, please check your local network</li></ul></li></ul>',4),m=e("h2",{id:"error-finding-required-modules",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#error-finding-required-modules"},[e("span",null,"Error Finding Required Modules")])],-1),g=e("p",null,"When user launching game with unlock frame-rate feature on, the game may be failed to be launched with the following error shows up:",-1),f=e("ol",null,[e("li",null,"Error finding required modules: could not read any module, the protection driver may have been loaded"),e("li",null,"Error finding required modules: timeout")],-1),y=e("p",null,"This issue only occurs when Genshin Impact's anti-cheat module starts earlier than frame-rate-unlocker module. When these errors happen, Snap Hutao will exit game process, and you can re-launch the game.",-1);function v(x,_){const o=l("RouteLink");return c(),s("div",null,[u,e("p",null,[t("If you are using a network proxy, please check if you have "),n(o,{to:"/en/advanced/FAQ.html"},{default:a(()=>[t("unlocked Windows container Loopback limit")]),_:1})]),h,e("p",null,[t("Solution: Update your Snap Hutao to "),n(o,{to:"/en/quick-start.html"},{default:a(()=>[t("the latest version")]),_:1})]),p,e("p",null,[t("If you are using a network proxy, please check if you have "),n(o,{to:"/en/advanced/FAQ.html"},{default:a(()=>[t("unlocked Windows container Loopback limit")]),_:1})]),m,g,f,y])}const k=r(d,[["render",v],["__file","exceptions.html.vue"]]),w=JSON.parse('{"path":"/en/advanced/exceptions.html","title":"Common Program Exceptions","lang":"en-US","frontmatter":{"headerDepth":2,"icon":"iconfont icon-warn","category":["FAQ"],"order":2,"comment":false,"description":"Snap Hutao utilizes specific error codes to indicate particular errors. If you encounter a program error during usage and have an error code, you can try searching for it on this page.","banner":"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/exceptions.html&has_description=False","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://hut.ao/zh/advanced/exceptions.html"}],["link",{"rel":"alternate","hreflang":"id-id","href":"https://hut.ao/id/advanced/exceptions.html"}],["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://hut.ao/ru/advanced/exceptions.html"}],["meta",{"property":"og:url","content":"https://hut.ao/en/advanced/exceptions.html"}],["meta",{"property":"og:site_name","content":"Snap Hutao"}],["meta",{"property":"og:title","content":"Common Program Exceptions"}],["meta",{"property":"og:description","content":"Snap Hutao utilizes specific error codes to indicate particular errors. If you encounter a program error during usage and have an error code, you can try searching for it on this page."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/exceptions.html&has_description=False"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"id-ID"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2024-03-19T08:01:30.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/exceptions.html&has_description=False"}],["meta",{"name":"twitter:image:alt","content":"Common Program Exceptions"}],["meta",{"property":"article:author","content":"DGP-Studio"}],["meta",{"property":"article:modified_time","content":"2024-03-19T08:01:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Common Program Exceptions\\",\\"image\\":[\\"https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/advanced/exceptions.html&has_description=False\\"],\\"dateModified\\":\\"2024-03-19T08:01:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/en/rss.xml","title":"Snap Hutao RSS Feed"}]]},"headers":[{"level":2,"title":"Return Code: -10001","slug":"return-code-10001","link":"#return-code-10001","children":[]},{"level":2,"title":"Return Code: 1034 Verification Failed","slug":"return-code-1034-verification-failed","link":"#return-code-1034-verification-failed","children":[]},{"level":2,"title":"HttpRequestException Metadata Download Failed","slug":"httprequestexception-metadata-download-failed","link":"#httprequestexception-metadata-download-failed","children":[{"level":3,"title":"ConnectionError","slug":"connectionerror","link":"#connectionerror","children":[]},{"level":3,"title":"403 (Forbidden) / 404 (Not Found)","slug":"_403-forbidden-404-not-found","link":"#_403-forbidden-404-not-found","children":[]},{"level":3,"title":"502 (Bad Gateway)","slug":"_502-bad-gateway","link":"#_502-bad-gateway","children":[]}]},{"level":2,"title":"653366069 Request Exception","slug":"_653366069-request-exception","link":"#_653366069-request-exception","children":[]},{"level":2,"title":"Error Finding Required Modules","slug":"error-finding-required-modules","link":"#error-finding-required-modules","children":[]}],"git":{"createdTime":1679108738000,"updatedTime":1710835290000,"contributors":[{"name":"Masterain","email":"i@irain.in","commits":13},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"qhy040404","email":"qhy040404@163.com","commits":1}]},"readingTime":{"minutes":1.74,"words":522},"filePathRelative":"en/advanced/exceptions.md","localizedDate":"March 18, 2023"}');export{k as comp,w as data};