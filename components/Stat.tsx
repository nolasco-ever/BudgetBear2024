import {View, Text, StyleSheet} from 'react-native';

interface StatProps {
  amount: number;
  title: string;
  size?: 'lg' | 'md' | 'sm';
  justifyContent?: 'flex-start' | 'center' | 'flex-end';
}

export const Stat = ({
  amount,
  title,
  size = 'lg',
  justifyContent = 'center',
}: StatProps) => {
  const getNumberStyle = () => {
    if (size === 'lg') return styles.largeNumberText;
    else if (size === 'md') return styles.mediumNumberText;
    else return styles.smallNumberText;
  };

  const getTitleStyle = () => {
    if (size === 'lg') return styles.largeTitleText;
    else return styles.smallTitleText;
  };
  return (
    <View style={[styles.statContainer, {alignItems: justifyContent}]}>
      <Text style={getNumberStyle()}>{`$${amount.toFixed(2)}`}</Text>
      <Text style={getTitleStyle()}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statContainer: {
    justifyContent: 'center',
  },
  largeNumberText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  mediumNumberText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  smallNumberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  largeTitleText: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold',
  },
  smallTitleText: {
    fontSize: 14,
    color: 'grey',
    fontWeight: 'bold',
  },
});
