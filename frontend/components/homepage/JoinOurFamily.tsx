import React from "react";
import JoinFamilyForm from "./membership/JoinFamilyForm";
import ShopNowSection from "./membership/ShopNowSection";

const JoinOurFamilyPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col relative">
      <ShopNowSection />
      <JoinFamilyForm />
    </div>
  );
};

export default JoinOurFamilyPage;
