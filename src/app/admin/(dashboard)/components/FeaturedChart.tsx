type FeaturedChartProps = {
  totalProyek: number;
  totalFeatured: number;
  totalNonFeatured: number;
};

export default function FeaturedChart({
  totalProyek,
  totalFeatured,
  totalNonFeatured,
}: FeaturedChartProps) {
  const featuredPercentage =
    totalProyek > 0
      ? (totalFeatured / totalProyek) * 100
      : 0;

  return (
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
        <div
          className="relative flex h-44 w-44 items-center justify-center rounded-full"
          style={{
            background:
              totalProyek > 0
                ? `conic-gradient(#111827 ${featuredPercentage}%, #e5e7eb ${featuredPercentage}% 100%)`
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
  );
}