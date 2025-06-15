"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export type LinksFooterT = {
  id: number;
  title: string;
  path: string;
  blank?: boolean;
};
export const LinksFooter = ({ path, title, blank }: LinksFooterT) => {
  const locale = useLocale();
  return (
    <div className="flex items-center gap-2">
      {locale === "ar" ? (
        <IoMdArrowDropleft className="text-secondary size-[20px]" />
      ) : (
        <IoMdArrowDropright className="text-secondary size-[20px]" />
      )}
      <Link
        href={path}
        target={blank ? "_blank" : "_parent"}
        className="text-white xl:text-[20px] lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] font-[500]  hover:underline">
        {title}
      </Link>
    </div>
  );
};
