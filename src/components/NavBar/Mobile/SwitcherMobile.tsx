"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

const SwitcherMobile = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div>
      <label className="swap swap-flip">
        {resolvedTheme !== "dark" ? (
          <Image
            src="/images/svg/sun.svg"
            alt="Flag"
            width={16}
            height={16}
            className="size-7 rounded-full"
            onClick={() => setTheme("dark")}
          />
        ) : (
          <Image
            src="/images/svg/moon.svg"
            alt="Flag"
            width={16}
            height={16}
            className="size-7 rounded-full"
            onClick={() => setTheme("light")}
          />
        )}
      </label>
    </div>
  );
};

export default SwitcherMobile;
