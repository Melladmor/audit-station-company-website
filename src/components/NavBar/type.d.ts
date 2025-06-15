export type DropDownLinkT = {
  id: number;
  title: string;
  isPage: boolean;
  url: string;
};
export interface NavLinkI {
  id: number;
  title: string;
  isPage: boolean;
  url: string;
  isDropDown?: DropDownLinkT[];
}
