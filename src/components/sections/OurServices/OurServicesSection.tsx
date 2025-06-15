import { getTranslations } from "next-intl/server";
import React from "react";
import { OurServicesI } from "./type";
import OurServicesCard from "./OurServicesCard";
import CustomSection from "@/components/ui/CustomSection/CustomSection";
import Image from "next/image";
import Button from "@/components/ui/Buttons/Button";

const OurServicesSection = async () => {
  const t = await getTranslations("sections.ourservices");
  const btnTitle = await getTranslations();
  const ourServicesData: OurServicesI[] = [
    {
      id: 1,
      title: "Accounting & CFO Services",
      subServices: [
        {
          id: 1,
          title: "BOOKKEEPING",
          description: "Maintain accurate financial records.",
        },
        {
          id: 2,
          title: "Reconciliation",
          description: "Ensure financial records match bank statements.",
        },
        {
          id: 3,
          title: "Financial Manager",
          description: "Oversee financial operations and planning.",
        },
        {
          id: 4,
          title: "Online Financial Management",
          description: "Manage finances remotely with digital tools.",
        },
        {
          id: 5,
          title: "Off-site Accounting",
          description: "Professional accounting services from a remote team.",
        },
        {
          id: 6,
          title: "Accountant Appointment",
          description: "Schedule expert accounting consultations.",
        },
        {
          id: 7,
          title: "Online Accounting",
          description: "Access cloud-based accounting solutions.",
        },
        {
          id: 8,
          title: "Financial Issuance",
          description: "Prepare and issue financial reports.",
        },
      ],
      bg: "#FF7701",
    },
    {
      id: 2,
      title: "Internal Auditing Services",
      subServices: [
        {
          id: 1,
          title: "BOOKKEEPING",
          description: "Ensure financial records are up to date.",
        },
        {
          id: 2,
          title: "Reconciliation",
          description:
            "Verify financial transactions and correct discrepancies.",
        },
        {
          id: 3,
          title: "Financial Manager",
          description: "Audit and manage financial processes.",
        },
        {
          id: 4,
          title: "Online Financial Management",
          description: "Monitor and control finances through online platforms.",
        },
        {
          id: 5,
          title: "Off-site Accounting",
          description: "Expert auditing services without in-house staff.",
        },
        {
          id: 6,
          title: "Accountant Appointment",
          description: "Book a financial audit consultation.",
        },
        {
          id: 7,
          title: "Online Accounting",
          description: "Utilize digital tools for seamless audits.",
        },
        {
          id: 8,
          title: "Financial Issuance",
          description: "Ensure compliance through certified reports.",
        },
      ],
      bg: "#C94A8C",
    },
    {
      id: 3,
      title: "Software Services",
      subServices: [
        {
          id: 1,
          title: "BOOKKEEPING",
          description: "Automate financial record-keeping with software.",
        },
        {
          id: 2,
          title: "Reconciliation",
          description: "Sync financial data across platforms.",
        },
        {
          id: 3,
          title: "Financial Manager",
          description: "Leverage software for real-time financial insights.",
        },
        {
          id: 4,
          title: "Online Financial Management",
          description: "Use cloud-based solutions for finance tracking.",
        },
        {
          id: 5,
          title: "Off-site Accounting",
          description: "Secure, remote financial data processing.",
        },
        {
          id: 6,
          title: "Accountant Appointment",
          description: "Get expert advice on accounting software.",
        },
        {
          id: 7,
          title: "Online Accounting",
          description: "Integrate accounting software for better workflow.",
        },
        {
          id: 8,
          title: "Financial Issuance",
          description: "Generate financial documents through digital tools.",
        },
      ],
      className: "xs:mt-[60px]",
      bg: "#825698",
    },
    {
      id: 4,
      title: "TAX Services",
      subServices: [
        {
          id: 1,
          title: "BOOKKEEPING",
          description: "Keep tax-related financial records organized.",
        },
        {
          id: 2,
          title: "Reconciliation",
          description: "Ensure accurate tax filings with verified data.",
        },
        {
          id: 3,
          title: "Financial Manager",
          description: "Plan and optimize tax-related finances.",
        },
        {
          id: 4,
          title: "Online Financial Management",
          description: "Handle tax preparations through digital tools.",
        },
        {
          id: 5,
          title: "Off-site Accounting",
          description: "Remote tax accounting services for businesses.",
        },
        {
          id: 6,
          title: "Accountant Appointment",
          description: "Consult with tax experts for compliance.",
        },
        {
          id: 7,
          title: "Online Accounting",
          description: "Manage tax records with cloud-based systems.",
        },
        {
          id: 8,
          title: "Financial Issuance",
          description: "Generate tax reports and official documents.",
        },
      ],
      bg: "#80CE42",
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
      id="services">
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-6 relative">
        {ourServicesData?.map((el: OurServicesI) => {
          return <OurServicesCard key={el?.id} data={el} />;
        })}
        <div className="xl:w-[330px] xl:h-[330px] lg:w-[280px] lg:h-[280px] md:w-[160px] md:h-[160px] sm:w-[220px] sm:h-[220px] xs:w-[150px] xs:h-[150px] bg-[#F2FAEC] rounded-full p-[15px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <Image
            src="/logos/auditlogoblack.svg"
            alt="/logos/auditlogoblack.svg"
            width={100}
            height={100}
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex items-center justify-center xl:mt-[32px] lg:mt-[32px] md:mt-[25px] sm:mt-[20px] xs:mt-[20px]">
        <Button
          title={btnTitle("seemore")}
          isLink
          path="/services"
          className="btn_size"
          not_blank
        />
      </div>
    </CustomSection>
  );
};

export default OurServicesSection;
