"use client";

import React from "react";
import { MembershipTierT } from "../../type";
import { useTranslations } from "next-intl";
import Image from "next/image";

type Props = {
  data: MembershipTierT[];
};
export default function RewardsTable({ data }: Props) {
  const t = useTranslations();
  const rows = [
    { label: t("points_to_reach"), key: "points_to_reach" },
    { label: t("point_value_data"), key: "point_value_data" },
    { label: t("tax_consultations"), key: "tax_consultations" },
  ];
  return (
    <div className="overflow-x-auto rounded-xl border  border-gray-200 shadow-sm w-full">
      <table className="min-w-full table-fixed text-center text-sm">
        <thead>
          <tr>
            <th className="w-40 bg-white sticky left-0 z-10 p-4 text-left font-semibold text-gray-700 border-r border-gray-200"></th>
            {data.map((tier: MembershipTierT) => (
              <th
                key={tier.id}
                className="p-4 font-semibold text-gray-700 border-b">
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src={tier.image}
                    alt={tier.name}
                    width={100}
                    height={100}
                    className="w-20 h-14 object-cover rounded-md"
                  />
                  <span className="uppercase font-bold">{tier.name}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t">
              <td className="w-40 bg-gray-50 sticky left-0 z-0 p-4 text-left font-medium text-gray-700 border-r border-gray-200">
                {row.label}
              </td>
              {data.map((tier) => (
                <td key={tier.id + row.key} className="p-4 text-gray-800">
                  {tier[row.key as keyof MembershipTierT]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
