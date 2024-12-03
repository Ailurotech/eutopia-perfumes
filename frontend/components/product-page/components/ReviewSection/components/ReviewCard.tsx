import { useEffect, useState } from "react";
import { StarRating } from "../../StarRating";
import { Icon } from "@/components/common/Icon";
import { TCommentType } from "@/type";
import { ReviewExpandButton } from "./ReviewExpandButton";

interface IReviewCardProps {
  name: "MOST LIKED POSITIVE" | "MOST LIKED NEGATIVE";
  comment: TCommentType;
}
const MAX_LENGTH = 350;

export function ReviewCard({ name, comment }: IReviewCardProps) {
  useEffect(() => {
    if (comment.comment.length > MAX_LENGTH) {
      setExpandReview(false);
    }
  }, []);
  const [expandReview, setExpandReview] = useState<boolean>(true);
  return (
    <div className="bg-white p-6 rounded-md space-y-2">
      <h2 className="font-black">{name} REVIEW</h2>
      <div>
        <div className="float-right mb-5">
          <StarRating starNum={comment.starRating} />
        </div>
        <p className="max-w-[900px]">
          {!expandReview
            ? `${comment.comment.slice(0, MAX_LENGTH)}...`
            : comment.comment}
        </p>
      </div>
      {!expandReview && (
        <ReviewExpandButton
          buttonName="Read complete review"
          expandReview={expandReview}
          setExpandReview={setExpandReview}
        />
      )}
      {expandReview && (
        <ReviewExpandButton
          buttonName="Close review"
          expandReview={expandReview}
          setExpandReview={setExpandReview}
        />
      )}
    </div>
  );
}
