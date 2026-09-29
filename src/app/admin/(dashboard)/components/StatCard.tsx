type StatCardProps = {
  title: string;
  value: number;
  description: string;
  icon: string;
  iconBackground: string;
};

export default function StatCard({
  title,
  value,
  description,
  icon,
  iconBackground,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <p className="mt-3 text-3xl font-bold text-gray-900">
            {value}
          </p>
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${iconBackground}`}
        >
          {icon}
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-400">
        {description}
      </p>
    </div>
  );
}