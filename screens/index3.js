import React ,{useState}from 'react'
import {Text,View,StyleSheet,Image, FlatList, ScrollView, TouchableOpacity, ImageBackground} from 'react-native'
import axios from 'react-native-axios'
import { TextInput } from 'react-native-gesture-handler'
import MapView from 'react-native-maps'

function Page3 ({navigation}) {
  return(
  <View style={{flex:1}}>

<View style={styles.container}>
  <View style={styles.smallCointainer}>
   <Image style={{height:30,width:30,tintColor:"grey"}} source={{uri:"https://cdn-icons-png.flaticon.com/512/5036/5036960.png"}}></Image>
  </View>
  <View style={{height:50,width:150}}>
    <Text style={{color:"blue",fontSize:35}}>Xentise</Text>
  </View>
  <View style={{height:50,width:50,justifyContent:"center",alignItems:"center"}}>
<Image style={{height:30,width:30}} source={{uri:"https://cdn-icons-png.flaticon.com/512/3280/3280979.png"}}></Image>
  </View>
</View>

<View style={{backgroundColor:"lightgrey",flex:0.10,flexDirection:"row",alignItems:"center"}}>
    <View style={{height:40,width:40,marginLeft:30,justifyContent:"center",alignItems:"center",borderColor:"blue",borderRadius:30,borderWidth:4}}>
        <Text>3/4</Text>
    </View>
    <View style={{height:30,width:100,marginLeft:10,}}><Text style={{color:"black",fontSize:20,fontWeight:"bold",}}>Location</Text>
    <Text style={{color:"black",fontSize:10}}>Progress details  ></Text>
    </View>
</View>
<View style={{flex:0.07,borderWidth:1,borderColor:"black",justifyContent:"center",margin:15,backgroundColor:"lightgrey"}}>
  <Text style={{color:"black",fontWeight:"bold",fontSize:18}}>India</Text>
</View>
<Text style={{color:"black",fontSize:17,marginLeft:10}}>City</Text>
<View style={{flex:0.07,borderWidth:1,borderColor:"black",justifyContent:"center",margin:15,backgroundColor:"lightgrey"}}>
  <Text style={{color:"black",fontWeight:"bold",fontSize:18}}>Cochin</Text>
</View>
<Text style={{color:"black",fontSize:17,marginLeft:10}}>Locality</Text>
<View style={{flex:0.07,borderWidth:1,borderColor:"black",justifyContent:"center",margin:15,backgroundColor:"lightgrey"}}>
  <Text style={{color:"black",fontWeight:"bold",fontSize:18}}>Cochin</Text>
</View>
<Text style={{color:"black",fontSize:17,marginLeft:10}}>street</Text>
<View style={{flex:0.07,borderWidth:1,borderColor:"black",justifyContent:"center",margin:15,backgroundColor:"lightgrey"}}>
  <Text style={{color:"black",fontWeight:"bold",fontSize:18}}>Cochin</Text>
</View>

<View style={{flex:0.50,margin:20,borderBottomColor:"black",borderWidth:2}}>
    <Image source={{uri:"https://cdn-media-1.freecodecamp.org/images/1*qp8QiCRmx0D041XU4qhx4g.png"}} style={{flex:1}}></Image>
</View>
<View style={{flexDirection:"row",flex:0.10,justifyContent:"space-between",marginLeft:20,marginRight:20}}>
    <TouchableOpacity style={{borderColor:"black",borderWidth:1,borderRadius:10,height:40,width:120,justifyContent:"center",alignItems:"center"}}>
    <Text style={{fontSize:20,fontWeight:"bold",color:"black"}}>Back</Text>
    </TouchableOpacity>
    <View style={{borderColor:"black",borderWidth:1,borderRadius:10,height:40,width:120,backgroundColor:"lightblue",justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:20,fontWeight:"bold",color:"black"}}>Continue</Text>
    </View>
</View>
  </View>
)

}
export default Page3


const styles = StyleSheet.create({
  container: {
    height:50,
    flex:0.10,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"

  },
smallCointainer:{height:30,
width:100,
justifyContent:"space-around"},
map:{position:'absolute',
top:0,
left:0,
right:0,
bottom:0}
});
