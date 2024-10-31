import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from './Card';
import {Divider} from './Divider';
import {ProgressBar} from './ProgressBar';

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
          <Stat
            amount={totalIncome}
            title="Money In"
            type="secondary"
            color="green"
          />
          <Divider orientation="vertical" opacity={0.5} />
          <Stat
            amount={totalSpent}
            title="Spent"
            type="secondary"
            color="red"
          />
        </View>
        <ProgressBar percent={budgetUsedPercentage} />
      </View>
    </Card>
  );
};

interface StatProps {
  amount: number;
  title: string;
  type?: 'primary' | 'secondary';
  color?: string;
}

const Stat = ({amount, title, type = 'primary', color = '#000'}: StatProps) => {
  return (
    <View style={styles.statContainer}>
      <Text
        style={[
          type === 'primary' ? styles.headerText : styles.subheaderText,
          {color: color},
        ]}>{`$${amount.toFixed(2)}`}</Text>
      <Text
        style={
          type === 'primary'
            ? styles.captionLargeBoldText
            : styles.captionBoldText
        }>
        {title}
      </Text>
    </View>
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
  statContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  statGroupContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subheaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  captionBoldText: {
    fontSize: 14,
    color: 'grey',
    fontWeight: 'bold',
  },
  captionLargeBoldText: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold',
  },
});
