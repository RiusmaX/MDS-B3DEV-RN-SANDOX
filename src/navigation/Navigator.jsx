import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ProductsScreen from '../screens/ProductsScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CustomTabBar from './NavBar'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
  )
}

const BottomTab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
    >
      <BottomTab.Screen
        name='HomeStack'
        component={StackNavigator}
        options={{
          headerShown: false,
          title: 'Home'
        }}
      />
      <BottomTab.Screen name='Products' component={ProductsScreen} />
    </BottomTab.Navigator>
  )
}

export default TabNavigator
