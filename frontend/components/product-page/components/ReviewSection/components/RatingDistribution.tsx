import { RatingDisplay } from "./RatingDisplay";

const total = 1714;
const ratingDistributionData = [
  {
    starName: "5 stars",
    starAmount: 1306,
  },
  {
    starName: "4 stars",
    starAmount: 280,
  },
  {
    starName: "3 stars",
    starAmount: 94,
  },
  {
    starName: "2 stars",
    starAmount: 15,
  },
  {
    starName: "1 stars",
    starAmount: 19,
  },
];

const finalData = ratingDistributionData.map((data) => {
  return {
    ...data,
    starValue: (data.starAmount / total) * 100,
  };
});

export function RatingDistribution() {
  return (
    <div className="flex flex-col justify-between items-center">
      <h2>RATINGS DISTRIBUTION</h2>
      {finalData.map((data, index) => {
        return <RatingDisplay key={index} {...data} />;
      })}
    </div>
  );
}
