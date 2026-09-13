export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-white/25 md:flex-row">
        <p>
          © {new Date().getFullYear()} Raihan. All rights reserved.
        </p>

        <p>
          Designed & Built with Next.js
        </p>
      </div>
    </footer>
  );
}