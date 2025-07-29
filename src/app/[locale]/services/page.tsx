import { ServiceItemT } from "@/components/sections/OurServices/type";
import fetchPublicData from "@/lib/api/fetchPublicData";
import ServiceCards from "./components/ServiceCards";
import { Suspense } from "react";
import MainPageLoading from "@/components/ui/Loading/MainPageLoading";

export default async function ServicesPage({
  params,
  searchParams,
}: {
  params: { locale: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const rawCategory = searchParams.category;
  const category = Array.isArray(rawCategory) ? rawCategory[0] : rawCategory;

  const url = category
    ? `services?mainService=${encodeURIComponent(category)}`
    : "services";

  const servicesData: ServiceItemT[] = await fetchPublicData({ url });

  return (
    <Suspense fallback={<MainPageLoading/>}>
      <div>
        <div className="flex flex-row flex-wrap gap-4">
          {servicesData?.map((el: ServiceItemT) => {
            return <ServiceCards key={el?.id} data={el} />;
          })}
        </div>
      </div>
    </Suspense>
  );
}
