import Link from "next/link";
import { createSupabaseServerClient } from "../../../../lib/supabase-server";
import { redirect } from "next/navigation";
import ExitMenu from "./components/ExitMenu";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  async function logout() {
    "use server";

    const supabase = await createSupabaseServerClient();

    await supabase.auth.signOut();

    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="fixed inset-y-0 left-0 w-64 border-r bg-white">
          <div className="flex h-full flex-col">
            {/* Logo */}
            <div className="border-b px-6 py-5">
              <h1 className="text-xl font-bold text-gray-900">
                MRA Admin
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Portfolio Management
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6">
              <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Menu
              </p>

              <div className="space-y-1">
                <Link
                  href="/admin"
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-black"
                >
                  Dashboard
                </Link>

                <Link
                  href="/admin/proyek"
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-black"
                >
                  Proyek
                </Link>
              </div>
            </nav>

            {/* Logout */}
            <div className="border-t p-4">
              <ExitMenu logoutAction={logout} />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-64 min-h-screen flex-1">
          <div className="mx-auto max-w-7xl px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}