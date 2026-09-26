/* =============================================================================
   script.js — Portofolio Wiweko Sinduadi
   Vanilla JS, tanpa dependency.

   STRUKTUR FILE INI:
     BAGIAN A — DATA (satu-satunya bagian yang perlu diedit saat menambah konten)
     BAGIAN B — RENDERER (membaca data -> HTML)
     BAGIAN C — INTERAKSI (nav mobile, scroll spy, reveal, tahun footer)

   CARA MENAMBAH PRESTASI / PROYEK:
     1. Buka BAGIAN A.
     2. Salin satu blok objek di dalam array, tempel di bagian atas/d bawah.
     3. Ubah nilainya. Tidak perlu menyentuh HTML sama sekali.
   ============================================================================= */

(function () {
  "use strict";

  /* ===========================================================================
     BAGIAN A — DATA
     ======================================================================== */

  /* --- Prestasi & Organisasi ---------------------------------------------- */
  /* Field:
       year    : tahun (string)
       title   : nama lomba / organisasi / kegiatan
       org     : penyelenggara (opsional, boleh "")
       place   : peringkat hasil perlombaan (opsional, boleh "")
       tags    : array of string (kategori / label)
       desc    : deskripsi singkat 1–2 kalimat
       sample  : true = kartu contoh (tampil bergaris putus-putus + badge "Contoh")
                 false atau dihapus = konten asli

     Untuk menambah entri: salin salah satu blok di bawah, lalu ubah nilainya.
     Urutan tampil mengikuti urutan tulis — terbaru diletakkan paling atas.
  */
  var ACHIEVEMENTS = [
    {
      year: "2026",
      title: "HackNation 2026 — Finalis",
      org: "HackNation",
      place: "Finalis",
      tags: ["Kompetisi", "Teknologi", "Tim"],
      desc: "Membangun prototipe platform bimbingan belajar daring PintarKuy bersama tim dan melaju ke tahap finalis. Sebagai pimpinan produksi saya membagi tugas dan memantau progress tim, menyiapkan materi visual, serta memandu presentasi dan demo ke juri.",
      sample: false
    },
    {
      year: "2020",
      title: "Juara 3 Turnamen Sepak Bola",
      org: "Turnamen SSB",
      place: "Juara 3",
      tags: ["Non-akademik", "Olahraga"],
      desc: "Juara ketiga turnamen sepak bola SSB. Berperan sebagai pemain dalam tim.",
      sample: false
    }
  ];

  /* --- Proyek / Karya ----------------------------------------------------- */
  /* Field:
       title : judul proyek
       desc  : deskripsi singkat
        tags  : array of string (teknologi / kategori)
        link  : URL proyek, satu link untuk satu kartu.
                Format https://read.bookcreator.com/... = link PUBLIK
                (dibuka siapa pun tanpa login) -> ini yang dipakai di bawah.
                Format https://app.bookcreator.com/books/... = link EDITOR,
                hanya untuk Anda yang login; pengunjung lain melihat
                halaman sign-in.
                Kalau "" / "#", kartu tidak bisa diklik dan footer-nya
                menulis "Link menyusul".
        linkLabel : teks di footer (opsional, default "Lihat proyek")
        image     : path gambar thumbnail (opsional, boleh "").
                    Disimpan relatif dari index.html, contoh:
                    "assets/projects/pintarkuy.png"
                    Kalau file belum ada, kartu tetap tampil rapi dengan
                    blok cadangan — tidak muncul gambar yang rusak.
        imageAlt  : teks alternatif untuk gambar (wajib diisi bila image ada)
        repo      : URL repository kode (opsional, boleh "").
                    Ditampilkan sebagai link terpisah di footer kartu.
        role      : peran Anda pada proyek (opsional, tampil di bawah judul)
        needsLogin: true = beri badge "Perlu login" di kartu (untuk link editor)
        sample: true = kartu contoh (garis putus-putus + badge "Contoh")
        featured: true = kartu jadi kartu utama: melebar 2 kolom, gambar di
                    samping kiri. Cukup pada satu kartu saja.
  */
  var PROJECTS = [
    {
      title: "PintarKuy",
      desc: "Prototipe platform bimbingan belajar daring untuk persiapan UTBK-SNBT. Sebagai koordinator produksi saya membagi tugas dan memantau progress tim, menyiapkan materi visual, serta memandu demo ke juri. Saya juga membangun fitur Ruang Belajar: ruang suara langsung berbasis WebRTC (LiveKit) dengan sinkronisasi materi realtime antara siswa dan guru, lengkap dengan fallback otomatis saat mikrofon gagal dan pengujian otomatis.",
      tags: ["Prototipe", "Laravel", "WebRTC", "Realtime", "Tailwind CSS"],
      role: "Koordinator Produksi · Full-stack",
      link: "https://hacknation-ftz1.vercel.app/",
      linkLabel: "Buka situs",
      repo: "https://github.com/kapidd-jpg/hacknation",
      image: "assets/projects/pintarkuy.png",
      imageAlt: "Tangkapan layar halaman depan PintarKuy",
      needsLogin: false,
      featured: true,
      sample: false
    },
    {
      title: "Remaja Handal Sehat Digital",
      desc: "Buku edukasi untuk remaja: memahami dunia digital yang dipakai sehari-hari, sekaligus menjaga agar konten media sosial tetap sehat dan tidak ikut negatif.",
      tags: ["Book Creator", "E-book", "Literasi Digital"],
      link: "https://read.bookcreator.com/VovDoQQ6S8fo377c5qdggwyggNA2/yT_u3_yXQX2_wGDA_2nglA",
      linkLabel: "Buka buku",
      needsLogin: false,
      sample: false
    },
    {
      title: "Kerajaan Islam di Indonesia",
      desc: "Mengisahkan kerajaan-kerajaan Islam di Indonesia — dari Aceh, Demak, Banten, hingga Mataram — beserta para sultan dan peran masing-masing.",
      tags: ["Book Creator", "E-book", "Sejarah"],
      link: "https://read.bookcreator.com/VovDoQQ6S8fo377c5qdggwyggNA2/CajCPufPQGuzAlohP_WOAQ",
      linkLabel: "Buka buku",
      needsLogin: false,
      sample: false
    },
    {
      title: "Undang-Undang Dasar Negara Indonesia",
      desc: "Ringkasan dasar negara kita: makna Pancasila, UUD 1945, hak dan kewajiban warga negara, hingga lembaga-lembaga negara.",
      tags: ["Book Creator", "E-book", "PPKn"],
      link: "https://read.bookcreator.com/VovDoQQ6S8fo377c5qdggwyggNA2/m6tdYYzzRk-0FAda7ujjMQ",
      linkLabel: "Buka buku",
      needsLogin: false,
      sample: false
    }
  ];

  /* --- Skill -------------------------------------------------------------- */
  /* Field:
       title  : nama kelompok
       note   : catatan singkat di bawah daftar (opsional)
       skills : array of string ATAU array of { name, note }
                 (note dipakai untuk menyertakan pencapaian, mis. "Juara 3")
  */
  var SKILLS = [
    {
      title: "Teknis",
      note: "Dapat ditelusuri di repository publik GitHub.",
      skills: [
        { name: "Laravel & PHP", note: "hacknation, MK3_api" },
        { name: "JavaScript", note: "Porto-Azmi, PSAJ_26" },
        { name: "HTML & CSS", note: "Porto-Azmi" },
        { name: "Tailwind CSS & Vite", note: "build PintarKuy" },
        { name: "PostgreSQL", note: "PSAJ_26" },
        "WebRTC (LiveKit)",
        "Pengujian otomatis"
      ]
    },
    {
      title: "Desain & Koordinasi",
      note: "Peran saya sebagai pimpinan produksi di HackNation 2026.",
      skills: [
        "Figma",
        "Materi visual proyek",
        "Koordinasi tugas & progress tim",
        "Presentasi & demo"
      ]
    },
    {
      title: "Non-akademik",
      note: "Aktivitas di luar kelas, termasuk capaian olahraga.",
      skills: [
        { name: "Sepak Bola", note: "Juara 3 Turnamen SSB (2020)" }
      ]
    }
  ];

  /* ===========================================================================
     BAGIAN B — RENDERER
     ======================================================================== */

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* Pemakaian: badge("Juara 3", "accent") -> <span class="badge badge-accent">.
     Variant boleh ditulis "accent" atau "badge-accent". */
  function badge(text, variant) {
    var v = variant ? String(variant).replace(/^badge-/, "") : "";
    var cls = v ? "badge badge-" + v : "badge";
    return '<span class="' + cls + '">' + esc(text) + "</span>";
  }

  function tagList(tags) {
    if (!tags || !tags.length) return "";
    return (
      '<div class="tag-list">' +
      tags
        .map(function (t) {
          return badge(t);
        })
        .join("") +
      "</div>"
    );
  }

  /* --- Prestasi ----------------------------------------------------------- */
  function renderAchievements() {
    var list = document.getElementById("achievements-list");
    if (!list) return;

    if (!ACHIEVEMENTS.length) {
      list.innerHTML =
        '<li class="empty-note">Belum ada data prestasi. Tambahkan di array ACHIEVEMENTS (script.js).</li>';
      return;
    }

    list.innerHTML = ACHIEVEMENTS.map(function (item) {
      var badges = "";

      if (item.place) badges += badge(item.place, "badge-accent");
      (item.tags || []).forEach(function (t) {
        badges += badge(t);
      });
      if (item.sample) badges += badge("Contoh", "badge-muted");

      return (
        '<li class="tl-item' + (item.sample ? " is-sample" : "") + '">' +
        '<div class="tl-year">' + esc(item.year || "—") + "</div>" +
        "<div>" +
        "<h3>" + esc(item.title || "Judul belum diisi") + "</h3>" +
        (item.org ? '<p class="tl-org">' + esc(item.org) + "</p>" : "") +
        '<p class="tl-desc">' + esc(item.desc || "") + "</p>" +
        '<div class="tl-badges">' + badges + "</div>" +
        "</div>" +
        "</li>"
      );
    }).join("");
  }

  /* --- Proyek ------------------------------------------------------------- */
  function renderProjects() {
    var grid = document.getElementById("projects-list");
    if (!grid) return;

    if (!PROJECTS.length) {
      grid.innerHTML =
        '<p class="empty-note">Belum ada data proyek. Tambahkan di array PROJECTS (script.js).</p>';
      return;
    }

    grid.innerHTML = PROJECTS.map(function (item, i) {
      var url = (item.link || "").trim();
      var hasLink = Boolean(url) && url !== "#";
      var label = item.linkLabel || "Lihat proyek";

      /* Hanya kartu pertama boleh jadi kartu utama, walau field featured
         ikut terisi di kartu lain. */
      var isFeatured = i === 0 && Boolean(item.featured);

      /* Gambar thumbnail. Kalau file-nya belum ada, onerror menandai <figure>
         dengan .is-empty lalu CSS menyembunyikan <img> yang gagal dimuat dan
         menggantinya dengan blok cadangan. Jadi halaman tidak pernah
         menampilkan gambar rusak. */
      var media = "";
      var img = (item.image || "").trim();
      if (img) {
        media =
          '<figure class="project-media" data-label="' +
          esc(item.title || "Proyek") +
          '">' +
          '<img src="' + esc(img) + '" alt="' + esc(item.imageAlt || "") +
          '" loading="lazy" decoding="async"' +
          ' onerror="this.closest(\'.project-media\').classList.add(\'is-empty\')">' +
          "</figure>";
      }

      /* Peran saya pada proyek, tampil di bawah judul. */
      var role = item.role
        ? '<p class="project-role">' + esc(item.role) + "</p>"
        : "";

      /* Link utama tetap pada judul saja, sehingga .project-link::after
         melebar di atas seluruh kartu dan seluruh area kartu bisa diklik.
         Tetap satu tab-stop untuk pengguna keyboard. */
      var title = hasLink
        ? '<a class="project-link" href="' + esc(url) + '" target="_blank" rel="noopener">' +
          esc(item.title || "Judul belum diisi") + "</a>"
        : esc(item.title || "Judul belum diisi");

      var cta = hasLink
        ? '<span class="project-cta">' + esc(label) + "</span>"
        : '<span class="project-cta" aria-disabled="true">Link menyusul</span>';

      /* Badge penanda: kartu contoh, atau link editor yang butuh login */
      var flags = "";
      if (item.sample) flags += badge("Contoh", "badge-muted");
      if (hasLink && item.needsLogin) flags += badge("Perlu login", "badge-muted");
      flags = flags ? '<span class="project-flags">' + flags + "</span>" : "";

      /* Link repository. Ini anchor KEDUA di dalam kartu, jadi butuh
         position: relative + z-index di CSS (.project-repo) supaya tidak
         tertimpa overlay .project-link::after yang menutupi seluruh kartu. */
      var repo = (item.repo || "").trim();
      var repoLink =
        repo && repo !== "#"
          ? '<a class="project-repo" href="' + esc(repo) +
            '" target="_blank" rel="noopener">Lihat kode</a>'
          : "";

      return (
        '<article class="project-card' +
        (hasLink ? " has-link" : "") +
        (isFeatured ? " is-featured" : "") +
        (item.sample ? " is-sample" : "") +
        '">' +
        media +
        '<div class="project-body">' +
        '<div class="project-top">' +
        '<span class="project-index">' + String(i + 1).padStart(2, "0") + "</span>" +
        flags +
        "</div>" +
        '<h3 class="project-title">' + title + "</h3>" +
        role +
        '<p class="project-desc">' + esc(item.desc || "") + "</p>" +
        tagList(item.tags) +
        '<div class="project-foot">' + cta + repoLink + "</div>" +
        "</div>" +
        "</article>"
      );
    }).join("");
  }

  /* --- Skill -------------------------------------------------------------- */
  function renderSkills() {
    var wrap = document.getElementById("skill-list");
    if (!wrap) return;

    wrap.innerHTML = SKILLS.map(function (group) {
      var items = (group.skills || [])
        .map(function (s) {
          if (typeof s === "string") {
            return '<li class="skill-item">' + esc(s) + "</li>";
          }
          var note = s.note
            ? ' <span class="badge badge-accent">' + esc(s.note) + "</span>"
            : "";
          return '<li class="skill-item">' + esc(s.name) + note + "</li>";
        })
        .join("");

      var count = (group.skills || []).length;

      return (
        '<div class="skill-group">' +
        '<div class="skill-group-head">' +
        "<h3>" + esc(group.title) + "</h3>" +
        '<span class="skill-group-count">' + count + " skill</span>" +
        "</div>" +
        '<ul class="skill-list">' + items + "</ul>" +
        (group.note ? '<p class="skill-item-note">' + esc(group.note) + "</p>" : "") +
        "</div>"
      );
    }).join("");
  }

  /* ===========================================================================
     BAGIAN C — INTERAKSI
     ======================================================================== */

  /* C1. Navigasi mobile */
  function initMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute(
        "aria-label",
        open ? "Tutup menu navigasi" : "Buka menu navigasi"
      );
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });

    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
    });
  }

  /* C2. Border header saat scroll */
  function initHeaderState() {
    var header = document.querySelector(".site-header");
    if (!header) return;

    function update() {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  /* C3. Scroll spy — menandai link nav sesuai section yang terlihat */
  function initScrollSpy() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll(".site-nav a[href^='#']")
    );
    if (!links.length) return;

    var map = {};
    var sections = [];

    links.forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      var section = document.getElementById(id);
      if (!section) return;
      map[id] = link;
      sections.push(section);
    });

    function setActive(id) {
      links.forEach(function (l) {
        l.classList.toggle("is-active", map[id] === l);
      });
    }

    if ("IntersectionObserver" in window) {
      var visible = {};

      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            visible[entry.target.id] = entry.isIntersecting
              ? entry.intersectionRatio
              : 0;
          });

          var bestId = null;
          var bestRatio = 0;
          Object.keys(visible).forEach(function (id) {
            if (visible[id] > bestRatio) {
              bestRatio = visible[id];
              bestId = id;
            }
          });

          if (bestId && bestRatio > 0) setActive(bestId);
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
      );

      sections.forEach(function (s) {
        observer.observe(s);
      });
    }

    setActive("beranda");
  }

  /* C4. Reveal saat section masuk viewport (transisi halus, opsional) */
  function initReveal() {
    var items = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    if (!items.length) return;

    var reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* C5. Tahun di footer */
  function initYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* --- Jalankan semua --- */
  function init() {
    renderAchievements();
    renderProjects();
    renderSkills();

    initMobileNav();
    initHeaderState();
    initScrollSpy();
    initReveal();
    initYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
