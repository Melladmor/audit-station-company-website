"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

type SliderT<T> = {
  initialData: T[];
  renderItem: (item: T) => React.ReactNode;
};

export default function PagesSlider<T>({
  initialData,
  renderItem,
}: SliderT<T>) {
  return (
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow]}
      loop={true}
      className="!py-8"
    >
      {initialData.map((item, index) => (
        <SwiperSlide key={index} className="!w-[400px] !p-0">
          {renderItem(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
