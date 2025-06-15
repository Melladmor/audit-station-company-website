"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2">
      <label className="relative flex h-[22px] w-[50px] cursor-pointer">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          className="peer sr-only"
        />
        <div className="theme-switch absolute h-full w-full rounded-full transition-all peer-checked:bg-cover" />

        <div
          className={`absolute left-1 top-[9.5%] h-[18px] w-[18px] rounded-full bg-white dark:bg-secondary  shadow-md transition-all peer-checked:translate-x-[23px] ${
            locale === "ar" ? "peer-checked:-translate-x-[23px]" : ""
          }`}
        />
      </label>
    </div>
  );
}
