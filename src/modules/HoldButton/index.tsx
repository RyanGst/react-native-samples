import { View, ViewStyle } from "react-native";
import { Text } from "../../components/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import { CircleButton } from "./CircleButton";
import { colors } from "../../theme";

function HoldButton() {
  return (
    <SafeAreaView style={$screenContainer}>
      <CircleButton
        backgroundColor={colors.red}
        strokeWidth={5}
        strokeColor={colors.green}
        percentageComplete={100}
        radius={100}
      />
    </SafeAreaView>
  );
}

const $screenContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
};

export default HoldButton;
