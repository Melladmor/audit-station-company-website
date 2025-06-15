"use client";
import React, { useState } from "react";
import { NavLinkI } from "../type";
import NavItemMobile from "./NavItemMobile";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import Link from "next/link";
import { TbHomeFilled } from "react-icons/tb";
import Logo from "../Components/Logo";
import SwitcherMobile from "./SwitcherMobile";
import Image from "next/image";
import { usePathname, useRouter } from "@/i18n/routing";

type Props = {
  linksData: NavLinkI[];
};

const NavItemsMobile = ({ linksData }: Props) => {
  const locale = useLocale();
  const pathname = usePathname();
  const splitedPathName = pathname.slice(`/${locale}`.length);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const langs = [
    { name: "EN", id: "en", avatar: "/images/flags/en.png" },
    { name: "AR", id: "ar", avatar: "/images/flags/ar.png" },
  ];
  const router = useRouter();
  const params = useParams();
  function onSelectChange(nextLocale: string) {
    // @ts-expect-error -- TypeScript will validate that only known `params`
    router?.replace({ pathname, params }, { locale: nextLocale as Locale });
  }
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div className="py-3 px-4 border-b border-gray-400 flex justify-between items-center w-full">
        <Logo />
        <SwitcherMobile />
      </div>
      <div
        className={`links py-3 px-4 xl:text-[20px] lg:text-[16px] border-b border-gray-400 w-full ${
          splitedPathName === "" ? "text-secondary" : "text-white"
        } `}>
        <Link href="/">
          <TbHomeFilled className="size-[25px]" />
        </Link>
      </div>
      {linksData?.map((links: NavLinkI) => {
        return (
          <NavItemMobile
            {...links}
            key={links?.id}
            isOpen={openIndex === links.id}
            onToggle={() => handleToggle(links.id)}
          />
        );
      })}
      <ul className="p-2  flex justify-between items-center gap-1 py-3">
        {langs.map((item) => (
          <li
            key={item.id}
            onClick={() => onSelectChange(item.id)}
            className={`w-full flex items-center justify-center py-2 rounded-md  ${
              locale === item?.id
                ? "bg-secondary text-white"
                : "bg-white text-black"
            }`}>
            <div className="flex items-center">
              <Image
                src={item.avatar}
                alt={item.name}
                width={16}
                height={16}
                className="w-4 h-4 rounded-sm"
              />
              <span className="ml-2 mr-2">{item.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NavItemsMobile;
