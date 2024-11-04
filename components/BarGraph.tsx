import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {BarChart} from 'react-native-gifted-charts';

interface BarGraphProps {
  data: {
    value: number;
    label: string;
  }[];
}

export const BarGraph = ({data}: BarGraphProps) => {
  const largestValue = Math.max(...data.map(item => item.value));
  const roundedUpValue = Math.ceil(largestValue / 100) * 100;

  const [barGraphHeight, setBarGraphHeight] = useState(0);

  return (
    <View style={styles.container}>
      <View
        style={styles.barChartContainer}
        onLayout={e => {
          const {height} = e.nativeEvent.layout;
          setBarGraphHeight(height);
        }}>
        <BarChart
          data={data}
          frontColor="#3498db"
          barWidth={12}
          spacing={12}
          initialSpacing={15}
          barBorderRadius={3}
          noOfSections={3}
          yAxisThickness={0}
          xAxisThickness={0}
          formatYLabel={yLabel => {
            return yLabel === '0'
              ? '0'
              : `${Math.round(Number(yLabel)).toFixed(0)}`;
          }}
          yAxisLabelPrefix="$"
          scrollToEnd
          maxValue={roundedUpValue}
          height={barGraphHeight * 0.75}
          disableScroll
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  barChartContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
