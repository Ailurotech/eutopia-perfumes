import { StarRating } from "../StarRating";
import { Metrics } from "./components/Metrics";
import { RatingDistribution } from "./components/RatingDistribution";
import { ReviewCard } from "./components/ReviewCard";
import { SingleReview } from "./components/SingleReview";
import { SummaryHighLight } from "./components/SummaryHighLight";
import { DropdownMenu } from "./components/DropdownMenu";
import { TProductPageExtraContent } from "@/type";
import { ratingDistributionFormat } from "@/utils/rating-distribution-format";
import { useEffect, useState } from "react";

export function ReviewSection({ comments, avgStar }: TProductPageExtraContent) {
  const totalReviews = comments.length;
  const ratingDistribution = ratingDistributionFormat(comments);
  const [displayComments, setDisplayComments] = useState(comments);
  const TOTAL_DISPLAY_COMMENTS = 5;
  return (
    <div className="bg-[#f3f0f0] py-10 px-20 w-full text-default space-y-3 lg:space-y-10">
      <div className="flex flex-col gap-12 justify-center items-center lg:grid lg:grid-cols-3 lg:grid-rows-[auto_auto_auto_auto] lg:gap-y-10">
        <h1 className="uppercase text-5xl col-span-3 justify-self-center self-center font-black lg:mb-8">
          REVIEWS
        </h1>
        <SummaryHighLight
          highlight={avgStar}
          description={`${totalReviews} Reviews`}
        >
          <StarRating starNum={avgStar} />
        </SummaryHighLight>
        <SummaryHighLight
          highlight="100%"
          description="WORLD RECOMMENDED THIS TO A FRIEND"
        />
        <RatingDistribution ratingDistribution={ratingDistribution} />
        <div className="row-start-3 col-span-3 self-center mt-4">
          <div className="flex justify-center gap-8">
            <Metrics name="Longevity" starNum={avgStar} />
            <Metrics name="Quality" starNum={avgStar} />
            <Metrics name="Value" starNum={avgStar} />
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
          {displayComments
            .slice(0, TOTAL_DISPLAY_COMMENTS)
            .map((comment, i) => (
              <SingleReview key={i} comment={comment} />
            ))}
        </div>
      </div>
    </div>
  );
}
