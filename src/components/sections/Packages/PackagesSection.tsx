import CustomSection from "@/components/ui/CustomSection/CustomSection";
import { getTranslations } from "next-intl/server";
import React from "react";
import { PackagesI } from "./type";
import PackagesContainer from "./PackagesContainer";
import Collapse from "@/components/ui/collapse/Collapse";

const PackagesSection = async () => {
  const t = await getTranslations("sections.packages");
  const btnTitle = await getTranslations();
  const translate = await getTranslations();

  // const packagesData: PackagesI[] = [
  //   {
  //     id: 1,
  //     name: "Basic",
  //     price: "999",
  //     description:
  //       "Perfect for startups seeking basic bookkeeping and tax services with limited support.",
  //     features: [
  //       {
  //         id: 1,
  //         name: "Bookkeeping for 50 Transactions",
  //         description:
  //           "Basic bookkeeping service for up to 50 monthly transactions.",
  //       },
  //       {
  //         id: 2,
  //         name: "Tax Filing Support",
  //         description: "Includes VAT registration, advice, and return filing.",
  //       },
  //       {
  //         id: 3,
  //         name: "Software Advice",
  //         description: "Guidance on selecting suitable accounting software.",
  //       },
  //       {
  //         id: 4,
  //         name: "Financial Reporting",
  //         description:
  //           "Get essential financial reports including P&L and Balance Sheet.",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Starter",
  //     price: "2749",
  //     description:
  //       "Great for small businesses wanting shared accounting and core CFO services.",
  //     features: [
  //       {
  //         id: 1,
  //         name: "Bookkeeping for 200 Transactions",
  //         description:
  //           "Shared accountant with support for up to 200 transactions.",
  //       },
  //       {
  //         id: 2,
  //         name: "Software Setup",
  //         description:
  //           "Includes user setup, technical support, and chart of accounts fixing.",
  //       },
  //       {
  //         id: 3,
  //         name: "CFO Lite",
  //         description:
  //           "Reports like P&L, balance sheet, and cash flow included.",
  //       },
  //       {
  //         id: 4,
  //         name: "Tax Services",
  //         description:
  //           "Full VAT and Corporate TAX filing and advisory support.",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "Smart",
  //     price: "4199",
  //     description:
  //       "Balanced option offering deep insights, compliance, and basic internal auditing.",
  //     features: [
  //       {
  //         id: 1,
  //         name: "1000 Transactions & Shared CFO",
  //         description: "Robust transaction processing and strategic reporting.",
  //       },
  //       {
  //         id: 2,
  //         name: "Partial Internal Auditing",
  //         description:
  //           "Includes stock analysis and account fixing (excluding risk management).",
  //       },
  //       {
  //         id: 3,
  //         name: "Software & Technical Support",
  //         description: "Up to 4 users, support, and privilege setup.",
  //       },
  //       {
  //         id: 4,
  //         name: "CEO Meeting & Business Review",
  //         description: "1 meeting with CEO and 1 business review included.",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     name: "Professional",
  //     price: "5899",
  //     description:
  //       "Ideal for growing businesses needing strong CFO and tax services.",
  //     features: [
  //       {
  //         id: 1,
  //         name: "1200 Transactions & CFO",
  //         description: "Shared CFO, onsite visits, and advanced reporting.",
  //       },
  //       {
  //         id: 2,
  //         name: "Expanded Software Integration",
  //         description: "Includes 7 users, support, and custom setup.",
  //       },
  //       {
  //         id: 3,
  //         name: "Auditing and Stocktaking",
  //         description: "2/year stocktaking with auditing and cost control.",
  //       },
  //       {
  //         id: 4,
  //         name: "AML Compliance",
  //         description: "Corporate TAX and AML support included.",
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     name: "Ultimate",
  //     price: "14999",
  //     description:
  //       "Comprehensive and premium package with all services and full CFO support.",
  //     features: [
  //       {
  //         id: 1,
  //         name: "Unlimited Transactions & Dedicated CFO",
  //         description:
  //           "Unlimited processing, strategic help, and full support.",
  //       },
  //       {
  //         id: 2,
  //         name: "Full Auditing & Risk Management",
  //         description:
  //           "Includes risk, asset reevaluation, and digital auditing.",
  //       },
  //       {
  //         id: 3,
  //         name: "Advanced Software Setup",
  //         description: "10 users, digital auditing, and chart setup.",
  //       },
  //       {
  //         id: 4,
  //         name: "Executive Meetings & Hiring",
  //         description: "Up to 4 CEO meetings and 5 accountant hires.",
  //       },
  //     ],
  //   },
  // ];


  const packagesData: PackagesI[] = [
    {
      id: 1,
      name: translate("packages.basic.name"),
      price: "999",
      description: translate("packages.basic.description"),
      features: [
        {
          id: 1,
          name: translate("packages.basic.features.1.name"),
          description: translate("packages.basic.features.1.description"),
        },
        {
          id: 2,
          name: translate("packages.basic.features.2.name"),
          description: translate("packages.basic.features.2.description"),
        },
        {
          id: 3,
          name: translate("packages.basic.features.3.name"),
          description: translate("packages.basic.features.3.description"),
        },
        {
          id: 4,
          name: translate("packages.basic.features.4.name"),
          description: translate("packages.basic.features.4.description"),
        },
      ],
    },
    {
      id: 2,
      name: translate("packages.starter.name"),
      price: "2749",
      description: translate("packages.starter.description"),
      features: [
        {
          id: 1,
          name: translate("packages.starter.features.1.name"),
          description: translate("packages.starter.features.1.description"),
        },
        {
          id: 2,
          name: translate("packages.starter.features.2.name"),
          description: translate("packages.starter.features.2.description"),
        },
        {
          id: 3,
          name: translate("packages.starter.features.3.name"),
          description: translate("packages.starter.features.3.description"),
        },
        {
          id: 4,
          name: translate("packages.starter.features.4.name"),
          description: translate("packages.starter.features.4.description"),
        },
      ],
    },
    {
      id: 3,
      name: translate("packages.smart.name"),
      price: "4199",
      description: translate("packages.smart.description"),
      features: [
        {
          id: 1,
          name: translate("packages.smart.features.1.name"),
          description: translate("packages.smart.features.1.description"),
        },
        {
          id: 2,
          name: translate("packages.smart.features.2.name"),
          description: translate("packages.smart.features.2.description"),
        },
        {
          id: 3,
          name: translate("packages.smart.features.3.name"),
          description: translate("packages.smart.features.3.description"),
        },
        {
          id: 4,
          name: translate("packages.smart.features.4.name"),
          description: translate("packages.smart.features.4.description"),
        },
      ],
    },
    {
      id: 4,
      name: translate("packages.professional.name"),
      price: "5899",
      description: translate("packages.professional.description"),
      features: [
        {
          id: 1,
          name: translate("packages.professional.features.1.name"),
          description: translate(
            "packages.professional.features.1.description"
          ),
        },
        {
          id: 2,
          name: translate("packages.professional.features.2.name"),
          description: translate(
            "packages.professional.features.2.description"
          ),
        },
        {
          id: 3,
          name: translate("packages.professional.features.3.name"),
          description: translate(
            "packages.professional.features.3.description"
          ),
        },
        {
          id: 4,
          name: translate("packages.professional.features.4.name"),
          description: translate(
            "packages.professional.features.4.description"
          ),
        },
      ],
    },
    {
      id: 5,
      name: translate("packages.ultimate.name"),
      price: "14999",
      description: translate("packages.ultimate.description"),
      features: [
        {
          id: 1,
          name: translate("packages.ultimate.features.1.name"),
          description: translate("packages.ultimate.features.1.description"),
        },
        {
          id: 2,
          name: translate("packages.ultimate.features.2.name"),
          description: translate("packages.ultimate.features.2.description"),
        },
        {
          id: 3,
          name: translate("packages.ultimate.features.3.name"),
          description: translate("packages.ultimate.features.3.description"),
        },
        {
          id: 4,
          name: translate("packages.ultimate.features.4.name"),
          description: translate("packages.ultimate.features.4.description"),
        },
      ],
    },
  ];

  return (
    <CustomSection
      title={{
        first: t("first"),
        second: t("second"),
        subTitle: t("subTitle"),
      }}
      className="mt-[100px]"
      id="packages"
    >
      <PackagesContainer data={packagesData} />

      <div className="mt-[32px]">
        <Collapse
          btnClassName="btn_size"
          title={btnTitle("compare_packages")}
        />
      </div>
    </CustomSection>
  );
};

export default PackagesSection;
