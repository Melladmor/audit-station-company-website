import Image from "next/image";
import React from "react";
type Props = {
  url: string;
};

const ImageComp = ({ url }: Props) => {
  return (
    <div className="p-[24px] rounded-tl-[16px] bg-[#D8F0C4] xl:h-[400px] lg:h-[400px] md:h-[350px] sm:h-[300px] xs:h-[300px]">
      <Image
        src={url}
        alt={url}
        width={100}
        height={100}
        className="h-full w-full object-cover rounded-[16px]"
        loading="lazy"
      />
    </div>
  );
};

export default ImageComp;
