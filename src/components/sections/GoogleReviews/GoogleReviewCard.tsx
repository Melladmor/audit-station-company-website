import React from "react";
import { GoogleReviewI } from "./type";
import Image from "next/image";

type Props = GoogleReviewI;

const GoogleReviewCard = ({ image }: Props) => {
  return (
    <div className="xl:h-[370px] lg:h-[300px] md:h-[250px] sm:h-[200px] xs:h-[200px] xl:w-[700px] lg:w-[700px] md:w-full sm:w-full xs:w-full xl:shadow-light lg:shadow-light md:shadow-light sm:shadow-md xs:shadow-md rounded-[16px]">
      <Image
        src={image}
        alt={image}
        width={100}
        height={100}
        className="w-full h-full  rounded-[16px]"
      />
    </div>
  );
};

export default GoogleReviewCard;
