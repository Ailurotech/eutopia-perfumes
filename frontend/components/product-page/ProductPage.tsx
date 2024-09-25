import Image from "next/image";
import perfume from "./assets/Image.png";
import Link from "next/link";
import { StarRating } from "./components/StarRating";
import { Button } from "@chakra-ui/react";
import { NumberAdder } from "./components/NumberAdder";

export function ProductPage() {
  return (
    <section className="flex px-20">
      <div className="w-1/2 h-1/2">
        <Image src={perfume} alt="perfume" width={700} height={700} />
      </div>
      <div className="p-10 flex flex-col gap-8">
        <h1>PERFUME</h1>
        <div>
          <h1>Sinsa Dong Gangnam-Gu Zara</h1>
          <h3>SKU: E994-50-1 Category: For Him Tag: Men</h3>
          <div className="flex gap-3">
            <StarRating starNum={4} />
            <Link href="/product" className="underline">
              Read Review
            </Link>
          </div>
          <h3>100ml / 3.4 oz</h3>
          <span>
            {"This item has\n"}
            <Link href="/product" className="underline">
              special conditions for returns
            </Link>
          </span>
          <span className="flex">
            <NumberAdder />
            <Button>Add to Cart</Button>
          </span>
        </div>
      </div>
    </section>
  );
}
