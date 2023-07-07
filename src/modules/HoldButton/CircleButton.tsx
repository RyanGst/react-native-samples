import React, { FC, useCallback } from "react";
import { TouchableWithoutFeedback } from "react-native";
import Svg, { Circle } from "react-native-svg";
import Animated, {
  cancelAnimation,
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming
} from "react-native-reanimated";

interface CircularProgressProps {
  strokeWidth: number;
  radius: number;
  backgroundColor: string;
  percentageComplete: number;
  strokeColor: string;
}
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const TIME_TO_COMPLETE = 1500;
export const CircleButton: FC<CircularProgressProps> = ({
  radius,
  strokeWidth,
  backgroundColor,
  percentageComplete,
  strokeColor,
}) => {
  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;
  const invertedCompletion = (100 - percentageComplete) / 100;

  const theta = useSharedValue(2 * Math.PI);
  const animateTo = useDerivedValue(() => 2 * Math.PI * invertedCompletion);

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: withTiming(theta.value * innerRadius, {
        duration: 1500,
      }),
    };
  });

  let timer: NodeJS.Timeout;

  const startTimer = useCallback(() => {
    cancelAnimation(theta);
    const start = Date.now();
    const duration = 1500;
    const interval = 1000 / 60;

    ("worklet");
    timer = setInterval(() => {
      const now = Date.now();
      const percentage = Math.min((now - start) / duration, 1);

      const value = 2 * Math.PI * percentage;

      if (percentage >= .9) {
        clearInterval(timer);
        theta.value = animateTo.value;
      } else if (theta.value > value) {
        theta.value -= value;
      }
    }, interval);
  }, []);

  const stopTimer = useCallback(() => {
    clearInterval(timer);

    if (theta.value === 0) return;
    theta.value = 2 * Math.PI;
  }, []);
  return (
    <TouchableWithoutFeedback
      onPressIn={() => {
        startTimer();
      }}
      onPressOut={() => {
        stopTimer();
      }}
    >
      <Animated.View>
        <Animated.View
          style={{
            backgroundColor: "red",
          }}
        />
        <Svg width={radius * 2} height={radius * 2}>
          <AnimatedCircle
            animatedProps={animatedProps}
            cx={radius}
            cy={radius}
            r={innerRadius}
            fill={backgroundColor}
            stroke={strokeColor}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeWidth={strokeWidth}
            strokeDashoffset={2 * Math.PI * (innerRadius * 0.5)}
            strokeLinecap="round"
          />
        </Svg>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
