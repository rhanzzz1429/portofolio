"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

export default function CounterApresiasi() {
  const [jumlah, setJumlah] = useState(0);

  return (
    <div className="mt-10 rounded-2xl border border-white/10 bg-white/3 p-6">
      <p className="text-sm text-white/40">
        Berikan apresiasi untuk portfolio ini
      </p>

      <div className="mt-4 flex items-center gap-4">
        <button
          type="button"
          onClick={() => setJumlah((prev) => prev + 1)}
          className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-105 hover:bg-white/90"
        >
          <Heart size={18} />
          Apresiasi
        </button>

        <span className="text-sm text-white/60">
          {jumlah} apresiasi
        </span>
      </div>
    </div>
  );
}