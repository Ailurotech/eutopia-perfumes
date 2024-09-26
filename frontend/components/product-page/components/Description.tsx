import clsx from "clsx";
import { Actor } from "next/font/google";

const actor = Actor({ weight: "400", subsets: ["latin"] });

export function Description() {
  return (
    <>
      <h1
        className={clsx(
          actor.className,
          "text-[48px] flex items-center justify-center"
        )}
      >
        {"Description".toUpperCase()}
      </h1>
      <p className="text-[20px] flex items-center justify-center">
        Zara Seoul 532-8 Sinsa Dong Gangnam-Gu was launched in 2015. Aromatic
        Spicy fragrance for men. Top notes are Tangerine and Nutmeg, middle
        notes are Sea Notes and Lavender, base note is Amber.
      </p>
    </>
  );
}
