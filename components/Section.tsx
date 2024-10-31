import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';

interface SectionProps {
  title: string;
  titleAlign?: 'flex-start' | 'center' | 'flex-end';
  titleColor?: string;
  titleFontSize?: number;
  containerStyle?: ViewStyle;
  children: React.ReactNode;
}

export const Section = ({
  title,
  titleAlign = 'flex-start',
  titleColor = '#262626',
  titleFontSize = 20,
  containerStyle = {width: '100%', paddingLeft: 10, paddingRight: 10},
  children,
}: SectionProps) => {
  return (
    <View>
      <View style={[styles.titleContainer, {justifyContent: titleAlign}]}>
        <Text
          style={{
            color: titleColor,
            fontWeight: 'bold',
            fontSize: titleFontSize,
          }}>
          {title}
        </Text>
      </View>
      <View style={containerStyle}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingLeft: 15,
  },
});
