import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as c,c as r,a as e,b as o,d as n,e as t}from"./app-lq5QJJSN.js";const s={},d=t('<h1 id="obtaining-stoken-containing-cookies-using-third-party-tools" tabindex="-1"><a class="header-anchor" href="#obtaining-stoken-containing-cookies-using-third-party-tools" aria-hidden="true">#</a> Obtaining Stoken-containing Cookies Using Third-Party Tools</h1><div class="hint-container warning"><p class="hint-container-title">Warning</p><ul><li>The software, open-source projects, and resources mentioned in the following steps are sourced from the internet and are not affiliated with DGP-Studio.</li><li>This documentation provides solutions for educational purposes only. Specific operations and their consequences are not associated with this project.</li></ul></div><h2 id="android" tabindex="-1"><a class="header-anchor" href="#android" aria-hidden="true">#</a> Android</h2><p>Android users can utilize the open-source project GetToken to acquire cookies containing the Stoken field.</p>',4),h={class:"hint-container tip"},p=e("p",{class:"hint-container-title"},"GetToken Open-Source Project",-1),u={href:"https://github.com/HolographicHat/GetToken",target:"_blank",rel:"noopener noreferrer"},m=t('<ul><li>The GetToken project&#39;s release includes two APK files, both ultimately achieving the same outcome. Choose the version suitable for your device: <ul><li><code>app-release.apk</code> is an LSPosed plugin that enables users to use GetToken functionality within the official miHoYo community app.</li><li>APK files ending with <code>lspatched</code> are modified versions of the miHoYo community app with GetToken functionality included. <ul><li>You&#39;ll need to uninstall the official miHoYo app to install this version.</li></ul></li></ul></li><li>After enabling the plugin or installing the modified miHoYo app, open the miHoYo app, click &quot;Me&quot; at the bottom, and log in to your account.</li><li>Click the key-shaped icon in the top right corner.</li><li>Check the <code>Stoken</code> option.</li><li>Click <code>Copy Login Information</code>.</li><li>Send the copied Stoken to the computer where the Hutao Toolbox is installed.</li><li>In the Hutao Toolbox&#39;s account login section, click <code>Manual Input</code>.</li><li>Enter the previously obtained cookie. You should now complete the login process.</li></ul><h2 id="ios" tabindex="-1"><a class="header-anchor" href="#ios" aria-hidden="true">#</a> iOS</h2><p>iOS users can download the packet capture software Stream from the App Store to obtain cookies containing the Stoken field.</p>',3),f={href:"https://apps.apple.com/cn/app/stream/id1312141691",target:"_blank",rel:"noopener noreferrer"},k=t("<li>Perform packet capture analysis on the domain <code>api-takumi.mihoyo.com</code>.</li><li>Locate and copy the data containing <code>Stoken</code>. <ul><li>It will be in the form of <code>stuid=****;stoken=v2****;mid=****;</code>.</li></ul></li><li>Send the copied Stoken to the computer where the Hutao Toolbox is installed.</li><li>In the Hutao Toolbox&#39;s account login section, click <code>Manual Input</code>.</li><li>Enter the previously obtained cookie. You should now complete the login process.</li>",5);function g(_,b){const i=l("ExternalLinkIcon");return c(),r("div",null,[d,e("div",h,[p,e("ul",null,[e("li",null,[o("GitHub: "),e("a",u,[o("HolographicHat/GetToken"),n(i)])])])]),m,e("ul",null,[e("li",null,[o("Download "),e("a",f,[o("Stream"),n(i)]),o(" from the App Store.")]),k])])}const T=a(s,[["render",g],["__file","get-stoken-cookie-from-the-third-party.html.vue"]]);export{T as default};
