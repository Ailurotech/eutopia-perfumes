import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { ProductPage } from "@/components/product-page/ProductPage";
import { IProductPageContent } from "@/interface/pages/productPage";
import { IRecommendedProduct } from "@/interface/product";
import { sanityClient } from "@/lib/sanityClient";
import {
  productPageQuery,
  recommendedProductQuery,
  skuQuery,
} from "@/query/product-page.query";
import { productFormat } from "@/utils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Product() {
  const router = useRouter();
  const id = router.query.id as string;

  const [productPageContent, setProductPageContent] =
    useState<IProductPageContent>();
  const [recommendedProducts, setRecommendedProducts] =
    useState<IRecommendedProduct[]>();
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
        setProductPageContent(parsedProduct as IProductPageContent);
        setLoading(false);
      };
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
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
