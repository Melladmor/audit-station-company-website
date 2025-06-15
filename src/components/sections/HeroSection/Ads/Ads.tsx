import React from "react";
import AdsSlider from "./AdsSlider";
import { SlideI } from "./type";
import fetchPublicData from "@/lib/api/fetchPublicData";

const Ads = async () => {
  const adsData: SlideI[] = await fetchPublicData({ url: "add-ons" });

  return <AdsSlider data={adsData} />;
};

export default Ads;
