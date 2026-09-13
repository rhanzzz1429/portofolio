import Link from "next/link";
import { proyek } from "@/data/proyek";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function ProyekPage() {
  return (
    <main className="min-h-screen bg-[#080808] px-5 pt-10 pb-28 text-white md:px-8 md:pt-15">
      <div className="mx-auto max-w-7xl">

        <Link
          href="/#projects"
          className="mb-16 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <ArrowLeft size={17} />
          Kembali ke Projects
        </Link>

        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Projects
          </p>

          <h1 className="mt-5 text-5xl font-semibold md:text-7xl">
            Semua{" "}
            <span className="text-white/30">
              Proyek.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/40">
            Kumpulan project yang pernah saya kerjakan
            selama belajar software development.
          </p>
        </div>

        <div className="grid gap-5">
          {proyek.map((item) => (
            <Link
              key={item.id}
              href={`/proyek/${item.id}`}
              className="group rounded-3xl border border-white/10 bg-white/2 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/4 hover:shadow-lg md:p-10"
            >
              <div className="flex items-start justify-between gap-5">

                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/30">
                    {item.kategori}
                  </p>

                  <h2 className="text-3xl font-semibold md:text-5xl">
                    {item.judul}
                  </h2>

                  <p className="mt-5 max-w-2xl text-sm leading-6 text-white/40">
                    {item.deskripsiSingkat}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.teknologi.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight size={20} />
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}