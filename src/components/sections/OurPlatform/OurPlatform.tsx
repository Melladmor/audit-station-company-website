import CustomSection from "@/components/ui/CustomSection/CustomSection";
import { getTranslations } from "next-intl/server";
import React from "react";
import OurPlatformHead from "./OurPlatformHead";
import { OurPlatformI } from "./type";
import OurPlatformVideo from "./OurPlatformVideo";
import Button from "@/components/ui/Buttons/Button";
// import fetchPublicData from "@/lib/api/fetchPublicData";

const OurPlatform = async () => {
  const t = await getTranslations("sections.ourplatform");
  const btnTitle = await getTranslations();
  // const ourPlatformData2 = await fetchPublicData({
  //   url: "our_platforms",
  // });

  const ourPlatformData: OurPlatformI = {
    id: 1,
    image: "/images/slide.jpg",
    title: "Audit Station ’’Your Gateway to Smart Financial Solutions’’",
    description:
      "Audit Station simplifies auditing and tax consultancy with innovative solutions, ensuring accuracy, compliance, and business growth, We Can empowers businesses with seamless financial management.",
    video: "/videos/audit.mp4",
  };
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
