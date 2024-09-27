import { ProductPage } from "@/components/product-page/ProductPage";
import { sanityClient } from "@/lib/sanityClient";
import { ProductPageContent } from "@/type";
import { GetStaticProps } from "next";

interface ProductProps {
  productPageContent: ProductPageContent;
}

export default function Product({ productPageContent }: ProductProps) {
  return <ProductPage productPageContent={productPageContent} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const sanityQuery = `
  *[_type == "perfume" && slug.current == "SKU: E994-50-1"]{
      volumeOfMl,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      description,
      volumeOfOz,
      price,
      category
    }
  `;

  const productItem = await sanityClient.fetch(sanityQuery);
  return {
    props: {
      productPageContent: productItem[0],
    },
  };
};
