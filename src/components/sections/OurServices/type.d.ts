export type SubServicesT = {
  id: number;
  name: string;
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
  our_services: { id: number; name: string }[];
}

export type ModalServiceDataT = {
  id: number | string;
  name: string;
  description: string;
};

export type ServiceItemT = {
  id: number;
  name: string;
  parent_service_name: string;
  parent_service_id: number;
  sub_service_name: string;
  sub_service_id: number;
  image: string;
  description: string;
  details_description?: string;
  video?: video;
};
