import Image from "next/image";
import Link from "next/link";

const LogoFooter = () => {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logos/auditlogo.svg"
        alt="Logo"
        width={100}
        height={100}
        className="xl:size-[73px] lg:size-[50px] md:size-[50px] sm:size-[45px] xs:size-[45px]"
      />

      <Image
        src="/logos/auditlogo2.svg"
        alt="Logo"
        width={100}
        height={100}
        className="xl:w-[100px] xl:h-[50px] lg:w-[80px] lg:h-[40px] md:w-[80px] md:h-[40px] sm:w-[80px] sm:h-[40px] xs:w-[75px] xs:h-[35px]"
      />
    </Link>
  );
};

export default LogoFooter;
