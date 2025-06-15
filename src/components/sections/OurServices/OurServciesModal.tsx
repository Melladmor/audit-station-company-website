"use client";
import React, { useEffect } from "react";
import { SubServicesT } from "./type";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Image from "next/image";
import CtaButton from "@/components/ui/Buttons/CtaButton";
import { useTranslations } from "next-intl";

interface ModalProps {
  data: SubServicesT;
  onClose: () => void;
}

const OurServciesModal: React.FC<ModalProps> = ({ data, onClose }) => {
  const t = useTranslations();
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if ((event.target as HTMLElement).id === "modal-overlay") {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 xs:px-[15px] bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="card_modal">
        <div className="card_modal_cutout_section">
          <div className="cutout-circle"></div>
          <div className="z-50">
            <IoIosCloseCircleOutline
              className="text-secondary size-[24px] cursor-pointer"
              onClick={onClose}
            />
          </div>
        </div>
        <div className="image_circle">
          <Image
            loading="lazy"
            className="xl:size-[100px] lg:size-[100px] md:size-[100px] sm:size-[70px] xs:size-[70px]"
            src="/logos/servicespopup.svg"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="xl:px-[56px] lg:px-[56px] md:px-[56px] sm:px-[25px] xs:px-[25px] flex flex-col justify-center items-center xl:gap-6 lg:gap-6 md:gap-6 sm:gap-4 xs:gap-4">
          <h2 className="text-[20px] text-black font-bold">{data.title}</h2>
          <p className="text-black text-[16px] w-full text-center">
            {data.description || "No description available."}
          </p>
          <CtaButton
            isLink
            not_blank
            path={`services/${data.id}`}
            title={t("readdetails")}
          />
        </div>
      </div>
    </div>
  );
};

export default OurServciesModal;
