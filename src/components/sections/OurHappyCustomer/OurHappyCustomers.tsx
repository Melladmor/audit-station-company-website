import CustomSection from "@/components/ui/CustomSection/CustomSection";
import { getTranslations } from "next-intl/server";
import { OurHappyCustomersI } from "./type";
import { OurHappyCustomersContainer } from "./OurHappyCustomersContainer";
import fetchPublicData from "@/lib/api/fetchPublicData";

const OurHappyCustomers = async () => {
  const happyCustomerData: OurHappyCustomersI[] = await fetchPublicData({
    url: "happy-customer",
  });
  const t = await getTranslations("sections.ourhappycustomers");
  return (
    <CustomSection
      title={{
        first: t("first"),
        second: t("second"),
        subTitle: t("subTitle"),
      }}
      className="mt-[100px]">
      <OurHappyCustomersContainer data={happyCustomerData} />
    </CustomSection>
  );
};

export default OurHappyCustomers;
