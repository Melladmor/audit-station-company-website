"use client";

import React, { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import Image from "next/image";
import { InputPropsI } from "../type";
type Props = Omit<InputPropsI, "type">;
const Password: React.FC<Props> = ({
  label,
  placeholder = "",
  className = "",
  disabled = false,
  required = false,
  register,
  error,
  icon,
  name,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="text-[#091219]  text-[14px] font-medium mb-2 block">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="flex w-full items-center relative">
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

        <div className="flex-1 flex flex-col gap-1">
          <input
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
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-[#757575]">
            {showPassword ? <IoMdEyeOff size={20} /> : <IoEye size={20} />}
          </button>
        </div>
      </div>

      {error && (
        <p className="xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] xs:text-[12px] text-red-500 mt-2">
          {error}
        </p>
      )}
    </div>
  );
};

export default Password;
