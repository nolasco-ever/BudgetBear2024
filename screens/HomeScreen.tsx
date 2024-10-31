import {useNavigation} from '@react-navigation/native';
import {useLayoutEffect} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {buildHeader} from '../helpers/buildHeader';
import {Carousel} from '../components/Carousel';
import {Card} from '../components/Card';
import {BudgetOverviewCard} from '../components/BudgetOverviewCard';
import {PieChartCard} from '../components/PieChartCard';
import {PieChart} from '../components/PieChart';
import {Section} from '../components/Section';
import {ListItem} from '../components/ListItem';
import {ListGroup} from '../components/ListGroup';

export const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions(
      buildHeader({
        leftConfig: {
          label: 'November',
          onPress: () => console.log('Title Pressed'),
        },
        centerConfig: {
          label: 'BudgetBear',
        },
        rightConfig: {
          icon: '+',
          onPress: () => console.log('Plus pressed'),
        },
      }),
    );
  }, [navigation]);

  const sampleData = [
    {
      value: 329.07,
      color: 'red',
      text: 'Food',
    },
    {
      value: 369.18,
      color: 'blue',
      text: 'Transportation',
    },
    {
      value: 219.55,
      color: 'purple',
      text: 'Utilities',
    },
    {
      value: 99.28,
      color: 'green',
      text: 'Recreational',
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView style={{height: '100%'}}>
        <Carousel>
          <BudgetOverviewCard
            totalIncome={6400}
            totalSpent={2300}
            remainingBudget={6400 - 2300}
          />
          <PieChartCard title="Breakdown" data={sampleData} />
        </Carousel>
        <Section title="Categories">
          <ListGroup>
            {sampleData.map((data, index) => (
              <ListItem
                key={index}
                leftLabel={data.text}
                description={`$${data.value}`}
                rightLabel=">"
                divider
              />
            ))}
          </ListGroup>
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};
