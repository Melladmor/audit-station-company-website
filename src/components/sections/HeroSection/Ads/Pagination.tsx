import React, { FC } from "react";

interface PaginationLinesProps {
  totalSlides: number;
  activeIndex: number;
  handleSlideChange: (swiper: number) => void;
}

const SwiperPagination: FC<PaginationLinesProps> = ({
  totalSlides,
  activeIndex,
  handleSlideChange,
}) => {
  return (
    <div className="flex justify-center items-center space-x-2 absolute bottom-[40px] left-[50%] z-10 translate-x-[-50%]">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <span
          key={index}
          className={`
                cursor-pointer
                block 
                xl:size-[14px]
                lg:size-[14px]
                md:size-[12px]
                sm:size-[10px]
                xs:size-[10px]
                rounded-full
                ${index === activeIndex ? "bg-secondary" : "bg-white"}
        `}
          onClick={() => handleSlideChange(index)}
        />
      ))}
    </div>
  );
};

export default SwiperPagination;
