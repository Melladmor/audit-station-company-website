import Image from "next/image";
import Link from "next/link";
import React from "react";

const Profile = () => {
  return (
    <div className="avatar rounded-full">
      <Link
        href="profile"
        className="xl:w-[35px] lg:w-[30px] md:w-[30px] sm:w-[30px] xs:w-[30px] rounded-full border-[#BDC9CD] border-[2px] p-[1px]">
        <Image
          width={100}
          height={100}
          alt="/images/user.png"
          src="/images/user.png"
        />
      </Link>
    </div>
  );
};

export default Profile;
