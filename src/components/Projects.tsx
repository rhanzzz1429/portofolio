"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Search,
  Star,
} from "lucide-react";
import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Manajemen Siswa",
    category: "Dashboard",
    description:
      "Dashboard untuk mengelola data siswa, kelas, absensi, dan pelanggaran.",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    href: "/projects/manajemen-siswa",
    featured: true,
  },
  {
    number: "02",
    title: "Resep Masakan Nusantara",
    category: "Web Application",
    description:
      "Website yang berisi kumpulan resep masakan khas Nusantara.",
    technologies: ["Figma", "UI/UX"],
    href: "/projects/resep-masakan",
    featured: false,
  },
  {
    number: "03",
    title: "Manajemen Magang",
    category: "Dashboard",
    description:
      "Dashboard untuk mengelola data siswa dan progress kegiatan magang.",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    href: "/projects/manajemen-magang",
    featured: true,
  },
];

export default function Projects() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Featured",
    "Dashboard",
    "Web Application",
  ];

  const filteredProjects = projects.filter((project) => {
    const matchSearch = project.title
      .toLowerCase()
      .includes(search.toLowerCase());

    let matchCategory = true;

    if (activeCategory === "Featured") {
      matchCategory = project.featured;
    } else if (activeCategory !== "All") {
      matchCategory =
        project.category === activeCategory;
    }

    return matchSearch && matchCategory;
  });

  return (
    <section
      id="projects"
      className="px-5 py-32 md:px-8 md:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-16 flex items-center gap-4">
          <span className="text-xs uppercase tracking-[0.3em] text-white/30">
            03 — Selected Projects
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* TITLE */}
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
            Selected{" "}
            <span className="text-white/30">
              works.
            </span>
          </h2>

          <p className="max-w-sm text-sm leading-6 text-white/40">
            Beberapa project yang pernah saya kerjakan
            selama belajar software development.
          </p>
        </div>

        {/* SEARCH & FILTER */}
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          {/* SEARCH */}
          <div className="relative w-full md:max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
            />

            <input
              type="text"
              placeholder="Cari judul proyek..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full rounded-full border border-white/10 bg-white/3 py-3 pl-11 pr-5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-white/25 focus:bg-white/5"
            />
          </div>

          {/* FILTER */}
          <div className="flex flex-wrap gap-2">

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "border-white bg-white text-black"
                    : "border-white/10 text-white/40 hover:border-white/30 hover:text-white"
                }`}
              >
                {category === "Featured" && (
                  <Star size={14} />
                )}

                {category}
              </button>
            ))}

          </div>
        </div>

        {/* PROJECT LIST */}
        <div className="space-y-5">

          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.number}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <Link
                  href={project.href}
                  className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/2 p-7 shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/4 hover:shadow-lg md:p-10"
                >

                  {/* GLOW */}
                  <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-white/3 blur-3xl transition-all duration-700 group-hover:bg-white/[0.07]" />

                  <div className="relative grid gap-8 md:grid-cols-[100px_1fr_auto] md:items-center">

                    {/* NUMBER */}
                    <span className="text-sm text-white/25">
                      / {project.number}
                    </span>

                    {/* CONTENT */}
                    <div>

                      {/* CATEGORY + FEATURED */}
                      <div className="mb-3 flex flex-wrap items-center gap-3">

                        <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                          {project.category}
                        </p>

                        {project.featured && (
                          <span className="flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/40">
                            <Star size={11} />
                            Featured
                          </span>
                        )}

                      </div>

                      {/* TITLE */}
                      <h3 className="text-3xl font-semibold tracking-tight md:text-5xl">
                        {project.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="mt-5 max-w-xl text-sm leading-6 text-white/40">
                        {project.description}
                      </p>

                      {/* TECHNOLOGIES */}
                      <div className="mt-6 flex flex-wrap gap-2">

                        {project.technologies.map(
                          (technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40"
                            >
                              {technology}
                            </span>
                          )
                        )}

                      </div>

                    </div>

                    {/* ARROW */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight size={20} />
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            /* EMPTY STATE */
            <div className="rounded-3xl border border-white/10 bg-white/2 px-6 py-16 text-center">
              <Search
                size={24}
                className="mx-auto mb-4 text-white/20"
              />

              <h3 className="text-lg font-medium text-white/70">
                Proyek tidak ditemukan
              </h3>

              <p className="mt-2 text-sm text-white/30">
                Coba gunakan kata kunci atau kategori
                yang berbeda.
              </p>
            </div>
          )}

        </div>

        <div className="mt-12 flex justify-center">
  <Link
    href="/proyek"
    className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-black"
  >
    View All Projects
  </Link>
</div>

      </div>
    </section>
  );
}