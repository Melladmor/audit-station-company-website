import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import React from "react";

type Props = {
  videoLink: string;
};

const OurPlatformVideo = ({ videoLink }: Props) => {
  return (
    <div className="xl:h-[530px] lg:h-[530px md:h-[350px] sm:h-[300px] xs:h-[200px] w-full  relative">
      <div
        className="w-[90%] h-[90%] absolute top-0 lrt:left-0 rtl:right-0"
        style={{
          background: "linear-gradient(180deg, #825698 0%, #C94A8C 100%)",
        }}></div>

      <div className="absolute w-[95%] h-full ltr:right-0 rtl:left-0 bottom-[-10%] border-[4px] border-secondary">
        <VideoPlayer videoLink={videoLink} customClass="w-full h-[300px]" />
      </div>
    </div>
  );
};

export default OurPlatformVideo;
