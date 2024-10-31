import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card} from './Card';
import {PieChart} from './PieChart';
import {Icon} from './Icon';

type PieData = {
  text: string;
  value: number;
  color: string;
};

interface LegendProps {
  data: PieData[];
}

export const Legend: React.FC<LegendProps> = ({data}) => {
  // Calculate the total sum of all values
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <View style={styles.legendContainer}>
      {data.map((item, index) => {
        // Calculate the percentage for each item
        const percentage = ((item.value / total) * 100).toFixed(0);

        return (
          <View key={index} style={styles.item}>
            <Icon name="circle" size={18} color={item.color} />
            <Text style={styles.text}>
              {item.text} - {percentage}%
            </Text>
          </View>
        );
      })}
    </View>
  );
};

interface PieChartCardProps {
  title: string;
  data: PieData[];
}

export const PieChartCard = ({title, data}: PieChartCardProps) => {
  return (
    <Card title={title}>
      <View style={styles.container}>
        <PieChart pieData={data} />
        <Legend data={data} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  legendContainer: {
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
