import { InspiredBy, PerfumeType, Size } from "../filter";

export interface IPageSetting {
  size: Size;
  inspiredBy: InspiredBy;
  perfumeType: PerfumeType;
}

const pages = ["all", "for-her", "for-him", "neutral"] as const;
export type TPageName = (typeof pages)[number];
