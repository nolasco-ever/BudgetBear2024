import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../screens/HomeScreen';
import {CategoryScreen} from '../../screens/CategoryScreen';

export type HomeStackParams = {
  HomeScreen: undefined;
  CategoryScreen: {
    categoryName: string;
  };
};

const Stack = createStackNavigator<HomeStackParams>();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
    </Stack.Navigator>
  );
};
