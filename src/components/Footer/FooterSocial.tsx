import { getTranslations } from "next-intl/server";
import Link from "next/link";
import React from "react";
import { SocialLinksT } from "../sections/RewardsProgram/RewardCards/type";
import Image from "next/image";

const FooterSocial = async () => {
  const title = await getTranslations();
  const validIconNames = [
    "facebook",
    "x",
    "instagram",
    "linkedin",
    "telegram",
    "whatsapp",
    "youtube",
    "snapchat",
    "tiktok",
  ];
  const socialLinks: SocialLinksT[] = [
    { id: 1, name: "facebook", url: "https://facebook.com/yourPage" },
    { id: 2, name: "x", url: "https://x.com/yourHandle" },
    { id: 3, name: "instagram", url: "https://instagram.com/yourProfile" },
    { id: 4, name: "linkedin", url: "https://linkedin.com/in/yourProfile" },
    { id: 5, name: "whatsapp", url: "https://wa.me/1234567890" },
    {
      id: 6,
      name: "snapchat",
      url: "https://snapchat.com/add/yourUsername",
    },
    { id: 7, name: "tiktok", url: "https://tiktok.com/@yourUsername" },
  ];

  return (
    <div className=" xl:w-[50%] lg:w-[60%] md:w-full sm:w-full xs:w-full flex flex-col items-start justify-start gap-6">
      <h5 className="xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[18px] xs:text-[18px] font-[700]  text-white">
        {title("followusonsocial")}
      </h5>
      {socialLinks && socialLinks.length > 0 && (
        <div className="flex items-center gap-3 ">
          {socialLinks
            .filter((link: SocialLinksT) => validIconNames.includes(link.name))
            .map((link: SocialLinksT) => (
              <Link key={link.id} href={link.url} target="_blank">
                <Image
                  src={`/icons/social/${link.name}.svg`}
                  alt={link.name}
                  width={100}
                  height={100}
                  className="xl:size-[32px] lg:size-[28px] md:size-[28px] sm:size-[24px] xs:size-[24px]"
                  loading="lazy"
                />
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default FooterSocial;
