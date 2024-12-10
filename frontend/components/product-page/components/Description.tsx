import clsx from "clsx";
import { Actor } from "next/font/google";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export function Description({ description }: { description: string }) {
  return (
    <>
      <h1
        className={clsx(
          actor.className,
          "text-[48px] xl:text-[40px] 2xl:text-[48px] flex items-center justify-center uppercase"
        )}
      >
        Description
      </h1>
      <p className="text-[20px] flex items-center justify-center">
        {description}
      </p>
    </>
  );
}
