import React from "react";
import { FeatureT, PackagesI } from "./type";
import Button from "@/components/ui/Buttons/Button";
import { IoLogoWhatsapp } from "react-icons/io";
import { useTranslations } from "next-intl";

type Props = PackagesI;

const PackagesCard = ({ description, features, name, price, color }: Props) => {
  const t = useTranslations();

  return (
    <div
      className="border-[1px] border-[#E6E7E8] xl:min-w-[300px] lg:min-w-[300px] md:min-w-[300px] sm:w-full xs:w-full xl:max-w-[300px] lg:max-w-[300px] max-h-[600px] pb-[150px] rounded-[20px] py-[24px] px-[16px]"
      style={{ background: color }}>
      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col gap-4">
          <h3 className="text-mainblack text-[24px] font-[700]">{name}</h3>
          <p className="text-mainblack text-[20px]">
            {t("aed")} {price} {t("mon")}
          </p>
        </div>
        <Button
          className="w-full font-[400] bg-white text-[#000] rounded-[25px] dark:bg-[#000] dark:text-white"
          title={t("contactus")}
          isLink
          path="https://www.google.com"
          icon={
            <IoLogoWhatsapp className="size-[25px] text-light-text dark:text-white" />
          }
        />

        <p className="text-mainblack text-[16px]">{description}</p>
        <hr className="border-t border-white dark:border-black" />
      </div>
      <div className="py-[16px]">
        <h4 className="text-[16px] font-[600] text-black">{t("features")}</h4>
        <ul>
          {features?.map((el: FeatureT) => {
            return (
              <li
                key={el?.id}
                className="text-[#36393B] flex justify-between items-center">
                <p>{el?.name}</p>
                <div className="tooltip tooltip-left rtl:tooltip-right ">
                  <div
                    className="tooltip-content max-w-[250px]"
                    style={{ zIndex: 99999 }}>
                    <div className="font-black">{el?.description}</div>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none">
                      <path
                        d="M8.46667 11.5H9.13334V7.83333H8.46667V11.5ZM8.8 6.88467C8.91645 6.88467 9.014 6.84533 9.09267 6.76667C9.17134 6.688 9.21045 6.59044 9.21 6.474C9.20956 6.35756 9.17023 6.26022 9.092 6.182C9.01378 6.10378 8.91645 6.06444 8.8 6.064C8.68356 6.06356 8.58623 6.10289 8.508 6.182C8.42978 6.26111 8.39045 6.35867 8.39 6.47467C8.38956 6.59067 8.42889 6.688 8.508 6.76667C8.58711 6.84533 8.68445 6.88467 8.8 6.88467ZM8.802 14.5C7.97223 14.5 7.19223 14.3427 6.462 14.028C5.73178 13.7129 5.09645 13.2853 4.556 12.7453C4.01556 12.2053 3.58778 11.5707 3.27267 10.8413C2.95756 10.112 2.8 9.33222 2.8 8.502C2.8 7.67178 2.95756 6.89178 3.27267 6.162C3.58734 5.43178 4.01423 4.79644 4.55334 4.256C5.09245 3.71556 5.72734 3.28778 6.458 2.97267C7.18867 2.65756 7.96867 2.5 8.798 2.5C9.62734 2.5 10.4073 2.65756 11.138 2.97267C11.8682 3.28733 12.5036 3.71444 13.044 4.254C13.5844 4.79356 14.0122 5.42844 14.3273 6.15867C14.6424 6.88889 14.8 7.66867 14.8 8.498C14.8 9.32733 14.6427 10.1073 14.328 10.838C14.0133 11.5687 13.5858 12.204 13.0453 12.744C12.5049 13.284 11.8702 13.7118 11.1413 14.0273C10.4124 14.3429 9.63267 14.5004 8.802 14.5ZM8.8 13.8333C10.2889 13.8333 11.55 13.3167 12.5833 12.2833C13.6167 11.25 14.1333 9.98889 14.1333 8.5C14.1333 7.01111 13.6167 5.75 12.5833 4.71667C11.55 3.68333 10.2889 3.16667 8.8 3.16667C7.31111 3.16667 6.05 3.68333 5.01667 4.71667C3.98334 5.75 3.46667 7.01111 3.46667 8.5C3.46667 9.98889 3.98334 11.25 5.01667 12.2833C6.05 13.3167 7.31111 13.8333 8.8 13.8333Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PackagesCard;
