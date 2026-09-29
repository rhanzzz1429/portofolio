import { createSupabaseServerClient } from "../../../../../../../lib/supabase-server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

type EditProyekPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditProyekPage({
  params,
}: EditProyekPageProps) {
  const { id } = await params;

  const supabase = await createSupabaseServerClient();

  const { data: proyek, error } = await supabase
    .from("proyek")
    .select("*")
    .eq("id", Number(id))
    .single();

  if (error || !proyek) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Proyek tidak ditemukan
        </h2>

        <p className="mt-2 text-gray-500">
          Data proyek yang ingin diedit tidak ditemukan.
        </p>
      </div>
    );
  }

  async function updateProyek(formData: FormData) {
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

    const { error } = await supabase
      .from("proyek")
      .update({
        judul,
        kategori,
        deskripsi_singkat,
        deskripsi_lengkap,
        teknologi,
        featured,
      })
      .eq("id", Number(id));

    if (error) {
      throw new Error(error.message);
    }

    revalidatePath("/admin/proyek");
    revalidatePath("/proyek");

    redirect("/admin/proyek");
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Edit Proyek
        </h2>

        <p className="mt-1 text-gray-500">
          Ubah informasi proyek portfolio.
        </p>
      </div>

      <div className="rounded-xl bg-white p-6 shadow">
        <form action={updateProyek} className="space-y-5">
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
              defaultValue={proyek.judul}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-600 outline-none focus:border-black"
            />
          </div>

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
              defaultValue={proyek.kategori}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-600 outline-none focus:border-black"
            />
          </div>

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
              defaultValue={proyek.deskripsi_singkat}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-600 outline-none focus:border-black"
            />
          </div>

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
              defaultValue={proyek.deskripsi_lengkap}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-600 outline-none focus:border-black"
            />
          </div>

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
              defaultValue={proyek.teknologi}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-600 outline-none focus:border-black"
            />
          </div>

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
              defaultValue={proyek.featured ? "true" : "false"}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-600 outline-none focus:border-black"
            >
              <option value="false">Tidak</option>
              <option value="true">Ya</option>
            </select>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="rounded-lg bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800"
            >
              Simpan Perubahan
            </button>

            <a
              href="/admin/proyek"
              className="rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Batal
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}