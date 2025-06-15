import CustomSection from "@/components/ui/CustomSection/CustomSection";
import { getTranslations } from "next-intl/server";
import React from "react";
import { NewReturnI, NewsI } from "./type";
import { NewsContainer } from "./NewsContainer";
import fetchPublicData from "@/lib/api/fetchPublicData";

const News = async () => {
  const t = await getTranslations("sections.news");
  const newsDataDetching: NewReturnI[] = await fetchPublicData({
    url: "blogs",
  });
  const newsData: NewsI[] = newsDataDetching
    ? newsDataDetching?.map((el: NewReturnI) => {
        return {
          id: el?.id,
          image: el?.image,
          title: el?.title,
          category: el?.main_category,
          subCategory: el?.subCategory,
          publishDate: el?.date,
          description: el?.description,
          readingTime: el?.reading_time,
          author: {
            name: el?.author_name,
            image: el?.author_image,
          },
        };
      })
    : [];

  return (
    <CustomSection
      title={{
        first: t("first"),
        second: t("second"),
        subTitle: t("subTitle"),
      }}
      className="mt-[100px]">
      <NewsContainer data={newsData} />
    </CustomSection>
  );
};

export default News;
