"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import CounterApresiasi from "./CounterApresiasi";

export default function About() {
  return (
    <section id="about" className="px-5 py-32 md:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-center gap-4">
          <span className="text-xs uppercase tracking-[0.3em] text-white/30">
            01 — About
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid gap-14 md:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Turning ideas into{" "}
              <span className="text-white/30">
                digital experiences.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="leading-7 text-white/50">
              Saya adalah siswa Rekayasa Perangkat Lunak yang
              memiliki ketertarikan pada web development dan
              UI/UX design.
            </p>

            <p className="leading-7 text-white/50">
              Saya senang mengubah sebuah ide menjadi website
              atau aplikasi yang memiliki tampilan menarik,
              mudah digunakan, dan tetap memiliki fungsi yang
              baik.
            </p>

            <a
              href="/tentang"
              className="group inline-flex items-center gap-2 text-sm text-white"
            >
              More about me
              <ArrowUpRight
                size={16}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </div>

        <div className="mt-24 grid border-y border-white/10 md:grid-cols-3">
          <div className="border-b border-white/10 p-8 md:border-b-0 md:border-r">
            <p className="text-5xl font-semibold">01</p>
            <p className="mt-3 text-sm text-white/35">
              Years Learning
            </p>
          </div>

          <div className="border-b border-white/10 p-8 md:border-b-0 md:border-r">
            <p className="text-5xl font-semibold">05+</p>
            <p className="mt-3 text-sm text-white/35">
              Technologies
            </p>
          </div>

          <div className="p-8">
            <p className="text-5xl font-semibold">05+</p>
            <p className="mt-3 text-sm text-white/35">
              Projects Built
            </p>
          </div>
        </div>
      </div>
      <CounterApresiasi />
    </section>
  );
}
  