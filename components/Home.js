import {Text,View,TouchableOpacity} from 'react-native';

const Home = (props)=>{
  return(
    <View style = {{flex:1}}>
      <View style = {{alignSelf:'center',justifyContent:'center'}}>
      <Text style = {{fontWeight:'600',fontSize:40,color:'grey'}}>
      Home
      </Text>
      </View>
      <TouchableOpacity onPress = {()=>{props.navigation.navigate('Home2')}}>
      <Text>Home2</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style ={{position:'absolute',alignSelf:'flex-end',bottom:10,padding:10,margin:10,backgroundColor:'green',borderRadius:4}}
      onPress = {()=>{
        props.navigation.navigate('Feed')
      }}
      >
    <Text style = {{color:'#fff'}}>
    Go To Feed
    </Text>
    </TouchableOpacity>
    </View>
  )
}

export default Home;