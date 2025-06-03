import { useState } from "react";
import CommonScreen from "./app/screens/CommonScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AccountScreen from "./app/screens/AccountScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
   const [page, setPage] = useState(5);
   const update = (number: number) => setPage(number);

   return page === 1 ? (
      <AccountScreen onPress={(p = 2) => update(p)} />
   ) : page === 2 ? (
      <MessagesScreen onPress={(p = 3) => update(p)} />
   ) : page === 3 ? (
      <ListingsScreen onPress={(p = 4) => update(p)} />
   ) : page === 4 ? (
      <ListingDetailsScreen
         onPress={() => update(0)}
         title={undefined}
         subTitle={undefined}
         image={undefined}
      />
   ) : page === 5 ? (
      <CommonScreen onPress={(p = 0) => update(p)} />
   ) : (
      <WelcomeScreen onPress={(p = 1) => update(p)} />
   );
}
