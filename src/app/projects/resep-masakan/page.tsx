"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ResepMasakanPage() {
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
            Web Application / 02
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-8xl">
            Resep Masakan
            <br />
            <span className="text-white/30">Nusantara.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
            Aplikasi untuk mengelola resep masakan khas nusantara dengan
            tampilan yang menarik.
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
                Project Resep Masakan Nusantara dibuat untuk memperkenalkan
                berbagai macam makanan khas Indonesia melalui media digital.
                Banyak resep masakan nusantara yang memiliki nilai budaya,
                tetapi informasi mengenai resep tersebut masih tersebar di
                berbagai tempat.
              </p>

              <p className="mt-5 leading-8 text-white/50">
                Karena itu, saya membuat sebuah konsep aplikasi yang dapat
                menampilkan resep masakan nusantara secara lebih terstruktur
                dan mudah dipahami oleh pengguna.
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
                Membuat tampilan aplikasi resep yang sederhana, menarik, dan
                mudah digunakan sehingga pengguna dapat menemukan informasi
                mengenai masakan khas Indonesia dengan lebih mudah.
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
                Pada project ini saya lebih berfokus pada perancangan UI/UX,
                pemilihan warna, layout, typography, dan pengalaman pengguna
                menggunakan Figma.
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
              Figma
            </span>

            <p className="mb-4 mt-10 text-xs uppercase tracking-[0.25em] text-white/30">
              Category
            </p>

            <p className="text-white/60">
              Web Application
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