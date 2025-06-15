import { getTranslations } from "next-intl/server";
import React from "react";
import { LinksFooter, LinksFooterT } from "./Links";

const FooterLinks = async () => {
  const t = await getTranslations("navbarlinks");
  const title = await getTranslations();
  const footerLinks: LinksFooterT[] = [
    {
      id: 1,
      title: t("home"),
      path: "",
    },
    {
      id: 2,
      title: t("aboutus"),
      path: "aboutus",
    },
    {
      id: 3,
      title: t("services.packages"),
      path: "#packages",
    },
    {
      id: 4,
      title: t("services.services"),
      path: "services",
    },
    {
      id: 5,
      title: t("platform"),
      path: "our-platform",
    },
    {
      id: 6,
      title: t("training"),
      path: "our-training-programs",
    },
    {
      id: 7,
      title: t("news"),
      path: "news",
    },
    {
      id: 8,
      title: t("contactus"),
      path: "#contactus",
    },
    {
      id: 9,
      title: t("signup"),
      path: "signup",
    },
    {
      id: 10,
      title: t("signin"),
      path: "signin",
    },
    {
      id: 11,
      title: t("customers"),
      path: "our-happy-customers",
    },
    {
      id: 12,
      title: t("our_team"),
      path: "#ourteam",
    },
    {
      id: 13,
      title: t("join_rewards_program"),
      path: "sign-up",
    },
    {
      id: 14,
      title: t("add_review"),
      path: "https://search.google.com/local/writereview?placeid=ChIJS3B0ysFIDS4R7KlNK-uLZOU",
      blank: true,
    },
    {
      id: 15,
      title: t("career"),
      path: "career",
    },
    {
      id: 16,
      title: t("terms_conditions"),
      path: "terms-and-conditions",
    },
    {
      id: 17,
      title: t("privacy_policy"),
      path: "privacy-policy",
    },
  ];
  const firstPart = footerLinks.slice(0, 10);
  const secondPart = footerLinks.slice(10);
  return (
    <div className="flex flex-col gap-6 xl:w-[70%]  lg:w-[60%] md:w-full sm:w-full xs:w-full">
      <h5 className="xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[18px] border-b-[2px] w-fit border-secondary pb-2  xs:text-[18px] font-[700]  text-white">
        {title("quicklinks")}
      </h5>
      <div className="flex justify-between gap-3">
        <div className="flex flex-col  gap-6">
          {firstPart?.map((el: LinksFooterT) => {
            return <LinksFooter key={el?.id} {...el} />;
          })}
        </div>
        <div className="flex flex-col  gap-6">
          {secondPart?.map((el: LinksFooterT) => {
            return <LinksFooter key={el?.id} {...el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
