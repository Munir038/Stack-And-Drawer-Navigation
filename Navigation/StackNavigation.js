import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/Home';
import Feed from '../components/Feed';
import Notification from '../components/Notification';
import Profile from '../components/Profile';
import Login from '../components/Login';
import Drawer from './DrawerNavigation';
import Home2 from '../components/Home2';
const StackNavigation = ()=>{
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions = {{headerShown:false}}>
    <Stack.Screen name = 'Login' component ={Login}/>
      <Stack.Screen name = 'Home' component = {Drawer}/>
      <Stack.Screen name = 'Feed' component = {Feed}/>
      <Stack.Screen name = 'Notification' component = {Notification}/>
      <Stack.Screen name = 'Profile' component = {Profile}/>
      <Stack.Screen name = 'Home2' component = {Home2}/>
    </Stack.Navigator>
  )
}

export default StackNavigation;