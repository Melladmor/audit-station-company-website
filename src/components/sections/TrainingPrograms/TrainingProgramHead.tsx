import Button from "@/components/ui/Buttons/Button";
import { getTranslations } from "next-intl/server";
import React from "react";

type Props = {
  image: string;
  title: string;
  discription: string;
};

const TrainingProgramHead = async ({ discription, image, title }: Props) => {
  const t = await getTranslations();
  return (
    <div className="xl:h-[510px] lg:h-[510px] md:h-[410px] sm:h-[350px] xs:h-[300px] relative mb-[32px]">
      <div
        className="xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-full xs:w-full xl:block lg:block md:block sm:hidden xs:hidden h-full bg-cover bg-center shadow-light"
        style={{
          backgroundImage: `url(${image})`,
        }}></div>
      <div className="xl:w-[621px] lg:w-[600px] md:w-[500px] sm:w-full xs:w-full xl:h-[90%] lg:h-[90%] md:h-[90%] sm:h-[90%] xs:h-full  absolute ltr:right-0 rtl:left-0 top-[5%] bg-[#ECF8E3] shadow-light flex flex-col gap-[14px] px-[24px] xl:py-[60px] lg:py-[60px] md:py-[60px] sm:py-[40px] xs:py-[20px] items-center justify-center text-center">
        <h3 className="xl:text-[32px] lg:text-[32px] md:text-[26px] sm:text-[20px] xs:text-[16px] text-black font-[600]">
          {title}
        </h3>
        <p className="text-black xl:text-[20px] lg:text-[20px] md:text-[14px] sm:text-[14px] xs:text-[12px]">
          {discription}
        </p>
        <Button
          title={t("contactus")}
          isLink
          path="https://auditstation.io/"
          className="btn_size bg-secondary hover:bg-dark-background dark:bg-secondary dark:text-dark-text dark:hover:bg-dark-background"
        />
      </div>
    </div>
  );
};

export default TrainingProgramHead;
