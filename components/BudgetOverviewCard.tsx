import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card} from './Card';
import {Divider} from './Divider';
import {ProgressBar} from './ProgressBar';
import {Stat} from './Stat';

interface BudgetOverviewCardProps {
  totalIncome: number;
  totalSpent: number;
  remainingBudget: number;
}

export const BudgetOverviewCard = ({
  totalIncome,
  totalSpent,
  remainingBudget,
}: BudgetOverviewCardProps) => {
  const budgetUsedPercentage =
    (totalSpent / (totalIncome + remainingBudget)) * 100;

  return (
    <Card title="Overview">
      <View style={styles.summaryContainer}>
        <Stat amount={remainingBudget} title="Remaining" />
        <View style={styles.statGroupContainer}>
          <Stat amount={totalIncome} title="Money In" size="sm" color="green" />
          <Divider orientation="vertical" opacity={0.5} />
          <Stat amount={totalSpent} title="Spent" size="sm" color="red" />
        </View>
        <ProgressBar percent={budgetUsedPercentage} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  summaryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  progressBar: {
    height: '10%',
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginVertical: 10,
  },
  progress: {
    height: '100%',
    backgroundColor: '#76c7c0',
    borderRadius: 5,
  },
  statGroupContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
});
