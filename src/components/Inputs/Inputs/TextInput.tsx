"use client";

import React from "react";
import { InputPropsI } from "../type";
import Image from "next/image";

const TextInput: React.FC<InputPropsI> = ({
  label,
  type = "text",
  placeholder = "",
  className = "",
  disabled = false,
  required = false,
  register,
  error,
  icon,
  name,
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="text-[#091219]  text-[14px] font-medium mb-2 block">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="flex w-full items-center">
        {icon && (
          <div className="xl:w-[64px] lg:w-[64px] md:w-[54px] sm:w-[44px] xs:w-[44px] xl:p-[16px] lg:p-[16px] sm:p-[11px] xs:p-[11px] xl:h-[56px] lg:h-[56px] md:h-[40px] sm:h-[40px] bg-secondary flex justify-center items-center ltr:rounded-[8px_0px_0px_8px] rtl:rounded-[0px_8px_8px_0px]">
            <Image
              src={icon}
              alt="icon"
              width={100}
              height={100}
              className="xl:size-[24px] lg:size-[24px] md:size-[22px] sm:size-[18px] xs:size-[18px]"
            />
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          {...register}
          className={`w-full xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] xs:text-[12px] xl:p-[16px] lg:p-[16px] md:p-[10px] sm:p-[10px] xs:p-[10px] xl:h-[56px] lg:h-[56px] md:h-[40px] sm:h-[40px] xs:h-[40px] bg-[rgba(255,255,255,0.64)] focus:outline-none ${
            icon
              ? "ltr:rounded-[0px_8px_8px_0px] rtl:rounded-[8px_0px_0px_8px]"
              : "rounded-[8px]"
          } ${error ? "border-red-500 ring-red-300" : ""}`}
          name={name}
        />
      </div>
      {error && (
        <p className="xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-red-500 mt-2">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextInput;
