import { Progress } from "@chakra-ui/react";

interface RatingDisplayProps {
  starName: string;
  starValue: number;
  starAmount: number;
}

export function RatingDisplay({
  starName,
  starValue,
  starAmount,
}: RatingDisplayProps) {
  return (
    <div className="grid grid-cols-[minmax(50px,auto)_1fr_minmax(40px,auto)] justify-start items-center gap-5">
      <p className="underline">{starName}</p>
      <Progress
        value={starValue}
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "4px",
          width: "200px",
          height: "14px",
          "& > div": {
            background: "#808274",
          },
        }}
      />
      <h1>{starAmount}</h1>
    </div>
  );
}
