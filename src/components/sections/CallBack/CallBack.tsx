import CustomSection from "@/components/ui/CustomSection/CustomSection";
import { getTranslations } from "next-intl/server";
import CallBackForm from "./CallBackForm";

const CallBack = async () => {
  const t = await getTranslations("sections.callback");

  return (
    <CustomSection
      title={{
        first: t("first"),
        second: t("second"),
        subTitle: t("subTitle"),
      }}
      className="mt-[100px]"
      id="contactus">
      <div className="h-[940px] relative">
        <div
          className="xl:w-[90%] lg:w-[90%] md:w-[90%] xl:block lg:block md:block sm:w-full xs:w-full sm:hidden xs:hidden h-[90%] absolute ltr:right-0 rtl:left-0 top-0"
          style={{
            backgroundImage:
              "linear-gradient(134deg, #FF7701 -0.03%, rgba(9, 18, 25, 0.92) 74.54%)",
          }}></div>
        <CallBackForm />
      </div>
    </CustomSection>
  );
};

export default CallBack;
