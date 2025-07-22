import Title from "@/components/ui/Title/Title";
import Button from "@/components/ui/Buttons/Button";
import AboutUsSectionVideo from "./AboutUsSectionVideo";
import { getTranslations } from "next-intl/server";
import { AboutUsSectionT } from "./type";
import { truncateHtmlToText } from "@/lib/helper/helper";

type Props = AboutUsSectionT & {
  first: string;
  second: string;
};

const AboutUsSectionContainer = async ({
  description,
  youtube_link,
  first,
  second,
}: Props) => {
  const t = await getTranslations();
  return (
    <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col  justify-between items-start gap-[24px]  w-full ">
      <div className=" flex flex-col items-start  xl:gap-[32px] lg:gap-[28px] md:gap-[24px] sm:gap-[20px] xs:gap-[16px]">
        <Title first={first} second={second} className="mb-0" />
        <div
          dangerouslySetInnerHTML={{
            __html: truncateHtmlToText(description, 380),
          }}
          className="xl:text-[24px] lg:text-[20px] text-light-text dark:text-dark-text"
        ></div>
        <Button
          title={t("readmore")}
          isLink
          className="btn_size"
          path="aboutus"
          not_blank
        />
      </div>
      <AboutUsSectionVideo url={youtube_link} />
    </div>
  );
};

export default AboutUsSectionContainer;
