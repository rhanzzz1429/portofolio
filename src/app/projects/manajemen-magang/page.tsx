"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ManajemenMagangPage() {
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
            Dashboard / 03
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-8xl">
            Manajemen
            <br />
            <span className="text-white/30">Magang.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
            Dashboard untuk mengelola data dan progress magang secara digital.
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
                Project Manajemen Magang dibuat untuk membantu proses
                pengelolaan kegiatan magang siswa. Data siswa, tempat magang,
                pembimbing, serta perkembangan kegiatan magang membutuhkan
                sistem yang dapat mengelola informasi tersebut dengan lebih
                terstruktur.
              </p>

              <p className="mt-5 leading-8 text-white/50">
                Oleh karena itu, saya membuat sebuah dashboard berbasis web
                yang dapat digunakan untuk membantu pengelolaan data magang
                secara digital.
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
                Project ini bertujuan untuk mempermudah proses pendataan dan
                monitoring kegiatan magang siswa sehingga informasi dapat
                dikelola dengan lebih cepat dan terorganisir.
              </p>
            </section>

            <section>
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/30">
                Fitur
              </p>

              <h2 className="mb-6 text-3xl font-semibold">
                Fitur yang dibuat
              </h2>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Dashboard",
                  "Data Siswa",
                  "Data Tempat Magang",
                  "Data Pembimbing",
                  "Progress Magang",
                  "Monitoring",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="rounded-xl border border-white/10 bg-white/2 p-5 text-sm text-white/60"
                  >
                    {feature}
                  </div>
                ))}
              </div>
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

            <div className="flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Supabase"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/50"
                >
                  {tech}
                </span>
              ))}
            </div>

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