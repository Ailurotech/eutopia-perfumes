import { StarRating } from "../StarRating";
import { Metrics } from "./components/Metrics";
import { RatingDistribution } from "./components/RatingDistribution";
import { ReviewCard } from "./components/ReviewCard";
import { SingleReview } from "./components/SingleReview";
import { SummaryHighLight } from "./components/SummaryHighLight";

export function ReviewSection() {
  return (
    <div className="bg-[#f3f0f0] py-8 px-20 w-full text-default">
      <div className="grid grid-cols-3 grid-rows-[auto_auto_auto_auto] gap-y-10">
        <h1 className="uppercase text-5xl col-span-3 justify-self-center self-center font-black mb-8">
          REVIEWS
        </h1>
        <SummaryHighLight>
          <h2 className="text-[50px] font-extrabold">4.7</h2>
          <p>1714 Reviews</p>
          <StarRating starNum={4.7} />
        </SummaryHighLight>
        <SummaryHighLight>
          <h2 className="text-[50px] font-extrabold">100%</h2>
          <p className="text-center">WORLD RECOMMENDED THIS TO A FRIEND</p>
        </SummaryHighLight>
        <RatingDistribution />
        <div className="row-start-3 col-span-3 self-center mt-4">
          <div className="flex justify-center gap-8">
            <Metrics name="Longevity" starNum={4.7} />
            <Metrics name="Quality" starNum={4.7} />
            <Metrics name="Value" starNum={4.7} />
          </div>
        </div>
        <div className="row-start-4 col-span-3 self-center">
          <div className="flex justify-between gap-10">
            <ReviewCard name="MOST LIKED POSITIVE" />
            <ReviewCard name="MOST LIKED NEGATIVE" />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <SingleReview />
        <SingleReview />
        <SingleReview />
        <SingleReview />
      </div>
    </div>
  );
}
