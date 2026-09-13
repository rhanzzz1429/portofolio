"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "MySQL",
  "Supabase",
  "Figma",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-white/10 py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex items-center gap-4">
          <span className="text-xs uppercase tracking-[0.3em] text-white/30">
            02 — Skills
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Tools I use to{" "}
              <span className="text-white/30">
                build things.
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-full border border-white/10 px-5 py-3 text-sm text-white/60 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}