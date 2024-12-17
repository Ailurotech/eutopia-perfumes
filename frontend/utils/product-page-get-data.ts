import { sanityClient } from "@/lib/sanityClient";
import { shoppingPageQuery, shoppingVideoQuery } from "@/query";
import { productFormat } from "./product-format";
import { convertPathToPageName } from "./page-path-name-convert";
import { shoppingPageSettingQuery } from "@/query/shopping-page-setting.query";
import { TPageName } from "@/interface/pages/pageSetting";

export async function productPageGetData(page: TPageName) {
  const videoQuery = shoppingVideoQuery(page);
  const pageName = convertPathToPageName(page);
  const pageQuery = shoppingPageQuery(page === "all" ? "" : pageName);
  const pageSettingQuery = shoppingPageSettingQuery();
  let video = {};
  let products = [];
  let pageSetting = {};
  try {
    const data = await Promise.all([
      sanityClient.fetch(videoQuery),
      sanityClient.fetch(pageQuery),
      sanityClient.fetch(pageSettingQuery),
    ]);
    video = data[0][0];
    products = productFormat(data[1]);
    pageSetting = data[2][0];
  } catch (error) {
    console.error("Error fetching banner items:", error);
    video = {};
    products = [];
    pageSetting = {};
  }

  return {
    video,
    products,
    pageSetting,
  };
}
