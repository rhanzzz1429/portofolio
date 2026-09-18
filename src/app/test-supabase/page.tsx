import { supabase } from "@/../lib/supabase";

export default async function TestSupabasePage() {
  const { data, error } = await supabase
    .from("proyek")
    .select("*");

  if (error) {
    return (
      <main className="min-h-screen p-10">
        <h1 className="text-2xl font-bold">Koneksi Supabase Gagal</h1>
        <p className="mt-4 text-red-500">{error.message}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-2xl font-bold">Test Supabase</h1>

      <div className="mt-6 space-y-4">
        {data?.map((item) => (
          <div key={item.id} className="rounded-lg border p-4">
            <h2 className="font-bold">{item.judul}</h2>
            <p>{item.kategori}</p>
          </div>
        ))}
      </div>
    </main>
  );
}