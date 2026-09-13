export interface Proyek {
  id: number;
  judul: string;
  kategori: string;
  deskripsiSingkat: string;
  deskripsiLengkap: string;
  teknologi: string[];
  featured: boolean;
}

export const proyek: Proyek[] = [
  {
    id: 1,
    judul: "Manajemen Siswa",
    kategori: "Dashboard",
    deskripsiSingkat:
      "Dashboard untuk mengelola data siswa, kelas, absensi, dan pelanggaran.",
    deskripsiLengkap:
      "Project Manajemen Siswa dibuat untuk membantu sekolah dalam mengelola data siswa secara digital. Sistem ini menyediakan pengelolaan data siswa, kelas, absensi, serta pelanggaran sehingga informasi dapat dikelola dengan lebih mudah dan terstruktur.",
    teknologi: ["Next.js", "TypeScript", "Supabase"],
    featured: true,
  },

  {
    id: 2,
    judul: "Resep Masakan Nusantara",
    kategori: "Web Application",
    deskripsiSingkat:
      "Website yang berisi kumpulan resep masakan khas Nusantara.",
    deskripsiLengkap:
      "Project Resep Masakan Nusantara dibuat sebagai website yang menyediakan kumpulan resep makanan khas Indonesia. Project ini berfokus pada tampilan yang menarik dan mudah digunakan untuk mencari serta membaca resep.",
    teknologi: ["Figma", "UI/UX"],
    featured: false,
  },

  {
    id: 3,
    judul: "Manajemen Magang",
    kategori: "Dashboard",
    deskripsiSingkat:
      "Dashboard untuk mengelola data siswa dan progress kegiatan magang.",
    deskripsiLengkap:
      "Project Manajemen Magang dibuat untuk membantu mengelola data siswa yang sedang melakukan kegiatan magang. Dashboard digunakan untuk melihat data dan perkembangan kegiatan magang secara lebih terorganisir.",
    teknologi: ["Next.js", "TypeScript", "Supabase"],
    featured: true,
  },

  {
    id: 4,
    judul: "Manajemen Kas",
    kategori: "Web Application",
    deskripsiSingkat:
      "Aplikasi untuk mengelola pemasukan, pengeluaran, dan laporan kas.",
    deskripsiLengkap:
      "Project Manajemen Kas dibuat untuk membantu pengguna mencatat pemasukan dan pengeluaran serta melihat riwayat transaksi dan laporan keuangan secara lebih teratur.",
    teknologi: ["Figma", "UI/UX", "Tailwind CSS"],
    featured: false,
  },

  {
    id: 5,
    judul: "Nouve Wear",
    kategori: "E-Commerce",
    deskripsiSingkat:
      "Website toko online dengan tampilan sederhana dan modern.",
    deskripsiLengkap:
      "Project Nouve Wear dibuat sebagai latihan membuat tampilan website toko online. Website ini memiliki tampilan produk yang sederhana, modern, dan mudah digunakan.",
    teknologi: ["HTML", "Tailwind CSS"],
    featured: false,
  },
];