import { useEffect, useState } from "react";
import { StarRating } from "../../StarRating";
import { ReviewExpandButton } from "./ReviewExpandButton";
import { IComment } from "@/interface/comment";

interface IReviewCardProps {
  name: "MOST LIKED POSITIVE" | "MOST LIKED NEGATIVE";
  comment: IComment;
}
const MAX_LENGTH = 350;

export function ReviewCard({ name, comment }: IReviewCardProps) {
  const [isLongComment, setIsLongComment] = useState<boolean>(false);
  useEffect(() => {
    if (comment?.comment) {
      setIsLongComment(comment.comment.length > MAX_LENGTH);
    }
  }, [comment?.comment]);
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
function setIsLongComment(arg0: boolean) {
  throw new Error("Function not implemented.");
}
