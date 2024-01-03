import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as c,c as d,a as e,b as o,d as t,w as i,e as r}from"./app-o4BTZPYJ.js";const u={},h=e("h1",{id:"common-program-exceptions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#common-program-exceptions","aria-hidden":"true"},"#"),o(" Common Program Exceptions")],-1),p=e("p",null,[o("This document covers solutions of "),e("strong",null,"foreseeable client error")],-1),f=e("h2",{id:"runtimeenvironmentexception",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#runtimeenvironmentexception","aria-hidden":"true"},"#"),o(" RuntimeEnvironmentException")],-1),m=e("li",null,[o("Exception: "),e("code",null,"RuntimeEnvironmentException"),e("ul",null,[e("li",null,[o("Hint: "),e("code",null,"Unable to set registry key without enabling long path")])])],-1),g=e("li",null,"Issue source: Windows long path limit is set to be limited at 256 characters by default",-1),_={href:"https://d.hut.ao/d/tools/EnableLongPaths.zip",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,".reg",-1),b=r('<h2 id="return-code-10001" tabindex="-1"><a class="header-anchor" href="#return-code-10001" aria-hidden="true">#</a> Return Code: -10001</h2><ul><li>This error comes directly from MiHoYo BBS, hints include <ul><li><code>Return Code: -10001</code></li><li><code>Return Code: -100</code></li></ul></li><li>Issue source <ol><li>Cookie expired</li><li>Network error</li><li>System time is not accurate</li></ol></li><li>Solution <ol><li>In the account panel, execute <code>Refresh Cookies</code></li><li>Remove your account and add it again</li><li>Sync your system time</li></ol></li></ul><h2 id="return-code-1034-verification-failed" tabindex="-1"><a class="header-anchor" href="#return-code-1034-verification-failed" aria-hidden="true">#</a> Return Code: 1034 Verification Failed</h2><ul><li>If Snap Hutao returns <code>1034</code> status code and hints verification failed (usually during the operation of Realtime Notes), it means the operation is blocked by MiHoYo BBS anti-bot system</li><li>Solution: <ul><li>Enter <code>Realtime Notes</code></li><li>Click on <code>Verify Current User and Role</code> button</li><li>Follow the instruction in MiHoYo BBS to verify</li><li>After finishing the verification process, click <code>Complete</code> to close the verification window</li><li>Now, the account should back to normal; If not, process the step above again<div class="hint-container tip"><p class="hint-container-title">Tips</p></div></li></ul></li></ul><p>If the risk prompt is too frequent, or the verification cannot be triggered at all, it means that the risk of your account is too high, please change the password, so that the simultaneous login status of multiple devices will be reset</p><p>:::</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><ul><li>You hardly cannot pass imperceptible verification when your account is <strong>login at other remote Genshin tools</strong> or <strong>login at multiple devices</strong>. This is a security designing of MiHoYo BBS, and cannot bypass</li><li>If you are using <strong>multiple MiHoYo BBS account in your device</strong>, <strong>frequent usage with MiHoYo BBS API</strong> will result in your IP address being banned for a period of time (usually no more than 24 hours). This is a security designing of MiHoYo BBS, and cannot bypass</li></ul></div><h2 id="httprequestexception-metadata-download-failed" tabindex="-1"><a class="header-anchor" href="#httprequestexception-metadata-download-failed" aria-hidden="true">#</a> HttpRequestException Metadata Download Failed</h2><h3 id="connectionerror" tabindex="-1"><a class="header-anchor" href="#connectionerror" aria-hidden="true">#</a> ConnectionError</h3><p>Failed to connect to Snap Hutao server, please check your connection</p>',10),x=e("h3",{id:"_403-forbidden-404-not-found",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_403-forbidden-404-not-found","aria-hidden":"true"},"#"),o(" 403 (Forbidden) / 404 (Not Found)")],-1),v=r('<h3 id="_502-bad-gateway" tabindex="-1"><a class="header-anchor" href="#_502-bad-gateway" aria-hidden="true">#</a> 502 (Bad Gateway)</h3><p>Failed to connect to Snap Hutao server, please check your connection</p><h2 id="_653366069-request-exception" tabindex="-1"><a class="header-anchor" href="#_653366069-request-exception" aria-hidden="true">#</a> <code>653366069</code> Request Exception</h2><ul><li>Failed to connect to MiYouShe/HoYoLAB server <ul><li>if the error occurs not frequently, you may ignore it</li><li>if the error constantly occurs, please check your local network</li></ul></li></ul>',4),w=e("h2",{id:"error-finding-required-modules",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#error-finding-required-modules","aria-hidden":"true"},"#"),o(" Error Finding Required Modules")],-1),k=e("p",null,"When user launching game with unlock frame-rate feature on, the game may be failed to be launched with the following error shows up:",-1),S=e("ol",null,[e("li",null,"Error finding required modules: could not read any module, the protection driver may have been loaded"),e("li",null,"Error finding required modules: timeout")],-1),B=e("p",null,"This issue only occurs when Genshin Impact's anti-cheat module starts earlier than frame-rate-unlocker module. When these errors happen, Snap Hutao will exit game process, and you can re-launch the game.",-1);function E(R,q){const l=a("ExternalLinkIcon"),n=a("RouterLink");return c(),d("div",null,[h,p,f,e("ul",null,[m,g,e("li",null,[o("Solution: Download "),e("a",_,[o("EnableLongPaths.zip"),t(l)]),o(", unzip it and run "),y,o(" file")])]),b,e("p",null,[o("If you are using a network proxy, please check if you have "),t(n,{to:"/en/advanced/FAQ.html"},{default:i(()=>[o("unlocked Windows container Loopback limit")]),_:1})]),x,e("p",null,[o("Solution: Update your Snap Hutao to "),t(n,{to:"/en/quick-start.html"},{default:i(()=>[o("the latest version")]),_:1})]),v,e("p",null,[o("If you are using a network proxy, please check if you have "),t(n,{to:"/en/advanced/FAQ.html"},{default:i(()=>[o("unlocked Windows container Loopback limit")]),_:1})]),w,k,S,B])}const C=s(u,[["render",E],["__file","exceptions.html.vue"]]);export{C as default};