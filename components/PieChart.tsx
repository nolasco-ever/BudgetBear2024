import {StyleSheet, View} from 'react-native';
import {PieChart as RNPieChart} from 'react-native-gifted-charts';

type PieData = {
  text: string;
  value: number;
  color: string;
};

interface PieChartProps {
  pieData: PieData[];
}
export const PieChart = ({pieData}: PieChartProps) => {
  return (
    <View style={styles.container}>
      <RNPieChart
        data={pieData}
        strokeColor="#fff"
        strokeWidth={2}
        radius={80}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});
