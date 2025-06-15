"use client";
import Slider from "@/components/ui/Slider/Slider";
import React from "react";
import { NewsI } from "./type";
import Button from "@/components/ui/Buttons/Button";
import { useTranslations } from "next-intl";
import NewsCard from "./NewsCard";

type Props = {
  data: NewsI[];
};
export function NewsContainer({ data }: Props) {
  const t = useTranslations();
  return (
    <div>
      <Slider
        initialData={data}
        slidePerViewXl={3}
        slidePerViewLg={2}
        renderItem={(item) => {
          return <NewsCard key={item?.id} {...item} />;
        }}
      />
      <div className="flex items-center justify-center xl:mt-[32px] lg:mt-[32px] md:mt-[25px] sm:mt-[20px] xs:mt-[20px]">
        <Button
          title={t("discovermore")}
          isLink
          path="news"
          className="btn_size"
          not_blank
        />
      </div>
    </div>
  );
}
