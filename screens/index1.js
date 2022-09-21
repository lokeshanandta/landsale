import React ,{useState}from 'react'
import {Text,View,StyleSheet,Image, FlatList, ScrollView, TouchableOpacity} from 'react-native'
import axios from 'react-native-axios'


function Page2 ({navigation}) {
  const [array,setArray]=useState(["industrial land","industrial land","industrial land","industrial land","industrial land","industrial land","industrial land","industrial land"])
  const [selling,setSelling]=useState(false)
  const [rental,setRental]=useState(false)
  const [lease,setLease]=useState(false)
  const gototheScreen=()=>{navigation.navigate("3Screen")}
  return(
  <View style={{flex:1}}>
    <View style={styles.container}>
  <View style={styles.smallCointainer}>
   <Image style={{height:30,width:30,tintColor:"grey"}} source={{uri:"https://cdn-icons-png.flaticon.com/512/5036/5036960.png"}}></Image>
  </View>
  <View style={{height:50,width:150}}>
    <Text style={{color:"blue",fontSize:35}}>Xentise</Text>
  </View>
  <View style={{height:50,width:50,alignItems:"center",justifyContent:"center"}}>
<Image style={{height:30,width:30}} source={{uri:"https://cdn-icons-png.flaticon.com/512/3280/3280979.png"}}></Image>
  </View>
</View>

<View style={{backgroundColor:"lightgrey",flex:0.15,flexDirection:"row",alignItems:"center"}}>
    <View style={{height:40,width:40,marginLeft:30,justifyContent:"center",alignItems:"center",borderColor:"blue",borderRadius:30,borderWidth:4}}>
        <Text>1/4</Text>
    </View>
    <View style={{height:30,width:100,marginLeft:10,}}><Text style={{color:"black",fontSize:20,fontWeight:"bold",}}>Property</Text>
    <Text style={{color:"black",fontSize:10}}>Progress details  ></Text>
    </View>
</View>
<View style={{height:180,width:200,flexWrap:"wrap",marginTop:10,padding:10}}>
{array.map((el)=>{
  return(
    <View style={{height:60,width:60,borderColor:"grey",borderWidth:1,margin:10,alignItems:"center",justifyContent:"center"}}>
      <Image style={{height:30,width:30}}source={{uri:"https://cdn-icons-png.flaticon.com/512/1504/1504969.png"}}></Image>
    <Text style={{color:"black",fontSize:10}}>Industrial</Text>
    <Text style={{color:"black",fontSize:10}}>land</Text>
    </View>
  )
})}
</View>
<View style={{height:60,width:60,borderColor:"grey",borderWidth:1,alignSelf:"center",justifyContent:"center",alignItems:"center"}}>
<Image style={{height:30,width:30}}source={{uri:"https://cdn-icons-png.flaticon.com/512/1504/1504969.png"}}></Image>
<Text style={{color:"black",fontSize:10}}>Industrial</Text>
    <Text style={{color:"black",fontSize:10}}>land</Text>
</View>
<View style={{flex:0.10,borderWidth:1,borderColor:"black",justifyContent:"center",margin:15}}>
  <Text style={{color:"black",fontWeight:"bold",fontSize:18}}>Woxro office</Text>
</View>
<Text style={{color:"black",fontWeight:"bold",fontSize:14,marginLeft:10}}>Transcation type</Text>

<View style={{flexDirection:"row",width:150,justifyContent:"space-between",marginLeft:10}}>
<TouchableOpacity onPress={()=>gototheScreen()}>
<Text style={{color:"black",fontWeight:"bold",fontSize:18,justifyContent:"space-between"}}>
  <View style={{height:10,width:10,borderWidth:1,borderColor:"black",borderRadius:10,backgroundColor:selling === true?"green":"white"}}></View>
  sell</Text></TouchableOpacity>
  <TouchableOpacity onPress={()=>gototheScreen()}>
<Text style={{color:"black",fontWeight:"bold",fontSize:18,justifyContent:"space-between"}}>
<View style={{height:10,width:10,borderWidth:1,borderColor:"black",borderRadius:10,backgroundColor:rental === true?"green":"white"}}></View>
  rent</Text></TouchableOpacity>
  <TouchableOpacity onPress={()=>gototheScreen()}>
<Text style={{color:"black",fontWeight:"bold",fontSize:18,justifyContent:"space-between"}}>
<View style={{height:10,width:10,borderWidth:1,borderColor:"black",borderRadius:10,backgroundColor:lease === true?"green":"white"}}></View>
  lease</Text>
  </TouchableOpacity></View>
  <View style={{flex:0.55,padding:10}}>
    <Text style={{fontSize:15,fontWeight:"bold",marginTop:10}}>Price</Text>
    <View style={{flexDirection:"row",height:30,width:340,justifyContent:"space-between"}}>
        <View style={{borderWidth:1,borderColor:"black",height:30,width:200,borderRadius:2}}>
            <Text style={{fontSize:15,fontWeight:"bold",padding:5}}>2500</Text>
        </View>
        <View style={{height:30,width:100,borderWidth:1,borderColor:"black",alignSelf:"flex-end",borderRadius:2}}>
        <Text style={{fontSize:15,fontWeight:"bold",padding:5}}>Hr</Text>
        </View>
    </View>
    <Text style={{fontSize:15,fontWeight:"bold",marginTop:10}}>Build Area</Text>
    <View style={{flexDirection:"row",height:30,width:340,justifyContent:"space-between"}}>
        <View style={{borderWidth:1,borderColor:"black",height:30,width:200,borderRadius:2}}>
            <Text style={{fontSize:15,fontWeight:"bold",padding:5}}>2500</Text>
        </View>
        <View style={{height:30,width:100,borderWidth:1,borderColor:"black",alignSelf:"flex-end",borderRadius:2}}>
        <Text style={{fontSize:15,fontWeight:"bold",padding:5}}>Hr</Text>
        </View>
    </View>
    <Text style={{fontSize:15,fontWeight:"bold",marginTop:10}}>PlotArea</Text>
    <View style={{flexDirection:"row",height:30,width:340,justifyContent:"space-between"}}>
        <View style={{borderWidth:1,borderColor:"black",height:30,width:200,borderRadius:2}}>
            <Text style={{fontSize:15,fontWeight:"bold",padding:5}}>2500</Text>
        </View>
        <View style={{height:30,width:100,borderWidth:1,borderColor:"black",alignSelf:"flex-end",borderRadius:2}}>
        <Text style={{fontSize:15,fontWeight:"bold",padding:5}}>Hr</Text>
        </View>
    </View>
  </View>
  <Text style={{fontSize:15,fontWeight:"bold",marginLeft:10}}>setting capacity</Text>
  <View style={{height:30,width:330,borderColor:"black",borderWidth:2,marginLeft:15}}>
  <Text style={{fontSize:16,fontWeight:"bold",marginLeft:10,}}>100</Text>
  </View>
  </View>
)

}
export default Page2

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
justifyContent:"space-around"}
});


