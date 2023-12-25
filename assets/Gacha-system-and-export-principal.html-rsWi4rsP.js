import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,e as i}from"./app-_sEvRTT9.js";const t={},r=i('<h1 id="sistem-gacha-dan-prinsip-expor" tabindex="-1"><a class="header-anchor" href="#sistem-gacha-dan-prinsip-expor" aria-hidden="true">#</a> Sistem Gacha dan Prinsip Expor</h1><p>Sistem Gacha di Hutao mengalami redesain total dalam hal arsitektur dibandingkan dengan Snap Genshin.</p><p>Dokumen ini akan menjelaskan mekanisme catatan gacha dalam Genshin Impact dan prinsip teknis fungsi ekspor catatan gacha dalam Toolbox Hutao.</p><h2 id="perolehan-catatan-gacha" tabindex="-1"><a class="header-anchor" href="#perolehan-catatan-gacha" aria-hidden="true">#</a> Perolehan Catatan Gacha</h2><p>Untuk mendapatkan catatan gacha, perlu dilakukan permintaan ke API milik miHoYo.</p><p>Berikut adalah beberapa poin penting mengenai API ini:</p><ul><li>Melalui API server miHoYo, kita hanya dapat mengakses catatan gacha dalam 6 bulan terakhir. <ul><li>Ini juga merupakan sumber catatan gacha di aplikasi Genshin Impact.</li></ul></li><li>API ini memiliki batasan kecepatan permintaan; permintaan terlalu cepat dapat menyebabkan kegagalan permintaan berikutnya dan kegagalan mendapatkan data dengan normal.</li></ul><p>Untuk melakukan permintaan ke API ini, kita memerlukan empat parameter kunci.</p><ul><li>Saat ini, ada beberapa metode untuk mendapatkan parameter-parameter ini: <ul><li>Melalui log file Unity, mencari URL catatan gacha yang dibuka pengguna.</li><li>Memantau lalu lintas lokal, menyaring URL catatan gacha.</li><li>Mencari cache browser CefBrowser, menemukan URL catatan gacha.</li><li>Dengan menggunakan Cookie yang berisi Stoken, memanggil API genAuthKey untuk mendapatkan parameter-parameter ini.</li><li>Pengguna lanjutan dapat memasukkan URL terkait secara manual.</li></ul></li></ul><p>Setelah mendapatkan data dari API, kita mendapatkan catatan gacha yang tersebar, dan dengan menggabungkannya, kita bisa mendapatkan daftar catatan gacha lengkap.</p><h2 id="penyimpanan-catatan-gacha" tabindex="-1"><a class="header-anchor" href="#penyimpanan-catatan-gacha" aria-hidden="true">#</a> Penyimpanan Catatan Gacha</h2><p>Setelah mendapatkan daftar catatan gacha lengkap, kita dapat menyederhanakannya dengan melakukan serialisasi ke dalam database lokal. Data ini dapat di-deserialisasi dari database saat diperlukan dan ditampilkan kepada pengguna.</p><p>Permintaan selanjutnya ke server hanya perlu membandingkan data di database dengan data baru yang diterima.</p><p>Dengan cara ini, pengguna dapat menyimpan catatan gacha akun mereka dalam jangka panjang.</p><h2 id="format-uigf" tabindex="-1"><a class="header-anchor" href="#format-uigf" aria-hidden="true">#</a> Format UIGF</h2><blockquote><p>Uniformed Interchangeable GachaLog Format</p></blockquote><p>UIGF adalah standar data pertukaran catatan gacha yang telah kami advokasi, luncurkan, dan <strong>selalu kami pertahankan</strong> bersama aplikasi catatan gacha lainnya.</p><p>Dengan format data yang terstandarisasi, pengguna dapat memindahkan catatan gacha mereka antar berbagai alat Genshin Impact untuk menggunakan fitur khusus masing-masing.</p><h3 id="impor-catatan-gacha" tabindex="-1"><a class="header-anchor" href="#impor-catatan-gacha" aria-hidden="true">#</a> Impor Catatan Gacha</h3><p>Dengan menggunakan format data UIGF, pengguna dapat mengimpor data yang pernah disimpan dalam aplikasi lain.</p><p>Saat Hutao memproses impor, ia akan membandingkan indeks (ID) yang paling awal yang ada dalam penyimpanan lokal dan hanya mengimpor data yang lebih lama.</p><p>(Karena data asli yang lebih baru selalu dapat diambil dari server miHoYo, data semacam ini memiliki tingkat akurasi yang lebih tinggi.)</p><h3 id="ekspor-catatan-gacha" tabindex="-1"><a class="header-anchor" href="#ekspor-catatan-gacha" aria-hidden="true">#</a> Ekspor Catatan Gacha</h3><p><s>Belum diimplementasikan, sedang dalam perancangan</s> Sudah diimplementasikan</p>',24),p=[r];function m(d,l){return n(),e("div",null,p)}const g=a(t,[["render",m],["__file","Gacha-system-and-export-principal.html.vue"]]);export{g as default};
