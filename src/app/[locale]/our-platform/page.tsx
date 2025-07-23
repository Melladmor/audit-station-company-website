import fetchPublicData from "@/lib/api/fetchPublicData";
import { getTranslations } from "next-intl/server";
import React from "react";
import { PlatformT } from "../type";
import TopPagesSection from "@/components/ui/TopPagesSection";
import CustomSection from "@/components/ui/CustomSection/CustomSection";
import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import Button from "@/components/ui/Buttons/Button";

const page = async () => {
  const ourPlatformData: PlatformT = await fetchPublicData({
    url: "our_platforms",
  });

  console.log(ourPlatformData);
  const t = await getTranslations();
  return (
    <div>
      <TopPagesSection title={t("descoverourplatform")} />

      <CustomSection className="py-[56px]">
        <div className="flex flex-col gap-8">
          <div className="flex justify-center items-center">
            <Image
              src={ourPlatformData?.image}
              alt={ourPlatformData?.image}
              width={100}
              height={100}
              className="size-60 object-cover rounded-full"
              loading="lazy"
            />
          </div>
          <h1 className="text-[24px] text-center font-[700] text-light-text dark:text-dark-text">
            {ourPlatformData?.title}
          </h1>

          <div
            dangerouslySetInnerHTML={{
              __html: ourPlatformData?.description,
            }}
            className="xl:text-[24px] lg:text-[24px] md:text-[20px] sm:text-[16px] xs:text-[16px] text-light-text dark:text-dark-text"
          ></div>

          <div>
            <VideoPlayer
              videoLink={ourPlatformData?.video}
              customClass="!border-[#B3B6B8] !border-[1px] xl:!h-[472px] lg:!h-[472px]  md:!h-[400px] sm:!h-[350px] xs:!h-[350px]   !rounded-[16px]"
            />
          </div>
          <div className="flex justify-end">
            <Button
              title={t("visitaudit")}
              isLink
              path="https://auditstation.io"
              className="btn_size bg-secondary dark:bg-secondary hover:bg-black dark:hover:bg-white text-dark-text dark:text-dark-text dark:hover:text-black"
            />
          </div>
        </div>
      </CustomSection>
    </div>
  );
};

export default page;
