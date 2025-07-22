"use client";

import { Toaster } from "react-hot-toast";

const ToasterClient = ({ locale }: { locale: string }) => {
  return <Toaster position={locale === "ar" ? "top-left" : "top-right"} />;
};

export default ToasterClient;
