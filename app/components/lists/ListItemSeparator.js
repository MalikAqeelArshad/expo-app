import { View } from "react-native";

import COLORS from "../../config/colors";

function ListItemSeparator({ color = "light", height = 1 }) {
   return (
      <View
         style={[
            {
               width: "100%",
               height: height,
               backgroundColor: COLORS[color] || COLORS.light,
            },
         ]}
      />
   );
}

export default ListItemSeparator;
