import React, { useRef } from "react";
import { ScrollView, View, ViewStyle } from "react-native";
import { colors } from "../../theme";
import { Wallet, WalletRef } from "./Wallet";
import data from "./constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "../../components/Text";

const AccordionsWithRef = () => {
  const refs = useRef<WalletRef[]>([]);

  const open = (index: number) => {
    refs.current[index]?.toggle();
  };

  return (
    <SafeAreaView style={$screenContainer}>
      <ScrollView contentContainerStyle={contentContainerStyle}>
      <Text color={'white'} size={'xl'} font={'subheading'}>Your Wallets:</Text>
        {data.map((item, index) => (
          <Wallet
            ref={(el) => (refs.current[index] = el)}
            {...item}
            key={index}
            onPress={() => open(index)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const $screenContainer: ViewStyle = {
  flex: 1,
  backgroundColor: colors.darkPurple,
};

const contentContainerStyle = {
  padding: 16,
  gap: 8,
};

export default AccordionsWithRef;
