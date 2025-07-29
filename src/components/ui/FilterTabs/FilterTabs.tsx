"use client";
import React, { useRef, useEffect } from "react";
import { TabsFilterT } from "./type";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

type Props = {
  tabs: TabsFilterT[];
  url_route: string;
};

const FilterTabs = ({ tabs, url_route }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel);
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const currentCategory = searchParams.get("category") || "";
  const lastPathSegment = pathname.split("/")[2];
  const isActiveAll = !currentCategory && lastPathSegment === url_route;
  const handleFilterTabs = (value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete("category");
    } else {
      params.set("category", String(value));
    }
    router.push(`/${url_route}?${params.toString()}`);
  };

  return (
    <div>
      <div
        ref={scrollRef}
        className="h-[50px] p-1 rounded-[12px] bg-[#f6e2d0] flex items-center flex-nowrap gap-1 overflow-x-auto"
        style={{
          boxShadow: `inset 0 1px 2px 0 rgba(97, 97, 97, 0.2), inset 0 2px 4px 0 rgba(97, 97, 97, 0.2)`,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}>
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div
          className={`px-3 py-1 h-full w-fit  flex items-center justify-center text-light-text text-nowrap ${
            isActiveAll ? "bg-black text-white" : ""
          }  rounded-[8px] hover:bg-black hover:text-dark-text cursor-pointer`}
          onClick={() => handleFilterTabs("all")}>
          All
        </div>

        {tabs?.map((tab: TabsFilterT) => (
          <div
            className={`px-3 py-1 h-full w-fit  flex items-center justify-center text-nowrap text-light-text ${
              currentCategory === String(tab?.id) ? "bg-black text-white" : ""
            }  rounded-[8px] hover:bg-black hover:text-dark-text cursor-pointer`}
            onClick={() => handleFilterTabs(tab?.id)}
            key={tab?.id}>
            {tab?.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterTabs;
