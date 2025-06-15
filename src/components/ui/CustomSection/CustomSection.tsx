import { twMerge } from "tailwind-merge";
import { CustomSectionI } from "./type";
import Title from "../Title/Title";
type Props = CustomSectionI;

export default function CustomSection({
  id,
  title,
  className,
  children,
  contentClassName,
}: Props) {
  return (
    <div
      id={id}
      className={twMerge(
        "px_padding flex flex-col gap-[32px] bg-light-bodyBg dark:bg-dark-bodyBg",
        className
      )}>
      {title?.first || title?.second || title?.subTitle ? (
        <Title
          first={title.first}
          second={title.second}
          subTitle={title.subTitle}
        />
      ) : null}
      <div className={contentClassName}>{children}</div>
    </div>
  );
}
