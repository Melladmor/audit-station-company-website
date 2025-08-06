import CustomSection from "@/components/ui/CustomSection/CustomSection";
// import { AboutUsDataT } from "@/components/sections/AboutUs/type";
import TopPagesSection from "@/components/ui/TopPagesSection";
import fetchPublicData from "@/lib/api/fetchPublicData";
import { getTranslations } from "next-intl/server";
import ImageComp from "./components/ImageComp";
import Title from "@/components/ui/Title/Title";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import Button from "@/components/ui/Buttons/Button";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { AboutUsPageDetailesT } from "@/components/sections/AboutUs/type";
import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta.about");

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords")
      .split(",")
      .map((k) => k.trim()),
  };
}
const page = async () => {
  const aboutUsData: AboutUsPageDetailesT = await fetchPublicData({
    url: "about_us_details",
  });
  const t = await getTranslations();
  return (
    <div>
      <TopPagesSection title={t("navbarlinks.aboutus")} />
      <CustomSection className="py-[56px]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-[24px] font-[700] text-light-text dark:text-dark-text">
              {aboutUsData?.title_details}
            </h1>
            <div
              dangerouslySetInnerHTML={{
                __html: aboutUsData?.description_details,
              }}
              className="xl:text-[24px] lg:text-[24px] md:text-[20px] sm:text-[16px] xs:text-[16px] text-light-text dark:text-dark-text"
            ></div>
          </div>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-6">
            <div>
              <ImageComp url={aboutUsData?.image_vission} />
            </div>
            <div className="flex flex-col gap-4">
              <Title
                first={t("ourvission")}
                customTitleIcon="/icons/vission.svg"
                className="!items-start !mb-0"
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: aboutUsData?.description_vision,
                }}
                className="xl:text-[24px] lg:text-[24px] md:text-[20px] sm:text-[16px] xs:text-[16px] text-light-text dark:text-dark-text"
              ></div>
            </div>
          </div>

          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 gap-6">
            <div className="flex flex-col gap-4">
              <Title
                first={t("ourmission")}
                customTitleIcon="/icons/mission.svg"
                className="!items-start !mb-0"
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: aboutUsData?.description_mission,
                }}
                className="xl:text-[24px] lg:text-[24px] md:text-[20px] sm:text-[16px] xs:text-[16px] text-light-text dark:text-dark-text"
              ></div>
            </div>
            <div>
              <ImageComp url={aboutUsData?.image_mission} />
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
                videoLink={aboutUsData?.youtube_link_details}
                customClass="!border-[#B3B6B8] !border-[1px] xl:!h-[472px] lg:!h-[472px]  md:!h-[400px] sm:!h-[350px] xs:!h-[350px]   !rounded-[16px]"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              title={t("contactwhatsapp")}
              icon={<TbBrandWhatsappFilled className="size-[24px]" />}
              isLink
              path="https://wa.me/971586028902"
              className="btn_size bg-secondary dark:bg-secondary hover:bg-black dark:hover:bg-white text-dark-text dark:text-dark-text dark:hover:text-black"
            />
          </div>
        </div>
      </CustomSection>
    </div>
  );
};

export default page;
