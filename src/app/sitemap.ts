import type { MetadataRoute } from "next";
import { supabase } from "@/../lib/supabase";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: projects } = await supabase
    .from("proyek")
    .select("id");

  const baseUrl = "https://portofolio-smoky-eight.vercel.app";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/proyek`,
      lastModified: new Date(),
    },
  ];

  const projectPages: MetadataRoute.Sitemap =
    projects?.map((project) => ({
      url: `${baseUrl}/proyek/${project.id}`,
      lastModified: new Date(),
    })) ?? [];

  return [...staticPages, ...projectPages];
}