import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
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

    if ('label' in config) {
      const {label, onPress} = config;
      return onPress ? (
        <TouchableOpacity
          onPress={onPress}
          style={styles.tappableTextContainer}>
          <Text style={styles.tappableText}>{label}</Text>
          <Icon name="chevronDown" size={14} color="#115293" />
        </TouchableOpacity>
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.staticText}>{label}</Text>
        </View>
      );
    } else if ('icon' in config) {
      const {icon, onPress} = config;
      return onPress ? (
        <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
          <Icon name={icon} />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconContainer}>
          <Icon name={icon} />
        </View>
      );
    }

    return null;
  };

  return {
    headerTitle: () => (
      <View style={styles.headerTitleContainer}>
        {renderItem(centerConfig)}
      </View>
    ),
    headerLeft: () => (
      <View style={{marginLeft: 10}}>{renderItem(leftConfig)}</View>
    ),
    headerRight: () => (
      <View style={{marginRight: 10}}>{renderItem(rightConfig)}</View>
    ),
  };
};

const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textContainer: {
    padding: 10,
  },
  staticText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tappableTextContainer: {
    flexDirection: 'row',
    padding: 5,
    borderColor: '#115293',
    borderWidth: 2,
    borderRadius: 5,
  },
  tappableText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
    color: '#115293',
  },
  iconContainer: {
    padding: 10,
  },
});
