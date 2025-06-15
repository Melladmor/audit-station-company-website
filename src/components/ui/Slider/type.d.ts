export type SliderT<T> = {
  initialData: T[];
  fetchNextPage: (page: number) => Promise<T[]>;
  renderItem: (item: T) => React.ReactNode;
};
