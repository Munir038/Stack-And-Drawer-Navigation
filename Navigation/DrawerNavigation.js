import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../components/Home';
import Feed from '../components/Feed';
import Notification from '../components/Notification';
import Profile from '../components/Profile';
const DrawerNavigation = ()=>{
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name = 'Home' component = {Home}/>
      <Drawer.Screen name = 'Feed' component = {Feed}/>
      <Drawer.Screen name = 'Notification' component = {Notification}/>
      <Drawer.Screen name = 'Profile' component = {Profile}/>
    </Drawer.Navigator>
  )
}
export default DrawerNavigation;