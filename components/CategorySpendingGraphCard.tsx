import {View} from 'react-native';
import {BarGraph} from './BarGraph';
import {Card} from './Card';
import {Divider} from './Divider';
import {Stat} from './Stat';

export const CategorySpendingGraphCard = () => {
  const barData = [
    {value: 845.05, label: 'J'},
    {value: 423.86, label: 'F'},
    {value: 636.64, label: 'M'},
    {value: 548.79, label: 'A'},
    {value: 678.55, label: 'M'},
    {value: 543.33, label: 'J'},
    {value: 510.14, label: 'J'},
    {value: 431.36, label: 'A'},
    {value: 549.52, label: 'S'},
    {value: 478.4, label: 'O'},
    {value: 0, label: 'N'},
    {value: 0, label: 'D'},
  ];
  const totalSpentYtd = barData.reduce((acc, month) => acc + month.value, 0);
  const numOfNonZeroValues = barData.filter(month => month.value !== 0).length;
  const avgMonthlySpending = totalSpentYtd / numOfNonZeroValues;
  return (
    <Card>
      <View style={{flexDirection: 'row'}}>
        <Stat
          amount={totalSpentYtd}
          title="Total Spent"
          size="md"
          justifyContent="flex-start"
        />
        <Divider orientation="vertical" opacity={0.5} padding={10} />
        <Stat
          amount={avgMonthlySpending}
          title="Monthly Avg."
          size="md"
          justifyContent="flex-start"
        />
      </View>
      <BarGraph data={barData} />
    </Card>
  );
};
