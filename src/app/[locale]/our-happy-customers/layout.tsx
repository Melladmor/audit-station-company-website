import CustomSection from "@/components/ui/CustomSection/CustomSection";
import FilterLayout from "@/components/ui/FilterDropDown/FilterLayout";

export default async function happyCustomersLayot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <CustomSection className="py-[86px]">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-[274px] shrink-0">
            <FilterLayout />
          </div>

          <div className="flex-1 w-full">
            {children}
          </div>
        </div>
      </CustomSection>
    </div>
  );
}
