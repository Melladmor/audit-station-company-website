"use client";

import React from "react";
import { InputPropsI } from "../type";
import { useTranslations } from "next-intl";

interface SelectInputProps extends InputPropsI {
  options: { label: string; value: string }[];
  defaultValue?: string;
  optionalLabel?: string;
  onChangeFilter?: (value: string) => void;
  loading?: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  error,
  options,
  defaultValue = "",
  optionalLabel = "",
  required = false,
  disabled = false,
  className = "",
  icon,
  onChangeFilter,
  register,
  loading = false,
}) => {
  const t = useTranslations();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    if (onChangeFilter) {
      onChangeFilter(selectedValue);
    }
  };

  const placeholderLabel = loading
    ? t("loading") || "Loading..."
    : optionalLabel || "--";

  return (
    <fieldset className={`w-full ${className} fieldset`}>
      {label && (
        <legend className="fieldset-legend text-[#091219] text-[14px] font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </legend>
      )}

      <div className="relative flex items-center w-full">
        <select
          name={name}
          defaultValue=""
          disabled={disabled || loading}
          className={`select w-full pr-10 focus:outline-none ${
            error ? "border-red-500 ring-red-300" : ""
          } `}
          onChange={handleChange}
          {...register}
        >
          <option disabled value="">
            {placeholderLabel}
          </option>

          {!loading &&
            options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
        </select>
      </div>

      {error && (
        <div className="flex justify-between mt-2">
          <p className="text-xs text-red-500 text-right">{error}</p>
        </div>
      )}
    </fieldset>
  );
};

export default SelectInput;
