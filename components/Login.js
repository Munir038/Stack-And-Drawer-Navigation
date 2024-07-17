import { Text, SafeAreaView, StyleSheet,View,TouchableOpacity,TextInput } from 'react-native';
import React from 'react';
export default function Login(props) {
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
    
     <View>
     <TextInput
     placeholder = 'Email'
     placeholderTextColor='grey'
     style ={{borderWidth:1,padding:4,margin:4,borderColor:'lightgrey',borderRadius:2}}
     onChangeText = {(text)=>{
       setEmail(text);
     }}
     value = {email}
     />
     <TextInput
     placeholder = 'Password'
     placeholderTextColor='grey'
     style ={{borderWidth:1,padding:4,margin:4,borderColor:'lightgrey',borderRadius:2}}
     onChangeText = {(text)=>{
       setPassword(text);
     }}
     value = {password}
     />
     </View>
     <TouchableOpacity
     style = {{
       padding:4,
       margin:4,
       alignItems:'center',
       backgroundColor:'green',
       justifyContent:'center',
       alignSelf:'center',
       borderRadius:4
     }}
     onPress = {()=>{
      if(email.trim()!==''){
        if(password.trim()!==''){
          props.navigation.replace('Home');
        }else{
          alert('Please enter a valid password')
        }
      }else{
        alert('Please enter a valid Email')
      }
     }}
     >
     <Text style = {{color:'lightgrey',fontSize:16,fontWeight:'600'}}>
     Sign In
     </Text>
     </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
