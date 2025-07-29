export type TagT = {
  id: number | string;
  name: string;
};

export type DetailsT = {
  title: string;
  image: string;
  mainCategory?: string;
  subCategory?: string;
  newsSubDetailes?: {
    reading_time: string;
    author_name: string;
    created_at: string;
  };
  description: string;
  tags?: TagT[];
};
