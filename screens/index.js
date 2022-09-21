import React ,{useState}from 'react'
import {Text,View,StyleSheet,Image, FlatList, ScrollView, TouchableOpacity} from 'react-native'
import axios from 'react-native-axios'

function Page1 ({navigation}) {
  const [array,setArray]=useState(["industrial land","industrial land","industrial land","industrial land"])
  const [data,setData]=useState()
  const [showImage,setShowImage]=useState()
  const [Title,setTitle]=useState()
  const [location,setLocation]=useState()
  const [price,setPrice]=useState()
  React.useEffect(()=>{
    axios
    .get(
      'https://api.xentice.com/api/postadSelect'
    )
    .then(response => {
      setData(response.data)
    })
    .catch( error=> {
      console.log(error,"error")
    })
  },[])
 function renderItem({item}){
  let image=JSON.parse(item.details).images
  if (image!==undefined){
  setShowImage(...JSON.parse(item.details).images)
  setTitle(JSON.parse(item.details).title)
  setLocation(JSON.parse(item.location).cord.name)
}

  return(<TouchableOpacity style ={{height:140,width:150,borderWidth:1,margin:20}} onPress={()=>navigation.navigate("2Screen")}>
    <Image source={{uri:showImage}} style={{height:100,width:150}}></Image>
    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
    <Text>{Title}</Text>
    <Text style={{color:"red",alignSelf:"flex-end",fontSize:10}}>Rs.2500/Hr</Text>
    </View>
    <View style={{flexDirection:"row",alignItems:"center"}}>
    <Text>{location}</Text>
    <Image source={{uri:"https://as1.ftcdn.net/v2/jpg/01/02/79/14/1000_F_102791483_kkt58gN9Q1HwC8lGT0SNxwjHTIeZeaNE.jpg"}} style={{height:10,width:20}}></Image>
    </View>
  </TouchableOpacity>)
} 
 return(<View style={{flex:1}}>
  <ScrollView>
<View style={styles.container}>
  <View style={styles.smallCointainer}>
   <Image style={{height:30,width:30,tintColor:"grey"}} source={{uri:"https://cdn-icons-png.flaticon.com/512/5036/5036960.png"}}></Image>
  </View>
  <View style={{height:50,width:150}}>
    <Text style={{color:"blue",alignSelf:"flex-start",fontSize:35}}>Xentise</Text>
  </View>
  <View style={{height:50,width:50,alignItems:"center",justifyContent:"center"}}>
<Image style={{height:30,width:30}} source={{uri:"https://cdn-icons-png.flaticon.com/512/3280/3280979.png"}}></Image>
  </View>
</View>
<View style={{flex:0.08,borderColor:"black",borderWidth:1,flexDirection:"row",margin:10}}>
  <Image style={{height:30,width:50}} source={{uri:"https://as1.ftcdn.net/v2/jpg/03/25/73/68/1000_F_325736897_lyouuiCkWI59SZAPGPLZ5OWQjw2Gw4qY.jpg"}}></Image>

</View>
<View style={{height:30,flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:5}}>
  <View style={{borderWidth:1,borderColor:"black",borderRadius:10,width:100,alignItems:"center",marginRight:10}}>
<Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>Property</Text></View>
<Text style={{color:"black",fontSize:15}}>service</Text>
</View>
<View style={{height:70,flex:0.10,flexWrap:"wrap"}}>
{array.map((el)=>{
  return(
    <View style={{height:60,width:60,borderColor:"grey",borderWidth:1,margin:10,alignItems:"center",justifyContent:"center"}}>
      <Image style={{height:30,width:30}}source={{uri:"https://cdn-icons-png.flaticon.com/512/1504/1504969.png"}}>
      </Image>
    <Text style={{color:"black",fontSize:10}}>Industrial</Text>
    <Text style={{color:"black",fontSize:10}}>land</Text>
    </View>
  )
})}
</View>

  <Text style={{color:"black",fontSize:20,fontWeight:"bold",padding:10,marginTop:10}}>Commercial office</Text>
  <Text style={{color:"black",fontSize:13,alignSelf:"flex-end",height:20}}>see all</Text>
 <View style={{height:200}}>
  <FlatList data={data}
  horizontal={true}
  renderItem ={renderItem} />
  </View>

  <Text style={{color:"black",fontSize:20,fontWeight:"bold"}}>Commercial office</Text>
  <Text style={{color:"black",fontSize:13,alignSelf:"flex-end",padding:10}}>see all</Text>
 <View style={{height:200}}>
  <FlatList data={data}
  horizontal={true}
  renderItem ={renderItem} />
  </View>

  <Text style={{color:"black",fontSize:20,fontWeight:"bold"}}>Commercial office</Text>
  <Text style={{color:"black",fontSize:13,alignSelf:"flex-end",padding:10}}>see all</Text>
 <View style={{height:200}}>
  <FlatList data={data}
  horizontal={true}
  renderItem ={renderItem} />
  </View>
  </ScrollView>
  </View>)
}
export default Page1


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
