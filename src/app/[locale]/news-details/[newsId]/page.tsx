import React from "react";
import { ParamsIdT } from "../../type";
import TopPagesSection from "@/components/ui/TopPagesSection";
import { getTranslations } from "next-intl/server";
import { NewReturnI } from "@/components/sections/News/type";
import fetchPublicData from "@/lib/api/fetchPublicData";
import { DetailsT } from "@/components/OurComponent/type";
import { randomUUID } from "crypto";
import DetailsComponent from "@/components/OurComponent/DetailsComponent";

const page = async ({ params }: ParamsIdT<"newsId">) => {
  const { newsId } = await params;
  const t = await getTranslations();
  const newsDetails: NewReturnI = await fetchPublicData({
    url: `blogs/${newsId}`,
  });

  const newsData: DetailsT = {
    title: newsDetails.title,
    image: newsDetails?.image,
    description: newsDetails?.description,
    mainCategory: newsDetails?.main_category,
    subCategory: newsDetails?.subCategory,
    newsSubDetailes: {
      author_name: newsDetails?.author_name,
      created_at: newsDetails?.date,
      reading_time: newsDetails?.reading_time,
    },
    tags: newsDetails?.tags?.map((tag: string) => ({
      id: randomUUID(),
      name: tag,
    })),
  };

  return (
    <div>
      <TopPagesSection title={t("newsdetailes")} />
      <DetailsComponent data={newsData} />
    </div>
  );
};

export default page;
