import React from "react";
import { twMerge } from "tailwind-merge";
import { TitleI } from "./type";
import TitleIcon from "./TitleIcon";
import Image from "next/image";

type Props = TitleI;

const Title = ({
  first,
  second,
  subTitle,
  className,
  subTitleClass,
  firstClass,
  secondClass,
  customTitleIcon,
}: Props) => {
  return (
    <div
      className={twMerge(
        "xl:mb-[32px] flex flex-col justify-center items-center",
        "xl:gap-[32px] lg:gap-[32px] md:gap-[28px] sm:gap-[24px] xs:gap-[15px]",
        className
      )}>
      <div className="flex flex-row flex-nowrap gap-[16px] items-center">
        {customTitleIcon ? (
          <Image
            width={100}
            height={100}
            src={customTitleIcon}
            alt={customTitleIcon}
            className="size-[32px]"
          />
        ) : (
          <TitleIcon />
        )}
        <h1 className="xl:text-[32px] lg:text-[30px] md:text-[24px] sm:text-[20px] xs:text-[20px] font-[700] capitalize">
          <span
            className={twMerge(
              "text-light-text dark:text-dark-text",
              firstClass
            )}>
            {first}
          </span>{" "}
          <span className={twMerge("text-secondary", secondClass)}>
            {second}
          </span>
        </h1>
      </div>
      {subTitle && (
        <p
          className={twMerge(
            "text-center text-light-text dark:text-dark-text font-[400]",
            "xl:text-[24px] lg:text-[24px] md:text-[18px] sm:text-[16px] xs:text-[16px]",
            "xl:px-[150px] lg:px-[140px] md:px-[60px] sm:px-[30px] xs:px-0",
            subTitleClass
          )}>
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default Title;
