import { sanityClient } from "@/lib/sanityClient";
import { shoppingPageQuery, shoppingVideoQuery } from "@/query";
import { PageType } from "@/type";
import { productFormat } from "./product-format";
import { convertPathToPageName } from "./page-path-name-convert";

export async function productPageGetData(page: PageType) {
  const videoQuery = shoppingVideoQuery(page);
  const pageName = convertPathToPageName(page);
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
