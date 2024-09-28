import { ProductPage } from "@/components/product-page/ProductPage";
import { sanityClient } from "@/lib/sanityClient";
import {
  productPageQuery,
  recommendedProductQuery,
} from "@/query/product-page.query";
import { ProductPageContent, RecommendedProducts } from "@/type";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Product() {
  const router = useRouter();
  const slug = router.query.slug as string;

  const [productPageContent, setProductPageContent] =
    useState<ProductPageContent>();
  const [recommendedProducts, setRecommendedProducts] =
    useState<RecommendedProducts[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (slug) {
      const mainSanityQuery = productPageQuery(slug);
      const fetchProduct = async () => {
        const productItem = await sanityClient.fetch(mainSanityQuery);
        const data = productItem[0];
        const category = data.category;
        const secondSanityQuery = recommendedProductQuery(slug, category);
        const recommendedItem = await sanityClient.fetch(secondSanityQuery);
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
