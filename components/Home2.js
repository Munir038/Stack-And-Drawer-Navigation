import {Text,View,TouchableOpacity} from 'react-native';

const Home = (props)=>{
  return(
    <View style = {{flex:1}}>
      <View style = {{alignSelf:'center',justifyContent:'center'}}>
      <Text style = {{fontWeight:'600',fontSize:40,color:'grey'}}>
      Home_2
      </Text>
      </View>
      <TouchableOpacity
      style ={{position:'absolute',alignSelf:'flex-end',bottom:10,padding:10,margin:10,backgroundColor:'green',borderRadius:4}}
      onPress = {()=>{
        props.navigation.navigate('Home')
      }}
      >
    <Text style = {{color:'#fff'}}>
    Back To Home
    </Text>
    </TouchableOpacity>
    </View>
  )
}

export default Home;