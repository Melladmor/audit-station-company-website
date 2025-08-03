import CustomSection from "@/components/ui/CustomSection/CustomSection";
import { getTranslations } from "next-intl/server";
import React from "react";
import OurPlatformHead from "./OurPlatformHead";
import OurPlatformVideo from "./OurPlatformVideo";
import Button from "@/components/ui/Buttons/Button";
import fetchPublicData from "@/lib/api/fetchPublicData";

const OurPlatform = async () => {
  const t = await getTranslations("sections.ourplatform");
  const btnTitle = await getTranslations();
  const ourPlatformData = await fetchPublicData({
    url: "our_platforms",
  });

  return (
    <CustomSection
      title={{
        first: t("first"),
        second: t("second"),
        subTitle: t("subTitle"),
      }}
      className="mt-[100px]">
      <OurPlatformHead
        description={ourPlatformData?.description}
        image={ourPlatformData?.image}
        title={ourPlatformData?.title}
      />
      <OurPlatformVideo videoLink={ourPlatformData?.video} />
      <div className="w-full flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col gap-4 xl:justify-center lg:justify-center md:justify-center  xl:items-start lg:items-start md:items-start sm:items-center xs:items-center xl:mt-[100px] lg:mt-[100px] md:mt-[100px] sm:mt-[50px] xs:mt-[50px]">
        <Button
          title={btnTitle("visitaudit")}
          isLink
          path="https://auditstation.io/"
          className="btn_size bg-secondary dark:bg-secondary dark:hover:bg-white dark:text-dark-text dark:hover:text-black hover:bg-black"
        />
        <Button
          title={btnTitle("discovermore")}
          isLink
          not_blank
          path="our-platform"
          className="btn_size"
        />
      </div>
    </CustomSection>
  );
};

export default OurPlatform;
