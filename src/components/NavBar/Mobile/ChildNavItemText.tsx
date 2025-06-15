"use client";

import Link from "next/link";
import { NavLinkI } from "../type";

type Props = NavLinkI;

const ChildNavItemText = ({ title, isPage, url }: Props) => {
  return (
    <Link href={`${isPage ? url : `#${url}`}`} className="block w-full">
      <div className={`px-2 py-1 mb-1 rounded-md text-white`}>
        <span className="text-xs capitalize">{title}</span>
      </div>
    </Link>
  );
};

export default ChildNavItemText;
