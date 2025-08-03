"use client";
import React from "react";
import { ImageSliderItemT } from "./type";
import PageSliderCard from "./PageSliderCard";
import PagesSlider from "./PagesSlider";

type Props = {
  data: ImageSliderItemT[];
};

const PageSliderContainer = ({ data }: Props) => {
  return (
    <div>
      <PagesSlider
        initialData={data}
        renderItem={(item) => {
          return <PageSliderCard key={item?.id} image={item?.image_slider} />;
        }}
      />
    </div>
  );
};

export default PageSliderContainer;
