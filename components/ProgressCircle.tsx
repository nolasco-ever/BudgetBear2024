import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

interface ProgressCircleProps {
  percent: number;
}

export const ProgressCircle = ({percent}: ProgressCircleProps) => {
  if (percent > 100 || percent < 0) {
    throw new Error(`Percent out of range: ${percent}`);
  }

  const screenWidth = Dimensions.get('screen').width;
  const size = screenWidth * 0.4; // Diameter of the circle
  const strokeWidth = 15; // Thickness of the progress stroke
  const radius = (size - strokeWidth) / 2; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const strokeDashoffset = circumference - (circumference * percent) / 100; // Stroke offset based on percentage

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e0e0e0"
          strokeWidth={strokeWidth}
        />
        {/* Progress Circle */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#3498db"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          originX={size / 2}
          originY={size / 2}
          fill="#fff"
        />
      </Svg>
      {/* Centered Text */}
      <Text style={styles.text}>{`${percent}%`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    position: 'absolute',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
