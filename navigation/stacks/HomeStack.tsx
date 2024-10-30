import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../screens/HomeScreen';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeStack">
      <Stack.Screen name="HomeStack" component={HomeScreen} />
    </Stack.Navigator>
  );
};
