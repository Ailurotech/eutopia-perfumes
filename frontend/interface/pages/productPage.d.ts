import { IProduct } from "../product";
import { IComment } from "../comment";

export interface IReviewSection {
  comments: IComment[];
  avgStar: number;
}
export type IProductPageContent = IProduct & IReviewSection;
