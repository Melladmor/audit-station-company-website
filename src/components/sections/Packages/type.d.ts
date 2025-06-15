export type FeatureT = {
  id: number;
  name: string;
  description: string;
};
export interface PackagesI {
  id: number;
  name: string;
  price: string;
  description: string;
  features: FeatureT[];
  color?: string;
}
