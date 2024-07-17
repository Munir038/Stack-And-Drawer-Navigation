import {Text,View,TouchableOpacity} from 'react-native';

const Notification = (props)=>{
  return(
    <View style = {{flex:1}}>
    <View style = {{alignSelf:'center',justifyContent:'center'}}>
    <Text style = {{fontWeight:'600',fontSize:40,color:'grey'}}>
    Notification
    </Text>
    </View>
    <TouchableOpacity
      style ={{position:'absolute',alignSelf:'flex-end',bottom:10,padding:10,margin:10,backgroundColor:'green',borderRadius:4}}
      onPress = {()=>props.navigation.navigate("Profile")}
      >
    <Text style = {{color:'#fff'}}>
    Go To Profile
    </Text>
    </TouchableOpacity>
    </View>
  )
}

export default Notification;