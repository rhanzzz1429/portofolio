import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/../lib/supabase";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DetailProyek({
  params,
}: PageProps) {
  const { id } = await params;

  const { data: project, error } = await supabase
    .from("proyek")
    .select("*")
    .eq("id", Number(id))
    .single();

  if (error || !project) {
    notFound();
  }

  const teknologi = project.teknologi
    ? project.teknologi
        .split(",")
        .map((tech: string) => tech.trim())
    : [];

  return (
    <main className="min-h-screen bg-[#080808] px-5 py-32 text-white md:px-8">
      <div className="mx-auto max-w-5xl">

        <Link
          href="/proyek"
          className="mb-12 inline-flex items-center gap-2 text-sm text-white/40 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Kembali ke proyek
        </Link>

        <p className="text-xs uppercase tracking-[0.3em] text-white/30">
          {project.kategori}
        </p>

        <h1 className="mt-5 text-5xl font-semibold tracking-tight md:text-7xl">
          {project.judul}
        </h1>

        <div className="mt-8 flex flex-wrap gap-2">
          {teknologi.map((tech: string) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-12">
          <h2 className="text-2xl font-semibold">
            Tentang Proyek
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/50">
            {project.deskripsi_lengkap}
          </p>
        </div>

      </div>
    </main>
  );
}