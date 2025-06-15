import CustomSection from "@/components/ui/CustomSection/CustomSection";
import { AboutUsDataT } from "@/components/sections/AboutUs/type";
import TopPagesSection from "@/components/ui/TopPagesSection";
import fetchPublicData from "@/lib/api/fetchPublicData";
import { getTranslations } from "next-intl/server";
import ImageComp from "./components/ImageComp";
import Title from "@/components/ui/Title/Title";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import Button from "@/components/ui/Buttons/Button";
import { TbBrandWhatsappFilled } from "react-icons/tb";

const page = async () => {
  const aboutUsData: AboutUsDataT = await fetchPublicData({ url: "about_us" });
  const t = await getTranslations();
  return (
    <div>
      <TopPagesSection title={t("navbarlinks.aboutus")} />
      <CustomSection className="py-[56px]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-[24px] font-[700] text-light-text dark:text-dark-text">
              {aboutUsData?.title_about}
            </h1>
            <p
              dangerouslySetInnerHTML={{
                __html: aboutUsData?.description_about,
              }}
              className="xl:text-[24px] lg:text-[24px] md:text-[20px] sm:text-[16px] xs:text-[16px] text-light-text dark:text-dark-text"></p>
          </div>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-6">
            <div>
              <ImageComp url="/images/slide2.jpg" />
            </div>
            <div className="flex flex-col gap-4">
              <Title
                first={t("ourvission")}
                customTitleIcon="/icons/vission.svg"
                className="!items-start !mb-0"
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: aboutUsData?.description_vision,
                }}
                className="xl:text-[24px] lg:text-[24px] md:text-[20px] sm:text-[16px] xs:text-[16px] text-light-text dark:text-dark-text"></p>
            </div>
          </div>

          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-6">
            <div className="flex flex-col gap-4">
              <Title
                first={t("ourmission")}
                customTitleIcon="/icons/mission.svg"
                className="!items-start !mb-0"
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: aboutUsData?.description_mission,
                }}
                className="xl:text-[24px] lg:text-[24px] md:text-[20px] sm:text-[16px] xs:text-[16px] text-light-text dark:text-dark-text"></p>
            </div>
            <div>
              <ImageComp url="/images/slide.jpg" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Title
              first={t("watchstory")}
              customTitleIcon="/icons/watchstory.svg"
              className="!mb-0"
            />
            <p className="xl:text-[24px] lg:text-[24px] md:text-[20px] sm:text-[16px] xs:text-[16px] text-center text-light-text dark:text-dark-text">
              {t("aboutvideotitle")}
            </p>
            <div>
              <VideoPlayer
                videoLink={aboutUsData?.youtube_link}
                customClass="xl:!h-[472px] lg:!h-[472px]  md:!h-[400px] sm:!h-[350px] xs:!h-[350px]   !rounded-[16px]"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              title={t("contactwhatsapp")}
              icon={<TbBrandWhatsappFilled className="size-[24px]" />}
              isLink
              path="https://wa.me/971501234567"
              className="btn_size bg-secondary dark:bg-secondary hover:bg-black dark:hover:bg-white text-dark-text dark:text-dark-text dark:hover:text-black"
            />
          </div>
        </div>
      </CustomSection>
    </div>
  );
};

export default page;
