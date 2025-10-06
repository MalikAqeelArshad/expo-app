import { View } from "react-native";

import COLORS from "@/utils/colors";

type ListItemSeparatorProps = {
   color?: keyof typeof COLORS | string;
   height?: number;
};

const ListItemSeparator = ({ color = "light", height = 1 }: ListItemSeparatorProps) => {
   return (
      <View
         style={[
            {
               width: "100%",
               height: height,
               backgroundColor: (COLORS as any)[color] || COLORS.light,
            },
         ]}
      />
   );
};

export default ListItemSeparator;
