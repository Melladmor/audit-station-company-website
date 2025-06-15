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
    <ul className="menu menu-horizontal px-1 lg:mx-2">
      <li>
        <details className="text-white">
          <summary className="flex items-center">
            <Image
              src={
                selectedLang === "en"
                  ? "/images/flags/en.png"
                  : "/images/flags/ar.png"
              }
              alt="Flag"
              width={16}
              height={16}
              className="w-4 h-4 rounded-sm"
            />
            <span className="ml-2">{selectedLang.toUpperCase()}</span>
          </summary>
          <ul className="p-2 text-black">
            {langs.map((item) => (
              <li key={item.id} onClick={() => onSelectChange(item.id)}>
                <div className="flex items-center">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={16}
                    height={16}
                    className="w-4 h-4 rounded-sm"
                  />
                  <span className="ml-2">{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </details>
      </li>
    </ul>
  );
}
