"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  LogIn,
} from "lucide-react";

export default function Hero({
  showAdminLogin,
}: {
  showAdminLogin: boolean;
}) {
  return (
    <section
      id="home"
      className="grid-background relative min-h-screen overflow-hidden px-5 pt-28 md:px-8"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-3xl" />

      {/* Container */}
      <div className="relative mx-auto min-h-[calc(100vh-7rem)] w-full max-w-7xl">

        {/* STATUS */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-2"
        >
          <div className="flex items-center gap-4">
            <span className="h-3 w-3 animate-pulse rounded-full bg-green-500" />

            <span className="text-sm text-white/50 md:text-base">
              Available for opportunities
            </span>
          </div>
        </motion.div>

        {/* JUDUL */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="relative z-10 mt-14 text-[12vw] font-black leading-[0.82] tracking-[-0.07em] sm:text-[5rem] md:text-[6rem] lg:text-[6.1rem]"
        >
          <span className="block text-white">
            WEB
          </span>

          <span className="gradient-text block">
            DEVELOPER.
          </span>
        </motion.h1>

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
          className="mt-12 max-w-3xl border-l border-white/20 pl-6 md:pl-8"
        >
          <p className="text-base leading-8 text-white/45 md:text-lg">
            Hi, I&apos;m{" "}
            <span className="font-medium text-white">
              Mukhammad Raihan Apriliansyah.
            </span>
          </p>

          <p className="mt-2 max-w-3xl text-base leading-8 text-white/45 md:text-lg">
            Web portfolio of Mukhammad Raihan Apriliansyah, a Software
            Engineering student at SMKN 1 Pasuruan who aspires to become a web
            developer.
          </p>
        </motion.div>

        {/* SOSMED */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className="mt-6"
        >
          <a
            href="https://www.instagram.com/hanztzy_014?stkn=MTY5cDZ4MTA1bTV6YQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex text-white/40 transition hover:text-white"
          >
            <Camera size={21} />
          </a>
        </motion.div>

        {/* FOTO */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
            rotate: 3,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: 2,
          }}
          transition={{
            duration: 0.8,
            delay: 0.35,
            ease: "easeOut",
          }}
          className="relative z-20 mx-auto mt-10 w-62.5 md:absolute md:right-[5%] md:top-5.25 md:mx-0 md:mt-0 lg:right-[5%] lg:w-67.5"
        >
          {/* Background kertas putih belakang foto */}
          <div className="absolute inset-0 translate-x-4 translate-y-5 rotate-2 rounded-3xl bg-white" />

          {/* Foto */}
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl border-2 border-white bg-[#151515] shadow-2xl">
            <Image
              src="/hanz.png"
              alt="Hanz"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 250px, 270px"
            />

            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
          </div>

          {/* Lokasi */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.8,
            }}
            className="absolute -bottom-7 -left-8 right-4 rounded-xl border border-white/10 bg-[#111111]/95 p-4 shadow-2xl backdrop-blur-xl"
          >
            <p className="mb-1 text-[9px] uppercase tracking-[0.25em] text-white/35">
              Based in
            </p>

            <div className="flex items-center justify-between">
              <p className="text-base font-semibold text-white">
                Pasuruan, Indonesia
              </p>

              <ArrowUpRight
                size={18}
                className="text-white/50"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* TOMBOL */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.45,
          }}
          className="mt-14 flex flex-wrap justify-center gap-3 md:mt-16 md:ml-130 md:justify-start"
        >
          {/* View Projects */}
          <a
            href="#projects"
            className="group flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-white/90"
          >
            View Projects

            <ArrowUpRight
              size={17}
              className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

          {/* Contact Me */}
          <a
            href="#contact"
            className="flex items-center gap-3 rounded-full border border-white/15 px-7 py-3.5 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
          >
            Contact Me
          </a>

          {/* Admin Login */}
          {showAdminLogin && (
            <a
              href="/admin/login"
              className="flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
            >
              <LogIn size={17} />
              Admin Login
            </a>
          )}
        </motion.div>

        {/* SCROLL */}
        <a
          href="#about"
          className="absolute bottom-7 left-0 hidden items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/25 transition hover:text-white/60 md:flex"
        >
          <ArrowDown size={15} />
          Scroll to explore
        </a>

      </div>
    </section>
  );
}