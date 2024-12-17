import React from "react";
import PerfumeNav from "./component/PerfumeNav";
import { NavigationRoute } from "../route";
import { IPerfumeSection } from "@/interface/product";

const PerfumeSection: React.FC<{ content: IPerfumeSection }> = ({
  content,
}) => {
  return (
    <>
      <PerfumeNav
        title={`WOMEN'S PERFUME`}
        description={content.women.description}
        image={content.women.image}
        linkUrl={NavigationRoute.ForHer.Path}
        imageOnLeft={true}
      />

      <PerfumeNav
        title={`MEN'S PERFUME`}
        description={content.men.description}
        image={content.men.image}
        linkUrl={NavigationRoute.ForHim.Path}
        imageOnLeft={false}
      />

      <PerfumeNav
        title="NEUTRAL PERFUME"
        description={content.neutral.description}
        image={content.neutral.image}
        linkUrl={NavigationRoute.Neutral.Path}
        imageOnLeft={true}
      />
    </>
  );
};

export default PerfumeSection;
