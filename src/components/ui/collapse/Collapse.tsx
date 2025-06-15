"use client";
import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import ComparePackages from "../../sections/Packages/ComparePackages/ComparePackages";
type Props = {
  btnClassName?: string;
  title: string;
};
export default function Collapse({ btnClassName, title }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const collapseRef = useRef<HTMLDivElement>(null);
  const baseStyles = `py-[10px] px-[20px] rounded-[8px] bg-dark-background 
    dark:bg-light-bodyBg text-white hover:bg-secondary dark:hover:bg-secondary hover:dark:text-white 
    dark:text-light-text flex items-center justify-center gap-2 transition-colors duration-500 ease-out 
    disabled:opacity-20 flex justify-between items-center`;
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        collapseRef.current &&
        !collapseRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={collapseRef} className="relative w-full mx-auto">
      {!isOpen && (
        <div className="flex justify-center items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={twMerge(baseStyles, btnClassName)}>
            <p className="font-[700] text-[16px]">{title}</p>

            <IoIosArrowDown
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      )}
      {/* Button */}

      {/* Collapsible Content */}
      {isOpen && (
        <div
          className={`w-full overflow-x-scroll rounded-[20px] px-[24px] py-[48px] border border-[#757575]  transition-all duration-300 ${
            isOpen
              ? "opacity-100 scale-100 visible"
              : "opacity-0 scale-95 invisible"
          }`}>
          <div className="w-[5000px]">
            <ComparePackages />
          </div>
        </div>
      )}
      {isOpen && (
        <div className="flex justify-center items-center mt-[32px]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={twMerge(baseStyles, btnClassName)}>
            <p className="font-[700] text-[16px]">{title}</p>

            <IoIosArrowDown
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      )}
    </div>
  );
}
