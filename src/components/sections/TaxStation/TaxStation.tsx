import CustomSection from "@/components/ui/CustomSection/CustomSection";
import { getTranslations } from "next-intl/server";
import React from "react";
import { OurPlatformI } from "../OurPlatform/type";
import Button from "@/components/ui/Buttons/Button";
import Title from "@/components/ui/Title/Title";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import fetchPublicData from "@/lib/api/fetchPublicData";
const TaxStation = async () => {
  const t = await getTranslations("sections.taxStation");
  const btnTitle = await getTranslations();
  const taxStationData: Omit<OurPlatformI, "image"> = await fetchPublicData({
    url: "tax_stations/tax",
  });

  return (
    <CustomSection className="mt-[100px] py-[40px] bg-dark-bodyBg dark:bg-light-bodyBg">
      <Title
        first={t("first")}
        second={t("second")}
        subTitle={taxStationData?.description}
        subTitleClass="text-white dark:text-black"
        firstClass="text-white dark:text-black"
      />
      <div className="flex  flex-col gap-6">
        <div className="w-full flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col gap-4 xl:justify-center lg:justify-center md:justify-center  xl:items-start lg:items-start md:items-start sm:items-center xs:items-center ">
          <Button
            title={btnTitle("downloadapp")}
            isLink
            path="https://auditstation.io/"
            className="btn_size bg-secondary dark:bg-secondary dark:hover:bg-white dark:text-dark-text dark:hover:text-black hover:bg-black"
          />
          <Button
            title={btnTitle("discovermore")}
            isLink
            not_blank
            path="tax-station"
            className="btn_size bg-light-bodyBg text-light-text dark:bg-dark-background dark:text-dark-text hover:text-white"
          />
        </div>
        <div className="border-[4px] border-white dark:border-dark-border rounded-[20px]">
          <VideoPlayer
            videoLink={taxStationData?.video}
            customClass="max-h-[433px] rounded-[14px]"
          />
        </div>
      </div>
    </CustomSection>
  );
};

export default TaxStation;
