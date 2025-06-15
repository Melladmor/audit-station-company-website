import { TitleI } from "../Title/type";

export interface CustomSectionI {
  id?: string;
  title?: TitleI;
  className?: string;
  children: React.ReactNode;
  contentClassName?: string;
}
