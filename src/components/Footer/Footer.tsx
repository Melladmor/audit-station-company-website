import React from "react";
import FooterAddress from "./FooterAddress";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import { getTranslations } from "next-intl/server";

const Footer = async () => {
  const t = await getTranslations();
  return (
    <div className="bg-mainblack px_padding py-[40px]">
      <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col md:gap-6 sm:gap-6 xs:gap-6 border-b border-white pb-6">
        <FooterAddress />
        <FooterLinks />
        <FooterSocial />
      </div>
      <div className="flex items-center justify-center pt-6">
        <h5 className="xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] xs:text-[16px] font-[500]  text-white">
          {t("copyright")}
        </h5>
      </div>
    </div>
  );
};

export default Footer;
