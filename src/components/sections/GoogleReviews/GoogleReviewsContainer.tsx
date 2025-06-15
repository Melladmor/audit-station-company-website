"use client";
import React from "react";
import Slider from "@/components/ui/Slider/Slider";
import { GoogleReviewI } from "./type";
import GoogleReviewCard from "./GoogleReviewCard";
import Button from "@/components/ui/Buttons/Button";
import { useTranslations } from "next-intl";

type Props = {
  data: GoogleReviewI[];
};

const GoogleReviewsContainer = ({ data }: Props) => {
  const btnTitle = useTranslations();

  return (
    <div>
      <Slider
        initialData={data}
        slidePerViewXl={1.9}
        slidePerViewLg={1}
        slidePerViewMd={1}
        renderItem={(item) => {
          return <GoogleReviewCard key={item?.id} {...item} />;
        }}
      />
      <div className="flex items-center justify-center xl:mt-[32px] lg:mt-[32px] md:mt-[25px] sm:mt-[20px] xs:mt-[20px]">
        <Button
          title={btnTitle("addreview")}
          isLink
          path="https://search.google.com/local/writereview?placeid=ChIJS3B0ysFIDS4R7KlNK-uLZOU"
          className="btn_size"
        />
      </div>
    </div>
  );
};

export default GoogleReviewsContainer;
