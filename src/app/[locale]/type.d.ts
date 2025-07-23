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
