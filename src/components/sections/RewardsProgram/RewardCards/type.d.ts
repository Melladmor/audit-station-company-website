export interface SocialLinksT {
  id: number;
  name:
    | "facebook"
    | "x"
    | "instagram"
    | "linkedin"
    | "telegram"
    | "whatsapp"
    | "youtube"
    | "snapchat"
    | "tiktok";
  url: string;
}

export interface RewardCardsI {
  id: number;
  image: string;
  title: string;
  subTitle: string;
  description?: string;
  className?: string;
  subClassName?: string;
  imageClassName?: string;
  links?: SocialLinksT[];
}

export type OurTeamReturnedData = {
  id: number;
  name: string;
  description: string;
  facebook: string;
  instagram: string;
  tiktok: string;
  youtube: string;
  twitter: string;
  linkedin: string;
  whatsapp: string;
  snapchat: string;
  telegram: string;
  image: string;
  position: string;
};
