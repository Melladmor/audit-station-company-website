"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const ToasterClient = dynamic(() => import("../ui/ToasterClient"), {
  ssr: false,
});

const ToasterWrapper = ({ locale }: { locale: string }) => {
  return (
    <Suspense fallback={null}>
      <ToasterClient locale={locale} />
    </Suspense>
  );
};

export default ToasterWrapper;
