import { StarRating } from "../StarRating";
import { Metrics } from "./components/Metrics";
import { RatingDistribution } from "./components/RatingDistribution";
import { ReviewCard } from "./components/ReviewCard";
import { SingleReview } from "./components/SingleReview";
import { SummaryHighLight } from "./components/SummaryHighLight";
import { DropdownMenu } from "./components/DropdownMenu";

export function ReviewSection() {
  return (
    <div className="bg-[#f3f0f0] py-10 px-20 w-full text-default space-y-3 lg:space-y-10">
      <div className="flex flex-col gap-12 justify-center items-center lg:grid lg:grid-cols-3 lg:grid-rows-[auto_auto_auto_auto] lg:gap-y-10">
        <h1 className="uppercase text-5xl col-span-3 justify-self-center self-center font-black lg:mb-8">
          REVIEWS
        </h1>
        <SummaryHighLight highlight="4.7" description="1714 Reviews">
          <StarRating starNum={4.7} />
        </SummaryHighLight>
        <SummaryHighLight
          highlight="100%"
          description="WORLD RECOMMENDED THIS TO A FRIEND"
        />
        <RatingDistribution />
        <div className="row-start-3 col-span-3 self-center mt-4">
          <div className="flex justify-center gap-8">
            <Metrics name="Longevity" starNum={4.7} />
            <Metrics name="Quality" starNum={4.7} />
            <Metrics name="Value" starNum={4.7} />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-10 shrink grow-0">
        <ReviewCard name="MOST LIKED POSITIVE" />
        <ReviewCard name="MOST LIKED NEGATIVE" />
      </div>
      <div className="flex flex-col items-end gap-4">
        <DropdownMenu
          menuTitle="Sort by"
          menuItems={["Most Recent", "Most Oldest"]}
        />
        <div className="flex flex-col w-full">
          <SingleReview />
          <SingleReview />
          <SingleReview />
          <SingleReview />
        </div>
      </div>
    </div>
  );
}
