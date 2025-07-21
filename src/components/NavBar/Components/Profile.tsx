import Image from "next/image";
import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <Link href="profile" className="rounded-full size-7 border-[#BDC9CD]">
      <Image
        width={100}
        height={100}
        className="size-full"
        alt="/images/svg/user.svg"
        src="/images/svg/user.svg"
      />
    </Link>
  );
};

export default Profile;
