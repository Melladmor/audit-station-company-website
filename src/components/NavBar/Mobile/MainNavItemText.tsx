"use client";
import Link from "next/link";
import { FaSortDown, FaSortUp } from "react-icons/fa6";

type Props = {
  title: string;
  hasChild: boolean;
  isOpen: boolean;
  toggle?: () => void;
  path: string;
  isActiveLink?: boolean;
};

const MainNavItemText = ({
  title,
  hasChild,
  isOpen,
  toggle,
  path,
  isActiveLink,
}: Props) => {
  return (
    <>
      {hasChild ? (
        <div
          onClick={toggle}
          className={` flex items-center justify-between cursor-pointer px-5 py-2 rounded-md text-white font-medium`}>
          <div className="flex items-center gap-3">
            <span className="text-sm capitalize">{title}</span>
          </div>
          {hasChild && (
            <span>
              {isOpen ? (
                <FaSortUp className="mt-2" />
              ) : (
                <FaSortDown className="mb-2" />
              )}
            </span>
          )}
        </div>
      ) : (
        <Link href={path} className={`block px-2`}>
          <div
            className={`flex items-center justify-between cursor-pointer px-3 py-2 rounded-md  text-white font-medium ${
              isActiveLink ? "bg-secondary" : "bg-transparent"
            }`}>
            <div className="flex items-center gap-3">
              <span className="text-sm capitalize">{title}</span>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default MainNavItemText;
