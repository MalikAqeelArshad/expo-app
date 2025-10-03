import { ImageSourcePropType } from "react-native";

// Messages type
export type Message = {
   id: number;
   title: string;
   description: string;
   image: ImageSourcePropType;
};

// Listings type
export type Listing = {
   id: number;
   title: string;
   price: number;
   image: ImageSourcePropType;
};

// Sample messages
export const MESSAGES: Message[] = [
   {
      id: 1,
      title: "Title 1",
      description: "Description 1",
      image: require("../assets/mosh.jpg"),
   },
   {
      id: 2,
      title: "Title 2",
      description: "Description 2",
      image: require("../assets/jacket.jpg"),
   },
   {
      id: 3,
      title: "Title 3",
      description: "Description 3",
      image: require("../assets/mosh.jpg"),
   },
   {
      id: 4,
      title: "Title 4",
      description: "Description 4",
      image: require("../assets/jacket.jpg"),
   },
   {
      id: 5,
      title: "Title 5",
      description: "Description 5",
      image: require("../assets/mosh.jpg"),
   },
   {
      id: 6,
      title: "Title 6",
      description: "Description 6",
      image: require("../assets/jacket.jpg"),
   },
   {
      id: 7,
      title: "Title 7",
      description: "Description 7",
      image: require("../assets/jacket.jpg"),
   },
];

// Sample listings
export const LISTINGS: Listing[] = [
   {
      id: 1,
      title: "Red jacket for sale",
      price: 100,
      image: require("../assets/jacket.jpg"),
   },
   {
      id: 2,
      title: "Couch in great condition",
      price: 1000,
      image: require("../assets/couch.jpg"),
   },
   {
      id: 3,
      title: "Red jacket for sale",
      price: 100,
      image: require("../assets/jacket.jpg"),
   },
   {
      id: 4,
      title: "Couch in great condition",
      price: 1000,
      image: require("../assets/couch.jpg"),
   },
   {
      id: 5,
      title: "Red jacket for sale",
      price: 100,
      image: require("../assets/jacket.jpg"),
   },
   {
      id: 6,
      title: "Couch in great condition",
      price: 1000,
      image: require("../assets/couch.jpg"),
   },
   {
      id: 7,
      title: "Red jacket for sale",
      price: 100,
      image: require("../assets/jacket.jpg"),
   },
   {
      id: 8,
      title: "Couch in great condition",
      price: 1000,
      image: require("../assets/couch.jpg"),
   },
   {
      id: 9,
      title: "Red jacket for sale",
      price: 100,
      image: require("../assets/jacket.jpg"),
   },
   {
      id: 10,
      title: "Couch in great condition",
      price: 1000,
      image: require("../assets/couch.jpg"),
   },
];
