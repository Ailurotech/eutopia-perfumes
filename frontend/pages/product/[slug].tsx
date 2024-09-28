import { ProductPage } from "@/components/product-page/ProductPage";
import { sanityClient } from "@/lib/sanityClient";
import { ProductPageContent } from "@/type";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Product() {
  const router = useRouter();
  const slug = router.query.slug;

  const [productPageContent, setProductPageContent] =
    useState<ProductPageContent>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (slug) {
      const sanityQuery = `
      *[_type == "perfume" && slug.current == "${slug}"]{
          volumeOfMl,
          name,
          "slug": slug.current,
          "image": image.asset->url,
          description,
          volumeOfOz,
          price,
          category,
          tag
        }
      `;
      console.log(sanityQuery);
      const fetchProduct = async () => {
        const productItem = await sanityClient.fetch(sanityQuery);
        setProductPageContent(productItem[0]);
        setLoading(false);
      };
      fetchProduct();
    }
  }, [slug]);

  if (!loading && productPageContent) {
    return <ProductPage productPageContent={productPageContent!} />;
  }
}
