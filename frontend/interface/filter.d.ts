import { EFilterListTitle } from "../constants/shoppingPage";

export type InspiredBy = string[];
export type PerfumeType = string[];
export type Size = string[];
export type SortPrice = string[];
export type TFilterLists = InspiredBy | PerfumeType | Size | SortPrice;

export interface IFilter {
  title: EFilterListTitle;
  filterLists: TFilterLists;
}
