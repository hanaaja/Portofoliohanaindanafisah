# PORTFOLIO WEBSITE — HANA INDA NAFISAH

Website portofolio profesional berdasarkan CV yang diunggah, dengan gaya editorial sporty terinspirasi website Lando Norris.

## Menjalankan langsung di VS Code

1. Ekstrak ZIP.
2. Buka folder `portfolio-hana-indana` di Visual Studio Code.
3. Klik kanan `index.html` > `Open with Live Server`, atau klik ganda file `index.html` untuk membuka di browser.
4. Tidak membutuhkan instalasi React, NPM, Node.js, atau backend.

## Struktur file

```
portfolio-hana-indana/
├── index.html          -> Struktur halaman website
├── style.css           -> Warna, layout, animasi, dan responsif
├── script.js           -> Filter proyek, popup detail, navigasi, render data
├── data.js             -> SEMUA konten proyek, profil, pengalaman, skill
├── README.md           -> Panduan singkat
└── assets/             -> SEMUA aset gambar berformat .png
    ├── foto-hana.png
    ├── favicon.png
    ├── project-zero-day.png
    ├── project-drive-test.png
    ├── project-rf-planning.png
    ├── project-antenna.png
    ├── project-kai.png
    ├── project-aqua-growth.png
    ├── project-tomato.png
    └── project-innovation.png
```

**Catatan penting:** `index.html` tetap diperlukan untuk menampilkan website. Permintaan agar aset dalam format PNG telah diterapkan pada SEMUA foto, ilustrasi, gambar proyek, dan favicon; tidak ada file `.svg` ataupun aset yang disimpan sebagai HTML.

## Mengubah data CV

Buka `data.js` dan edit `window.portfolioData`:
- `profile`: nama, email, LinkedIn, foto, pendidikan, deskripsi singkat
- `projects`: 8 portofolio proyek, gambar, aktivitas, hasil, tag teknologi
- `experience`: pengalaman profesional
- `awards`: penghargaan
- `skills`: kemampuan dan perangkat lunak
- `certifications`: sertifikasi

Deskripsi hero & about mengikuti `profile.summary` di `data.js`; data identitas akademik secara visual ada di bagian About pada `index.html`.

## Mengganti ilustrasi dengan screenshot asli

1. Salin gambar PNG asli proyek ke `assets/`, misalnya `assets/drive-test-asli.png`.
2. Buka `data.js` dan ubah pada proyek terkait:

   `image: "assets/drive-test-asli.png"`

3. Sesuaikan `summary`, `activities`, `outcome`, dan `tools` dengan dokumentasi karya asli.
4. Untuk foto profil, ganti `assets/foto-hana.png` dengan PNG foto baru atau ubah `profile.photo`.

**Gambar proyek saat ini adalah mockup konseptual**, bukan screenshot aplikasi, hasil drive test Atoll/CST, peta QGIS, atau foto lapangan asli. Nilai/sinyal/pola teknis pada ilustrasi bukan data pengukuran.

## Sumber konten dan penggunaan publik

Konten disusun dari CV `Program Officer_ Hana Inda Nafisah(2).pdf`. Informasi telepon dari CV tidak ditampilkan secara publik; pengunjung dapat menghubungi melalui email atau LinkedIn. Sebelum mengunggah website ke GitHub Pages/Netlify/Vercel, mohon tinjau seluruh informasi identitas dan klaim teknis agar sesuai dengan dokumentasi asli dan preferensi privasi.

## Palet warna

- Electric lime: `#D2FF00`
- Charcoal olive: `#282C20`
- Off-white: `#EBEEE0`

Desain terinspirasi visual editorial motorsport; bukan afiliasi resmi atau salinan situs Lando Norris.
