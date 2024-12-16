import { StarRating } from "../StarRating";
import { Metrics } from "./components/Metrics";
import { RatingDistribution } from "./components/RatingDistribution";
import { ReviewCard } from "./components/ReviewCard";
import { SingleReview } from "./components/SingleReview";
import { SummaryHighLight } from "./components/SummaryHighLight";
import { DropdownMenu } from "./components/DropdownMenu";
import { EReviewFilterOption, TProductPageExtraContent } from "@/type";
import { ratingDistributionFormat } from "@/utils/rating-distribution-format";
import { useState, useEffect } from "react";

export function ReviewSection({ comments, avgStar }: TProductPageExtraContent) {
  const [displayComments, setDisplayComments] = useState([]);

  useEffect(() => {
    if (comments) {
      setDisplayComments(comments);
    }
  }, [comments]);

  if (!comments || comments.length === 0) {
    return (
      <div className="bg-[#f3f0f0] py-10 px-20 w-full text-default">
        <div className="flex flex-col items-center justify-center min-h-[200px]">
          <h1 className="uppercase text-5xl font-black mb-4">REVIEWS</h1>
          <p className="text-lg text-gray-600 text-center">
            There are no reviews at the moment.
          </p>
        </div>
      </div>
    );
  }

  const sortedComments = [...comments].sort(
    (a, b) => b.starRating - a.starRating
  );
  const ratingDistribution = ratingDistributionFormat(comments);
  const filters = [
    EReviewFilterOption.MOST_RECENT,
    EReviewFilterOption.MOST_OLDEST,
  ];
  const TOTAL_DISPLAY_COMMENTS = 5;

  return (
    <div className="bg-[#f3f0f0] py-10 px-20 w-full text-default">
      <div className="flex flex-col gap-8 justify-center items-center lg:grid lg:grid-cols-3 lg:grid-rows-[auto_auto] lg:gap-y-10">
        <h1 className="uppercase text-5xl col-span-3 justify-self-center self-center font-black lg:mb-8">
          REVIEWS
        </h1>
        <SummaryHighLight
          highlight={avgStar}
          description={`${comments.length} Reviews`}
        >
          <StarRating starNum={avgStar} />
        </SummaryHighLight>
        <SummaryHighLight
          highlight="100%"
          description="WORLD RECOMMENDED THIS TO A FRIEND"
        />
        <RatingDistribution ratingDistribution={ratingDistribution} />
      </div>
      <div className="my-10 lg:my-16 flex justify-center gap-8 items-center w-full">
        <Metrics name="Longevity" starNum={avgStar} />
        <Metrics name="Quality" starNum={avgStar} />
        <Metrics name="Value" starNum={avgStar} />
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <ReviewCard name="MOST LIKED POSITIVE" comment={sortedComments[0]} />
        <ReviewCard
          name="MOST LIKED NEGATIVE"
          comment={sortedComments[sortedComments.length - 1]}
        />
      </div>
      <div className="flex flex-col items-end gap-4 my-6">
        <DropdownMenu
          menuTitle="Sort by"
          menuItems={filters}
          setDisplayComments={setDisplayComments}
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
