"use client";

import { useSearchParams } from "next/navigation";
import { useFetchClient } from "@/hooks/useFetchClient";
import OurHappyCustomresCard from "@/components/sections/OurHappyCustomer/OurHappyCustomresCard";
import { OurHappyCustomersI } from "@/components/sections/OurHappyCustomer/type";
import MainPageLoading from "@/components/ui/Loading/MainPageLoading";
import Pagination from "@/components/ui/Pagination/Pagination";

interface Props {
  initialCategory?: string;
  initialSub?: string;
}

export default function HappyCustomersList({
  initialCategory = "",
  initialSub = "",
}: Props) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || initialCategory;
  const subCategory = searchParams.get("subCategory") || initialSub;
  const page = parseInt(searchParams.get("page") || "1", 10);

  const { data, loading, meta } = useFetchClient({
    url: `happy-customer?mainCategory=${category}&subCategory=${subCategory}&page=${page}`,
  });

  if (loading) return <MainPageLoading />;

  const currentPage = meta?.current_page || 1;
  const totalPages = meta?.last_page || 1;

  return (
    <div>
      <div className="flex gap-6 flex-wrap h-[80vh] !overflow-y-scroll">
        {data?.map((customer: OurHappyCustomersI) => (
          <OurHappyCustomresCard key={customer.id} {...customer} />
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
