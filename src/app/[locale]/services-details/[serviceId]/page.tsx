import React from "react";
import { ParamsIdT } from "../../type";
import { getTranslations } from "next-intl/server";
import fetchPublicData from "@/lib/api/fetchPublicData";
import { ServiceItemT } from "@/components/sections/OurServices/type";
import TopPagesSection from "@/components/ui/TopPagesSection";
import OurComponent from "@/components/OurComponent/OurComponent";

const page = async ({ params }: ParamsIdT<"serviceId">) => {
  const { serviceId } = await params;
  const t = await getTranslations();
  const newsDetails: ServiceItemT = await fetchPublicData({
    url: `services/${serviceId}`,
  });
  return (
    <div>
      <TopPagesSection title={t("servicedetails")} />
      <OurComponent
        title={newsDetails?.name}
        description={
          newsDetails?.details_description
            ? newsDetails?.details_description
            : ""
        }
        video={newsDetails?.video}
        buttonTitle="contactwhatsapp"
        buttonLink="https://wa.me/971586028902"
        titleClassName="!text-start"
      />
    </div>
  );
};

export default page;
