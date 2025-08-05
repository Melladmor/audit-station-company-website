import Image from "next/image";
import React from "react";
type Props = {
  url: string;
};

const ImageComp = ({ url }: Props) => {
  return (
    <div className="p-[16px] rounded-[24px] bg-[#f6e2d0] xl:h-[400px] lg:h-[400px] md:h-[350px] sm:h-[300px] xs:h-[300px]">
      <Image
        src={url}
        alt={url}
        width={100}
        height={100}
        className="h-full w-full object-cover rounded-[8px]"
        loading="lazy"
      />
    </div>
  );
};

export default ImageComp;
