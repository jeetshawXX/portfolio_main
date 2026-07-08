import dayjs from "dayjs";
import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const products = [
    {
      url: `${SITE_INFO.url}/products/InstaShare`,
      lastModified: dayjs().toISOString(),
    },
  ];

  const routes = ["", "/blog", "/products"].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: dayjs().toISOString(),
  }));

  return [...routes, ...products];
}
