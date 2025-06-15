import CustomSection from "@/components/ui/CustomSection/CustomSection";
import { getTranslations } from "next-intl/server";
import React from "react";
import { PackagesI } from "./type";
import PackagesContainer from "./PackagesContainer";
import Collapse from "@/components/ui/collapse/Collapse";

const PackagesSection = async () => {
  const t = await getTranslations("sections.packages");
  const btnTitle = await getTranslations();
  const packagesData: PackagesI[] = [
    {
      id: 1,
      color: "linear-gradient(180deg, #FFFBAF 0%, #874F9E 100%)",
      name: "Basic",
      price: "199",
      description:
        "Ideal for startups and small businesses needing essential compliance and financial reporting services.",
      features: [
        {
          id: 1,
          name: "Monthly Financial Statements",
          description:
            "Receive detailed financial statements to track business performance.",
        },
        {
          id: 2,
          name: "Basic Tax Compliance Support",
          description:
            "Assistance with filing and compliance for basic tax requirements.",
        },
        {
          id: 3,
          name: "Bookkeeping Assistance",
          description:
            "Organized bookkeeping to maintain accurate financial records.",
        },
        {
          id: 4,
          name: "Email Support",
          description: "Get answers to your queries via email support.",
        },
      ],
    },
    {
      id: 2,
      color: " linear-gradient(180deg, #D7DDE8 0%, #80CE42 100%)",
      name: "Standard",
      price: "399",
      description:
        "Comprehensive audit and tax consultancy package for growing businesses.",
      features: [
        {
          id: 1,
          name: "Quarterly Financial Audits",
          description:
            "Regular audits to ensure financial transparency and compliance.",
        },
        {
          id: 2,
          name: "Tax Planning & Advisory",
          description:
            "Strategic tax planning to optimize financial performance.",
        },
        {
          id: 3,
          name: "VAT & Sales Tax Compliance",
          description: "Ensure compliance with VAT and sales tax regulations.",
        },
        {
          id: 4,
          name: "Dedicated Accountant Support",
          description:
            "Access a dedicated accountant for ongoing financial guidance.",
        },
      ],
    },

    {
      id: 3,
      color: "linear-gradient(180deg, #E1F5C4 -5.91%, #FF7600 99.99%",
      name: "Advanced",
      price: "599",
      description:
        "Designed for mid-sized businesses requiring financial strategy and wealth management solutions.",
      features: [
        {
          id: 1,
          name: "Financial Forecasting & Budgeting",
          description:
            "Plan future finances with expert forecasting and budgeting.",
        },
        {
          id: 2,
          name: "Risk Assessment & Mitigation",
          description: "Identify and mitigate financial risks effectively.",
        },
        {
          id: 3,
          name: "Wealth Management Consultation",
          description:
            "Optimize financial assets with personalized wealth management.",
        },
        {
          id: 4,
          name: "Custom Financial Reports",
          description:
            "Get detailed financial reports tailored to your business needs.",
        },
      ],
    },
    {
      id: 4,
      color: "linear-gradient(180deg, #A7CCCD 0%, #FDBB2D 100%)",
      name: "Enterprise",
      price: "999",
      description:
        "Full-scale HR and financial consulting package for enterprises seeking efficiency and compliance.",
      features: [
        {
          id: 1,
          name: "HR Policy Development",
          description:
            "Create structured HR policies aligned with industry standards.",
        },
        {
          id: 2,
          name: "Payroll & Compensation Management",
          description: "Ensure accurate and efficient payroll processing.",
        },
        {
          id: 3,
          name: "Employee Benefits Structuring",
          description: "Develop competitive benefits packages for employees.",
        },
        {
          id: 4,
          name: "Corporate Financial Strategy",
          description:
            "Strategic financial planning for business growth and stability.",
        },
      ],
    },
    {
      id: 5,
      color: "linear-gradient(180deg, #DAE2F8 0%, #D6A4A4 100%)",
      name: "Premium",
      price: "1,499",
      description:
        "Exclusive package offering personalized consulting for business owners and executives.",
      features: [
        {
          id: 1,
          name: "Executive Tax Planning",
          description: "High-level tax strategies tailored for executives.",
        },
        {
          id: 2,
          name: "Mergers & Acquisitions Advisory",
          description: "Expert guidance on business mergers and acquisitions.",
        },
        {
          id: 3,
          name: "CFO-Level Strategic Consulting",
          description:
            "Get insights and strategic advice from experienced CFOs.",
        },
        {
          id: 4,
          name: "Full Compliance & Risk Management",
          description: "Ensure full regulatory compliance and risk mitigation.",
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
      id="packages">
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
