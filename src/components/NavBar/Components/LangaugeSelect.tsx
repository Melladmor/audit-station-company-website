"use client";

import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useState } from "react";

export default function LanguageSelect() {
  const langs = [
    { name: "EN", id: "en", avatar: "/images/flags/en.png" },
    { name: "AR", id: "ar", avatar: "/images/flags/ar.png" },
  ];
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [selectedLang, setSelectedLang] = useState(locale);

  function onSelectChange(nextLocale: string) {
    setSelectedLang(nextLocale);
    // @ts-expect-error -- TypeScript will validate that only known `params`
    router.replace({ pathname, params }, { locale: nextLocale as Locale });
  }

  return (
    <ul className="menu menu-horizontal">
      <li>
        <details className="text-white">
          <summary className="flex items-center [&::after]:hidden">
            <Image
              src={
                selectedLang === "en"
                  ? "/images/flags/en.png"
                  : "/images/flags/ar.png"
              }
              alt="Flag"
              width={16}
              height={16}
              className="size-7 rounded-full"
            />
          </summary>
          <ul className="text-black w-28">
            {langs.map((item) => (
              <li key={item.id} onClick={() => onSelectChange(item.id)}>
                <div className="flex items-center gap-2">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={16}
                    height={16}
                    className="size-4"
                  />
                  <span>{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </details>
      </li>
    </ul>
  );
}
