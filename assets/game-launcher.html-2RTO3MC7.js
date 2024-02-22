import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as c,c as s,a as t,b as e,d as n,w as d,e as o}from"./app-DegewASY.js";const h={},u=o('<h1 id="game-launcher" tabindex="-1"><a class="header-anchor" href="#game-launcher"><span>Game Launcher</span></a></h1><p><img src="https://img.alicdn.com/imgextra/i2/1797064093/O1CN01RuSYDm1g6e0u3wfIy_!!1797064093.png_.webp" alt="Game Launcher" loading="lazy"></p><ul><li>Snap Hutao offers advanced game launcher feature allows user to launch the game with self-defined settings</li><li>Click on the <code>Game Launcher</code> on the sidebar to get into game launcher&#39;s page <ul><li>If you are using it at the first time, you will be redirected to Snap Hutao settings page and asked to set your game path <ul><li>When choosing the game path, noticed that you should choose game program instead of launcher program <ul><li>Such as <code>$\\Genshin Impact\\Genshin Impact Game\\YuanShen.exe</code> and <code>$\\Genshin Impact\\Genshin Impact Game\\Genshin Impact.exe</code></li></ul></li></ul></li></ul></li><li>You can make launcher configuration options in the game launcher&#39;s page, and then click <code>Launcher</code> button on the top-right to launch the game. Launcher options is explained in the document below</li></ul><h2 id="server-switch" tabindex="-1"><a class="header-anchor" href="#server-switch"><span>Server Switch</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Privilege Notice</p><ol><li>You need to run Snap Hutao as administrator to use this feature</li><li>Snap Hutao will create <code>ServerCache</code> folder in the data directory to save required sever switch files</li></ol></div><p>Enter Game Launcher page In the <code>Server</code> field, select the server you want</p><p>Current available serves options include:</p><table><thead><tr><th>Option</th><th>Server</th></tr></thead><tbody><tr><td>CN Default</td><td>Mainland China server</td></tr><tr><td>CN Official</td><td>Mainland China server, no difference with previous row</td></tr><tr><td>CN NoTapTap</td><td>Mainland China server without TapTap account login method</td></tr><tr><td>BiliBili</td><td>Chinese server with BiliBili account system</td></tr><tr><td>Global Default</td><td>HoYoVerse servers</td></tr><tr><td>Global Epic</td><td>HoYoVerse servers with Epic Store payment gateway</td></tr><tr><td>Global Google</td><td>HoYoVerse servers with Google Pay payment gateway</td></tr></tbody></table><p>click <code>Launch</code> button on the top-right to launch the game, Snap Hutao will download server required files and then launch the game</p><h2 id="game-account-switch" tabindex="-1"><a class="header-anchor" href="#game-account-switch"><span>Game Account Switch</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>The <strong>account</strong> mentioned in this feature is Genshin game login account instead of HoYoLAB account</p></div><table><thead><tr><th></th><th>CN</th><th>Global</th><th>bilibili</th></tr></thead><tbody><tr><td>Save Login Status</td><td>Supported</td><td>Supported</td><td>Supported</td></tr><tr><td>Switch Account</td><td>Supported</td><td>Supported</td><td>Not Supported</td></tr></tbody></table><ol><li>Enter Game Launcher page</li><li>Click <code>Detect Account</code> field in the <code>Registry</code> category, Snap Hutao will detect current Genshin Impact&#39;s account login status</li><li>In this pop-up window, enter an archive name for this account and click <code>Confirm</code></li><li>Go back to the game, sign out and sign in to your another account, then end the game process. Repeat step 2 and 3 to add all your account to Snap Hutao</li></ol><p>Each account is saved in a field under the <code>Detect Account</code> field, they are selectable</p><ul><li>On the right side, there are three buttons, they are: <ul><li><code>Bind current user account</code>, bind current activated MiHoYo BBS account with this game account, an UID will be display on this archive</li><li><code>Rename</code>, rename current account archive name</li><li><code>Delete</code>, delete current account archive</li></ul></li></ul><h2 id="genshin-impact-hdr-in-windows-platform" tabindex="-1"><a class="header-anchor" href="#genshin-impact-hdr-in-windows-platform"><span>Genshin Impact HDR in Windows Platform</span></a></h2><p>Genshin Impact currently has an HDR feature built in that can only be enabled by setting registry key values. Although this may mean that the feature is a test feature of the game, you can already experience it in advance! You can enable the Genshin Impact HDR feature on the Windows platform to enhance the visual experience on monitors that support HDR. In the game launcher, you can enable the Windows HDR option, and Snap Hutao will activate this built-in feature of the game when the game starts.</p><h2 id="launch-parameters" tabindex="-1"><a class="header-anchor" href="#launch-parameters"><span>Launch Parameters</span></a></h2><div class="hint-container warning"><p class="hint-container-title">Warning</p><ul><li><p>In some reported cases, using Snap Hutao with <code>Exclusive Fullscreen</code> mode will cause the game process no response.</p><ul><li>Suggest to use <code>Borderless</code> or <code>Fullscreen</code> mode if you faced same problem</li><li>The problem is caused by failure of game embedded browser cannot run</li></ul></li></ul></div><ul><li>Enter Game Launcher page</li><li>In the <code>Progress</code> category, enable <code>Launch Parameters</code> and expand it to see more detailed options: <ul><li><code>-window-mode exclusive</code> parameter <ul><li><strong>Exclusive Full Screen</strong>, i.e., select the game process to run in exclusive full-screen mode</li><li><strong>This feature is incompatible with the in-game browser feature, you should only enable this option if you can independently describe the technical principles and effects of exclusive full screen</strong></li></ul></li><li><code>-screen-fullscreen</code> parameter <ul><li><strong>Full Screen</strong>, i.e., choose whether to set the game interface as full screen after launching the game</li></ul></li><li><code>-popupwindow</code> parameter <ul><li><strong>Borderless</strong>, i.e., choose whether to set the game interface as a borderless window after launching the game</li></ul></li><li><code>-platform_type CLOUD_THIRD_PARTY_MOBILE</code> parameter <ul><li><strong>Touch Screen Mode</strong>, i.e., enable the touch screen operation mode built into Genshin Impact</li></ul></li><li>Resolution <ul><li>This feature can quickly set the options to override screen width and height</li></ul></li><li><code>-screen-width</code> parameter <ul><li><strong>Width</strong>, i.e., choose the width of the game interface after launching the game, for example, <code>1920</code></li></ul></li><li><code>-screen-height</code> parameter <ul><li><strong>Height</strong>, i.e., choose the height of the game interface after launching the game, for example, <code>1080</code></li></ul></li><li><code>-monitor</code> parameter <ul><li><strong>Monitor</strong>, allows users with multiple monitors to choose a specific monitor to run the game</li><li>If you can&#39;t determine which monitor each option represents, you can click <code>Identify Monitor</code> to get a hint.</li></ul></li></ul></li></ul><h2 id="resource-download" tabindex="-1"><a class="header-anchor" href="#resource-download"><span>Resource Download</span></a></h2><p>Game launcher in Snap Hutao also offers resource download feature, which lists real time Genshin Impact (CN server) client package and OTA package. User can click the hyperlink icon on each package&#39;s right side to redirect to browser to download them by user favored download tools.</p><p>When you are updating the game client, you can do the following steps:</p><ol><li>Update official launcher to the latest</li><li>In <code>Snap Hutao - Game Launcher - Resource Download</code>, find needed client OTA package and installed language OTA package</li><li>Move all package to folder where game client located</li><li>Start official launcher, click on update button. The launcher should skip the download and directly starts to unzip the OTA packages to update client</li></ol><h2 id="advanced-features" tabindex="-1"><a class="header-anchor" href="#advanced-features"><span>Advanced Features</span></a></h2><div class="hint-container caution"><p class="hint-container-title">Caution</p><ul><li>Be aware: all advanced features are labeled as <code>Dangeroud Feature</code>; indicating that enabling them means you choose to assume any risk on your own.</li><li><strong>You need to enable advanced features in Snap Hutao&#39;s settings page</strong></li></ul></div><h3 id="unlock-frame-rate-limit" tabindex="-1"><a class="header-anchor" href="#unlock-frame-rate-limit"><span>Unlock Frame Rate Limit</span></a></h3>',27),p={class:"hint-container caution"},m=t("p",{class:"hint-container-title"},"Caution",-1),g={href:"https://github.com/DGP-Studio/Unlocker",target:"_blank",rel:"noopener noreferrer"},f=o("<ul><li>Run Snap Hutao as administrator</li><li>Make sure <code>Advanced Feature</code> is enabled in Snap Hutao settings</li><li>Enter Game Launcher page</li><li>At the bottom of the page, you can find <code>Unlock Frame Rate Limit</code> option <ul><li>Trigger the switch to enable or disable this feature</li><li>In the <code>Set Frame Rate Limit</code> field, you can adjust the limit freely</li></ul></li><li>Click <code>Start Game</code> button on the top right</li></ul><p>Fact that may cause <strong>failure in unlocking frame rate limit</strong>:</p><ol><li>Snap Hutao process is not kept in the background</li><li><code>V-Sync</code> is not set to off in the game</li><li><code>Max Framerate</code> limit is not changed in your graphic card settings</li><li><code>Power Saving</code> mode is not disabled in power settings</li><li>Your graphic card is not powerful enough</li></ol>",3);function w(y,v){const i=a("ExternalLinkIcon"),r=a("RouteLink");return c(),s("div",null,[u,t("div",p,[m,t("ul",null,[t("li",null,[e("The "),t("a",g,[e("Unlocker project"),n(i)]),e(" only affects the UnityPlayer itself, directly affecting the Unity3D engine, and does not have a direct relationship with the game itself. Essentially, it is no different from settings like 120 FPS in mobile devices. However, you should still use it with caution and read the "),n(r,{to:"/en/statements/tos.html"},{default:d(()=>[e("user agreement")]),_:1}),e(" on your own.")])])]),f])}const k=l(h,[["render",w],["__file","game-launcher.html.vue"]]),G=JSON.parse('{"path":"/en/features/game-launcher.html","title":"Game Launcher","lang":"en-US","frontmatter":{"headerDepth":0,"category":["Feature","Tutorial"],"tag":["unlock framerate","convert server","switch account"],"order":4,"comment":false,"description":"Game Launcher Game Launcher Snap Hutao offers advanced game launcher feature allows user to launch the game with self-defined settings Click on the Game Launcher on the sidebar ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://hut.ao/zh/features/game-launcher.html"}],["link",{"rel":"alternate","hreflang":"id-id","href":"https://hut.ao/id/features/game-launcher.html"}],["link",{"rel":"alternate","hreflang":"ru-ru","href":"https://hut.ao/ru/features/game-launcher.html"}],["meta",{"property":"og:url","content":"https://hut.ao/en/features/game-launcher.html"}],["meta",{"property":"og:site_name","content":"Snap Hutao"}],["meta",{"property":"og:title","content":"Game Launcher"}],["meta",{"property":"og:description","content":"Game Launcher Game Launcher Snap Hutao offers advanced game launcher feature allows user to launch the game with self-defined settings Click on the Game Launcher on the sidebar ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.alicdn.com/imgextra/i2/1797064093/O1CN01RuSYDm1g6e0u3wfIy_!!1797064093.png_.webp"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"id-ID"}],["meta",{"property":"og:locale:alternate","content":"ru-RU"}],["meta",{"property":"og:updated_time","content":"2024-01-11T09:46:53.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Game Launcher"}],["meta",{"property":"article:author","content":"DGP-Studio"}],["meta",{"property":"article:tag","content":"unlock framerate"}],["meta",{"property":"article:tag","content":"convert server"}],["meta",{"property":"article:tag","content":"switch account"}],["meta",{"property":"article:modified_time","content":"2024-01-11T09:46:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Game Launcher\\",\\"image\\":[\\"https://img.alicdn.com/imgextra/i2/1797064093/O1CN01RuSYDm1g6e0u3wfIy_!!1797064093.png_.webp\\"],\\"dateModified\\":\\"2024-01-11T09:46:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DGP-Studio\\",\\"url\\":\\"https://github.com/DGP-Studio\\"}]}"],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://hut.ao/en/rss.xml","title":"Snap Hutao RSS Feed"}]]},"headers":[{"level":2,"title":"Server Switch","slug":"server-switch","link":"#server-switch","children":[]},{"level":2,"title":"Game Account Switch","slug":"game-account-switch","link":"#game-account-switch","children":[]},{"level":2,"title":"Genshin Impact HDR in Windows Platform","slug":"genshin-impact-hdr-in-windows-platform","link":"#genshin-impact-hdr-in-windows-platform","children":[]},{"level":2,"title":"Launch Parameters","slug":"launch-parameters","link":"#launch-parameters","children":[]},{"level":2,"title":"Resource Download","slug":"resource-download","link":"#resource-download","children":[]},{"level":2,"title":"Advanced Features","slug":"advanced-features","link":"#advanced-features","children":[{"level":3,"title":"Unlock Frame Rate Limit","slug":"unlock-frame-rate-limit","link":"#unlock-frame-rate-limit","children":[]}]}],"git":{"createdTime":1673484663000,"updatedTime":1704966413000,"contributors":[{"name":"Masterain","email":"i@irain.in","commits":11},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":3.81,"words":1142},"filePathRelative":"en/features/game-launcher.md","localizedDate":"January 12, 2023","autoDesc":true}');export{k as comp,G as data};