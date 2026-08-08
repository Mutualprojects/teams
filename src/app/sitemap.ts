import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://team7sports.com";

  const routes = [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "/about-us", priority: 0.9, changeFrequency: "yearly" },
    { path: "/our-journey", priority: 0.9, changeFrequency: "yearly" },
    { path: "/our-legacy", priority: 0.8, changeFrequency: "yearly" },
    { path: "/contact-us", priority: 0.8, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
  ] as const;

  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
