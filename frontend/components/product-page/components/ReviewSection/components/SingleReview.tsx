import { useState } from "react";
import { StarRating } from "../../StarRating";
import { Icon } from "@/components/common/Icon";

export function SingleReview() {
  const [thumbUp, setThumbUp] = useState(0);
  const [thumbDown, setThumbDown] = useState(0);
  return (
    <div className="pt-4 pb-10 pr-44 border-t-[2px] border-default">
      <div className="flex gap-4 items-center mb-4">
        <StarRating starNum={4.7} />
        <h1 className="text-xl font-bold">
          Nice unisex fragrance with touch of green tea and amber
        </h1>
      </div>
      <div className="flex gap-12">
        <div className="space-y-10 max-w-[1100px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam sint
            velit totam beatae exercitationem hic. Cupiditate delectus dolores
            nemo, veniam corrupti vitae magnam eum quos, molestias sint tenetur,
            nulla ex!
          </p>
          <div className="flex items-center gap-10">
            <p className="font-bold text-xl">Was this review helpful to you?</p>
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
        <div className="flex flex-col justify-start">
          <p className="space-x-2">
            <span className="font-bold">Posted</span>
            <span>1 month ago</span>
          </p>
          <p className="space-x-2">
            <span className="font-bold">Name</span>
            <span>freyalb</span>
          </p>
          <p className="space-x-2">
            <span className="font-bold">From</span>
            <span>undisclosed</span>
          </p>
          <div className="flex items-center gap-2">
            <Icon name="check" color="#186f50" boxSize={4} />
            <span>Verified Reviewer</span>
          </div>
          <p className="font-bold">Reviewed at</p>
          <p className="text-sm">coty.com</p>
        </div>
      </div>
    </div>
  );
}
