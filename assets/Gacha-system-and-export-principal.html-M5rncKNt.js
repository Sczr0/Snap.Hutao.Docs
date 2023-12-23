import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as a,e as t}from"./app-lq5QJJSN.js";const r={},s=t('<h1 id="gacha-system-and-export-principle" tabindex="-1"><a class="header-anchor" href="#gacha-system-and-export-principle" aria-hidden="true">#</a> Gacha System and Export Principle</h1><p>Snap Hutao&#39;s Gacha system underwent an overhaul compared to Snap Genshin, experiencing a complete architectural redesign.</p><p>This article will explain the Genshin&#39;s wish logging mechanism and the technical principles behind the Gacha export feature in the Hutao Toolbox.</p><h2 id="obtaining-wishes" tabindex="-1"><a class="header-anchor" href="#obtaining-wishes" aria-hidden="true">#</a> Obtaining Wishes</h2><p>Acquiring wish records requires querying miHoYo&#39;s API.</p><p>Regarding this API, there are a few key points to note:</p><ul><li>Through miHoYo&#39;s server API, you can only access wish records from the past 6 months. <ul><li>This is also the source of wish records in the original Genshin client.</li></ul></li><li>The API has rate limits; too many requests too quickly can lead to subsequent failures, making it impossible to retrieve data.</li></ul><p>To request this API, we need four crucial parameters.</p><ul><li>Currently, several methods can obtain these parameters: <ul><li>Traversing Unity&#39;s log files to find URLs for wish records opened by the user</li><li>Proxying local traffic to filter wish record URLs</li><li>Looking through the CefBrowser&#39;s browser cache to find wish record URLs</li><li>For Cookies containing Stoken, calling the genAuthKey API to obtain parameters</li><li>Advanced users manually inputting relevant URLs</li></ul></li></ul><p>Upon requesting the API, you receive fragmented wish records. Concatenating them provides a complete wish record list.</p><h2 id="wish-storage" tabindex="-1"><a class="header-anchor" href="#wish-storage" aria-hidden="true">#</a> Wish Storage</h2><p>After obtaining the complete wish record list, you can easily serialize it into a local database. When necessary, deserialization from the database presents it to the user.</p><p>Subsequent requests to the server only need to compare new data requests against the database&#39;s existing data.</p><p>This way, users can permanently store their account&#39;s complete wish records.</p><h2 id="uigf-format" tabindex="-1"><a class="header-anchor" href="#uigf-format" aria-hidden="true">#</a> UIGF Format</h2><blockquote><p>Unified Interchangeable GachaLog Format</p></blockquote><p>UIGF is a unified wish record data exchange standard, advocated, launched, and <strong>persistently maintained</strong> by us in collaboration with other wish record applications.</p><p>Standardized data formats enable users to transfer wish records between different tools for Genshin, each leveraging its distinctive functionalities.</p><h3 id="importing-wishes" tabindex="-1"><a class="header-anchor" href="#importing-wishes" aria-hidden="true">#</a> Importing Wishes</h3><p>When utilizing the UIGF data format, you can import data previously stored in other applications.</p><p>Hutao, during import handling, compares the earliest index (ID) existing in local storage and only imports older data.</p><p>(This is because newer data of higher precision is always available from miHoYo&#39;s servers.)</p><h3 id="exporting-wishes" tabindex="-1"><a class="header-anchor" href="#exporting-wishes" aria-hidden="true">#</a> Exporting Wishes</h3><p><s>Not yet implemented; under design</s> Already implemented</p>',24),n=[s];function o(h,l){return i(),a("div",null,n)}const p=e(r,[["render",o],["__file","Gacha-system-and-export-principal.html.vue"]]);export{p as default};
