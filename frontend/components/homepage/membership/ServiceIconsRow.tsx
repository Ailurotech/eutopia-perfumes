import React from "react";
import { ProductPoint } from "./components/ProductPoint";
import { ServiceIcon } from "./components/ServiceIcon";

const ServiceIconsRow = () => {
  return (
    <div className="overflow-x-auto">
      <div className="w-full bg-white p-4 sm:py-14 lg:py-32 xl:py-56 sm:px-24 lg:px-32 xl:px-48">
        <div className="flex justify-start md:justify-center items-center gap-8 lg:gap-10 2xl:gap-36">
          <ServiceIcon
            src="/Halal.svg"
            alt="Made in Australia"
            title="Made in Australia"
            description="Formulated and produced in Brisbane"
            imageWidth={30}
            imageHeight={30}
          />

          <ServiceIcon
            src="/Delivery.svg"
            alt="Free Shipping"
            title="Free Shipping"
            description="All orders include free shipping across Australia"
            imageWidth={30}
            imageHeight={30}
          />

          <ServiceIcon
            src="/Original.svg"
            alt="Affordable Luxury"
            title="Affordable Luxury"
            description="Handcrafted Scents at affordable prices"
            imageWidth={30}
            imageHeight={30}
          />
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
            src="/D3.svg"
            alt="100% Genuine Guaranteed"
            description="100% Genuine Guaranteed"
          />
          <ProductPoint
            src="/D4.svg"
            alt="Secure Payment"
            description="Secure Payment"
          />
          <ProductPoint
            src="/D5.svg"
            alt="100% Authentic Products"
            description="100% Authentic Products"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceIconsRow;
