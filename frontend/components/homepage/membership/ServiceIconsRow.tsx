import React, { useEffect, useState } from "react";
import { ProductPoint } from "./components/ProductPoint";
import { sanityClient } from "@/lib/sanityClient";
import { footerQuery } from "@/query";
import { ServiceIcon } from "./components/ServiceIcon";
import { urlForImage } from "@/lib/sanity.image";

interface FooterObj {
  title: string;
  description: string;
  image: {
    asset: {
      _ref: string;
    };
  };
}

const ServiceIconsRow = () => {
  const [footerObjs, setFooterObjs] = useState<FooterObj[]>([]);
  useEffect(() => {
    async function getFooterObjs() {
      const data = await sanityClient.fetch(footerQuery());
      setFooterObjs(data);
    }
    getFooterObjs();
  }, []);
  return (
    <div className="overflow-x-auto">
      <div className="w-full bg-white p-4 sm:py-14 lg:py-32 xl:py-56 sm:px-24 lg:px-32 xl:px-48">
        <div className="flex justify-start md:justify-center items-center gap-8 lg:gap-10 2xl:gap-36">
          {footerObjs.map((item, index) => (
            <ServiceIcon
              key={index}
              src={urlForImage(item.image.asset._ref).url()}
              alt={item.title}
              title={item.title}
              description={item.description}
              imageWidth={30}
              imageHeight={30}
            />
          ))}
        </div>
      </div>
      <div className="w-full bg-[rgb(141,138,138)] py-5 md:px-24">
        <div className="flex flex-row justify-start md:justify-between items-center ">
          <ProductPoint
            src="/D1.svg"
            alt="Free Delivery Across Australia"
            description="Free Delivery Across Australia"
          />
          <ProductPoint
            src="/D2.svg"
            alt="Online Self-Service"
            description="Online Self-Service"
          />
          <ProductPoint
            src="/D4.svg"
            alt="Secure Payment"
            description="Secure Payment"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceIconsRow;
