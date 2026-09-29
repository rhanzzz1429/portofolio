import Link from "next/link";
import { createSupabaseServerClient } from "../../../../../lib/supabase-server";
import { revalidatePath } from "next/cache";

type Proyek = {
  id: number;
  judul: string;
  kategori: string;
  deskripsi_singkat: string;
  deskripsi_lengkap: string;
  teknologi: string;
  featured: boolean;
};

export default async function AdminProyekPage() {
  const supabase = await createSupabaseServerClient();

  // =========================
  // TAMBAH PROYEK
  // =========================

  async function tambahProyek(formData: FormData) {
    "use server";

    const judul = formData.get("judul") as string;
    const kategori = formData.get("kategori") as string;
    const deskripsi_singkat = formData.get(
      "deskripsi_singkat"
    ) as string;
    const deskripsi_lengkap = formData.get(
      "deskripsi_lengkap"
    ) as string;
    const teknologi = formData.get("teknologi") as string;
    const featured = formData.get("featured") === "true";

    const supabase = await createSupabaseServerClient();

    const { error } = await supabase.from("proyek").insert({
      judul,
      kategori,
      deskripsi_singkat,
      deskripsi_lengkap,
      teknologi,
      featured,
    });

    if (error) {
      throw new Error(error.message);
    }

    revalidatePath("/admin/proyek");
    revalidatePath("/proyek");
  }

  // =========================
  // HAPUS PROYEK
  // =========================

  async function hapusProyek(formData: FormData) {
    "use server";

    const id = Number(formData.get("id"));

    const supabase = await createSupabaseServerClient();

    const { error } = await supabase
      .from("proyek")
      .delete()
      .eq("id", id);

    if (error) {
      throw new Error(error.message);
    }

    revalidatePath("/admin/proyek");
    revalidatePath("/proyek");
  }

  // =========================
  // AMBIL DATA PROYEK
  // =========================

  const { data: proyek, error } = await supabase
    .from("proyek")
    .select("*")
    .order("id", { ascending: true });

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Kelola Proyek
        </h2>

        <p className="mt-1 text-gray-500">
          Tambah dan kelola project portfolio.
        </p>
      </div>

      {/* =========================
          FORM TAMBAH PROYEK
      ========================= */}

      <div className="mb-8 rounded-xl bg-white p-6 shadow-sm">
        <h3 className="mb-5 text-lg font-semibold text-gray-900">
          Tambah Proyek
        </h3>

        <form action={tambahProyek} className="space-y-5">
          {/* Judul */}
          <div>
            <label
              htmlFor="judul"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Judul Proyek
            </label>

            <input
              id="judul"
              name="judul"
              type="text"
              required
              placeholder="Contoh: Manajemen Siswa"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-600 outline-none focus:border-black"
            />
          </div>

          {/* Kategori */}
          <div>
            <label
              htmlFor="kategori"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Kategori
            </label>

            <input
              id="kategori"
              name="kategori"
              type="text"
              required
              placeholder="Contoh: Dashboard"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-600 outline-none focus:border-black"
            />
          </div>

          {/* Deskripsi Singkat */}
          <div>
            <label
              htmlFor="deskripsi_singkat"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Deskripsi Singkat
            </label>

            <textarea
              id="deskripsi_singkat"
              name="deskripsi_singkat"
              required
              rows={3}
              placeholder="Contoh: Dashboard untuk mengelola data siswa."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-600 outline-none focus:border-black"
            />
          </div>

          {/* Deskripsi Lengkap */}
          <div>
            <label
              htmlFor="deskripsi_lengkap"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Deskripsi Lengkap
            </label>

            <textarea
              id="deskripsi_lengkap"
              name="deskripsi_lengkap"
              required
              rows={5}
              placeholder="Masukkan penjelasan lengkap mengenai proyek."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-600 outline-none focus:border-black"
            />
          </div>

          {/* Teknologi */}
          <div>
            <label
              htmlFor="teknologi"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Teknologi
            </label>

            <input
              id="teknologi"
              name="teknologi"
              type="text"
              required
              placeholder="Contoh: Next.js, TypeScript, Supabase"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-600 outline-none focus:border-black"
            />
          </div>

          {/* Featured */}
          <div>
            <label
              htmlFor="featured"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Featured
            </label>

            <select
              id="featured"
              name="featured"
              defaultValue="false"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-600 outline-none focus:border-black"
            >
              <option value="false">Tidak</option>
              <option value="true">Ya</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="rounded-lg bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800"
          >
            Tambah Proyek
          </button>
        </form>
      </div>

      {/* =========================
          DAFTAR PROYEK
      ========================= */}

      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="border-b px-6 py-5">
          <h3 className="font-semibold text-gray-900">
            Daftar Proyek
          </h3>
        </div>

        {error && (
          <div className="p-6 text-red-600">
            Gagal mengambil data: {error.message}
          </div>
        )}

        {!error && proyek?.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            Belum ada proyek.
          </div>
        )}

        {!error && proyek && proyek.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    ID
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Judul
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Kategori
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Teknologi
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Featured
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Aksi
                  </th>
                </tr>
              </thead>

              <tbody>
                {proyek.map((item: Proyek) => (
                  <tr
                    key={item.id}
                    className="border-b last:border-b-0 hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 text-sm text-gray-500">
                      #{item.id}
                    </td>

                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {item.judul}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {item.kategori}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {item.teknologi}
                    </td>

                    <td className="px-6 py-4 text-sm">
                      {item.featured ? (
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                          Ya
                        </span>
                      ) : (
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                          Tidak
                        </span>
                      )}
                    </td>

                    <td className="px-6 py-4 text-sm">
                      <div className="flex gap-2">
                        {/* Edit */}
                        <Link
                          href={`/admin/proyek/edit/${item.id}`}
                          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
                        >
                          Edit
                        </Link>

                        {/* Hapus */}
                        <form action={hapusProyek}>
                          <input
                            type="hidden"
                            name="id"
                            value={item.id}
                          />

                          <button
                            type="submit"
                            className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700"
                          >
                            Hapus
                          </button>
                        </form>
                      </div>
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