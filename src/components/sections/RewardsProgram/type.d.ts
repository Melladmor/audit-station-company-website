import { RewardCardsI } from "./RewardCards/type";
export type RewardTierT = {
  id: number;
  name: string;
  points_to_reach: number;
  "100_point_value": string;
  tax_consultations?: string;
  image?: string;
  subTitle?: string;
};

export interface RewardsProgramI {
  title: string;
  description: string;
  terms?: string;
  titlePoints?: string;
  subTitlePoints?: string;
  points: RewardTierT[];
  cards: RewardCardsI[];
}

export type Reward_DetailsT = Omit<RewardsProgramI, "ponits" | "cards">;
export type RewardCardsT = {
  id?: number;
  name: string;
  description: string;
  image: string;
};
