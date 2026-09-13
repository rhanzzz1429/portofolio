# Portfolio Mukhammad Raihan Apriliansyah

Website portfolio pribadi yang dibuat menggunakan Next.js, TypeScript, dan Tailwind CSS. Website ini digunakan untuk menampilkan informasi diri, skills, dan project yang pernah dibuat, serta informasi kontak.

## Tentang Project

Portfolio ini dibuat sebagai project pembelajaran web development. Website dirancang dengan tampilan modern, responsive, dan mudah digunakan pada berbagai ukuran layar.

Di dalam website terdapat beberapa bagian utama, yaitu:

- Home
- About
- Skills
- Projects
- Journey
- Contact

Selain halaman utama, terdapat halaman khusus untuk menampilkan seluruh project dan halaman detail untuk setiap project.

## Teknologi yang Digunakan

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Fitur

Beberapa fitur yang terdapat pada website:

- Responsive design
- Navbar dengan mobile menu
- Animasi menggunakan Framer Motion
- Pencarian project berdasarkan judul
- Filter project berdasarkan kategori
- Filter Featured Project
- Halaman semua project
- Halaman detail project
- Dynamic routing
- Halaman 404
- Counter apresiasi
- Navigasi antar halaman

## Struktur Component

Project menggunakan component agar kode lebih terstruktur dan mudah dikembangkan.

Beberapa component yang digunakan:

- `Navbar.tsx` untuk navigasi website
- `Hero.tsx` untuk bagian utama halaman
- `About.tsx` untuk informasi tentang diri
- `Skills.tsx` untuk menampilkan kemampuan
- `Projects.tsx` untuk menampilkan project
- `Journey.tsx` untuk menampilkan perjalanan belajar
- `Contact.tsx` untuk informasi kontak
- `Footer.tsx` untuk bagian footer
- `CounterApresiasi.tsx` untuk fitur counter apresiasi
- `MobileMenu.tsx` untuk menu pada perangkat mobile

## Dynamic Routing

Website menggunakan dynamic routing dari Next.js untuk membuat halaman detail project.

Halaman project menggunakan struktur:

`/proyek/[id]`

Contoh:

- `/proyek/1` → Manajemen Siswa
- `/proyek/2` → Resep Masakan Nusantara
- `/proyek/3` → Manajemen Magang

Setiap project memiliki halaman detail yang berbeda berdasarkan ID project.

Jika ID project tidak ditemukan, website akan menampilkan halaman 404.

## Data Project

Data project disimpan secara terpisah di:

`src/data/proyek.ts`

Data tersebut berisi informasi seperti:

- ID project
- Judul project
- Kategori
- Deskripsi singkat
- Deskripsi lengkap
- Teknologi yang digunakan
- Status featured

Dengan cara ini, data project lebih mudah dikelola dan digunakan kembali pada halaman project maupun halaman detail.

## Project yang Dibuat

### 1. Manajemen Siswa

Dashboard untuk mengelola data siswa, kelas, absensi, dan pelanggaran.

Teknologi:
- Next.js
- TypeScript
- Supabase

### 2. Resep Masakan Nusantara

Website yang berisi kumpulan resep masakan khas Nusantara.

Teknologi:
- Figma
- UI/UX

### 3. Manajemen Magang

Dashboard untuk mengelola data siswa dan progress kegiatan magang.

Teknologi:
- Next.js
- TypeScript
- Supabase

### 4. Manajemen Kas

Aplikasi untuk mengelola pemasukan, pengeluaran, dan laporan kas.

Teknologi:
- Figma
- UI/UX

### 5. Nouve Wear

Website toko online dengan tampilan sederhana dan modern.

Teknologi:
- Figma
- UI/UX

## Responsive Design

Website dibuat menggunakan pendekatan responsive sehingga dapat digunakan pada berbagai ukuran layar, mulai dari smartphone hingga desktop.

Tampilan juga disesuaikan agar tetap nyaman digunakan pada ukuran layar kecil.

## Cara Menjalankan Project

Clone repository:

```bash
git clone https://github.com/rhanzzz1429/portofolio.git