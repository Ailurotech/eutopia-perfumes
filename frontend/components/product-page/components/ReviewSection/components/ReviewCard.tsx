import { StarRating } from "../../StarRating";

interface IReviewCardProps {
  name: "MOST LIKED POSITIVE" | "MOST LIKED NEGATIVE";
}

export function ReviewCard({ name }: IReviewCardProps) {
  return (
    <div className="bg-white p-6 rounded-md space-y-2">
      <h2 className="font-bold">{name}REVIEW</h2>
      <div>
        <div className="float-right mb-5">
          <StarRating starNum={4.7} />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolore,
          asperiores officia dicta error expedita accusamus molestiae nulla
          minima dolores ex, facilis commodi non ad repudiandae quo explicabo
          neque! Ratione! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Suscipit magni nesciunt aliquid, nisi provident dolorum quis
          alias quibusdam libero optio hic voluptate vitae odio exercitationem
          ea! Quaerat, totam laboriosam. Modi!
        </p>
      </div>
    </div>
  );
}
