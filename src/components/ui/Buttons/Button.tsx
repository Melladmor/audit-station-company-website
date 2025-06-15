import React from "react";
import { twMerge } from "tailwind-merge";
import { ButtonI } from "./type";
import Link from "next/link";

type Props = ButtonI;

function Button({
  onClick,
  title,
  className = "",
  icon,
  isLoading,
  isLink,
  path,
  not_blank,
}: Props) {
  const baseStyles = `px-[10px] py-[10px] rounded-[8px] bg-dark-background 
    dark:bg-light-bodyBg text-white hover:bg-secondary dark:hover:bg-secondary hover:dark:text-white 
    dark:text-light-text flex items-center justify-center gap-2 transition-colors duration-500 ease-out 
    disabled:opacity-20`;

  return (
    <div>
      {isLink && path ? (
        <Link
          href={path}
          target={not_blank ? "_self" : "_blank"}
          className={twMerge(baseStyles, className)}>
          <div className="flex items-center gap-2">
            {icon && <span>{icon}</span>}
            <p className="font-[700] text-[16px]">{title}</p>
          </div>
        </Link>
      ) : (
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onClick) onClick();
          }}
          disabled={isLoading}
          className={twMerge(baseStyles, className)}>
          {isLoading ? (
            <span className="loading loading-infinity loading-xl"></span>
          ) : (
            <div className="flex items-center gap-2">
              {icon && <span>{icon}</span>}
              <p className="font-[700] text-[16px]">{title}</p>
            </div>
          )}
        </button>
      )}
    </div>
  );
}

export default Button;
