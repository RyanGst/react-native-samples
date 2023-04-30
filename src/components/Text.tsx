import React from "react";
import {
  StyleProp,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from "react-native";
import { colors, typography } from "../theme";

type Sizes = keyof typeof $sizeStyles;
type Fonts = keyof typeof typography;
type Presets = keyof typeof $presets;

export interface TextProps extends RNTextProps {
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>;
  /**
   * One of the different types of text presets.
   */
  preset?: Presets;
  /**
   * Simple text color modifier.
   */
  color?: keyof typeof colors;
  /**
   * Text weight modifier.
   */
  font?: Fonts;
  /**
   * Text size modifier.
   */
  size?: Sizes;
  /**
   * Children components.
   */
  children?: React.ReactNode;
}

/**
 * For your text displaying needs.
 * This component is a HOC over the built-in React Native one.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Text.md)
 */
export function Text(props: TextProps) {
  const { font, size, text, color, children, style: $styleOverride, ...rest } = props;

  const content = text || children;

  const preset: Presets = $presets[props.preset] ? props.preset : "default";

  const $styles = [
    $presets[preset],
    $sizeStyles[size],
    {
      fontFamily: typography[font || "body"],
    } as TextStyle,
    color && { color: colors[color] },
    $styleOverride,

  ];

  return (
    <RNText {...rest} style={$styles}>
      {content}
    </RNText>
  );
}

const $sizeStyles = {
  xxl: { fontSize: 36, lineHeight: 44 } as TextStyle,
  xl: { fontSize: 24, lineHeight: 34 } as TextStyle,
  lg: { fontSize: 20, lineHeight: 32 } as TextStyle,
  md: { fontSize: 18, lineHeight: 26 } as TextStyle,
  sm: { fontSize: 16, lineHeight: 24 } as TextStyle,
  xs: { fontSize: 14, lineHeight: 21 } as TextStyle,
  xxs: { fontSize: 12, lineHeight: 18 } as TextStyle,
};

const $baseStyle: StyleProp<TextStyle> = [
  $sizeStyles.sm,
  { color: colors.black },
];

const $presets = {
  default: $baseStyle,
};
