export type ParamsIdT<T extends string = "id"> = {
  params: Promise<Record<T, string>>;
};

export type PlatformT = {
  id: number;
  title: string;
  description: string;
  image: string;
  video: string;
};

export type OurTrainingProgramsT = {
  id: number;
  video: string;
  title_visit_audit_station: string;
  description_visit_audit_station: string;
  title_discover: string;
  description_discover: string;
  image: string;
}
