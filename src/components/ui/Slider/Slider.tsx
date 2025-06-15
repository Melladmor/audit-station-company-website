"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import useMediaQuery from "@/hooks/useMediaQuery";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type SliderT<T> = {
  initialData: T[];
  renderItem: (item: T) => React.ReactNode;
  slidePerViewMd?: number;
  slidePerViewLg?: number;
  slidePerViewXl?: number;
  spaceBetween?: number;
  nextAndPrev?: boolean;
};

export default function Slider<T>({
  initialData,
  renderItem,
  slidePerViewMd,
  slidePerViewLg,
  slidePerViewXl,
  spaceBetween = 20,
  nextAndPrev,
}: SliderT<T>) {
  const isSmall = useMediaQuery("(max-width: 767px)");
  const isMedium = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isLarge = useMediaQuery("(min-width: 1024px) and (max-width: 1124px)");
  const isXLarge = useMediaQuery("(min-width: 1125px)");

  const [mounted, setMounted] = useState(false);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slidesPerView = useMemo(() => {
    if (isSmall) return 1;
    if (isMedium) return slidePerViewMd || 2;
    if (isLarge) return slidePerViewLg || 3;
    if (isXLarge) return slidePerViewXl || 4;
    return 1;
  }, [
    isSmall,
    isMedium,
    isLarge,
    isXLarge,
    slidePerViewMd,
    slidePerViewLg,
    slidePerViewXl,
  ]);

  if (!mounted) return null;

  return (
    <div className="relative">
      {nextAndPrev && !isSmall && (
        <button
          ref={prevRef}
          className="absolute left-[-60px] top-1/2 z-10 -translate-y-1/2 bg-secondary hover:bg-dark-background dark:hover:bg-light-background hover:dark:text-light-text text-dark-text disabled:bg-gray-400 disabled:cursor-not-allowed size-[40px] flex justify-center items-center rounded-full">
          <FaChevronLeft />
        </button>
      )}

      {nextAndPrev && !isSmall && (
        <button
          ref={nextRef}
          className="absolute right-[-60px] top-1/2 z-10 -translate-y-1/2 bg-secondary hover:bg-dark-background dark:hover:bg-light-background hover:dark:text-light-text text-dark-text disabled:cursor-not-allowed size-[40px] flex justify-center items-center rounded-full">
          <FaChevronRight />
        </button>
      )}

      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        modules={[Navigation, Autoplay]}
        autoplay={
          isSmall
            ? {
                delay: 2500,
                disableOnInteraction: true,
              }
            : undefined
        }
        loop={isSmall}
        navigation={{
          prevEl: prevRef.current!,
          nextEl: nextRef.current!,
        }}
        onBeforeInit={(swiper: SwiperType) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation === "object"
          ) {
            swiper.params.navigation.prevEl = prevRef.current!;
            swiper.params.navigation.nextEl = nextRef.current!;
          }
        }}>
        {initialData.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
