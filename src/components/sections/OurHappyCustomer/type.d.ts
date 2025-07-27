export type CategoryT = {
  id: number;
  name: string;
};
export interface OurHappyCustomersI {
  id: number;
  name: string;
  logo: string;
  category?: string;
  subCategory?: string;
  description: string;
  website_link?: string;
}
