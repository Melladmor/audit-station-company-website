"use client";
import React, { useState } from "react";
import { OurServicesI, SubServicesT } from "./type";
import OurServciesModal from "./OurServciesModal";

type Props = {
  data: OurServicesI;
};

const OurServicesCard = ({ data }: Props) => {
  const [modalId, setModalId] = useState<number | null>(null);

  const onClose = () => setModalId(null);
  return (
    <div
      className={`xl:h-[280px] lg:h-[280px] md:h-[280px] sm:h-[280px] xs:h-[280px] px-[24px] xl:py-[20px] lg:py-[20px] md:py-[20px] sm:py-[14px] xs:py-[14px] rounded-[16px] shadow-light `}
      style={{ background: data.bg }}
    >
      <div
        className={`${
          data?.className ? data.className : "xs:mt-[14px]"
        } flex xl:justify-center lg:justify-center md:justify-center items-center   xl:mb-[30px] lg:mb-[30px] md:mb-[30px] sm:mb-[20px] xs:mb-[15px]`}
      >
        <h3 className="bg-[#FFF1E6] xl:w-auto lg:w-auto md:w-auto sm:w-full xs:w-full sm:text-center xs:text-center px-[16px] py-[8px] rounded-[18px] xl:text-[18px] lg:text-[18px] md:text-[16px] sm:text-[14px] xs:text-[14px] font-medium">
          {data.title}
        </h3>
      </div>
      <ul className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2">
        {data.subServices?.map((el: SubServicesT) => {
          return (
            <label htmlFor={modalId ? String(modalId) : ""} key={el?.id}>
              <li
                key={el?.id}
                onClick={() => setModalId(el?.id)}
                className="flex items-center gap-2 mb-2 "
              >
                <div className="xl:w-[14px] xl:h-[14px] lg:w-[14px] lg:h-[14px] md:w-[10px] md:h-[10px] sm:w-[12px] sm:h-[12px] xs:w-[12px] xs:h-[12px] rounded-full bg-white"></div>
                <p className="xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] text-white font-medium subservicesLinks">
                  {el?.name}
                </p>
              </li>
            </label>
          );
        })}
      </ul>
      {modalId ? <OurServciesModal id={modalId} onClose={onClose} /> : ""}
    </div>
  );
};

export default OurServicesCard;
