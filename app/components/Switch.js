import React, { useState } from "react";
import { View, Switch, Text } from "react-native";

const AppSwitch = ({ ...otherProps }) => {
   const [isEnabled, setIsEnabled] = useState(false);
   const toggleSwitch = () => setIsEnabled(!isEnabled);

   return (
      <View style={{ gap: 5, flexDirection: "row", alignItems: "center" }}>
         <Switch
            {...otherProps}
            trackColor={{ false: "#777", true: "#29dd50" }}
            thumbColor={isEnabled ? "#00865a" : "#f4f3f4"}
            ios_backgroundColor="#777"
            onValueChange={toggleSwitch}
            value={isEnabled}
         />
         <Text>{isEnabled ? "true" : "false"}</Text>
      </View>
   );
};

export default AppSwitch;
