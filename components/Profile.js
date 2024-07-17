import {Text,View,TouchableOpacity} from 'react-native';

const Profile = (props)=>{
  return(
    <View style ={{flex:1}}>
    <View style = {{alignSelf:'center',justifyContent:'center'}}>
    <Text style = {{fontWeight:'600',fontSize:40,color:'grey'}}>
    Profile
    </Text>
    </View>
    <View style ={{position:'absolute',justifyContent:'space-between',bottom:10,flexDirection:'row',alignSelf:'center'}}>
    <TouchableOpacity
      style ={{padding:10,margin:10,backgroundColor:'green',borderRadius:4}}
      onPress = {()=>{props.navigation.navigate("Home")}}
      >
    <Text style = {{color:'#fff'}}>
    Go To Home
    </Text>
    </TouchableOpacity>

    <TouchableOpacity
      style ={{padding:10,margin:10,backgroundColor:'green',borderRadius:4,alignSelf:'flex-end'}}
      onPress = {()=>{
        props.navigation.replace('Login')
      }}
      >
    <Text style = {{color:'#fff'}}>
    Log Out
    </Text>
    </TouchableOpacity>
    </View>
    </View>
  )
}

export default Profile;