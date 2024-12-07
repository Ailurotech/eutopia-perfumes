import { ERatingOption, TCommentType, TRatingDistribution } from "@/type";

function calPercentage(rate: number, total: number) {
  return Number(((rate / total) * 100).toFixed(2));
}

export function ratingDistributionFormat(
  comments: TCommentType[]
): TRatingDistribution {
  const res = {} as TRatingDistribution;
  const totalComments = comments.length;
  const totalRating = Object.keys(ERatingOption).length;
  const ratingSummary = comments.reduce((acc, comment) => {
    acc[comment.starRating - 1]++;
    return acc;
  }, Array(totalRating).fill(0));
  ratingSummary.forEach((rate, i) => {
    switch (i) {
      case 0:
        res[ERatingOption.OneStar] = {
          starAmount: rate,
          starValue: calPercentage(rate, totalComments),
        };
        break;
      case 1:
        res[ERatingOption.TwoStar] = {
          starAmount: rate,
          starValue: calPercentage(rate, totalComments),
        };
        break;
      case 2:
        res[ERatingOption.ThreeStar] = {
          starAmount: rate,
          starValue: calPercentage(rate, totalComments),
        };
        break;
      case 3:
        res[ERatingOption.FourStar] = {
          starAmount: rate,
          starValue: calPercentage(rate, totalComments),
        };
        break;
      case 4:
        res[ERatingOption.FiveStar] = {
          starAmount: rate,
          starValue: calPercentage(rate, totalComments),
        };
        break;
    }
  });
  return res;
}
