import Link from "next/link";

type Proyek = {
  id: number;
  judul: string;
  kategori: string;
  teknologi: string;
  featured: boolean;
};

type RecentProjectsProps = {
  proyek: Proyek[];
};

export default function RecentProjects({
  proyek,
}: RecentProjectsProps) {
  return (
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

      {proyek.length === 0 ? (
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
              {proyek.map((item) => (
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
  );
}