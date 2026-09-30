"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  LayoutDashboard,
  FolderKanban,
  LogOut,
  ExternalLink,
} from "lucide-react";

export default function MobileNavbar({
  logoutAction,
}: {
  logoutAction: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative border-b border-gray-200 bg-white lg:hidden">
      <div className="flex h-16 items-center justify-between px-4">
        <div>
          <h1 className="text-lg font-bold text-gray-900">MRA Admin</h1>
          <p className="text-xs text-gray-500">Portfolio Management</p>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100"
          aria-label={open ? "Tutup menu" : "Buka menu"}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 shadow-lg">
          <nav className="space-y-1">
            <Link
              href="/admin"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              <LayoutDashboard className="h-5 w-5" />
              Dashboard
            </Link>

            <Link
              href="/admin/proyek"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              <FolderKanban className="h-5 w-5" />
              Proyek
            </Link>

            <div className="my-2 border-t border-gray-100" />

            <form action={logoutAction}>
              <button
                type="submit"
                className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-medium text-red-600 transition hover:bg-red-50"
              >
                <LogOut className="h-5 w-5" />
                Logout
              </button>
            </form>

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
            >
              <ExternalLink className="h-5 w-5" />
              Back to Portfolio
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}