import Link from "next/link";
import {
  LayoutDashboard,
  FolderKanban,
  LogOut,
} from "lucide-react";

import { createSupabaseServerClient } from "../../../../lib/supabase-server";
import { redirect } from "next/navigation";

import MobileNavbar from "./components/MobileNavbar";

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
      {/* =========================================
          MOBILE NAVBAR
      ========================================== */}
      <MobileNavbar logoutAction={logout} />

      <div className="flex min-h-screen">
        {/* =========================================
            DESKTOP SIDEBAR
        ========================================== */}
        <aside className="fixed inset-y-0 left-0 hidden w-64 border-r bg-white lg:block">
          <div className="flex h-full flex-col">
            {/* Header */}
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
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-black"
                >
                  <LayoutDashboard className="h-5 w-5" />
                  Dashboard
                </Link>

                <Link
                  href="/admin/proyek"
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-black"
                >
                  <FolderKanban className="h-5 w-5" />
                  Proyek
                </Link>
              </div>
            </nav>

            {/* Exit */}
            <div className="border-t p-4">
              <div className="space-y-1">
                <form action={logout}>
                  <button
                    type="submit"
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-red-600 transition hover:bg-red-50"
                  >
                    <LogOut className="h-5 w-5" />
                    Logout
                  </button>
                </form>

                <Link
                  href="/"
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-black"
                >
                  ← Back to Portfolio
                </Link>
              </div>
            </div>
          </div>
        </aside>

        {/* =========================================
            CONTENT
        ========================================== */}
        <main className="min-h-screen flex-1 lg:ml-64">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}