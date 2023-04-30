import { Text } from "../../components/Text";
import { forwardRef } from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import { IWallet } from "./constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../theme";
import Animated, {
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

interface WalletProps extends IWallet {
  onPress?: () => void;
}

export interface WalletRef {
  toggle: () => void;
}

const Wallet = forwardRef<WalletRef, WalletProps>((props, ref) => {
  const aref = useAnimatedRef<View>();
  const open = useSharedValue(false);

  const progress = useDerivedValue(() =>
    open.value ? withSpring(1) : withTiming(0)
  );

  const height = useSharedValue(0);

  const style = useAnimatedStyle(() => ({
    height: height.value * progress.value + 1,
    opacity: progress.value === 0 ? 0 : withTiming(1_000),
  }));

  let $headerContainer: ViewStyle = {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#231F33",
    shadowColor: colors.purple,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    borderRadius: 8,
  };
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        style={$headerContainer}
        onPress={() => {
          if (height.value === 0) {
            runOnUI(() => {
              "worklet";
              height.value = measure(aref).height;
            })();
          }
          open.value = !open.value;
        }}
      >
        <Text color={"white"} font={"heading"}>
          {props.title}
        </Text>
        <MaterialCommunityIcons
          name="chevron-down"
          size={24}
          color={colors.white}
        />
      </TouchableOpacity>

      <Animated.View
        style={[
          {
            overflow: "hidden",
          },

          style,
        ]}
      >
        <View
          ref={aref}
          onLayout={({
            nativeEvent: {
              layout: { height: h },
            },
          }) => console.log({ h })}
        >
          {props.assets.map((asset, index) => (
            <Asset
              key={index}
              {...asset}
              isLast={index === props.assets.length - 1}
            />
          ))}
        </View>
      </Animated.View>
    </>
  );
});

type AssetProps = IWallet["assets"][0] & {
  isLast: boolean;
};

function Asset({ name, amount, value, isLast }: AssetProps) {
  return (
    <View
      style={{
        height: 68,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
        backgroundColor: "#3b3558",
        padding: 16,
        borderBottomLeftRadius: isLast ? 8 : 0,
        borderBottomRightRadius: isLast ? 8 : 0,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text color={"white"} font={"heading"}>
          {name}
        </Text>
        <Text color={"white"}>USD {value.toFixed(2)}</Text>
      </View>
      <MaterialCommunityIcons
        name="elevation-rise"
        size={24}
        color={colors.white}
      />
    </View>
  );
}

export { Wallet };
