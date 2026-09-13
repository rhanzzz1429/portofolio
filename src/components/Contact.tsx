"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Camera,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-32 md:px-8 md:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-center gap-4">
          <span className="text-xs uppercase tracking-[0.3em] text-white/30">
            05 — Contact
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/2.5 p-8 md:p-16"
        >
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/3 blur-3xl" />

          <div className="relative text-center">
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-white/30">
              Have an idea?
            </p>

            <h2 className="text-5xl font-semibold tracking-tight md:text-8xl">
              Let's build{" "}
              <span className="text-white/30">
                it.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-sm leading-6 text-white/40 md:text-base">
              Jika kamu ingin berdiskusi mengenai project,
              collaboration, atau sekadar ingin terhubung,
              jangan ragu untuk menghubungi saya.
            </p>

            <a
              href="mailto:raihanapriliansyah04@email.com"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-black"
            >
              <Mail size={17} />
              raihanapriliansyah04@gmail.com
              <ArrowUpRight
                size={17}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <div className="mt-12 flex justify-center gap-5">

              <a
                href="https://www.instagram.com/hanztzy_014?stkn=MTY5cDZ4MTA1bTV6YQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-3 text-white/40 transition hover:border-white/30 hover:text-white"
              >
                <Camera size={19} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}