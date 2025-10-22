import { TExpoIcon } from "@/components/Icon";
import { ImageSourcePropType } from "react-native";
export type { TExpoIcon };
// Menu item type
export type TMenuItem = {
   page: string;
   title: string;
   icon: {
      name: TExpoIcon;
      background: string;
   };
};
// Messages type
export type TMessage = {
   id: number;
   title: string;
   description: string;
   image: ImageSourcePropType;
};
// Listings type
export type TListing = {
   id: number;
   title: string;
   price: number;
   image: ImageSourcePropType;
};
