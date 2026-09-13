import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Proyek } from "@/data/proyek";

interface CardProyekProps {
  project: Proyek;
}

export default function CardProyek({
  project,
}: CardProyekProps) {
  return (
    <Link
      href={`/proyek/${project.id}`}
      className="group block rounded-3xl border border-white/10 bg-white/2 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/4 hover:shadow-lg md:p-10"
    >
      <div className="flex items-start justify-between gap-5">

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/30">
            {project.kategori}
          </p>

          <h2 className="text-3xl font-semibold md:text-5xl">
            {project.judul}
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-6 text-white/40">
            {project.deskripsiSingkat}
          </p>
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 transition group-hover:bg-white group-hover:text-black">
          <ArrowUpRight size={20} />
        </div>

      </div>
    </Link>
  );
}