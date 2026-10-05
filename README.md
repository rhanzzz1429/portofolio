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

## Database

Project ini menggunakan Supabase sebagai database untuk menyimpan data portfolio.

### Table: proyek

| Column | Type | Description |
|---|---|---|
| id | int8 | ID unik setiap project |
| judul | text | Judul project |
| kategori | text | Kategori project |
| deskripsi_singkat | text | Deskripsi singkat project |
| deskripsi_lengkap | text | Deskripsi lengkap project |
| teknologi | text | Teknologi yang digunakan |
| featured | bool | Menentukan apakah project ditampilkan sebagai featured |

### RLS Policy

Table `proyek` menggunakan Row Level Security (RLS).

Policy yang dibuat:

- **Name:** `public_read_proyek`
- **Command:** `SELECT`
- **Target roles:** `public`
- **Condition:** `true`

Policy tersebut digunakan agar data project dapat dibaca oleh aplikasi portfolio.

---
## Admin Panel

Pada Pertemuan 04, project portfolio dikembangkan dengan menambahkan halaman Admin Panel yang digunakan untuk mengelola data project.

Admin Panel dilindungi menggunakan Supabase Authentication sehingga hanya pengguna yang sudah login yang dapat mengakses halaman admin.

Halaman admin terdiri dari:

- Dashboard Admin
- Kelola Proyek
- Tambah Proyek
- Edit Proyek
- Hapus Proyek
- Admin Login
- Logout
- Back to Portfolio

## Supabase Authentication

Admin Panel menggunakan Supabase Authentication untuk proses login.

Admin harus login menggunakan email dan password sebelum dapat mengakses halaman admin.

Jika pengguna belum login, halaman admin akan mengarahkan pengguna ke:

`/admin/login`

Setelah berhasil login, pengguna akan diarahkan ke halaman:

`/admin`

Fitur logout digunakan untuk mengakhiri session admin dan mengarahkan kembali ke halaman login.

## Server Actions

Project ini menggunakan Server Actions dari Next.js untuk menjalankan operasi yang berhubungan dengan database dari sisi server.

Server Actions digunakan untuk:

- Menambahkan project
- Mengubah project
- Menghapus project
- Login admin
- Logout admin

Dengan Server Actions, operasi CRUD dapat dilakukan tanpa membuat API Route terpisah.

## CRUD Project

Admin Panel memiliki fitur CRUD untuk mengelola data project.

### Create

Admin dapat menambahkan project baru melalui form tambah project.

Data yang dapat ditambahkan meliputi:

- Judul project
- Kategori
- Deskripsi singkat
- Deskripsi lengkap
- Teknologi
- Featured

### Read

Admin dapat melihat seluruh data project yang tersimpan di database Supabase melalui halaman:

`/admin/proyek`

### Update

Admin dapat mengubah data project yang sudah tersimpan dengan memilih tombol Edit.

Halaman edit akan menampilkan data project sebelumnya dan dapat diperbarui oleh admin.

### Delete

Admin dapat menghapus project yang sudah tidak diperlukan menggunakan tombol Hapus.

Setelah operasi CRUD dilakukan, data pada halaman admin dan halaman portfolio akan diperbarui menggunakan `revalidatePath`.

## Proteksi Halaman Admin

Halaman Admin Panel menggunakan proteksi route untuk mencegah pengguna yang belum memiliki akses masuk ke halaman admin.

Route yang dilindungi meliputi:

- `/admin`
- `/admin/proyek`
- `/admin/proyek/edit/[id]`

Jika pengguna mencoba mengakses halaman admin tanpa autentikasi yang sesuai, pengguna akan diarahkan ke halaman yang sesuai berdasarkan status akses.

## Admin Door

Project ini memiliki fitur tambahan berupa Admin Door sebagai akses tambahan menuju halaman login admin.

Admin Door menggunakan URL khusus:

`/?door=admin-master`

Setelah Admin Door dibuka, sistem menyimpan akses menggunakan cookie `admin_door`.

Tombol **Admin Login** pada halaman portfolio hanya ditampilkan ketika Admin Door sudah aktif.

Fitur ini dibuat sebagai pengembangan tambahan pada project Modul 4.

## Responsive Admin Dashboard

Admin Dashboard dibuat responsive agar dapat digunakan pada berbagai ukuran layar.

Pada desktop, Admin Dashboard menggunakan sidebar yang berisi:

- Dashboard
- Proyek
- Exit

Pada perangkat dengan ukuran layar lebih kecil, sidebar berubah menjadi navbar dengan hamburger menu.

Hamburger menu berisi:

- Dashboard
- Proyek
- Logout
- Back to Portfolio

Dengan responsive design, halaman admin tetap dapat digunakan dengan nyaman pada desktop maupun perangkat mobile.

## Exit Menu

Admin Dashboard memiliki menu Exit pada bagian bawah sidebar desktop.

Ketika tombol Exit ditekan, terdapat dua pilihan:

### Logout

Logout digunakan untuk keluar dari akun admin.

Setelah logout, session Supabase akan dihapus dan pengguna diarahkan kembali ke:

`/admin/login`

### Back to Portfolio

Back to Portfolio digunakan untuk kembali ke halaman utama portfolio.

Pilihan ini tidak melakukan logout sehingga session admin tetap tersimpan.

## Struktur Admin

Struktur halaman admin pada project ini adalah:

text
src
└── app
    └── admin
        ├── (dashboard)
        │   ├── page.tsx
        │   ├── layout.tsx
        │   ├── components
        │   │   ├── StatCard.tsx
        │   │   ├── CategoryChart.tsx
        │   │   ├── FeaturedChart.tsx
        │   │   ├── RecentProjects.tsx
        │   │   ├── ExitMenu.tsx
        │   │   └── MobileNavbar.tsx
        │   └── proyek
        │       ├── page.tsx
        │       └── edit
        │           └── [id]
        │               └── page.tsx
        │
        └── login
            └── page.tsx


## Modul Pertemuan 05 — Optimasi SEO, Metadata & Performa Website

Pada Pertemuan 05, project portfolio dikembangkan kembali dengan menambahkan optimasi SEO, metadata, Open Graph, sitemap, robots.txt, dan optimasi gambar.

Pengembangan ini bertujuan agar website lebih mudah dikenali oleh mesin pencari, memiliki informasi metadata yang lebih lengkap, serta memiliki performa dan accessibility yang lebih baik.

### SEO dan Metadata

Website menggunakan metadata pada `layout.tsx` untuk memberikan informasi dasar kepada mesin pencari dan platform yang menampilkan link website.

Metadata yang ditambahkan meliputi:

- `metadataBase`
- `title`
- `description`
- `openGraph`

Website juga menggunakan `title template` sehingga judul halaman dapat menyesuaikan dengan halaman yang sedang dibuka.

### Dynamic Metadata

Pada halaman detail project, metadata dibuat secara dinamis menggunakan `generateMetadata`.

Metadata mengambil data project langsung dari Supabase berdasarkan ID project.

Data yang digunakan meliputi:

- Judul project
- Deskripsi singkat project
- Open Graph title
- Open Graph description

Dengan dynamic metadata, setiap halaman detail project memiliki informasi metadata yang berbeda sesuai dengan data project.

### Open Graph Image

Website menggunakan automatic Open Graph image melalui:

`src/app/opengraph-image.tsx`

Open Graph image dibuat menggunakan `ImageResponse` dari `next/og`.

Ukuran gambar yang digunakan adalah:

- Width: 1200px
- Height: 630px

Open Graph image digunakan ketika halaman website dibagikan melalui platform yang mendukung link preview.

### Robots.txt

Website memiliki file:

`src/app/robots.ts`

File tersebut digunakan untuk memberikan aturan kepada mesin pencari mengenai halaman yang boleh dan tidak boleh diakses.

Konfigurasi yang digunakan:

- Mengizinkan akses ke `/`
- Melarang crawler mengakses `/admin/`
- Menyediakan alamat `sitemap.xml`

Dengan konfigurasi tersebut, halaman admin tidak diarahkan untuk di-crawl oleh mesin pencari.

### Sitemap.xml

Website memiliki sitemap yang dibuat melalui:

`src/app/sitemap.ts`

Sitemap berisi URL halaman utama dan halaman project.

Data project diambil secara dinamis dari tabel `proyek` di Supabase sehingga setiap project yang tersedia memiliki URL pada sitemap.

Halaman yang terdapat pada sitemap meliputi:

- Halaman utama
- Halaman semua project
- Halaman detail setiap project

Contoh URL:

- `/`
- `/proyek`
- `/proyek/1`
- `/proyek/2`
- `/proyek/3`

dan halaman project lainnya sesuai dengan data yang tersedia di Supabase.

### Optimasi Gambar

Untuk meningkatkan performa website, gambar menggunakan component `Image` dari Next.js melalui:

`next/image`

Penggunaan `next/image` diterapkan pada gambar utama portfolio.

Gambar juga diberikan `alt` yang deskriptif untuk membantu accessibility.

Contoh:

```tsx
<Image
  src="/hanz.png"
  alt="Foto profil Mukhammad Raihan Apriliansyah"
  fill
  priority
  className="object-cover"
  sizes="(max-width: 768px) 250px, 270px"
/>