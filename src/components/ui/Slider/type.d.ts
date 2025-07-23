export type SliderT<T> = {
  initialData: T[];
  fetchNextPage: (page: number) => Promise<T[]>;
  renderItem: (item: T) => React.ReactNode;
};

export type ImageSliderItemT = {
  id: number;
  photo_name: string;
  image_slider: string;
};
