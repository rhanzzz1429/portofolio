import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          supabaseResponse = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(({ name, value, options }) => {
            supabaseResponse.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // ==========================================
  // 1. CEK DOOR ADMIN
  // ==========================================
  const door = request.nextUrl.searchParams.get("door");

  if (door === "admin-master") {
    const response = NextResponse.redirect(new URL("/", request.url));

    response.cookies.set("admin_door", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return response;
  }

  // ==========================================
  // 2. PROTEKSI HALAMAN ADMIN
  // ==========================================
  if (pathname.startsWith("/admin")) {
    const adminDoor = request.cookies.get("admin_door")?.value;

    // Jika belum membuka door,
    // jangan izinkan masuk ke halaman admin.
    if (adminDoor !== "true") {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Jika door sudah benar tetapi belum login,
    // arahkan ke halaman login.
    if (!user && pathname !== "/admin/login") {
      const url = request.nextUrl.clone();

      url.pathname = "/admin/login";

      return NextResponse.redirect(url);
    }
  }

  return supabaseResponse;
}

export const config = {
  matcher: ["/", "/admin", "/admin/:path*"],
};