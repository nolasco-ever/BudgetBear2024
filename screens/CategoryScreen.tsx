import {RouteProp, useNavigation} from '@react-navigation/native';
import {useLayoutEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {buildHeader} from '../helpers/buildHeader';
import {HomeStackParams} from '../navigation/stacks/HomeStack';
import {CategorySummaryCard} from '../components/CategorySummaryCard';
import {CategorySpendingGraphCard} from '../components/CategorySpendingGraphCard';
import {Section} from '../components/Section';
import {ListItem} from '../components/ListItem';
import {ListGroup} from '../components/ListGroup';

type CategoryScreenRouteProps = RouteProp<HomeStackParams, 'CategoryScreen'>;

interface CategoryScreenProps {
  route: CategoryScreenRouteProps;
}

export const CategoryScreen = ({route}: CategoryScreenProps) => {
  const {categoryName} = route.params;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions(
      buildHeader({
        leftConfig: {
          icon: 'chevronLeft',
          onPress: () => navigation.goBack(),
        },
        centerConfig: {
          label: categoryName,
        },
        rightConfig: {
          icon: 'plus',
          onPress: () => console.log('Add transaction pressed'),
        },
      }),
    );
  }, [navigation]);

  const sampleData: {name: string; date: string; amount: number}[] = [
    {
      name: 'Rutherford Pancake House',
      date: 'Oct 6',
      amount: 51.22,
    },
    {
      name: 'Stop & Shop',
      date: 'Oct 3',
      amount: 20.61,
    },
    {
      name: 'Sarku Japan',
      date: 'Oct 13',
      amount: 16.72,
    },
    {
      name: 'Muscle Maker',
      date: 'Oct 11',
      amount: 54.05,
    },
    {
      name: 'Juicy Platters',
      date: 'Oct 15',
      amount: 13.51,
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView style={{height: '100%'}}>
        <CategorySummaryCard />
        <CategorySpendingGraphCard />
        <Section title="Transactions">
          <ListGroup>
            {sampleData.map((data, index) => (
              <ListItem
                key={index}
                leftLabel={data.name}
                description={data.date}
                rightLabel={`$${data.amount}`}
                rightIcon="chevronRight"
                divider
                onPress={() => console.log(`${data.name} pressed!`)}
              />
            ))}
          </ListGroup>
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};
