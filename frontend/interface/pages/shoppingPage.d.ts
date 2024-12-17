import { ShoppingDisplayVariants } from "../../components/shopping-page/ShoppingDisplay";
import { IPageSetting } from "./pageSetting";
import { IProductType } from "../product";
import { IVideo } from "../video";

export interface IShoppingPage {
  video: IVideo;
  products: IProductType[];
  pageSetting: IPageSetting;
}
