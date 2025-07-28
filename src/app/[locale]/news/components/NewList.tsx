"use client";

import { useSearchParams } from "next/navigation";
import { useFetchClient } from "@/hooks/useFetchClient";
import OurHappyCustomresCard from "@/components/sections/OurHappyCustomer/OurHappyCustomresCard";
import { OurHappyCustomersI } from "@/components/sections/OurHappyCustomer/type";
import MainPageLoading from "@/components/ui/Loading/MainPageLoading";
import Pagination from "@/components/ui/Pagination/Pagination";
import NewsCard from "@/components/sections/News/NewsCard";
import { NewReturnI, NewsI } from "@/components/sections/News/type";

interface Props {
  initialCategory?: string;
  initialSub?: string;
}

export default function NewList({
  initialCategory = "",
  initialSub = "",
}: Props) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || initialCategory;
  const subCategory = searchParams.get("subCategory") || initialSub;
  const page = parseInt(searchParams.get("page") || "1", 10);

  const { data, loading, meta } = useFetchClient({
    url: `blogs?mainCategory=${category}&subCategory=${subCategory}&page=${page}`,
  });

  if (loading) return <MainPageLoading />;

  const currentPage = meta?.current_page || 1;
  const totalPages = meta?.last_page || 1;
  const newsData: NewsI[] = data
    ? data?.map((el: NewReturnI) => {
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
    <div className="w-full">
      <div className="flex gap-6 w-full flex-wrap h-[80vh] !overflow-y-scroll">
        {newsData?.map((news: NewsI) => (
          <NewsCard key={news.id} {...news} />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        {totalPages >= 1 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        )}
      </div>
    </div>
  );
}
