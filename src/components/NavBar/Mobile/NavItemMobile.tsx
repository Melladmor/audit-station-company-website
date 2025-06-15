"use client";
import { useLocale } from "next-intl";
import { NavLinkI } from "../type";
import ChildNavItemText from "./ChildNavItemText";
import MainNavItemText from "./MainNavItemText";
import { usePathname } from "next/navigation";

type Props = NavLinkI & {
  isOpen: boolean;
  onToggle: () => void;
};

const NavItemMobile = ({
  title,
  isPage,
  url,
  isDropDown,
  isOpen,
  onToggle,
}: Props) => {
  const hasChild = isDropDown && isDropDown.length > 0;
  const locale = useLocale();
  const pathname = usePathname();
  const splitedPathName = pathname.slice(`/${locale}`.length);
  const isActiveLink = splitedPathName === `/${url}`;
  return (
    <div>
      <div className="border-b border-gray-400 py-3">
        <MainNavItemText
          title={title}
          isOpen={isOpen}
          toggle={onToggle}
          hasChild={hasChild ? true : false}
          path={`${isPage ? url : `#${url}`}`}
          isActiveLink={isActiveLink}
        />
        {hasChild && (
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}>
            <div
              className={`flex flex-col space-y-0   ${
                locale === "en"
                  ? "border-l-2 ml-3 pl-6"
                  : "border-r-2 mr-4 pr-6"
              }  mt-2`}>
              {isDropDown.map((child: NavLinkI) => (
                <ChildNavItemText key={child.id} {...child} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavItemMobile;
