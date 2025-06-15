export interface ButtonI {
  title: string;
  icon?: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  isLink?: bollean;
  path?: string;
  onClick?: () => void;
  not_blank?: boolean;
}
