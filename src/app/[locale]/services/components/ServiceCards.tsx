import { ServiceItemT } from "@/components/sections/OurServices/type";
import Button from "@/components/ui/Buttons/Button";
import { truncateHtmlToText } from "@/lib/helper/helper";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";

type Props = {
  data: ServiceItemT;
};

const ServiceCards = async ({ data }: Props) => {
  const t = await getTranslations();
  return (
    <div
      className="card_services"
      style={{
        boxShadow: `
    inset 0 -4px 4px -2px rgba(204, 208, 218, 0.38),
    inset -4px 0 4px -2px rgba(204, 208, 218, 0.38)
  `,
      }}>
      <div
        className="cutout_circle_services"
        style={{
          boxShadow: `
    inset -4px 0 4px -2px rgba(204, 208, 218, 0.38),
    inset 0 -4px 4px -2px rgba(204, 208, 218, 0.38)
  `,
        }}></div>

      <Image
        loading="lazy"
        className="image_circle_services"
        src="/logos/auditlogoblack.svg"
        alt=""
        width={100}
        height={100}
      />
      <h2 className="xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] xs:text-[16px] text-light-text dark:text-dark-text font-medium capitalize">
        {data?.parent_service_name}
      </h2>
      <h3 className="xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[14px] xs:text-[14px]  text-[#f6e2d0] capitalize">
        {data?.sub_service_name}
      </h3>

      <h4 className="xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] xs:text-[16px] text-secondary font-medium capitalize">
        {data?.name}
      </h4>

      <div
        className="xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] xl:w-[300px] lg:w-[300px] md:w-full sm:w-full xs:w-full text-center text-light-text dark:text-dark-text"
        dangerouslySetInnerHTML={{
          __html: truncateHtmlToText(data?.description, 150),
        }}></div>

      <Button
        isLink
        not_blank
        path={`services-details/${data?.id}`}
        title={t("readdetails")}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-secondary text-white hover:bg-black btn_size h-[40px]"
      />
    </div>
  );
};

export default ServiceCards;
