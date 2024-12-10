import React from "react";

import { Support } from "./components/Support";
import { Categories } from "./components/Categories";
import { ShopInfo } from "./components/ShopInfo";
import { LogoAndPartners } from "./components/LogoAndPartners";

const Footer = () => {
  return (
    <div className="w-full bg-footer-gray p-4 flex flex-col lg:flex-row justify-between">
      <div className="flex-1 flex justify-center text-center mt-[calc(10%)] order-1 lg:order-none">
        <Categories />
        <ShopInfo />
      </div>
      <LogoAndPartners />
      <Support />
    </div>
  );
};

export default Footer;
