import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import CounterApresiasi from "@/components/CounterApresiasi";

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-[#080808] px-5 pt-16 pb-28 text-white md:px-8 md:pt-20">
      <div className="mx-auto max-w-6xl">

        {/* Back */}
        <Link
          href="/#about"
          className="mb-14 inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Kembali ke About
        </Link>

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            ABOUT ME
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
            More About <span className="text-white/30">Me.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/40 md:text-lg">
            Mengenal lebih jauh tentang saya, pendidikan, minat, kemampuan,
            serta perjalanan saya dalam mempelajari web development.
          </p>
        </div>

        {/* Profile & Education */}
        <section className="grid gap-6 md:grid-cols-2">

          {/* Profile */}
          <div className="rounded-3xl border border-white/10 bg-white/3 p-7 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-white/30">
              Profile
            </p>

            <h2 className="mt-5 text-2xl font-semibold">
              Mukhammad Raihan Apriliansyah
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40">
              Saya adalah siswa SMKN 1 Pasuruan jurusan Rekayasa Perangkat
              Lunak (RPL) yang memiliki ketertarikan pada dunia teknologi,
              khususnya web development.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/40">
              Saya senang mempelajari hal-hal baru dan mencoba menerapkannya
              melalui berbagai project. Bagi saya, membuat project merupakan
              salah satu cara untuk memahami bagaimana sebuah website bekerja.
            </p>
          </div>

          {/* Education */}
          <div className="rounded-3xl border border-white/10 bg-white/3 p-7 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-white/30">
              Education
            </p>

            <h2 className="mt-5 text-2xl font-semibold">
              SMKN 1 Pasuruan
            </h2>

            <p className="mt-2 text-sm text-white/40">
              Rekayasa Perangkat Lunak (RPL)
            </p>

            <div className="mt-8 h-px bg-white/10" />

            <p className="mt-6 text-sm leading-7 text-white/40">
              Selama bersekolah di jurusan RPL, saya mempelajari dasar
              pemrograman, pembuatan website, database, serta berbagai
              teknologi yang digunakan dalam pengembangan perangkat lunak.
            </p>
          </div>

          {/* Focus */}
          <div className="rounded-3xl border border-white/10 bg-white/3 p-7 md:col-span-2 md:p-10">
            <div className="flex flex-col justify-between gap-8 md:flex-row">

              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                  My Focus
                </p>

                <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
                  Web Development.
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/40">
                  Saat ini saya fokus pada web development. Saya mempelajari
                  bagaimana membuat tampilan website yang menarik, responsive,
                  dan mudah digunakan.
                </p>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  Selain membuat tampilan, saya juga mempelajari bagaimana
                  website dapat memiliki fitur yang berjalan dengan baik serta
                  dapat terhubung dengan database.
                </p>
              </div>

            </div>
          </div>

          {/* Technologies */}
          <div className="rounded-3xl border border-white/10 bg-white/3 p-7 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-white/30">
              Technologies
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Supabase",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Goals */}
          <div className="rounded-3xl border border-white/10 bg-white/3 p-7 md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-white/30">
              Goals
            </p>

            <h2 className="mt-5 text-2xl font-semibold">
              Keep Learning.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40">
              Saya ingin terus meningkatkan kemampuan dalam web development,
              membuat project yang lebih baik, dan mendapatkan pengalaman baru
              dari setiap project yang saya kerjakan.
            </p>
          </div>

        </section>

        {/* Bottom Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/#about"
            className="group flex items-center gap-3 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            Kembali ke About

            <ArrowUpRight
              size={17}
              className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

      </div>
    </main>
  );
}