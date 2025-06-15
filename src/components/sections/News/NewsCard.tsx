"use client";
import Image from "next/image";
import React from "react";
import { NewsI } from "./type";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaArrowRight } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";

type Props = NewsI;

const NewsCard = ({
  author,
  category,
  description,
  image,
  publishDate,
  readingTime,
  subCategory,
  title,
  id,
}: Props) => {
  const t = useTranslations();
  return (
    <div className="bg-light-background dark:bg-dark-background rounded-[16px] max-w-[411px]  xl:shadow-light lg:shadow-light md:shadow-light sm:shadow-none xs:shadow-none">
      <div className="relative">
        <button className="bg-white text-[#757575] hover:text-red-600 xl:size-[40px] lg:size-[40px] md:size-[40px] sm:size-[30px] xs:size-[30px] flex justify-center items-center rounded-full absolute xl:top-[24px] lg:top-[24px] md:top-[24px] sm:top-[14px] xs:top-[14px] xl:right-[24px] lg:right-[24px] md:right-[24px] sm:right-[14px] xs:right-[14px]">
          <MdFavorite className="xl:size-[24px] lg:size-[24px] md:size-[24px] sm:size-[20px] xs:size-[20px]" />
        </button>
        <Image
          src={image}
          alt=""
          width={100}
          height={100}
          loading="lazy"
          className="xl:h-[280px] lg:h-[280px] md:h-[280px] sm:h-[200px] xs:h-[200px] w-full object-fill rounded-[16px_16px_0px_0px]"
        />
      </div>
      <div className="p-4 text-light-text dark:text-dark-text flex flex-col gap-2">
        <div className="flex gap-2 items-center justify-start">
          <div className="bg-[#D8F0C4] xl:h-[24px] lg:h-[24px] md:h-[24px] sm:h-[18px] xs:h-[18px] flex items-center justify-center xl:rounded-[8px] lg:rounded-[8px] md:rounded-[8px] sm:rounded-[4px] xs:rounded-[4px] p-2 text-[12px] font-[500] text-black">
            {category}
          </div>
          <div className="flex  gap-1">
            <div className="w-[8px] h-[8px] mt-1 bg-dark-background dark:bg-light-background rounded-full"></div>
            <p className="text-[12px]  text-[#757575]">{publishDate}</p>
          </div>
        </div>
        <h4 className="xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[12px] font-[700]">
          {title}
        </h4>
        {description && (
          <p className="xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px]">
            {description?.slice(0, 84)}...
          </p>
        )}
        <div className="flex gap-2 items-center justify-start">
          <p className="xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] xs:text-[12px] xl:h-[24px] lg:h-[24px] md:h-[24px] sm:h-[18px] xs:h-[18px] font-[600] text-secondary">
            {subCategory}
          </p>
          <div className="flex  gap-1">
            <div className="w-[8px] h-[8px] mt-1 bg-dark-background dark:bg-light-background rounded-full"></div>
            <p className="text-[12px]  text-[#757575]">
              {readingTime} {t("minread")}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="avatar rounded-full">
              <div className="xl:size-[32px] lg:size-[32px] md:size-[28px] sm:size-[24px] xs:size-[24px] rounded-full">
                <Image
                  src={author?.image}
                  alt={author?.image}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
            </div>
            <p className="xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-light-text dark:text-dark-text text-nowrap">
              {author.name}
            </p>
          </div>
          <div className="flex items-center justify-end w-full">
            <Link
              href={`news/${id}`}
              className="xl:w-[32px] xl:h-[32px] lg:w-[32px] lg:h-[32px] md:w-[28px] md:h-[28px] sm:w-[24px] sm:h-[24px] xs:w-[24px] xs:h-[24px] cursor-pointer flex items-center justify-center rounded-full bg-dark-background dark:bg-light-background">
              <FaArrowRight className="xl:size-4 lg:size-4 md:size-4 sm:size-3 xs:size-3 text-dark-text dark:text-light-text -rotate-45" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
