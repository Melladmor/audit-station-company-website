import AboutUsSectionContainer from "./AboutUsSectionContainer";
import { getTranslations } from "next-intl/server";
import CustomSection from "@/components/ui/CustomSection/CustomSection";
import fetchPublicData from "@/lib/api/fetchPublicData";
import { AboutUsSectionT } from "./type";

const AboutUsSection = async () => {
  const t = await getTranslations("sections.aboutussection");
  const aboutUsData: AboutUsSectionT = await fetchPublicData({
    url: "about_us",
  });

  return (
    <CustomSection className="mt-[100px]">
      <AboutUsSectionContainer
        first={t("first")}
        second={t("second")}
        description={aboutUsData?.description}
        youtube_link={aboutUsData?.youtube_link}
      />
    </CustomSection>
  );
};

export default AboutUsSection;
