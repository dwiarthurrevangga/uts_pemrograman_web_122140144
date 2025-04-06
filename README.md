# 🗂️ Assassin's Creed Archive

Website katalog dan timeline lengkap dari seri game **Assassin's Creed**, dibangun menggunakan React dan Bootstrap. Proyek ini memungkinkan pengguna untuk melihat daftar game, membaca ringkasan, mencari game tertentu, dan menelusuri timeline cerita berdasarkan data dari MockAPI.

## 🚀 Live Demo
🌐 [https://uts-pemrograman-web-122140144.vercel.app](https://uts-pemrograman-web-122140144.vercel.app)

---

## 📦 Fitur Utama

- 🔍 Pencarian game berdasarkan judul
- 📜 Timeline cerita Assassin's Creed dalam bentuk visual
- 📱 Responsif & mobile-friendly
- 🌐 Data game dan timeline diambil dari [MockAPI.io](https://mockapi.io)
- 🧭 Navigasi menggunakan React Router
- 🎮 Desain modern dengan Bootstrap

---

## 🛠️ Teknologi yang Digunakan

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [MockAPI.io](https://mockapi.io) – penyedia REST API
- [React Vertical Timeline Component](https://www.npmjs.com/package/react-vertical-timeline-component)

---

## 📁 Struktur Proyek

```bash
src/
├── components/
│   ├── Navbar.jsx
│   ├── GameList.jsx
│   └── Timeline.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   └── NotFound.jsx
├── App.jsx
└── main.jsx

---

## 📱 Optimalisasi Mobile

Website ini telah dioptimalkan agar nyaman diakses dari perangkat seluler:

- ✅ Menggunakan **Bootstrap 5** untuk layout yang responsif (grid system & utility classes)
- ✅ Tombol hamburger (`navbar-toggler`) berfungsi dengan baik di perangkat mobile
- ✅ Navbar collapse otomatis saat diklik di layar kecil
- ✅ Ukuran teks, padding, dan margin disesuaikan agar ramah layar kecil
- ✅ Visual timeline tetap readable di mode portrait dan landscape

> Pastikan file `bootstrap.bundle.min.js` digunakan (bukan hanya `bootstrap.min.js`) agar komponen seperti toggle navbar bekerja dengan benar.

---

## 📌 Catatan

- Proyek ini dibuat sebagai bagian dari **UTS Pemrograman Web ITERA**.
- Semua data game dan timeline diambil secara dinamis dari **MockAPI.io**.
- Kamu bisa mengedit, menambah, atau menghapus data langsung dari dashboard MockAPI milikmu.
- Telah dilakukan **testing di berbagai resolusi layar**, termasuk browser Android dan iOS.
- Aplikasi ini menggunakan **React Router** untuk navigasi dan **React Hooks** seperti `useState`, `useEffect`, dan `useContext`.

---

## 🧑‍💻 Kontributor

| Nama Lengkap       | NIM       | Program Studi              |
|--------------------|-----------|----------------------------|
| Dwi Arthurev Angga | 122140144 | Teknik Informatika - ITERA |
