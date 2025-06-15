import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};
const SkeletonCard = ({ className }: Props) => {
  return (
    <div
      className={twMerge(
        "border border-[#EEEEEE] p-2 rounded-md shadow-light w-full",
        className
      )}>
      <div className="flex xl:w-[290px] lg:w-[280px] md:w-[300px] sm:w-full xs:w-full flex-col gap-4">
        <div className="skeleton h-44 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
