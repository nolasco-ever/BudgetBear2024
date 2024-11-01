import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {icons} from '../icons/iconLibrary';
import {Icon} from '../components/Icon';

interface LabelConfig {
  label: string;
  onPress?: () => void;
}

interface IconConfig {
  icon: keyof typeof icons;
  onPress?: () => void;
}

// Union type that allows only one of the two configurations
type Config = LabelConfig | IconConfig;

interface BuildHeaderOptions {
  leftConfig?: Config;
  centerConfig?: Config;
  rightConfig?: Config;
}

export const buildHeader = ({
  leftConfig,
  centerConfig,
  rightConfig,
}: BuildHeaderOptions) => {
  const renderItem = (config?: Config) => {
    if (!config) return null;

    // Destructure based on type
    if ('label' in config) {
      const {label, onPress} = config;
      return onPress ? (
        <TouchableOpacity onPress={onPress} style={{padding: 10}}>
          <Text>{label}</Text>
        </TouchableOpacity>
      ) : (
        <View style={{padding: 10}}>
          <Text>{label}</Text>
        </View>
      );
    } else if ('icon' in config) {
      const {icon, onPress} = config;
      return onPress ? (
        <TouchableOpacity onPress={onPress} style={{padding: 10}}>
          <Icon name={icon} />
        </TouchableOpacity>
      ) : (
        <View style={{padding: 10}}>
          <Icon name={icon} />
        </View>
      );
    }

    return null;
  };

  return {
    headerTitle: () => (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        {renderItem(centerConfig)}
      </View>
    ),
    headerLeft: () => renderItem(leftConfig),
    headerRight: () => renderItem(rightConfig),
  };
};
