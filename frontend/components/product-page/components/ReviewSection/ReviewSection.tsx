import { StarRating } from "../StarRating";
import { RatingDistribution } from "./components/RatingDistribution";

export function ReviewSection() {
  return (
    <div className="bg-[#f3f0f0] py-8 px-8 grid grid-cols-3 grid-rows-2">
      <h1 className="uppercase text-4xl col-span-3 justify-self-center self-center">
        REVIEWS
      </h1>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl">4.7</h2>
        <p>1714 Reviews</p>
        <StarRating starNum={4.7} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl">100%</h2>
        <p>WORLD RECOMMENDED THIS TO A FRIEND</p>
      </div>
      <RatingDistribution />
    </div>
  );
}
