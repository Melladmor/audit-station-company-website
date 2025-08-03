"use client";
import SelectInput from "@/components/Inputs/Inputs/SelectInput";
import { useFetchClient } from "@/hooks/useFetchClient";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

type Props = {
  headerTitle?: string;
  url_route: string;
};

export type CategoryFilterT = {
  id: string | number;
  name: string;
};
const FilterLayout = ({ headerTitle = "filterby", url_route }: Props) => {
  const t = useTranslations();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") || "";
  const { data, loading } = useFetchClient<CategoryFilterT[]>({
    url: "parent_categories",
    slug: "clients",
  });

  const shouldFetchSub = currentCategory !== "";

  const { data: dataSub, loading: loadingSub } = useFetchClient<
    CategoryFilterT[]
  >({
    url: shouldFetchSub
      ? `parent_categories/${currentCategory}/sub_categories`
      : "",
    slug: "clients",
  });

  const categoriesData = data?.map(
    (item: { id: number | string; name: string }) => ({
      label: item?.name,
      value: item?.id,
    })
  );

  const subCategoriesData = dataSub?.map(
    (item: { id: number | string; name: string }) => ({
      label: item?.name,
      value: item?.id,
    })
  );

  const handleCategory = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", value);
    router.push(`/${url_route}?${params.toString()}`);
  };

  const handleSubCategory = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("subCategory", value);
    router.push(`/${url_route}?${params.toString()}`);
  };
  return (
    <div className="xl:w-[274px] lg:w-[274px] md:w-[274px] sm:w-full xs:w-full py-6 p-4 rounded-lg bg-[#F5F5F5] dark:bg-black dark:border-[1px] dark:border-light-border">
      <div className="rounded-md py-2 px-4 w-full bg-[#E6E7E8] dark:bg-mainblack text-[20px] text-light-text dark:text-dark-text dark:border-[1px] dark:border-light-border">
        {t(headerTitle)}
      </div>
      <SelectInput
        label={t("category")}
        name="category"
        defaultValue=""
        optionalLabel={t("category")}
        required={false}
        disabled={loading || !categoriesData}
        options={categoriesData || []}
        onChangeFilter={handleCategory}
        loading={loading}
      />

      <SelectInput
        label={t("subCategory")}
        name="subCategory"
        defaultValue=""
        optionalLabel={t("subCategory")}
        required={false}
        disabled={loadingSub || !subCategoriesData}
        options={subCategoriesData || []}
        onChangeFilter={handleSubCategory}
        loading={loadingSub}
      />
    </div>
  );
};

export default FilterLayout;
