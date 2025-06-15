"use client";
import React, { useState } from "react";
import { AboutUsPlayButton } from "./AboutUsPlayButton";
import VideoModal from "@/components/VideoPlayer/modal/VideoModal";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";

type Props = {
  url: string;
  image: string;
};

const AboutUsSectionVideo = ({ url, image }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="xl:w-[526px] xl:h-[492px] lg:w-[500px] lg:h-[450px] md:w-[300px] md:h-[250px] sm:w-full sm:h-[260px] xs:w-full xs:h-[260px] xl:p-[24px] lg:p-[20px] md:p-[18px] sm:p-[14px] xs:p-[14px]  relative">
      <div className="absolute top-0 right-0 w-[142px] h-[192px] border-t-8 border-r-8 border-secondary"></div>
      <div className="absolute bottom-0 left-0 w-[192px] h-[142px] border-b-8 border-l-8 border-secondary"></div>
      <div
        className="xl:w-[478px] xl:h-[437px] lg:w-[430px] lg:h-[410px] md:w-[260px] md:h-[215px] sm:w-full sm:h-[230px] xs:w-full xs:h-[230px] bg-white  inset-0 bg-contain bg-center"
        style={{ backgroundImage: `url(${image})` }}>
        <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
          <div onClick={() => setShow(!show)}>
            <AboutUsPlayButton />
          </div>
        </div>
      </div>
      <VideoModal
        modal_setting={{
          show: show,
          handleShowModal: () => setShow(!show),
        }}>
        <VideoPlayer
          customClass="border-gray_1 border-[2px] rounded-md shadow-lg shadow-gray_2 !h-[60vh]"
          videoLink={url}
        />
      </VideoModal>
    </div>
  );
};

export default AboutUsSectionVideo;
