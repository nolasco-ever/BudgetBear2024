import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

interface ButtonProps {
  label: string;
  labelColor?: string;
  color?: string;
  disabled?: boolean;
  disabledColor?: string;
  disabledLabelColor?: string;
  size?: 'sm' | 'lg';
  labelAlign?: 'flex-start' | 'center' | 'flex-end';
  onPress?: () => void;
}

export const Button = ({
  label,
  labelColor,
  color,
  disabled,
  disabledColor = '#DDDDDD',
  disabledLabelColor = '#a2a2a2',
  size = 'lg',
  labelAlign = 'center',
  onPress,
}: ButtonProps) => {
  const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        {
          backgroundColor: !disabled ? color : disabledColor,
          height: screenHeight / 15,
          width: size === 'lg' ? '100%' : screenWidth * 0.45,
          alignItems: labelAlign,
        },
      ]}>
      <Text
        style={{
          color: !disabled ? labelColor : disabledLabelColor,
          fontWeight: 'bold',
          fontSize: 16,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center',
  },
});
