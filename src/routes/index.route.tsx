import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccordionsWithRef from "../modules/AccordionsWithRef";

const { Navigator, Screen } = createNativeStackNavigator();
const Routes = () => {
  return (
    <Navigator>
      <Screen
        name="AccordionsWithRef"
        options={{
          headerShown: false,
        }}
        component={AccordionsWithRef}
      />
    </Navigator>
  );
};

export default Routes;
