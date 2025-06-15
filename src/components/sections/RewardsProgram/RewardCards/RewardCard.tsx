import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { RewardCardsI, SocialLinksT } from "./type";
import Link from "next/link";

type Props = RewardCardsI;

const RewardCard = ({
  title,
  subTitle,
  image,
  className,
  description,
  imageClassName,
  subClassName,
  links,
}: Props) => {
  const validIconNames = [
    "facebook",
    "x",
    "instagram",
    "linkedin",
    "telegram",
    "whatsapp",
    "youtube",
    "snapchat",
    "tiktok",
  ];
  return (
    <div
      className={twMerge(
        "bg-light-background dark:bg-dark-background xl:min-w-[302px] lg:min-w-[302px] md:min-w-[302px] sm:min-w-full xs:min-w-full shadow-light border-b-[3px] border-secondary",
        className
      )}>
      <Image
        src={image}
        alt=""
        width={100}
        height={100}
        loading="lazy"
        className={twMerge("h-[174px] w-full object-fill", imageClassName)}
      />
      <div className="p-4 text-light-text dark:text-dark-text flex flex-col gap-2">
        <h4 className="xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] xs:text-[16px] font-medium">
          {title}
        </h4>
        <p
          className={twMerge(
            "xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px]",
            subClassName
          )}>
          {subTitle}
        </p>
        {description && (
          <p
            className={twMerge(
              "xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px]",
              subClassName
            )}>
            {description}
          </p>
        )}
        {links && links.length > 0 && (
          <div className="flex items-center gap-3 mt-[16px]">
            {links
              .filter((link: SocialLinksT) =>
                validIconNames.includes(link.name)
              )
              .map((link: SocialLinksT) => (
                <Link key={link.id} href={link.url} target="_blank">
                  <Image
                    src={`/icons/${link.name}.svg`}
                    alt={link.name}
                    width={100}
                    height={100}
                    className="size-[24px]"
                    loading="lazy"
                  />
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RewardCard;
