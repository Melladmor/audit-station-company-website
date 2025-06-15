"use client";
import React, { useState } from "react";
import { OurServicesI, SubServicesT } from "./type";
import OurServciesModal from "./OurServciesModal";

type Props = {
  data: OurServicesI;
};

const OurServicesCard = ({ data }: Props) => {
  const [modalData, setModalData] = useState<SubServicesT | null>(null);

  const onClose = () => setModalData(null);
  return (
    <div
      className={`xl:h-[548px] lg:h-[548px] md:h-[430px] sm:h-[480px] xs:h-[380px] px-[24px] xl:py-[24px] lg:py-[24px] md:py-[24px] sm:py-[20px] xs:py-[14px] rounded-[16px] shadow-light `}
      style={{ background: data.bg }}>
      <div
        className={`${
          data?.className ? data.className : "xs:mt-[14px]"
        } flex xl:justify-center lg:justify-center md:justify-center items-center xl:mt-[24px] lg:mt-[24px] md:mt-[24px] sm:mt-[24px]  xl:mb-[30px] lg:mb-[30px] md:mb-[30px] sm:mb-[20px] xs:mb-[15px]`}>
        <h3 className="bg-[#FFF1E6] xl:w-auto lg:w-auto md:w-auto sm:w-full xs:w-full sm:text-center xs:text-center px-[16px] py-[8px] rounded-[8px] xl:text-[20px] lg:text-[20px] md:text-[16px] sm:text-[14px] xs:text-[14px] font-medium">
          {data.title}
        </h3>
      </div>
      <ul className="xl:px-[50px]  lg:px-[20px]  md:px-0  sm:px-[8px]  xs:px-[8px]">
        {data.subServices?.map((el: SubServicesT) => {
          return (
            <label
              htmlFor={modalData ? String(modalData?.id) : ""}
              key={el?.id}>
              <li
                key={el?.id}
                onClick={() => setModalData(el)}
                className="flex items-center gap-2 mb-2 ">
                <div className="xl:w-[16px] xl:h-[16px] lg:w-[16px] lg:h-[16px] md:w-[14px] md:h-[14px] sm:w-[14px] sm:h-[14px] xs:w-[12px] xs:h-[12px] rounded-full bg-white"></div>
                <p className="xl:text-[20px] lg:text-[20px] md:text-[16px] sm:text-[12px] xs:text-[12px] text-white font-medium subservicesLinks">
                  {el?.title}
                </p>
              </li>
            </label>
          );
        })}
      </ul>
      {modalData ? <OurServciesModal data={modalData} onClose={onClose} /> : ""}
    </div>
  );
};

export default OurServicesCard;
