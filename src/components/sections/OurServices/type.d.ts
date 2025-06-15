export type SubServicesT = {
  id: number;
  title: string;
  description?: string;
  cta?: string;
};

export interface OurServicesI {
  id: number;
  title: string;
  bg: string;
  subServices: SubServicesT[];
  className?: string;
}
