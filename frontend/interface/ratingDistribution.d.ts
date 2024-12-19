import { ERatingOption } from "../constants/productPage";

type TRating = (typeof ERatingOption)[keyof typeof ERatingOption];
interface IRating {
  starAmount: number;
  starValue: number;
}
export interface IRatingDistribution {
  [key in TRating]: IRating;
}
