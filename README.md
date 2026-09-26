# Portofolio — Wiweko Sinduadi

Portofolio pribadi siswa SMK Telkom Purwokerto, calon mahasiswa **Hubungan
Internasional Universitas Diponegoro**.

Situsnya statis: satu halaman, tanpa framework, tanpa proses build. Cukup buka
`index.html` di browser.

## Isi

| Section | Sumber data |
|---|---|
| Beranda / Tentang / Ringkasan | langsung di `index.html` |
| Prestasi & Organisasi | array `ACHIEVEMENTS` di `script.js` |
| Proyek / Karya | array `PROJECTS` di `script.js` |
| Skill | array `SKILLS` di `script.js` |
| Kontak | langsung di `index.html` |

Hampir semua konten ada di **BAGIAN A** `script.js`. Menambah prestasi atau
proyek cukup menyalin satu blok objek — tidak perlu menyentuh HTML.

## Menambah proyek

```js
{
  title: "Nama Proyek",
  desc: "Deskripsi singkat.",
  tags: ["Tag1", "Tag2"],
  role: "Peran saya",                          // opsional
  link: "https://...",                         // link utama
  linkLabel: "Buka situs",                     // opsional
  repo: "https://github.com/...",              // opsional
  image: "assets/projects/nama.png",           // opsional
  imageAlt: "Tangkapan layar",                 // wajib bila image ada
  needsLogin: false,
  featured: true                               // hanya satu kartu
}
```

Kartu pertama boleh diberi `featured: true` supaya melebar penuh dengan gambar
di sisi kanan. Kartu lainnya otomatis mengikuti struktur yang sama.

Kalau `image` diisi tapi filenya belum ada, kartu tetap tampil rapi dengan
blok cadangan — tidak muncul gambar rusak.

## Menjalankan secara lokal

```bash
# Live reload, berguna saat menyunting
npx serve .

# atau server bawaan PHP
php -S localhost:8000
```

## Struktur

```
.
├── index.html          # struktur halaman
├── style.css           # seluruh gaya
├── script.js           # data (BAGIAN A) + renderer (BAGIAN B) + interaksi (BAGIAN C)
├── assets/
│   ├── README.md       # cara memasang foto profil & screenshot proyek
│   └── projects/       # screenshot proyek
└── README.md
```

## Kontak

- Email — <wsinduadi@gmail.com>
- Instagram — [@wiweko_synd](https://instagram.com/wiweko_synd)
- GitHub — [wiskas-sys](https://github.com/wiskas-sys)
