import { ProductPage } from "@/components/product-page/ProductPage";
import { sanityClient } from "@/lib/sanityClient";
import {
  productPageQuery,
  recommendedProductQuery,
  skuQuery,
} from "@/query/product-page.query";
import { ProductPageContent, RecommendedProducts } from "@/type";
import { productFormat } from "@/utils";
import { Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Product() {
  const router = useRouter();
  const id = router.query.id as string;

  const [productPageContent, setProductPageContent] =
    useState<ProductPageContent>();
  const [recommendedProducts, setRecommendedProducts] =
    useState<RecommendedProducts[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id);
      const mainSanityQuery = productPageQuery(parsedId);
      const skuSanityQuery = skuQuery(parsedId);
      const fetchProduct = async () => {
        const [mainProduct, sku] = await Promise.all([
          sanityClient.fetch(mainSanityQuery),
          sanityClient.fetch(skuSanityQuery),
        ]);
        const parsedProduct = productFormat(mainProduct, sku[0].sku)[0];
        const secondSanityQuery = recommendedProductQuery(parsedProduct.tag);
        const recommendedItem = await sanityClient.fetch(secondSanityQuery);
        setRecommendedProducts(recommendedItem);
        setProductPageContent(parsedProduct as ProductPageContent);
        setLoading(false);
      };
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-60">
        <Spinner
          thickness="5px"
          speed="0.6s"
          emptyColor="gray.200"
          color="#808274"
          size="xl"
        />
      </div>
    );
  }

  if (!loading && productPageContent && recommendedProducts) {
    return (
      <ProductPage
        productPageContent={productPageContent}
        recommendedProducts={recommendedProducts}
      />
    );
  }
}
