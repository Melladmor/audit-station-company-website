export type AboutUsDataT = {
  id: number;
  title_about: string;
  description_about: string;
  title_mission: string;
  description_mission: string;
  title_vision: string;
  description_vision: string;
  image: string;
  youtube_link: string;
};

export type AboutUsSectionT = Omit<
  AboutUsDataT,
  | "id"
  | "title_about"
  | "title_mission"
  | "description_mission"
  | "title_vision"
  | "description_vision"
>;
