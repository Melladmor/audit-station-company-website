import Image from "next/image";
import React from "react";

type Props = {
  image: string;
};

const PageSliderCard = ({ image }: Props) => {
  return (
    <Image
      src={image}
      alt="Page Slider Image"
      width={100}
      height={100}
      className="size-[400px]  object-cover rounded-md"
    />
  );
};

export default PageSliderCard;
