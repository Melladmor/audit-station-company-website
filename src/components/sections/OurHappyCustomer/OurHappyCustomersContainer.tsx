"use client";
import Slider from "@/components/ui/Slider/Slider";
import React from "react";
import OurHappyCustomresCard from "./OurHappyCustomresCard";
import { OurHappyCustomersI } from "./type";
import Button from "@/components/ui/Buttons/Button";
import { useTranslations } from "next-intl";

type Props = {
  data: OurHappyCustomersI[];
};
export function OurHappyCustomersContainer({ data }: Props) {
  const t = useTranslations();
  return (
    <div>
      <Slider
        initialData={data}
        slidePerViewXl={3}
        slidePerViewLg={2}
        renderItem={(item) => {
          return <OurHappyCustomresCard key={item?.id} {...item} />;
        }}
      />
      <div className="flex items-center justify-center xl:mt-[32px] lg:mt-[32px] md:mt-[25px] sm:mt-[20px] xs:mt-[20px]">
        <Button
          title={t("seemore")}
          isLink
          not_blank
          path="our-happy-customers"
          className="btn_size"
        />
      </div>
    </div>
  );
}
