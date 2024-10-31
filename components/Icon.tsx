// Icon.tsx
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {View, StyleSheet} from 'react-native';
import {icons} from '../icons/iconLibrary';

interface IconProps {
  name: keyof typeof icons; // Restrict name to keys of icons map
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = 'black',
}) => {
  const icon = icons[name];

  if (!icon) {
    console.warn(`Icon "${name}" does not exist in the icon map.`);
    return null; // Return null if the icon doesn't exist in the map
  }

  return (
    <View style={styles.iconContainer}>
      <FontAwesomeIcon icon={icon} size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
