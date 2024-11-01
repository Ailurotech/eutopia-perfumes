import { sanityClient } from "@/lib/sanityClient";
import { shoppingPageQuery, shoppingVideoQuery } from "@/query";
import { PageType } from "@/type";
import { productFormat } from "./product-format";

export async function productPageGetData(page: PageType) {
  const videoQuery = shoppingVideoQuery(page);
  let pageName = "";
  switch (page) {
    case "all":
      break;
    case "for-him":
      pageName = "For Him";
      break;
    case "for-her":
      pageName = "For Her";
      break;
    case "neutral":
      pageName = "Neutral";
      break;
    default:
      throw new Error("Invalid page type");
  }
  const pageQuery = shoppingPageQuery(page === "all" ? "" : pageName);
  let video = {};
  let products = [];
  try {
    const data = await Promise.all([
      sanityClient.fetch(videoQuery),
      sanityClient.fetch(pageQuery),
    ]);
    video = data[0][0];
    products = productFormat(data[1]);
  } catch (error) {
    console.error("Error fetching banner items:", error);
    video = {};
    products = [];
  }

  return {
    video,
    products,
  };
}
