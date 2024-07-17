import {Text,View,TouchableOpacity} from 'react-native';

const Feed = (props)=>{
  return(
    <View style ={{flex:1}}>
    <View style = {{alignSelf:'center',justifyContent:'center'}}>
    <Text style = {{fontWeight:'600',fontSize:40,color:'grey'}}>
    Feed
    </Text>
    </View>
    <TouchableOpacity
      style ={{position:'absolute',alignSelf:'flex-end',bottom:10,padding:10,margin:10,backgroundColor:'green',borderRadius:4}}
      onPress = {()=>props.navigation.navigate('Notification')}
      >
    <Text style = {{color:'#fff'}}>
    Go To Notification
    </Text>
    </TouchableOpacity>
    </View>
  )
}

export default Feed;