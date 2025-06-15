import React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { NavLinkI } from "../type";

type Props = NavLinkI;

const NavLink = ({ isPage, title, url, isDropDown }: Props) => {
  const locale = useLocale();
  const pathname = usePathname();
  const splitedPathName = pathname.slice(`/${locale}`.length);
  const isActiveLink = splitedPathName === `/${url}`;

  return (
    <ul className="menu menu-horizontal px-1">
      {isDropDown ? (
        <li
          className={`links xl:text-[20px] lg:text-[14px] ${
            isActiveLink ? "links_active text-secondary" : "text-white"
          } `}>
          <details>
            <summary>{title}</summary>
            <ul>
              {isDropDown?.map((link: NavLinkI) => {
                return (
                  <li className="text-black text-nowrap" key={link.id}>
                    <Link
                      className="text-nowrap"
                      href={link.isPage ? link.url : `#${link.url}`}>
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </details>
        </li>
      ) : (
        <li
          className={`links xl:text-[20px] lg:text-[14px] ${
            isActiveLink ? "links_active text-secondary" : "text-white"
          } `}>
          <Link href={isPage ? url : `#${url}`}>{title}</Link>
        </li>
      )}
    </ul>
  );
};
export default NavLink;
