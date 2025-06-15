export type CategoryT = {
  id: number;
  name: string;
};
export interface OurHappyCustomersI {
  id: number;
  name: string;
  logo: string;
  category?: string;
  sub_category?: string;
  description: string;
}
