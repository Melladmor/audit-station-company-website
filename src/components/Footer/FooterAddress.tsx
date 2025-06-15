import React from "react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import LogoFooter from "./LogoFooter";

export type AddressComponentT = {
  id: number;
  title: string;
  icon: string;
  path: string;
  className?: string;
};

export const AddressComponent = ({
  icon,
  title,
  className,
  path,
}: AddressComponentT) => {
  return (
    <div className={twMerge("flex items-center gap-2", className)}>
      <div className="xl:w-[48px] xl:h-[48px] lg:w-[40px] lg:h-[40px] md:w-[40px] md:h-[40px] sm:w-[30px] sm:h-[30px] xs:w-[30px] xs:h-[30px] bg-secondary ltr:xl:rounded-[20px_20px_20px_0px] ltr:lg:rounded-[16px_16px_16px_0px] ltr:md:rounded-[16px_16px_16px_0px] ltr:sm:rounded-[12px_12px_12px_0px] ltr:xs:rounded-[12px_12px_12px_0px] rtl:xl:rounded-[20px_20px_0px_20px] rtl:lg:rounded-[16px_16px_0px_16px] rtl:md:rounded-[16px_16px_0px_16px] rtl:sm:rounded-[12px_12px_0px_12px] rtl:xs:rounded-[12px_12px_0px_12px] flex items-center justify-center">
        <Image
          src={icon}
          alt={icon}
          width={100}
          height={100}
          className="xl:size-[24px] lg:size-[20px] md:size-[20px] sm:size-[14px] xs:size-[14px]"
        />
      </div>
      <Link
        href={path}
        target="_blank"
        className="text-white xl:text-[20px] lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] font-[500] xl:w-[80%] lg:w-[80%] md:w-full sm:w-full xs:w-full  hover:underline">
        {title}
      </Link>
    </div>
  );
};

const FooterAddress = async () => {
  const t = await getTranslations();
  const addressData: AddressComponentT[] = [
    {
      id: 1,
      icon: "/icons/inputicons/location.svg",
      title: t("mainaddress"),
      path: "https://maps.app.goo.gl/rZsY3GZJHn5ubsCi6",
    },
    {
      id: 2,
      icon: "/icons/inputicons/phone.svg",
      title: "+971 58 602 8902",
      className: "items-center",
      path: "https://wa.me/971586028902",
    },
    {
      id: 3,
      icon: "/icons/inputicons/location.svg",
      title: t("omanaddress"),
      path: "https://maps.app.goo.gl/KbQq2XZmdBNsk59U8",
    },
    {
      id: 4,
      icon: "/icons/inputicons/phone.svg",
      title: "+968 96 740 002",
      className: "items-center",
      path: "https://wa.me/96896740002",
    },
    {
      id: 5,
      icon: "/icons/inputicons/email.svg",
      title: "auditStation@gmail.com",
      className: "items-center",
      path: "mailto:auditStation@gmail.com",
    },
  ];
  return (
    <div className="flex flex-col gap-6 items-start justify-start ">
      <div>
        <LogoFooter />
      </div>
      {addressData?.map((el: AddressComponentT) => {
        return <AddressComponent key={el?.id} {...el} />;
      })}
    </div>
  );
};

export default FooterAddress;
