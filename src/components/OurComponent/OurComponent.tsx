"use client";
import React from "react";
import CustomSection from "../ui/CustomSection/CustomSection";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Button from "../ui/Buttons/Button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import PageSliderContainer from "../ui/Slider/PageSliderContainer";
import { ImageSliderItemT } from "../ui/Slider/type";

type Props = {
  title: string;
  subTitle?: string;
  description: string;
  video: string;
  buttonTitle: string;
  buttonLink: string;
  image?: string;
  slider?: ImageSliderItemT[];
};

const OurComponent = ({
  title,
  description,
  video,
  subTitle,
  buttonTitle,
  buttonLink,
  image,
  slider,
}: Props) => {
  const t = useTranslations();
  return (
    <CustomSection className="py-[48px]">
      <div className="flex flex-col gap-8">
        {image && (
          <div className="flex justify-center items-center">
            <Image
              src={image}
              alt={image}
              width={100}
              height={100}
              className="size-60 object-cover rounded-full"
              loading="lazy"
            />
          </div>
        )}
        <div className="flex flex-col gap-3">
          <h1 className="xl:text-[36px] lg:text-[36px] md:text-[30px] sm:text-[28px] xs:text-[28px] text-center font-[700] text-light-text dark:text-dark-text">
            {title}
          </h1>
          {subTitle && (
            <p className="xl:text-[28px] md:text-[28px] lg:text-[28px] sm:text-[20px] xs:text-[20px] text-center text-light-text dark:text-dark-text">
              {subTitle}
            </p>
          )}
        </div>
        {slider && <PageSliderContainer data={slider} />}
        <div
          dangerouslySetInnerHTML={{
            __html: description,
          }}
          className="xl:text-[24px] lg:text-[24px] md:text-[20px] sm:text-[16px] xs:text-[16px] text-light-text dark:text-dark-text mt-8"
        ></div>

        <div>
          <VideoPlayer
            videoLink={video}
            customClass="!border-[#B3B6B8] !border-[1px] xl:!h-[472px] lg:!h-[472px]  md:!h-[400px] sm:!h-[350px] xs:!h-[350px]   !rounded-[16px] border"
          />
        </div>
        <div className="flex justify-end">
          <Button
            title={t(`${buttonTitle}`)}
            isLink
            path={buttonLink}
            className="btn_size bg-secondary dark:bg-secondary hover:bg-black dark:hover:bg-white text-dark-text dark:text-dark-text dark:hover:text-black"
          />
        </div>
      </div>
    </CustomSection>
  );
};

export default OurComponent;
