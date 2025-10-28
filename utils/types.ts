import { TExpoIcon } from "@/components/Icon";
import { ImageSourcePropType } from "react-native";
import { ColorKey } from "./colors";

export type { TExpoIcon };
export type TIcon = {
   name: TExpoIcon;
   size?: number;
   color?: ColorKey;
   background?: string;
};
// Options type
export type TOption = {
   label: string;
   value: string | number | boolean | null;
   [key: string]: any;
};
// Menu item type
export type TMenuItem = {
   icon: TIcon;
   page: string;
   title: string;
};
// Messages type
export type TMessage = {
   id: number;
   title: string;
   description: string;
   image: ImageSourcePropType;
   [key: string]: any;
};
// Listings type
export type TListing = {
   id: number;
   title: string;
   price: number;
   image: ImageSourcePropType;
   [key: string]: any;
};
