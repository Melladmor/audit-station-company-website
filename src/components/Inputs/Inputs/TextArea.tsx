"use client";

import React from "react";
import { InputPropsI } from "../type";

const TextArea: React.FC<Omit<InputPropsI, "icon" | "type">> = ({
  label,
  placeholder = "",
  className = "",
  disabled = false,
  required = false,
  register,
  error,
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
      <div className="flex-1 flex flex-col gap-1">
        <textarea
          placeholder={placeholder}
          disabled={disabled}
          {...register}
          rows={4}
          className={`w-full xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] xs:text-[12px] p-[16px] bg-[rgba(255,255,255,0.64)] focus:outline-none rounded-[8px] resize-none ${
            error ? "border-red-500 ring-red-300" : ""
          }`}
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

export default TextArea;
