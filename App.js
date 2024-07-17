import { Text, SafeAreaView, StyleSheet,View,TouchableOpacity,TextInput } from 'react-native';
import React from 'react';
import RootNavigation from './Navigation/RootNavgation';
export default function App(props) {
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');

  return (
    <RootNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
