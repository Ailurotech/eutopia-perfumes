import { StarRating } from "../../StarRating";

interface IMetricsProps {
  name: "Longevity" | "Quality" | "Value";
  starNum: number;
}

export function Metrics({ name, starNum }: IMetricsProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-base font-bold">{name}</h2>
      <StarRating starNum={starNum} />
    </div>
  );
}
