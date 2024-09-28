import { ProductPage } from "@/components/product-page/ProductPage";
import { sanityClient } from "@/lib/sanityClient";
import { Category, ProductPageContent, RecommendedProducts } from "@/type";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Product() {
  const router = useRouter();
  const slug = router.query.slug;

  const [productPageContent, setProductPageContent] =
    useState<ProductPageContent>();
  const [recommendedProducts, setRecommendedProducts] =
    useState<RecommendedProducts[]>();
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
      const fetchProduct = async () => {
        const productItem = await sanityClient.fetch(sanityQuery);
        const data = productItem[0];
        const category = data.category;
        const sanitySecondQuery = `
        *[_type == "perfume" && slug.current != "${slug}" && category == "${category}"]{
          name,
          "image": image.asset -> url,
          price
        }[0...10]
        `;
        const recommendedItem = await sanityClient.fetch(sanitySecondQuery);
        setRecommendedProducts(recommendedItem);
        setProductPageContent(data);
        setLoading(false);
      };
      fetchProduct();
    }
  }, [slug]);

  if (!loading && productPageContent && recommendedProducts) {
    return (
      <ProductPage
        productPageContent={productPageContent}
        recommendedProducts={recommendedProducts}
      />
    );
  }
}
