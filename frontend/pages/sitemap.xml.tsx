import { GetServerSideProps } from "next";
import { NextApiResponse } from "next";
import { sanityClient } from "@/lib/sanityClient";
import { createSlug } from "@/utils/slug";

// Interface for each page in our sitemap
interface SitemapEntry {
  loc: string; // The URL to page
  description?: string; // Optional custom text to include in sitemap (non-standard)
  lastmod?: string; // Optional last modified date
  priority?: string; // Priority of this URL relative to other URLs
  changefreq?: string; // How frequently the page is likely to change
}

// Helper function to create the XML structure
function generateSiteMap(entries: SitemapEntry[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${entries
      .map((entry) => {
        return `
        <url>
          <loc>${entry.loc}</loc>
          ${
            entry.description
              ? `<!-- Description: ${entry.description} -->`
              : ""
          }
          ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ""}
          <changefreq>${entry.changefreq || "monthly"}</changefreq>
          <priority>${entry.priority || "0.7"}</priority>
        </url>
      `;
      })
      .join("")}
    </urlset>
  `;
}

export default function SiteMap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = "https://eutopiaperfumes.com.au/";

  // Static routes
  const staticRoutes: SitemapEntry[] = [
    {
      loc: `${baseUrl}`,
      description:
        "Revolutionising the Essence of Luxury with Affordable, Locally Crafted Fragrances for Everyone. Born from a Vision of Inclusivity and Sustainability in Brisbane.",
      priority: "1.0",
      changefreq: "daily",
    },
    {
      loc: `${baseUrl}/all`,
      description: "Full Collection: Scents for Every Preference.",
      priority: "0.9",
      changefreq: "daily",
    },
    {
      loc: `${baseUrl}/contact`,
      description: "Get in Touch: We're Here to Assist You.",
      priority: "0.8",
    },
    {
      loc: `${baseUrl}/for-her`,
      description:
        "Elegant Aromas: Shop Online to Discover Your Signature Scent.",
      priority: "0.9",
      changefreq: "daily",
    },
    {
      loc: `${baseUrl}/for-him`,
      description: "Distinctive Allure: Explore Our Range of Bold Fragrances.",
      priority: "0.9",
      changefreq: "daily",
    },
    {
      loc: `${baseUrl}/join`,
      priority: "0.7",
    },
    {
      loc: `${baseUrl}/neutral`,
      description: "Universal Appeal: Find Balance in Versatile Scents.",
      priority: "0.9",
      changefreq: "daily",
    },
    {
      loc: `${baseUrl}/site`,
      priority: "0.6",
    },
    {
      loc: `${baseUrl}/story`,
      description:
        "The Vision Behind Eutopia Perfumes: Crafting Affordable Luxury.",
      priority: "0.8",
    },
  ];

  // Dynamic routes - Products
  const getAllProducts = async () => {
    const query = `*[_type == "product" && store.status == "active" && store.isDeleted == false]{
      "title": store.title,
      "updatedAt": _updatedAt,
      "tags": store.tags
    }`;
    return sanityClient.fetch(query);
  };

  const products = await getAllProducts();
  const productRoutes: SitemapEntry[] = products.map((product: any) => ({
    loc: `${baseUrl}/product/${createSlug(product.title)}`,
    lastmod: new Date(product.updatedAt).toISOString(),
    priority: "0.8",
    changefreq: "weekly",
    description: `Shop ${product.title} - ${product.tags} Fragrance at Eutopia Perfumes`,
  }));

  // Dynamic routes - CMS pages
  const fetchAllSlugs = async (): Promise<
    { slug: string; _updatedAt: string }[]
  > => {
    return sanityClient.fetch(`
      *[_type == "wysiwygPage"]{
        "slug": slug.current,
        _updatedAt
      }
    `);
  };
  const cmsPages = await fetchAllSlugs();

  const cmsRoutes: SitemapEntry[] = cmsPages.map((page) => ({
    loc: `${baseUrl}/${page.slug}`,
    lastmod: new Date(page._updatedAt).toISOString(),
    priority: "0.7",
    changefreq: "monthly",
  }));

  // Combine all routes:
  const allRoutes = [...staticRoutes, ...productRoutes, ...cmsRoutes];

  // Generate the XML
  const sitemap = generateSiteMap(allRoutes);

  // Set response headers
  (res as NextApiResponse).setHeader("Content-Type", "text/xml");
  (res as NextApiResponse).write(sitemap);
  (res as NextApiResponse).end();

  return {
    props: {},
  };
};
