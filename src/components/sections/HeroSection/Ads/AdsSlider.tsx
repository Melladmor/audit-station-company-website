"use client";
import React, { useRef, useState } from "react";
import { SlideI } from "./type";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Pagination } from "swiper/modules";
import AdsSlide from "./AdsSlide";
import SwiperPagination from "./Pagination";
import "swiper/css";
import "swiper/css/pagination";

type Props = {
  data: SlideI[];
};

const AdsSlider = ({ data }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const swiperRef = useRef<SwiperRef | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        modules={[Pagination]}
        onSlideChange={handleSlideChange}
        className="w-full xl:h-[478px] lg:h-[478px] md:h-[450px] sm:h-[300px] xs:h-[300px]">
        {data?.map((slide: SlideI) => (
          <SwiperSlide key={slide.id} className="w-full h-full !p-0">
            <AdsSlide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SwiperPagination
        handleSlideChange={(index) => swiperRef.current?.swiper.slideTo(index)}
        activeIndex={activeIndex}
        totalSlides={data?.length}
      />
    </div>
  );
};

export default AdsSlider;
