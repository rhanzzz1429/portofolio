import Link from "next/link";
import { createSupabaseServerClient } from "../../../../lib/supabase-server";

type Proyek = {
  id: number;
  judul: string;
  kategori: string;
  teknologi: string;
  featured: boolean;
};

export default async function AdminDashboardPage() {
  const supabase = await createSupabaseServerClient();

  const { data: proyek, error } = await supabase
    .from("proyek")
    .select("id, judul, kategori, teknologi, featured")
    .order("id", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  const dataProyek = proyek ?? [];

  // =========================
  // STATISTIK
  // =========================

  const totalProyek = dataProyek.length;

  const totalFeatured = dataProyek.filter(
    (item) => item.featured
  ).length;

  const totalNonFeatured = totalProyek - totalFeatured;

  const kategoriUnik = [
    ...new Set(dataProyek.map((item) => item.kategori)),
  ];

  const totalKategori = kategoriUnik.length;

  // =========================
  // DATA KATEGORI
  // =========================

  const kategoriCount = kategoriUnik.map((kategori) => ({
    kategori,
    jumlah: dataProyek.filter(
      (item) => item.kategori === kategori
    ).length,
  }));

  const jumlahTerbesar =
    Math.max(...kategoriCount.map((item) => item.jumlah), 1);

  // =========================
  // PROYEK TERBARU
  // =========================

  const proyekTerbaru = dataProyek.slice(0, 5);

  return (
    <div>
      {/* ================= HEADER ================= */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Dashboard
          </h2>

          <p className="mt-1 text-gray-500">
            Selamat datang di Admin Panel Portfolio.
          </p>
        </div>

        <Link
          href="/admin/proyek"
          className="inline-flex w-fit items-center rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
        >
          + Tambah Proyek
        </Link>
      </div>

      {/* ================= STATISTIK ================= */}
      <div className="mb-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {/* Total Proyek */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total Proyek
              </p>

              <p className="mt-3 text-3xl font-bold text-gray-900">
                {totalProyek}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
              📁
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            Semua proyek portfolio
          </p>
        </div>

        {/* Featured */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Featured
              </p>

              <p className="mt-3 text-3xl font-bold text-gray-900">
                {totalFeatured}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-50 text-xl">
              ⭐
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            Proyek unggulan
          </p>
        </div>

        {/* Non Featured */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Non Featured
              </p>

              <p className="mt-3 text-3xl font-bold text-gray-900">
                {totalNonFeatured}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-xl">
              📄
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            Proyek lainnya
          </p>
        </div>

        {/* Kategori */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Kategori
              </p>

              <p className="mt-3 text-3xl font-bold text-gray-900">
                {totalKategori}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-xl">
              🗂️
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            Kategori proyek
          </p>
        </div>
      </div>

      {/* ================= GRAFIK ================= */}
      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        {/* Grafik Kategori */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900">
              Proyek Berdasarkan Kategori
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Jumlah proyek pada setiap kategori.
            </p>
          </div>

          {kategoriCount.length === 0 ? (
            <div className="flex h-64 items-center justify-center text-sm text-gray-400">
              Belum ada data proyek.
            </div>
          ) : (
            <div className="space-y-5">
              {kategoriCount.map((item) => {
                const persentase =
                  (item.jumlah / jumlahTerbesar) * 100;

                return (
                  <div key={item.kategori}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        {item.kategori}
                      </span>

                      <span className="text-sm font-semibold text-gray-900">
                        {item.jumlah}
                      </span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-gray-900 transition-all duration-500"
                        style={{
                          width: `${persentase}%`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Grafik Featured */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900">
              Status Featured
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Perbandingan proyek unggulan dan lainnya.
            </p>
          </div>

          <div className="flex min-h-64 flex-col items-center justify-center">
            {/* Lingkaran */}
            <div
              className="relative flex h-44 w-44 items-center justify-center rounded-full"
              style={{
                background:
                  totalProyek > 0
                    ? `conic-gradient(#111827 ${
                        (totalFeatured / totalProyek) * 100
                      }%, #e5e7eb ${
                        (totalFeatured / totalProyek) * 100
                      }% 100%)`
                    : "#e5e7eb",
              }}
            >
              <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-white">
                <span className="text-3xl font-bold text-gray-900">
                  {totalProyek}
                </span>

                <span className="text-xs text-gray-500">
                  Total Proyek
                </span>
              </div>
            </div>

            {/* Keterangan */}
            <div className="mt-6 flex gap-6">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-gray-900" />

                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Featured
                  </p>

                  <p className="text-xs text-gray-400">
                    {totalFeatured} proyek
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-gray-200" />

                <div>
                  <p className="text-sm font-medium text-gray-700">
                    Non Featured
                  </p>

                  <p className="text-xs text-gray-400">
                    {totalNonFeatured} proyek
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PROYEK TERBARU ================= */}
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">
              Proyek Terbaru
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Lima proyek terakhir yang tersedia.
            </p>
          </div>

          <Link
            href="/admin/proyek"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Lihat Semua →
          </Link>
        </div>

        {proyekTerbaru.length === 0 ? (
          <div className="p-10 text-center">
            <p className="text-gray-500">
              Belum ada proyek.
            </p>

            <Link
              href="/admin/proyek"
              className="mt-3 inline-block text-sm font-medium text-black underline"
            >
              Tambahkan proyek pertama
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                    ID
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Judul
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Kategori
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Teknologi
                  </th>

                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {proyekTerbaru.map((item: Proyek) => (
                  <tr
                    key={item.id}
                    className="border-b last:border-b-0 hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 text-sm text-gray-500">
                      #{item.id}
                    </td>

                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-gray-900">
                        {item.judul}
                      </p>
                    </td>

                    <td className="px-6 py-4">
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                        {item.kategori}
                      </span>
                    </td>

                    <td className="max-w-xs px-6 py-4">
                      <p className="truncate text-sm text-gray-500">
                        {item.teknologi}
                      </p>
                    </td>

                    <td className="px-6 py-4">
                      {item.featured ? (
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                          Featured
                        </span>
                      ) : (
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                          Normal
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}