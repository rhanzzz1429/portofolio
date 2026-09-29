type CategoryData = {
  kategori: string;
  jumlah: number;
};

type CategoryChartProps = {
  data: CategoryData[];
};

export default function CategoryChart({
  data,
}: CategoryChartProps) {
  const jumlahTerbesar = Math.max(
    ...data.map((item) => item.jumlah),
    1
  );

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900">
          Proyek Berdasarkan Kategori
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Jumlah proyek pada setiap kategori.
        </p>
      </div>

      {data.length === 0 ? (
        <div className="flex h-64 items-center justify-center text-sm text-gray-400">
          Belum ada data proyek.
        </div>
      ) : (
        <div className="space-y-5">
          {data.map((item) => {
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
  );
}