import {View,FlatList,Text} from 'react-native'
import React from 'react'

function imageCointainer (){
return(
<View>
<Text style={{color:"black",fontSize:20,fontWeight:"bold",padding:10,marginTop:10}}>Commercial office</Text>
<Text style={{color:"black",fontSize:13,alignSelf:"flex-end",padding:10,marginBottom:5}}>see all</Text>
<View style={{height:200,margin:5}}>
<FlatList data={data}
horizontal={true}
renderItem ={renderItem} />
</View>
)}



export default imageCointainer
