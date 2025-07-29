import CustomSection from "@/components/ui/CustomSection/CustomSection";
import FilterLayout from "@/components/ui/FilterDropDown/FilterLayout";
import TopPagesSection from "@/components/ui/TopPagesSection";
import { getTranslations } from "next-intl/server";

export default async function happyCustomersLayot({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = await getTranslations();
  return (
    <div>
      <TopPagesSection
        title={`${t("sections.ourhappycustomers.first")} ${t(
          "sections.ourhappycustomers.second"
        )}`}
      />

      <CustomSection className="py-[86px]">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-[274px] shrink-0">
            <FilterLayout url_route="our-happy-customers" />
          </div>

          <div className="flex-1 w-full">{children}</div>
        </div>
      </CustomSection>
    </div>
  );
}
