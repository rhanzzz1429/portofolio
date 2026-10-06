import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Portofolio Mukhammad Raihan Apriliansyah";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          color: "white",
          padding: "60px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 70,
            fontWeight: 800,
          }}
        >
          Mukhammad Raihan Apriliansyah
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 32,
          }}
        >
          Website Profil & Portofolio
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 24,
            opacity: 0.9,
          }}
        >
          Siswa SMKN 1 Pasuruan Jurusan Rekayasa Perangkat Lunak
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}