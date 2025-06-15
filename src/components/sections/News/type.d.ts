export interface NewsI {
  id: number;
  image: string;
  title: string;
  category: string;
  subCategory: string;
  publishDate: string;
  title: string;
  description: string;
  readingTime: string;
  author: {
    name: string;
    image: string;
  };
}
export interface NewReturnI {
  id: number;
  title: string;
  description: string;
  main_category: string;
  subCategory: string;
  author_name: string;
  author_image: string;
  reading_time: string;
  date: string;
  image: string;
  created_at: string;
}
