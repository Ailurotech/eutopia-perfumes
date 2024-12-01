import { useState } from "react";
import { StarRating } from "../../StarRating";
import { Icon } from "@/components/common/Icon";

export function SingleReview() {
  const [thumbUp, setThumbUp] = useState(0);
  const [thumbDown, setThumbDown] = useState(0);
  return (
    <div className="pt-4 pb-10 md:pr-10 lg:pr-20 2xl:pr-32 border-t-[2px] border-default">
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center mb-4">
        <StarRating starNum={4.7} />
        <h1 className="text-xl font-bold">
          Nice unisex fragrance with touch of green tea and amber
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        <div className="space-y-5 lg:space-y-10 max-w-[1000px]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam sint
            velit totam beatae exercitationem hic. Cupiditate delectus dolores
            nemo, veniam corrupti vitae magnam eum quos, molestias sint tenetur,
            nulla ex!
          </p>
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
        <div className="grid grid-cols-2 grid-row-3 md:grid-cols-3 md:grid-rows-2 items-center lg:items-start lg:flex lg:flex-col justify-start min-w-[155px]">
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
          <div className="flex md:flex-col gap-2 items-center md:items-start md:gap-0">
            <p className="font-bold">Reviewed at</p>
            <p className="text-sm">coty.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
