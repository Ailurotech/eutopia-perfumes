import { TRatingDistribution } from "@/type";
import { RatingDisplay } from "./RatingDisplay";
interface IRatingDistributionProps {
  ratingDistribution: TRatingDistribution;
}

export function RatingDistribution({
  ratingDistribution,
}: IRatingDistributionProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2>RATINGS DISTRIBUTION</h2>
      {Object.entries(ratingDistribution).map(([key, value], index) => {
        return (
          <RatingDisplay
            key={index}
            starName={key}
            starAmount={value.starAmount}
            starValue={value.starValue}
          />
        );
      })}
    </div>
  );
}
