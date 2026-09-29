import { cookies } from "next/headers";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home() {
  const cookieStore = await cookies();

  const adminDoor = cookieStore.get("admin_door")?.value;

  const showAdminLogin = adminDoor === "true";

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      <Navbar />

      <Hero showAdminLogin={showAdminLogin} />

      <About />

      <Skills />

      <Projects />

      <Journey />

      <Contact />

      <Footer />
    </main>
  );
}