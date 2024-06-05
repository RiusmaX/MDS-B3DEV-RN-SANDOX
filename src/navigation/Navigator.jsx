import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ProductsScreen from '../screens/ProductsScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CustomTabBar from './NavBar'
import PictureScreen from '../screens/PictureScreen'
import ResultScreen from '../screens/ResultScreen'

const Stack = createStackNavigator()

const CameraStack = createStackNavigator()

const CameraNavigator = () => {
  return (
    <CameraStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='Camera'
    >
      <CameraStack.Screen name='Camera' component={HomeScreen} />
      <CameraStack.Screen name='Picture' component={PictureScreen} />
      <CameraStack.Screen name='Result' component={ResultScreen} />
    </CameraStack.Navigator>
  )
}

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={CameraNavigator} />
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
