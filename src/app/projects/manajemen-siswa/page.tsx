"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ManajemenSiswaPage() {
  return (
    <main className="min-h-screen bg-[#080808] px-5 py-10 text-white md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">

        <Link
          href="/#projects"
          className="mb-16 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <ArrowLeft size={17} />
          Kembali ke Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/30">
            Dashboard / 01
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-8xl">
            Manajemen Siswa
            <br />
            <span className="text-white/30">Dashboard.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
            Dashboard untuk mengelola data siswa, kelas, absensi, dan pelanggaran.
          </p>
        </motion.div>

        <div className="my-16 h-px bg-white/10" />

        <div className="grid gap-16 md:grid-cols-[1fr_300px]">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-12"
          >
            <section>
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/30">
                Latar Belakang
              </p>

              <h2 className="mb-5 text-3xl font-semibold">
                Mengapa project ini dibuat?
              </h2>

              <p className="leading-8 text-white/50">
                Project Manajemen Siswa dibuat sebagai solusi untuk membantu
                proses pengelolaan data siswa yang sebelumnya masih dilakukan
                secara manual. Pengelolaan data seperti data siswa, kelas,
                absensi, dan pelanggaran membutuhkan proses yang lebih
                terstruktur agar informasi dapat ditemukan dengan lebih mudah.
              </p>

              <p className="mt-5 leading-8 text-white/50">
                Dari permasalahan tersebut, saya mencoba membuat sebuah
                dashboard berbasis web yang dapat digunakan untuk mengelola
                berbagai data siswa secara digital.
              </p>
            </section>

            <section>
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/30">
                Tujuan
              </p>

              <h2 className="mb-5 text-3xl font-semibold">
                Tujuan Project
              </h2>

              <p className="leading-8 text-white/50">
                Tujuan utama dari project ini adalah membuat sistem pengelolaan
                siswa yang lebih terstruktur, mudah digunakan, dan dapat
                membantu pengguna dalam melihat serta mengelola data siswa
                dengan lebih cepat.
              </p>
            </section>

            <section>
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/30">
                Fokus
              </p>

              <h2 className="mb-5 text-3xl font-semibold">
                Fokus Design
              </h2>

              <p className="leading-8 text-white/50">
                Fokus utama dari pembuatan web manajemen siswa adalah mempermudah sekolah dalam mengelola data siswa secara terpusat, cepat, dan terstruktur. Web ini dibuat untuk menggantikan proses pencatatan yang masih manual sehingga data seperti identitas siswa, kelas, dan riwayat pelanggaran dapat dikelola dengan lebih efisien, mudah dicari, serta mengurangi risiko kesalahan dalam pengolahan data.
              </p>
            </section>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/30">
              Technologies
            </p>

            <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/50">
              Next.js, TypeScript, Supabase
            </span>

            <p className="mb-4 mt-10 text-xs uppercase tracking-[0.25em] text-white/30">
              Category
            </p>

            <p className="text-white/60">
              Dashboard
            </p>
          </motion.aside>

        </div>

        <div className="mt-24 border-t border-white/10 pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Kembali ke semua project
          </Link>
        </div>

      </div>
    </main>
  );
}