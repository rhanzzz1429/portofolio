"use client";

import { motion } from "framer-motion";

const journey = [
  {
    year: "2025",
    title: "Started Learning",
    description:
      "Mulai mempelajari dasar pemrograman, HTML, CSS, dan JavaScript.",
  },
  {
    year: "2025",
    title: "Web Development",
    description:
      "Mulai membuat berbagai website dan mempelajari database serta backend.",
  },
  {
    year: "2026",
    title: "Building Projects",
    description:
      "Mengembangkan aplikasi menggunakan Next.js, TypeScript, Supabase, dan berbagai teknologi modern.",
  },
  {
    year: "NOW",
    title: "Keep Improving",
    description:
      "Terus meningkatkan kemampuan dalam software development, UI/UX, dan full-stack development.",
  },
];

export default function Journey() {
  return (
    <section className="border-y border-white/10 bg-white/1.5 px-5 py-32 md:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex items-center gap-4">
          <span className="text-xs uppercase tracking-[0.3em] text-white/30">
            04 — Journey
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">
              The journey{" "}
              <span className="text-white/30">
                so far.
              </span>
            </h2>
          </div>

          <div className="space-y-0">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="grid grid-cols-[80px_1fr] gap-6 border-b border-white/10 py-8"
              >
                <span className="text-sm text-white/30">
                  {item.year}
                </span>

                <div>
                  <h3 className="text-xl font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}