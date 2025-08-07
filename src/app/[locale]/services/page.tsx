import { ServiceItemT } from "@/components/sections/OurServices/type";
import fetchPublicData from "@/lib/api/fetchPublicData";
import ServiceCards from "./components/ServiceCards";
import { Suspense } from "react";
import MainPageLoading from "@/components/ui/Loading/MainPageLoading";

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; subCategory?: string }>;
}) {
  const { category } = await searchParams;
  const url = category
    ? `services?mainService=${encodeURIComponent(category)}`
    : "services";

  const servicesData: ServiceItemT[] = await fetchPublicData({ url });

  return (
    <div>
      <div className="flex flex-row flex-wrap gap-4">
        {servicesData?.map((el: ServiceItemT) => {
          return <ServiceCards key={el?.id} data={el} />;
        })}
      </div>
    </div>
  );
}
