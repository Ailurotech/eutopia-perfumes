import { useEffect, useState } from "react";
import { StarRating } from "../../StarRating";
import { Icon } from "@/components/common/Icon";
import { postDateFormat } from "@/utils/post-date-format";
import { ReviewDetails } from "./ReviewDetails";
import { IComment } from "@/interface/comment";

interface IReviewCardProps {
  comment: IComment;
}

export function SingleReview({ comment }: IReviewCardProps) {
  const [thumbUp, setThumbUp] = useState(0);
  const [thumbDown, setThumbDown] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  useEffect(() => {
    if (comment.isVerified) {
      setIsVerified(true);
    }
  }, [comment.isVerified]);
  const date = postDateFormat(comment.createdAt);
  return (
    <div className="pt-4 pb-10 md:pr-10 lg:pr-20 2xl:pr-32 border-t-[2px] border-default">
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center mb-4">
        <StarRating starNum={comment.starRating} />
        <h1 className="text-xl font-bold">{comment.title}</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        <div className="space-y-5 lg:space-y-10 max-w-[1000px]">
          <p>{comment.comment}</p>
          <div className="flex flex-col items-start md:flex-row md:items-center gap-2 lg:gap-10">
            <p className="font-bold text-xl">Was this review helpful to you?</p>
            <div className="flex gap-5 lg:gap-10">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setThumbUp(thumbUp + 1);
                  }}
                >
                  <Icon name="thumbsUp" />
                </button>
                <span>{thumbUp}</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setThumbDown(thumbDown + 1);
                  }}
                >
                  <Icon name="thumbsDown" />
                </button>
                <span>{thumbDown}</span>
              </div>
              <p>Flag this review</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-row-3 md:grid-cols-3 md:grid-rows-2 items-center lg:items-start lg:flex lg:flex-col justify-start min-w-[180px]">
          <ReviewDetails title="Posted" detail={date} />
          <ReviewDetails title="Name" detail={comment.commenter} />
          <ReviewDetails title="From" detail={comment.commentFrom} />
          <div className="flex items-center gap-2">
            {isVerified && (
              <>
                <Icon name="check" color="#186f50" boxSize={4} />
                <span>Verified Reviewer</span>
              </>
            )}
          </div>
          <div className="flex lg:flex-col gap-2 items-center lg:items-start lg:gap-0">
            <p className="font-bold">Reviewed at</p>
            <p className="text-sm">{comment.reviewedAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
