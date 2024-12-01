import { useEffect, useState } from "react";
import { StarRating } from "../../StarRating";
import { Icon } from "@/components/common/Icon";

interface IReviewCardProps {
  name: "MOST LIKED POSITIVE" | "MOST LIKED NEGATIVE";
}

const mockData = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolore,
          asperiores officia dicta error expedita accusamus molestiae nulla
          minima dolores ex, facilis commodi non ad repudiandae quo explicabo
          neque! Ratione! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Suscipit magni nesciunt aliquid, nisi provident dolorum quis
          alias quibusdam libero optio hic voluptate vitae odio exercitationem
          ea! Quaerat, totam laboriosam. Modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolore,
          asperiores officia dicta error expedita accusamus molestiae nulla
          minima dolores ex, facilis commodi non ad repudiandae quo explicabo
          neque! Ratione!`;

const MAX_LENGTH = 450;

export function ReviewCard({ name }: IReviewCardProps) {
  useEffect(() => {
    if (mockData.length > MAX_LENGTH) {
      setSpanReview(false);
    }
  }, []);
  const [spanReview, setSpanReview] = useState<boolean>();
  return (
    <div className="bg-white p-6 rounded-md space-y-2">
      <h2 className="font-black">{name} REVIEW</h2>
      <div>
        <div className="float-right mb-5">
          <StarRating starNum={4.7} />
        </div>
        <p className="max-w-[900px]">
          {!spanReview ? `${mockData.slice(0, MAX_LENGTH)}...` : mockData}
        </p>
      </div>
      <button
        className="flex items-center"
        onClick={() => {
          setSpanReview(!spanReview);
        }}
      >
        Read complete review <Icon name="arrowDown" />
      </button>
    </div>
  );
}
