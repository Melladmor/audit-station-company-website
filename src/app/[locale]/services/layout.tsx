import { MainServicesI } from "@/components/sections/OurServices/type";
import CustomSection from "@/components/ui/CustomSection/CustomSection";
import FilterTabs from "@/components/ui/FilterTabs/FilterTabs";
import { TabsFilterT } from "@/components/ui/FilterTabs/type";
import TopPagesSection from "@/components/ui/TopPagesSection";
import fetchPublicData from "@/lib/api/fetchPublicData";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta.services");

  return {
    title: t("title"),
    description: t("description"),

    keywords: t("keywords")
      .split(",")
      .map((k) => k.trim()),
  };
}
export default async function newsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = await getTranslations();

  const servicesData: MainServicesI[] = await fetchPublicData({
    url: "services/main-services",
  });
  const ourServicesData: TabsFilterT[] = servicesData?.map(
    (tab: MainServicesI) => {
      return {
        id: tab?.id,
        title: tab?.name,
      };
    }
  );

  return (
    <div>
      <TopPagesSection title={t("navbarlinks.services.services")} />
      <CustomSection className="py-[86px]">
        <div className="flex flex-col gap-6">
          <div className="w-full mb-[36px]">
            <FilterTabs tabs={ourServicesData} url_route="services" />
          </div>

          <div className="w-full">{children}</div>
        </div>
      </CustomSection>
    </div>
  );
}
