// ProgressBar.tsx
import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

interface ProgressBarProps {
  percent: number; // Value between 0 and 100 representing the percentage
  barColor?: string;
}

export const ProgressBar = ({
  percent,
  barColor = '#3a86ff',
}: ProgressBarProps) => {
  // Use Dimensions to calculate the height based on screen width
  const {width: screenWidth} = Dimensions.get('window');
  const calculatedHeight = screenWidth * 0.05; // e.g., 1.5% of screen width
  return (
    <View style={[styles.container, {height: calculatedHeight}]}>
      <View
        style={[
          styles.percent,
          {width: `${percent}%`, backgroundColor: barColor},
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
  },
  percent: {
    height: '100%',
    borderRadius: 5,
  },
});
