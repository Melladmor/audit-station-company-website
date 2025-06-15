import AboutUsSectionContainer from "./AboutUsSectionContainer";
import { getTranslations } from "next-intl/server";
import CustomSection from "@/components/ui/CustomSection/CustomSection";
import fetchPublicData from "@/lib/api/fetchPublicData";
import { AboutUsDataT } from "./type";

const AboutUsSection = async () => {
  const t = await getTranslations("sections.aboutussection");
  const aboutUsData: AboutUsDataT = await fetchPublicData({ url: "about_us" });
  return (
    <CustomSection className="mt-[100px]">
      <AboutUsSectionContainer
        first={t("first")}
        second={t("second")}
        description_about={aboutUsData?.description_about}
        youtube_link={aboutUsData?.youtube_link}
        image={aboutUsData?.image}
      />
    </CustomSection>
  );
};

export default AboutUsSection;
