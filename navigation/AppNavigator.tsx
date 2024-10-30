import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStack} from './stacks/HomeStack';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="HomeTab">
        <Tab.Screen name="HomeTab" component={HomeStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
