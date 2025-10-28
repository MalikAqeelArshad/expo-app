import { TListing, TMenuItem, TMessage, TOption } from "./types";

// Utility function to check if a number is even
const isEven = (num: number) => num % 2 === 0;

// Asset imports
const IMG = {
   mosh: require("@/assets/img/mosh.jpg"),
   jacket: require("@/assets/img/jacket.jpg"),
   couch: require("@/assets/img/couch.jpg"),
};

// Select Options
export const OPTIONS: TOption[] = Array.from({ length: 10 }, (_, i) => ({
   id: i + 1,
   label: `Option ${i + 1}`,
   value: `Value ${i + 1}`,
}));

// Menu items
export const MENU: TMenuItem[] = [
   {
      page: "/listings",
      title: "My Listings",
      icon: { name: "format-list-bulleted", background: "primary" },
   },
   {
      page: "/messages",
      title: "My Messages",
      icon: { name: "email", background: "secondary" },
   },
];

// Messages
export const MESSAGES: TMessage[] = Array.from({ length: 7 }, (_, i) => ({
   id: i + 1,
   title: `Title ${i + 1}`,
   description: `Description ${i + 1}`,
   image: isEven(i) ? IMG.mosh : IMG.jacket,
}));

// Listings
export const LISTINGS: TListing[] = Array.from({ length: 10 }, (_, i) => ({
   id: i + 1,
   title: isEven(i) ? "Red jacket for sale" : "Couch in great condition",
   price: isEven(i) ? 100 : 1000,
   image: isEven(i) ? IMG.jacket : IMG.couch,
}));
