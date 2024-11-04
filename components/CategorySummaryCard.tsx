import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card} from './Card';
import {ProgressCircle} from './ProgressCircle';
import {Divider} from './Divider';
import {Stat} from './Stat';

export const CategorySummaryCard = () => {
  const totalAllocatd = 500;
  const totalSpent = 300;
  const remaining = totalAllocatd - totalSpent;

  return (
    <Card title="Summary">
      <View style={styles.summaryContianer}>
        <ProgressCircle percent={40} />
        <View style={styles.contentContainer}>
          <Stat amount={remaining} title="Remaining" />
          <Divider length={50} opacity={0.5} />
          <Stat amount={totalAllocatd} title="Allocated" size="sm" />
          <Divider length={25} opacity={0.5} />
          <Stat amount={totalSpent} title="Spent" size="sm" />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  summaryContianer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: '100%',
  },
});
