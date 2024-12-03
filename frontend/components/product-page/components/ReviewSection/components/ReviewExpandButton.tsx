import { Icon } from "@/components/common/Icon";
import { Dispatch, SetStateAction } from "react";

interface IReviewExpandButtonProps {
  setExpandReview: Dispatch<SetStateAction<boolean>>;
  expandReview: boolean;
  buttonName: string;
}

export function ReviewExpandButton({
  buttonName,
  expandReview,
  setExpandReview,
}: IReviewExpandButtonProps) {
  return (
    <button
      className="flex items-center "
      onClick={() => {
        setExpandReview(!expandReview);
      }}
    >
      {buttonName} <Icon name="arrowDown" />
    </button>
  );
}
