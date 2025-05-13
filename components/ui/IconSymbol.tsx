// Path: components\ui\IconSymbol.tsx
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolViewProps, SymbolWeight } from 'expo-symbols';
import { ComponentProps } from 'react';
import { type StyleProp, type TextStyle } from 'react-native';

type IconMapping = Record<SymbolViewProps['name'], ComponentProps<typeof MaterialIcons>['name']>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'stocks-dark': 'trending-down', // Replace with appropriate Material Icon
  'stocks-light': 'trending-up', // Replace with appropriate Material Icon
  'fando-dark': 'show-chart', // Replace with appropriate Material Icon
  'fando-light': 'bar-chart', // Replace with appropriate Material Icon
  'mutualfunds-dark': 'account-balance', // Replace with appropriate Material Icon
  'mutualfunds-light': 'savings', // Replace with appropriate Material Icon
  'upi-dark': 'payments', // Replace with appropriate Material Icon
  'upi-light': 'credit-card', // Replace with appropriate Material Icon
} as unknown as IconMapping;

type IconSymbolProps = {
  name: IconSymbolName; // Use the extended type
  size?: number;
  color: string;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
};

export const IconSymbol: React.FC<IconSymbolProps> = ({ name, size, color, style, weight }) => {
  return (
    <MaterialIcons
      color={color}
      size={size}
      name={MAPPING[name]} // Map the name to the Material Icon
      style={style}
    />
  );
};