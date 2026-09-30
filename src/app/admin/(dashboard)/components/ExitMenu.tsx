"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LogOut,
  ExternalLink,
} from "lucide-react";

export default function ExitMenu({
  logoutAction,
}: {
  logoutAction: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Exit Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-black"
      >
        <LogOut className="h-5 w-5" />

        <span>Exit</span>
      </button>

      {/* Exit Menu */}
      {open && (
        <div className="absolute bottom-full left-0 mb-2 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
          {/* Logout */}
          <form action={logoutAction}>
            <button
              type="submit"
              className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm text-gray-700 transition hover:bg-gray-50"
            >
              <LogOut className="h-4 w-4" />

              <span>Logout</span>
            </button>
          </form>

          {/* Back to Portfolio */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 border-t border-gray-100 px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-50"
          >
            <ExternalLink className="h-4 w-4" />

            <span>Back to Portfolio</span>
          </Link>
        </div>
      )}
    </div>
  );
}