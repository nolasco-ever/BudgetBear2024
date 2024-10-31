import React from 'react';
import {View, ViewStyle} from 'react-native';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  /**
   * Opacity of the divider, must be a value between 0 and 1.0.
   */
  opacity?: number;
  /**
   * Percent length of the divider, must be a value of 0 - 100
   */
  length?: number;
}

export const Divider = ({
  orientation = 'horizontal',
  opacity = 0.05,
  length = 100,
}: DividerProps) => {
  if (opacity < 0 || opacity > 1) {
    throw new Error('Opacity cannot be less than 0 or greater than 1.');
  }

  if (length < 0 || length > 100) {
    throw new Error('Length cannot be less than 0 or greater than 100.');
  }

  const dividerStyle: ViewStyle = {
    backgroundColor: `rgba(0,0,0,${opacity})`,
    ...(orientation === 'horizontal'
      ? {height: 1, width: `${length}%`}
      : {width: 1, height: `${length}%`}),
  };

  return <View style={dividerStyle} />;
};
