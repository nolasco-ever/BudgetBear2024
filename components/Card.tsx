import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
}

export const Card = ({title, children}: CardProps) => {
  const {height: screenHeight} = Dimensions.get('screen');
  const cardHeight = screenHeight / 3.5;
  return (
    <View style={[styles.container, {height: cardHeight}]}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <View style={{flex: 1}}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 1, height: 1},
  },

  // text styles
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
