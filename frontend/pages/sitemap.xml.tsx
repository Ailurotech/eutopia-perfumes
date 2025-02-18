import { GetServerSideProps } from "next";
import { NextApiResponse } from "next";
import { sanityClient } from "@/lib/sanityClient";

// Interface for each page in our sitemap
interface SitemapEntry {
  loc: string; // The URL to page
  description?: string; // Optional custom text to include in sitemap (non-standard)
  lastmod?: string; // Optional last modified date
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
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // Static routes
  const staticRoutes: SitemapEntry[] = [
    {
      loc: `${baseUrl}`,
      description:
        "Revolutionising the Essence of Luxury with Affordable, Locally Crafted Fragrances for Everyone. Born from a Vision of Inclusivity and Sustainability in Brisbane.",
    },
    {
      loc: `${baseUrl}/all`,
      description: "Full Collection: Scents for Every Preference.",
    },
    {
      loc: `${baseUrl}/contact`,
      description:
        "Get in Touch: We're Here to Assist You.\nChris Huang, Jan 20, 11:10PM.\nThe Main one (Under the Eutopia Perfumes)",
    },
    {
      loc: `${baseUrl}/for-her`,
      description:
        "Elegant Aromas: Shop Online to Discover Your Signature Scent.",
    },
    {
      loc: `${baseUrl}/for-him`,
      description: "Distinctive Allure: Explore Our Range of Bold Fragrances.",
    },
    {
      loc: `${baseUrl}/join`,
    },
    {
      loc: `${baseUrl}/neutral`,
      description: "Universal Appeal: Find Balance in Versatile Scents.",
    },
    {
      loc: `${baseUrl}/site`,
    },
    {
      loc: `${baseUrl}/story`,
      description:
        "The Vision Behind Eutopia Perfumes: Crafting Affordable Luxury.",
    },
    // Add more static pages if needed
  ];

  // Dynamic routes
  const getAllProductIds = async (): Promise<string[]> => {
    const query = `*[_type == "product"]._id`;
    const productIds = await sanityClient.fetch(query);
    return productIds.map((id: string) => id.split("-")[1]);
  };
  const productIds = await getAllProductIds();

  const fetchAllSlugs = async (): Promise<{ slug: string }[]> => {
    return sanityClient.fetch(`
      *[_type == "wysiwygPage"]{
          "slug": slug.current
      }
    `);
  };
  const slugs = await fetchAllSlugs();

  const dynamicRoutes: SitemapEntry[] = [
    ...productIds.map((id: string) => ({
      loc: `${baseUrl}/product/${id}`,
    })),
    ...slugs.map((slugs: { slug: string }) => ({
      loc: `${baseUrl}/${slugs.slug}`,
    })),
  ];

  // Combine all routes:
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

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
