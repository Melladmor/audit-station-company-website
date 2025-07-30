import { getTranslations } from "next-intl/server";
import React from "react";
import { MainServicesI, OurServicesI } from "./type";
import OurServicesCard from "./OurServicesCard";
import CustomSection from "@/components/ui/CustomSection/CustomSection";
import Image from "next/image";
import Button from "@/components/ui/Buttons/Button";
import fetchPublicData from "@/lib/api/fetchPublicData";
import { randomUUID } from "crypto";

const OurServicesSection = async () => {
  const t = await getTranslations("sections.ourservices");
  const btnTitle = await getTranslations();
  const servicesData: MainServicesI[] = await fetchPublicData({
    url: "services/main-services",
  });

  const ourServicesData: OurServicesI[] = [
    {
      id: 1,
      title: servicesData[0]?.name,
      subServices: servicesData[0]?.our_services,
      bg: "#FF7701",
    },
    {
      id: 2,
      title: servicesData[1]?.name,
      subServices: servicesData[1]?.our_services,
      bg: "#C94A8C",
    },
    {
      id: 3,
      title: servicesData[2]?.name,
      subServices: servicesData[2]?.our_services,
      bg: "#825698",
      className: "xl:mt-0 lg:mt-0 md:mt-0 sm:mt-[65px] xs:mt-[65px]",
    },
    {
      id: 4,
      title: servicesData[3]?.name,
      subServices: servicesData[3]?.our_services,
      bg: "#80CE42",
    },
  ];
  return (
    <CustomSection
      title={{
        first: t("first"),
        second: t("second"),
        subTitle: t("subTitle"),
      }}
      className="mt-[100px]"
      id="services"
    >
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-6 relative">
        {ourServicesData?.map((el: OurServicesI) => {
          return <OurServicesCard key={el?.id} data={el} />;
        })}
        <div className="xl:w-[160px] xl:h-[160px] lg:w-[160px] lg:h-[160px] md:w-[130px] md:h-[130px] sm:w-[130px] sm:h-[130px] xs:w-[150px] xs:h-[150px] bg-[#F2FAEC] rounded-full p-[15px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <Image
            src="/logos/auditlogoblack.svg"
            alt="/logos/auditlogoblack.svg"
            width={100}
            height={100}
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex items-center justify-center xl:mt-[32px] lg:mt-[32px] md:mt-[25px] sm:mt-[20px] xs:mt-[20px]">
        <Button
          title={btnTitle("seemore")}
          isLink
          path="/services"
          className="btn_size"
          not_blank
        />
      </div>
    </CustomSection>
  );
};

export default OurServicesSection;
