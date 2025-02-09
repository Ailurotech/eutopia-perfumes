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
import { createSlug } from "@/utils/slug";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Product() {
  const router = useRouter();
  const { slug } = router.query;

  const [productPageContent, setProductPageContent] =
    useState<IProductPageContent>();
  const [recommendedProducts, setRecommendedProducts] =
    useState<IRecommendedProduct[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (slug) {
      const fetchProduct = async () => {
        try {
          const productsQuery = `*[_type == "product"]{ 
            "id": store.id,
            "title": store.title
          }`;
          const products = await sanityClient.fetch(productsQuery);

          const matchingProduct = products.find((p) => {
            const productSlug = createSlug(p.title);
            return productSlug === slug;
          });

          if (!matchingProduct) {
            console.log("No matching product found, redirecting to 404");
            router.push("/404");
            return;
          }

          const mainSanityQuery = productPageQuery(matchingProduct.id);
          const skuSanityQuery = skuQuery(matchingProduct.id);

          const [mainProduct, sku] = await Promise.all([
            sanityClient.fetch(mainSanityQuery),
            sanityClient.fetch(skuSanityQuery),
          ]);

          const parsedProduct = productFormat(mainProduct, sku[0].sku)[0];
          const secondSanityQuery = recommendedProductQuery(parsedProduct.tag);
          const recommendedItem = await sanityClient.fetch(secondSanityQuery);

          setRecommendedProducts(recommendedItem);
          setProductPageContent(parsedProduct as IProductPageContent);
        } catch (error) {
          console.error("Error fetching product:", error);
          router.push("/404");
        } finally {
          setLoading(false);
        }
      };
      fetchProduct();
    }
  }, [slug, router]);

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
