# Folder `assets/`

Tempatkan file media di sini. Tidak ada proses build — cukup letakkan file,
lalu tulis path-nya di `script.js` atau `index.html`.

## Screenshot proyek (opsional)

1. Buka situs proyek di browser, lalu perbesar jendela sampai ukuran
   viewport sekitar 1600 × 1000 px (atau pakai mode responsif di DevTools).
2. Ambil tangkapan layar **area halaman**, bukan layar penuh dengan tab
   browser. Di Chrome: `Ctrl+Shift+P` → ketik `screenshot` →
   **Capture visible size**.
3. Simpan sebagai `assets/projects/pintarkuy.png` (PNG lebih tajam untuk
   teks; JPG/JPEG juga boleh asal di bawah ±400 KB).
4. Tidak perlu menyentuh HTML. Path-nya sudah terdaftar di `script.js` pada
   entri PintarKuy:

```js
image: "assets/projects/pintarkuy.png",
imageAlt: "Tangkapan layar halaman depan PintarKuy",
```

Kalau file-nya belum ada, kartu **tetap tampil rapi** — `onerror` pada
`<img>` menandai figurnya dengan `.is-empty` dan CSS menggantinya dengan
blok cadangan berisi nama proyek. Tidak akan muncul gambar rusak.

Thumbnail lain (misalnya buku digital) bisa memakai aturan yang sama: taruh
filenya di sini, lalu isi field `image` + `imageAlt` pada entri yang
bersesuaian di array `PROJECTS`. Field `image` boleh dikosongkan — kartu
tanpa gambar tetap valid.

## Foto profil (opsional)

1. Simpan foto di sini, misalnya `wiweko.jpg` (disarankan lebar 600–800px, format JPG/PNG/WebP).
2. Buka `index.html`, cari baris ini di dalam section Hero:

```html
<!-- <img class="avatar-img" src="assets/wiweko.jpg" alt="Foto profil Wiweko Sinduadi" onerror="this.remove()"> -->
```

3. Hapus `<!--` dan `-->` supaya baris tersebut aktif.
4. Hapus blok `<div class="avatar">...</div>` di bawahnya (avatar inisial akan otomatis muncul kembali bila foto gagal dimuat).

## Struktur saat ini

```
assets/
├── projects/              # screenshot proyek
└── README.md
```
