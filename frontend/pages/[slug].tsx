import { GetStaticProps, GetStaticPaths } from "next";
import { sanityClient } from "../lib/sanityClient";
import { PortableText } from "@portabletext/react";
import SanityImage from "@/components/product-page/components/SanityImage";

const components = {
  types: {
    image: ({ value }: any) => <SanityImage value={value} />,
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold mb-4 mt-8">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold mb-4 mt-6">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold mb-3 mt-5">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gray-200 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ value, children }: any) => (
      <a href={value?.href} className="text-blue-600 hover:underline">
        {children}
      </a>
    ),
  },
};

interface PageProps {
  page: {
    title: string;
    content: any[];
    customHtml?: string;
    customCss?: string;
    enableCustomCode?: boolean;
  };
}

export default function DynamicPage({ page }: PageProps) {
  if (!page) return null;

  return (
    <div className="min-h-screen bg-white">
      {page.enableCustomCode && page.customCss && (
        <style dangerouslySetInnerHTML={{ __html: page.customCss }} />
      )}

      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            {page.title}
          </h1>
        </header>

        {page.enableCustomCode && page.customHtml && (
          <div dangerouslySetInnerHTML={{ __html: page.customHtml }} />
        )}

        <div className="prose prose-lg max-w-none">
          <PortableText value={page.content} components={components} />
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await sanityClient.fetch(`
    *[_type == "wysiwygPage"] {
      "slug": slug.current
    }
  `);

  return {
    paths: pages.map((page: { slug: string }) => ({
      params: { slug: page.slug },
    })),
    fallback: "blocking", // Use 'blocking' to handle new pages
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = await sanityClient.fetch(
    `
    *[_type == "wysiwygPage" && slug.current == $slug][0] {
      title,
      content,
      customHtml,
      customCss,
      enableCustomCode
    }
  `,
    { slug: params?.slug }
  );

  if (!page) {
    return { notFound: true };
  }

  return {
    props: { page },
    revalidate: 60,
  };
};
