if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const t=e=>a(e,d),f={module:{uri:d},exports:r,require:t};s[d]=Promise.all(i.map((e=>f[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-cc9d59eb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-3152ea96.js",revision:"2ef936b8fff8488349e06cd17ab6af7b"},{url:"assets/404.html-392add74.js",revision:"9bb763c4c841ee09970e5cdeb67eb6ce"},{url:"assets/achievements.html-2b4454b3.js",revision:"d57bb64afce426cc4cf7166f9ad36179"},{url:"assets/achievements.html-50d91807.js",revision:"f6206705770fc71b976e2f362e080318"},{url:"assets/achievements.html-78ddcaf7.js",revision:"77d8e0882039388caa77d05769f7cbaf"},{url:"assets/achievements.html-b4f0b9f3.js",revision:"64eefaf767975c613de17e8d509310a7"},{url:"assets/app-39ee3abd.js",revision:"f40cd8314f17dfde63a14a39c164e058"},{url:"assets/bug-report.html-49b70aa7.js",revision:"9ae259b716c01d8aa5b8c4f3dddf9037"},{url:"assets/bug-report.html-be008402.js",revision:"abf7a78f0ac7aa1be94d5c6cbe93a779"},{url:"assets/bug-report.html-da9c9af6.js",revision:"bbb6a1fe326f69984902e6ec9150cd37"},{url:"assets/bug-report.html-f0d519b1.js",revision:"ca5d3db701f63222c5331c60dc308c58"},{url:"assets/character-data.html-60d2a792.js",revision:"f74e202b78c1fa0ac53895d75e0014e1"},{url:"assets/character-data.html-7d5d9071.js",revision:"4e402d1f2377564b21fdd19fd50875fa"},{url:"assets/character-data.html-81f13ba6.js",revision:"a1dc9a496d74c16624c681a2d0ec4068"},{url:"assets/character-data.html-a55ab1ca.js",revision:"c115bf59eb7a90416bd70613e622a96c"},{url:"assets/character-wiki.html-0486e3d4.js",revision:"6fb327fab3acf958d42ffb99b9923987"},{url:"assets/character-wiki.html-339c899e.js",revision:"cf72be66d82f50f53721e8c02c23f958"},{url:"assets/character-wiki.html-4470b662.js",revision:"5558fa42b21096294b17869b5f01c7a2"},{url:"assets/character-wiki.html-f5c241cf.js",revision:"193c9e6f7e25caafa3b69b160ae73ac8"},{url:"assets/community.html-182de757.js",revision:"c07df3c45a331d1192b79a6357522c0d"},{url:"assets/community.html-7d1656aa.js",revision:"3a2739a1108b8b8f47e85bf7485d8788"},{url:"assets/community.html-91aa29f2.js",revision:"4f4ab1c750c4143061f3e31dd1c6a9a5"},{url:"assets/community.html-c9f2d093.js",revision:"32477e421b2d2f0e47dcc7eb53d414f4"},{url:"assets/component-a8e2fd8b.js",revision:"b9890ac05904014c92d5774e76476f26"},{url:"assets/develop-plan.html-11e50b04.js",revision:"5ed13fecae82779c8c958cf91d1a2294"},{url:"assets/develop-plan.html-1bdb5891.js",revision:"c89258aa1c8cb3bbd9d5055afcca9a24"},{url:"assets/develop-plan.html-227c3b3d.js",revision:"0cbc51f343485cc4d2267e7502d02db1"},{url:"assets/develop-plan.html-9211d237.js",revision:"bbca395554ae4ef4f51a9ff994639925"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/exceptions.html-70309d5f.js",revision:"e8e2362c1a757501434ed3e26b2d110b"},{url:"assets/exceptions.html-83d6729e.js",revision:"b5abb1f50fb075826b20ca6eaf1789a3"},{url:"assets/exceptions.html-a8f83090.js",revision:"51805f971d13eebe8c8f23bde082070a"},{url:"assets/exceptions.html-ebfba49d.js",revision:"47fb20313853ba915c24d16373db7b84"},{url:"assets/FAQ.html-5cee8306.js",revision:"ae934f772d83a3a22e52ba159582868f"},{url:"assets/FAQ.html-699ab111.js",revision:"e3e5d266de82e87b65e6452278bcb333"},{url:"assets/FAQ.html-6c32df73.js",revision:"5d6a8263e3466f93bfc35ae1ef888794"},{url:"assets/FAQ.html-8b6fd38e.js",revision:"844b0d6dec9ab551f2b0618179b86e92"},{url:"assets/framework-8be3ab77.js",revision:"f6ed5f20c831959a0e3646a27021139b"},{url:"assets/Gacha-system-and-export-principal.html-35e3a9ed.js",revision:"3c3638cd085125cce959f5e7ebeef47c"},{url:"assets/Gacha-system-and-export-principal.html-409f751b.js",revision:"5097c855c6f827186fa72c90498587c7"},{url:"assets/Gacha-system-and-export-principal.html-c568d3b7.js",revision:"5097c855c6f827186fa72c90498587c7"},{url:"assets/Gacha-system-and-export-principal.html-cf17a2c3.js",revision:"eecbaf6026c57f9c740c930e5d69c6ea"},{url:"assets/game-launcher.html-a366b7c3.js",revision:"3a31b3626d210f1f2f78005616308cf5"},{url:"assets/game-launcher.html-b635d67c.js",revision:"f581f25e745f38e58ed4163bddaca369"},{url:"assets/game-launcher.html-b7313ab4.js",revision:"d9e979da9626f489dcc2736a9578ba5c"},{url:"assets/game-launcher.html-b96d3a85.js",revision:"46d35b4e1b05b01271393faf96097ed9"},{url:"assets/get-stoken-cookie-from-the-third-party.html-2e6e77d4.js",revision:"75aa39d634819fbf365d59d6a1946831"},{url:"assets/get-stoken-cookie-from-the-third-party.html-3cca977e.js",revision:"e542a4fc771ff631b7464128e811af68"},{url:"assets/get-stoken-cookie-from-the-third-party.html-7c0dd482.js",revision:"49984ee127d6f7b192a8ecd02a6cf5b0"},{url:"assets/get-stoken-cookie-from-the-third-party.html-a4274fa1.js",revision:"06b896c9ca11d40d6529e58f6be784f6"},{url:"assets/hutao-API.html-12fc0e97.js",revision:"d666f75c9d45fd5e851dfdd6d4583582"},{url:"assets/hutao-API.html-1c0e0b3b.js",revision:"8ba30fee27c39060d97dde467b51913b"},{url:"assets/hutao-API.html-649782e1.js",revision:"b0a62a93551169bc79269e1f7c14d0bf"},{url:"assets/hutao-API.html-dcecab36.js",revision:"e5cfecb3911810da51e36a06520a0eb3"},{url:"assets/hutao-settings.html-0516ff4b.js",revision:"3fb7d2926eee0bb717f3ed007eb34043"},{url:"assets/hutao-settings.html-262ba592.js",revision:"f3cc1e0dca9dfa263efc81e7d60c9b9c"},{url:"assets/hutao-settings.html-502c2e74.js",revision:"39efad698213a3ff7daa6ceba7dd1622"},{url:"assets/hutao-settings.html-9e8d000d.js",revision:"2343c625ce6add88bdbfce211ba8fc47"},{url:"assets/i18n.html-02184ed6.js",revision:"f68ccc9c0e80aaaff6a4d85a9acc2613"},{url:"assets/i18n.html-1a20bdd4.js",revision:"9d7902bb755f413d8f2dba3e642dfc50"},{url:"assets/i18n.html-7bbd0925.js",revision:"1eb966fbcbaf4970c397c54180ad7b85"},{url:"assets/i18n.html-ab40d114.js",revision:"6a7a0c9b9177fa269431014800ad941d"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index-ade63bb5.js",revision:"55ae4af078c343139023fb1f7cc0cf26"},{url:"assets/index.html-14e051e6.js",revision:"2d0d1965ab71cc6a61c6e48fc854366e"},{url:"assets/index.html-14e304a7.js",revision:"68eafbefaa8a795889753a88e57e7075"},{url:"assets/index.html-2b1921cb.js",revision:"c220da76c5b4eac88b368045208fc071"},{url:"assets/index.html-316c8240.js",revision:"4cda2504d12fcaa99537ef62ba64b3b5"},{url:"assets/index.html-3e434e4b.js",revision:"cfd2547fb1232a8ec9e44045232ea7bf"},{url:"assets/index.html-3f2e3060.js",revision:"e8cf8e2d1e5b1aa394a52071f001eccf"},{url:"assets/index.html-41be6e42.js",revision:"7e6498e352ea3c4ccc0abb745f0b2f23"},{url:"assets/index.html-5ec33057.js",revision:"410b48ace0db0ca225ac3239783c2b2b"},{url:"assets/index.html-63291408.js",revision:"6276a8f171c3ddab4b9bd994c52dba23"},{url:"assets/index.html-7d14f03a.js",revision:"1ad183b69fd9b23d4e01ba54b90de6eb"},{url:"assets/index.html-88564790.js",revision:"7cc8634265ee6e9e04cba6cca3df4ffb"},{url:"assets/index.html-8b0bd72f.js",revision:"35bfc1d22940be043ca7e5476ec7c21c"},{url:"assets/index.html-8ce0ae99.js",revision:"70c1b53287be8e6521e212e64ddbce6a"},{url:"assets/index.html-a5246ba5.js",revision:"5663ef4849cd5a86a645bf4fef897775"},{url:"assets/index.html-b6121344.js",revision:"9aa1946d346404cd96f6c5f163e5e390"},{url:"assets/index.html-d4b53319.js",revision:"c2dcbcfe3271e6a29ad9b3acda6d6390"},{url:"assets/index.html-db394eaf.js",revision:"8b584939fe4f84af12598c0217ce2faa"},{url:"assets/index.html-ead0711a.js",revision:"de8de7dab77f3d8beb7480ed2831da3a"},{url:"assets/index.html-ec66f958.js",revision:"534e97062543ce6a9f2601735154b362"},{url:"assets/index.html-fac48cef.js",revision:"0670b0fa15461a81263aeabd1a297a97"},{url:"assets/known-issue.html-11edd8d4.js",revision:"915ddd2900ae4631bd02368c2dd919ad"},{url:"assets/known-issue.html-5513ab11.js",revision:"3c4274e31f6729319d3df86bf82dbbe4"},{url:"assets/known-issue.html-b46846cf.js",revision:"ac00577d9464e0cc24c2d37ed89e37b7"},{url:"assets/known-issue.html-ef2dae3b.js",revision:"814a3b6dc8443b22c6947fe397b57ff5"},{url:"assets/mhy-account-switch.html-0c28a728.js",revision:"97548476fae9094bb00b0ae8bdc6950e"},{url:"assets/mhy-account-switch.html-3c818870.js",revision:"3ab6295a5904abe6b76366912f453cfb"},{url:"assets/mhy-account-switch.html-8b9bc712.js",revision:"40ecb5b4d7e66a67dee51ed52382d53e"},{url:"assets/mhy-account-switch.html-fa72bc8b.js",revision:"4588bf1dbe5666ed171cb5c138c3c164"},{url:"assets/mihoyo-risk-tip.html-3363d750.js",revision:"ded524b73c98bd613661ab1a25be0612"},{url:"assets/mihoyo-risk-tip.html-668c908e.js",revision:"c02f95643f57ad17d773b1b81d869dfd"},{url:"assets/mihoyo-risk-tip.html-86d7ea6f.js",revision:"2b4710005dfc7e576d7b9d05fdcfe53e"},{url:"assets/mihoyo-risk-tip.html-d5051ce5.js",revision:"89e4d06a19bb9d258c3166647de974c0"},{url:"assets/photoswipe.esm-36cd6c3c.js",revision:"7f077f2378073a467463061ba916d854"},{url:"assets/privacy-notice.html-2dde0de5.js",revision:"239528d7fbaa8a22e8c085ff8117f565"},{url:"assets/privacy-notice.html-43cfb1bb.js",revision:"9be956a558889716e99868524e59c7ec"},{url:"assets/privacy-notice.html-50988b5a.js",revision:"4f12e36ba6dd09c5d03eb00758a7e3dd"},{url:"assets/privacy-notice.html-721aa8a3.js",revision:"30e430a6a85f675fb2a235fe190669c4"},{url:"assets/project.html-0650083e.js",revision:"0c810822ea2990c30622355091002a7e"},{url:"assets/project.html-11af8d5b.js",revision:"b33420feefb1e005143e6fc2b9f35190"},{url:"assets/project.html-2690409d.js",revision:"4d3288b9885cbcbbf823494149eca3dd"},{url:"assets/project.html-62cdf008.js",revision:"c663d97e55397112b8ea7c1150b3cc0a"},{url:"assets/quick-start.html-1278591c.js",revision:"5f4a1aae5ca7040db42928dd29f5e0e4"},{url:"assets/quick-start.html-21849a17.js",revision:"24af93ea91e437585a891f8b56f7f20b"},{url:"assets/quick-start.html-41eab0f0.js",revision:"af9b9a7db939e2348f7592d06f7d932d"},{url:"assets/quick-start.html-77a2ea9d.js",revision:"893ff474d2c700c8160ec3aad6965346"},{url:"assets/real-time-notes.html-33dada16.js",revision:"d616680ec2e55f9f07d84e8dcb16c601"},{url:"assets/real-time-notes.html-7edaa452.js",revision:"0e8382d9042155cf340b4445e31205eb"},{url:"assets/real-time-notes.html-99f16c8c.js",revision:"f21d81b6f5c756bb52b729803614a6c6"},{url:"assets/real-time-notes.html-efc395e0.js",revision:"44650a554d8102409b851e43de1b9937"},{url:"assets/side-load.html-33557d9b.js",revision:"9c9af55e5607e65d15b71d0e97e04c52"},{url:"assets/side-load.html-9cc44de3.js",revision:"b9588a8824b262e5f4c9f9a04f2b5f22"},{url:"assets/side-load.html-b81bb7fe.js",revision:"9c9af55e5607e65d15b71d0e97e04c52"},{url:"assets/side-load.html-e04e7234.js",revision:"010f1b65a4e1468a0ee25d71827ce299"},{url:"assets/star-request.html-2ad37f25.js",revision:"19ad6f641682199034539ee6494e764e"},{url:"assets/star-request.html-3ff0f768.js",revision:"44785511c0abf4704187036a06f475e6"},{url:"assets/star-request.html-4cb88d32.js",revision:"9a2c74d42fd22a93ed691e07eeefde02"},{url:"assets/star-request.html-8a203856.js",revision:"06ed4ad0735b8e14be7e697be5ef0bb4"},{url:"assets/style-6554d579.css",revision:"9c9099e299277cf6c6a2218608d27eb8"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/symposium1.html-a722d433.js",revision:"53f106d906817bf3de367b4854589a6c"},{url:"assets/symposium1.html-c47ecab0.js",revision:"0bd02663a76f0f7a8966895cdc2c986f"},{url:"assets/symposium2.html-4225d3ec.js",revision:"a42e3b26bd209cd7295302079099f6b7"},{url:"assets/symposium2.html-e492a642.js",revision:"3db3fbfdfe55f0f2bea0effb540e6676"},{url:"assets/tos.html-09235935.js",revision:"a4db382bafa2e5c697ab410898692754"},{url:"assets/tos.html-2697c794.js",revision:"33bebab8b98ef06466117d15c4bb90fa"},{url:"assets/tos.html-4ccd710b.js",revision:"468d0ed49514ac64c6da4061742f4aba"},{url:"assets/tos.html-d453e8d3.js",revision:"1533356cfb0b970ae21463caf3e86d5f"},{url:"assets/uninstall.html-6206b061.js",revision:"8893322f57aa5426d97f9b81df551c34"},{url:"assets/uninstall.html-87cb053a.js",revision:"1997d5077cc7447cd541e0193c93d0fd"},{url:"assets/uninstall.html-e98d2832.js",revision:"3f53fc617a33113c342de94e2c4b875c"},{url:"assets/uninstall.html-f3e75a7a.js",revision:"571bc3e5d2eb1134737ba9132bbef16d"},{url:"assets/update-log.html-5aeeaa80.js",revision:"1b939490a83536dfdbca5a66b23cf17b"},{url:"assets/update-log.html-d813d090.js",revision:"82bb000a87c22f6112a818018172edeb"},{url:"assets/update-log.html-d957ca1f.js",revision:"b610e903573842a17e645946204490e4"},{url:"assets/update-log.html-e0177afb.js",revision:"db6a9130f28c9694f4aff892b469a5e3"},{url:"assets/waline-meta-a31b78ed.js",revision:"4003eee21f800e7d4662bda5f1875047"},{url:"assets/weapon-wiki.html-1b6ec5a4.js",revision:"d4e80038ad5c974c80a9cda373b11524"},{url:"assets/weapon-wiki.html-660adaba.js",revision:"316325628ee6d15d897a4f711c7c3c76"},{url:"assets/weapon-wiki.html-7adf8d60.js",revision:"ca76ceed03237feb69d20f26ce588ca8"},{url:"assets/weapon-wiki.html-fe328aeb.js",revision:"0309ae3c0d904ee9a7a8c5ee978741f7"},{url:"assets/wish-export.html-2a78da4e.js",revision:"5a732c271a174c4a5c9e4b2ff9b36321"},{url:"assets/wish-export.html-93eff3a4.js",revision:"1389230bee085d4494f67d745afe63d8"},{url:"assets/wish-export.html-d867b90a.js",revision:"ed0145041a5ee96ab0c4b88a4ace1479"},{url:"assets/wish-export.html-fb21ac9f.js",revision:"068fe341f2f49b649e077360fc426fb9"},{url:"fontlist/demo.css",revision:"c470b271d96640b2d527d864d838d550"},{url:"fontlist/iconfont.css",revision:"47f9418c83e516e2f92fffa11e06ff9f"},{url:"fontlist/iconfont.js",revision:"787c135beed0ae93c145ae2de3cbfefe"},{url:"fontlist/iconfont.ttf",revision:"6d90ead1de012ad82077c2a898dcc136"},{url:"fontlist/iconfont.woff",revision:"c50542a321198d3a49a56ba9f50923f6"},{url:"fontlist/iconfont.woff2",revision:"a917e0d0985aaabe49b9bd5ad48bd270"},{url:"upload-abyss-data.js",revision:"e3c5df0c4de06f2bd47d19d95f478c8e"},{url:"index.html",revision:"a9eb7dfd49cdcac15a2a5a70a1490fb9"},{url:"404.html",revision:"f141e31db81a40189b7520814674bf75"},{url:"images/202209/Achievements.png",revision:"067cff70d53656b2e3e878df949823f6"},{url:"images/202209/HeroImageLogo.png",revision:"fb8507e3eaccbd6408874dcf10973d62"},{url:"images/202209/IndexIconAchievements.png",revision:"ea409f5a87b1c7666121ead606e323ef"},{url:"images/202209/IndexIconCharacters.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202209/IndexIconMihoyoBBS.png",revision:"b9c679888c01a50e6b126f9dae0d50d1"},{url:"images/202209/IndexIconWeapons.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"images/202209/IndexIconWish.png",revision:"0b4e790c4cb1eeba7473ad8e1b14ac23"},{url:"images/202209/SGLogoUpgrade64.png",revision:"1b95d8969049e0b31c0d89eeface0b89"},{url:"images/202209/wish-export.png",revision:"ef07fa6499c22d00c78dc182ad3cbab5"},{url:"images/202210/1.1.7-Update-Error-Fix.png",revision:"1f1958198ca4510713648cff6c43fcd5"},{url:"images/202210/1.1.7-Update-Error.png",revision:"3e04317e974e1cec550096b7ea88d708"},{url:"images/202210/account-upgrade.png",revision:"52b1c5695109142c9496bb6e14a9c2d1"},{url:"images/202210/HttpRequestException.jpg",revision:"878a57ab9fe5de6b774d7e91776987ab"},{url:"images/202210/hutao-api-submit.png",revision:"6a201ae85f470f3bb70e868137524830"},{url:"images/202210/hutao-api.png",revision:"5bd260fe9b5c18a41765c1126cfd91ff"},{url:"images/202210/hutao-login.png",revision:"21af43587bacf56bf40cadc884381c49"},{url:"images/202211/character-data-display.png",revision:"0cd41e7a02ee864ff12f0f69c926b79f"},{url:"images/202211/character-data-logo.png",revision:"04cc28833ed4c2108ba215fbc33325bf"},{url:"images/202211/character-wiki-logo.png",revision:"db66594140f8dfc65556cc0ac2ed3e3e"},{url:"images/202211/character-wiki.png",revision:"002ee49f019709942ae1b3dc541d05e4"},{url:"images/202211/game-launcher-logo.png",revision:"a5a5d6d5a09926689f8a61db4b24c2df"},{url:"images/202211/hutao-api-logo.png",revision:"feb8ae3e6c4099e0b7804e3d7ebda7c2"},{url:"images/202211/wish-export.png",revision:"c695c558c514d9aa0d3903d5c41f63b9"},{url:"images/202301/achievement.png",revision:"42fd361ea1336daf7cd33bf187e62fa2"},{url:"images/202301/dev-plan-logo.png",revision:"5d69e71ecd6e1b553395e2306fff5f34"},{url:"images/202301/live-stat-tracking-logo.png",revision:"23a418c1d29dbbf0142085f2e8ad464d"},{url:"images/202301/spiral-abyss-record-logo.png",revision:"6d213b91803137c600bb27b973a7ee25"},{url:"images/202301/weapon-wiki-logo.png",revision:"21a20e656ff91575a50c2a1c0253a581"},{url:"pwa-icon/chrome-144.png",revision:"24dd1f208ca63bef5c104659ae25c0e8"},{url:"pwa-icon/chrome-192.png",revision:"984b2a8dfd5dfb1cecfb73bc940bf070"},{url:"pwa-icon/chrome-48.png",revision:"a424e2c1b597db8e320cb3184c78ae23"},{url:"pwa-icon/chrome-512.png",revision:"06ecfca5b4c625d580608e04850f9f29"},{url:"pwa-icon/chrome-72.png",revision:"b9c2449570f275fd5dd34b887aa04697"},{url:"pwa-icon/chrome-96.png",revision:"64e04325061a5fa6de31f4b52bb7498f"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
