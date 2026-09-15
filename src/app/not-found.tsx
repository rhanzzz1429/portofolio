import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080808] px-5 text-center text-white">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-white/30">
          OOPSSS!!!
        </p>

        <h1 className="mt-5 text-6xl font-semibold md:text-8xl">
          404
        </h1>

        <h2 className="mt-5 text-2xl font-medium">
          Nungguin yaaaaaa
        </h2>

        <p className="mt-4 text-sm text-white/40">
          Proyek yang kamu cari nampaknya sedang berlibur. Tapi jangan khawatir, kamu bisa kembali ke halaman proyek untuk melihat proyek-proyek lainnya.
        </p>

        <Link
          href="/#projects"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
        >
          <ArrowLeft size={16} />
          Kembali ke Proyek
        </Link>
      </div>
    </main>
  );
}