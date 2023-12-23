import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o,c as s,a,b as e,d as i,e as t}from"./app-lq5QJJSN.js";const d={},u=a("h1",{id:"kesalahan-umum-program",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#kesalahan-umum-program","aria-hidden":"true"},"#"),e(" Kesalahan Umum Program")],-1),k=a("p",null,[e("Dokumen ini mencakup solusi untuk "),a("strong",null,"kesalahan klien yang dapat diprediksi")],-1),p=a("h2",{id:"runtimeenvironmentexception",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#runtimeenvironmentexception","aria-hidden":"true"},"#"),e(" RuntimeEnvironmentException")],-1),c=a("li",null,[e("Exception: "),a("code",null,"RuntimeEnvironmentException"),a("ul",null,[a("li",null,[e("Hint: "),a("code",null,"Tidak dapat menyetel kunci registri tanpa mengaktifkan jalur panjang")])])],-1),m=a("li",null,"Sumber masalah: Batas jalur panjang Windows diatur secara default menjadi terbatas pada 256 karakter",-1),h={href:"https://d.hut.ao/d/tools/EnableLongPaths.zip",target:"_blank",rel:"noopener noreferrer"},g=a("code",null,".reg",-1),b=t('<h2 id="kode-return-10001" tabindex="-1"><a class="header-anchor" href="#kode-return-10001" aria-hidden="true">#</a> Kode Return: -10001</h2><ul><li>Kesalahan ini berasal langsung dari MiHoYo BBS, dengan petunjuk: <ul><li><code>Return Code: -10001</code></li><li><code>Return Code: -100</code></li></ul></li><li>Sumber masalah <ol><li>Cookie kedaluwarsa</li><li>Kesalahan jaringan</li><li>Waktu sistem tidak akurat</li></ol></li><li>Solusi <ol><li>Di panel akun, jalankan <code>Refresh Cookies</code></li><li>Hapus akun Anda dan tambahkan kembali</li><li>Sinkronkan waktu sistem Anda</li></ol></li></ul><h2 id="kode-return-1034-verifikasi-gagal" tabindex="-1"><a class="header-anchor" href="#kode-return-1034-verifikasi-gagal" aria-hidden="true">#</a> Kode Return: 1034 Verifikasi Gagal</h2><ul><li>Jika Snap Hutao mengembalikan kode status <code>1034</code> dan mengindikasikan kegagalan verifikasi (biasanya selama operasi Catatan Langsung), itu berarti operasi diblokir oleh sistem anti-bot MiHoYo BBS</li><li>Solusi: <ul><li>Masuk ke <code>Catatan Langsung</code></li><li>Klik tombol <code>Verify Current User and Role</code></li><li>Ikuti instruksi di MiHoYo BBS untuk melakukan verifikasi</li><li>Setelah menyelesaikan proses verifikasi, klik <code>Selesai</code> untuk menutup jendela verifikasi</li><li>Sekarang, akun seharusnya kembali normal; Jika tidak, ulangi langkah di atas<div class="hint-container tip"><p class="hint-container-title">Tips</p></div></li></ul></li></ul><p>Jika peringatan risiko terlalu sering, atau verifikasi tidak dapat dipicu sama sekali, ini berarti risiko akun Anda terlalu tinggi, silakan ubah kata sandi, sehingga status login simultan dari beberapa perangkat akan diatur ulang</p><p>:::</p><div class="hint-container warning"><p class="hint-container-title">Penting</p><ul><li>Anda hampir tidak dapat melewati verifikasi yang tidak terlihat saat akun Anda <strong>login pada alat Genshin lain yang jarak jauh</strong> atau <strong>login di beberapa perangkat</strong>. Ini adalah desain keamanan dari MiHoYo BBS, dan tidak dapat dilewati</li><li>Jika Anda menggunakan <strong>beberapa akun MiHoYo BBS di perangkat Anda</strong>, <strong>penggunaan sering dengan API MiHoYo BBS</strong> akan mengakibatkan alamat IP Anda diblokir untuk jangka waktu tertentu (biasanya tidak lebih dari 24 jam). Ini adalah desain keamanan dari MiHoYo BBS, dan tidak dapat dilewati</li></ul></div><h2 id="httprequestexception-metadata-download-failed" tabindex="-1"><a class="header-anchor" href="#httprequestexception-metadata-download-failed" aria-hidden="true">#</a> HttpRequestException Metadata Download Failed</h2><h3 id="_403-terlarang-404-tidak-ditemukan" tabindex="-1"><a class="header-anchor" href="#_403-terlarang-404-tidak-ditemukan" aria-hidden="true">#</a> 403 (Terlarang) / 404 (Tidak Ditemukan)</h3><p>Solusi: Perbarui Snap Hutao Anda ke versi terbaru</p><h3 id="_502-gerbang-buruk" tabindex="-1"><a class="header-anchor" href="#_502-gerbang-buruk" aria-hidden="true">#</a> 502 (Gerbang Buruk)</h3>',11),_={href:"https://github.com/DGP-Studio/Snap.Hutao/issues/100",target:"_blank",rel:"noopener noreferrer"},f=a("p",null,"Exception HTTP ini terjadi ketika Snap Hutao gagal mengambil sumber daya remote (biasanya gambar statis dan konfigurasi)",-1),x=a("p",null,[a("img",{src:"https://img.alicdn.com/imgextra/i3/1797064093/O1CN01Tb2RUm1g6du5YeNuy_!!1797064093.jpg",alt:"HttpRequestException",loading:"lazy"})],-1),S={href:"https://www.telerik.com/fiddler/add-ons",target:"_blank",rel:"noopener noreferrer"},v={href:"https://learn.microsoft.com/zh-CN/windows/iot-core/develop-your-app/loopback",target:"_blank",rel:"noopener noreferrer"},w=t(`<p>Anda juga dapat menjalankan skrip PowerShell berikut untuk menghapus semua batasan loopback kontainer</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token keyword">FOR</span> <span class="token operator">/</span>F <span class="token string">&quot;tokens=11 delims=\\&quot;</span> <span class="token operator">%</span>p IN <span class="token punctuation">(</span><span class="token string">&#39;REG QUERY &quot;HKCU\\Software\\Classes\\Local Settings\\Software\\Microsoft\\Windows\\CurrentVersion\\AppContainer\\Mappings&quot;&#39;</span><span class="token punctuation">)</span> <span class="token keyword">DO</span> CheckNetIsolation<span class="token punctuation">.</span>exe LoopbackExempt <span class="token operator">-</span>a <span class="token operator">-</span>p=<span class="token operator">%</span>p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="kesalahan-menemukan-modul-yang-diperlukan" tabindex="-1"><a class="header-anchor" href="#kesalahan-menemukan-modul-yang-diperlukan" aria-hidden="true">#</a> Kesalahan Menemukan Modul yang Diperlukan</h2><p>Ketika pengguna meluncurkan game dengan fitur membuka pembatasan frame-rate, game mungkin gagal diluncurkan dengan munculnya kesalahan berikut:</p><ol><li>Kesalahan menemukan modul yang diperlukan: tidak dapat membaca modul apa pun, driver perlindungan mungkin telah dimuat</li><li>Kesalahan menemukan modul yang diperlukan: time-out</li></ol><p>Masalah ini hanya terjadi ketika modul anti-cheat Genshin Impact mulai lebih awal daripada modul pembuka pembatasan frame-rate. Ketika kesalahan ini terjadi, Snap Hutao akan keluar dari proses game, dan Anda dapat meluncurkan ulang game.</p>`,6);function y(j,B){const n=r("ExternalLinkIcon");return o(),s("div",null,[u,k,p,a("ul",null,[c,m,a("li",null,[e("Solusi: Unduh "),a("a",h,[e("EnableLongPaths.zip"),i(n)]),e(", ekstrak, lalu jalankan file "),g])]),b,a("blockquote",null,[a("p",null,[e("Masalah Terkait: "),a("a",_,[e("https://github.com/DGP-Studio/Snap.Hutao/issues/100"),i(n)])])]),f,x,a("p",null,[e("Jika Anda menggunakan perangkat lunak proxy, Anda mungkin perlu mematikannya atau menggunakan mode proxy TUN; jika tidak, Anda perlu menggunakan "),a("a",S,[e("Utilitas Batasan Loopback Kontainer APP Windows 8"),i(n)]),e(" untuk menghapus "),a("a",v,[e("batasan loopback aplikasi Windows APP"),i(n)]),e(".")]),w])}const E=l(d,[["render",y],["__file","exceptions.html.vue"]]);export{E as default};
