export type SubServicesT = {
  id: number;
  name: string;
  // description?: string;
  // cta?: string;
};

export interface OurServicesI {
  id: number;
  title: string;
  bg: string;
  subServices: SubServicesT[];
  className?: string;
}

export interface MainServicesI {
  id: number;
  name: string;
  our_services: subServicesI[];
}

export interface subServicesI extends MainServicesI {}

export type ModalServiceDataT = {
  id: number | string;
  name: string;
  description: string;
};
