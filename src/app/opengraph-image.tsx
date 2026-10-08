import { ImageResponse } from "next/og";

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
        }}
      >
        <img
          src="https://www.raihan-apriliansyah.my.id/og-image.png"
          alt="Portofolio Mukhammad Raihan Apriliansyah"
          width="1200"
          height="630"
        />
      </div>
    ),
    {
      ...size,
    }
  );
}