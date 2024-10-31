import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStack} from './stacks/HomeStack';
import {Icon} from '../components/Icon';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName: string;

            // Determine the icon name based on the route name
            if (route.name === 'HomeTab') {
              iconName = 'houseChimney';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            } else {
              iconName = 'circle'; // Default icon if not specified
            }

            // Return the custom Icon component
            return <Icon name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}>
        <Tab.Screen name="HomeTab" component={HomeStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
