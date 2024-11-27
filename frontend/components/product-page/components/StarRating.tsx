export function StarRating({ starNum }: { starNum: number }) {
  return <div className="flex gap-1">{Stars(starNum)}</div>;
}

function Stars(num: number) {
  const totalNum = 5;
  if (num % 1 === 0) {
    const stars = Array.from({ length: totalNum }, (_, i) => i < num);
    return stars.map((filled, i) =>
      filled ? <FullStar key={i} /> : <EmptyStar key={i} />
    );
  }
  if (num % 1 != 0) {
    const stars = Array.from({ length: totalNum }, (_, i) => {
      const int = Math.floor(num);
      if (i < int) return { filled: true, half: false };
      if (i === int) return { filled: false, half: true };
      return { filled: false, half: false };
    });
    return stars.map((star, i) => {
      return Star(star.filled, star.half, i);
    });
  }
}

function Star(filled: boolean, half: boolean, index: number) {
  return (
    (filled && <FullStar key={index} />) ||
    (half && <HalfStar key={index} />) || <EmptyStar key={index} />
  );
}

type CommonStarProps = {
  clip?: string;
};

function CommonStar({ clip }: CommonStarProps) {
  return (
    <>
      <path
        fillRule="evenodd"
        d="M10 3l2.5 5.5 5.5.5-4 4 1 5.5-5-2-5 2 1-5.5-4-4 5.5-.5L10 3z"
        clipRule="evenodd"
        clipPath={clip}
      />
      <StarOutline />
    </>
  );
}

function StarOutline() {
  return (
    <path
      fill="none"
      d="M10 3l2.5 5.5 5.5.5-4 4 1 5.5-5-2-5 2 1-5.5-4-4 5.5-.5L10 3z"
      stroke="#808274"
      strokeWidth="2"
    />
  );
}

function FullStar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-[#808274]"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <CommonStar />
    </svg>
  );
}

function HalfStar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-[#808274]"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <defs>
        <clipPath id="halfClip">
          <rect x="0" y="0" width="10" height="20" />
        </clipPath>
      </defs>
      <CommonStar clip="url(#halfClip)" />
    </svg>
  );
}

function EmptyStar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-[#808274]"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <StarOutline />
    </svg>
  );
}
