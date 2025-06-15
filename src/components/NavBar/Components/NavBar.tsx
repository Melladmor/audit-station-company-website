"use client";
import React from "react";
import { TbHomeFilled } from "react-icons/tb";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { NavLinkI } from "../type";
import NavLink from "./NavLink";

type Props = {
  linksData: NavLinkI[];
};

const NavBar = ({ linksData }: Props) => {
  const locale = useLocale();
  const pathname = usePathname();
  const splitedPathName = pathname.slice(`/${locale}`.length);
  return (
    <div className="navbar-center hidden lg:flex gap-4 ">
      <li
        className={`links py-2 xl:text-[20px] lg:text-[16px] ${
          splitedPathName === "" ? "text-secondary" : "text-white"
        } `}>
        <Link href="/">
          <TbHomeFilled className="size-[25px]" />
        </Link>
      </li>
      {linksData?.map((link: NavLinkI) => {
        return <NavLink key={link.id} {...link} />;
      })}
    </div>
  );
};

export default NavBar;
