import { createSupabaseServerClient } from "../../../../lib/supabase-server";
import { redirect } from "next/navigation";

export default function LoginPage() {
  async function login(formData: FormData) {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const supabase = await createSupabaseServerClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      redirect("/admin/login?error=Email%20atau%20password%20salah");
    }

    redirect("/admin");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Admin Login
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Login untuk mengelola project portfolio
          </p>
        </div>

        <form action={login} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="admin@example.com"
              className="w-full text-gray-600 rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Masukkan password"
              className="w-full text-gray-600 rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}