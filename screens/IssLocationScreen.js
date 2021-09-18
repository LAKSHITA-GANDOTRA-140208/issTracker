import React,{Component} from 'react'
import { Text,View ,SafeAreaView,ImageBackground, Alert,Image,Platform,StatusBar} from 'react-native'
import axios from 'axios'
import MapView,{Marker} from 'react-native-maps'
export default class IssLocationScreen  extends Component{
constructor(){
    super()
    this.state={
 location:{},


    }
}
componentDidMount(){
    this.getIssLocation()
}
getIssLocation=()=>{
axios
 .get("https://api.wheretheiss.at/v1/satellites/25544")
 .then(response=>{
this.setState({
location:response.data

})

 })
 .catch(error=>{
     Alert.alert(error.message)
 })

}
render(){
    if(Object.keys(this.state.location).length===0){
return(
<Text>
    loading...
</Text>

)


    }
    else{

    
return(
<View style={{
flex:1,
justifyContent:"center",
alignItems:"center"

}}>
<SafeAreaView/>
<ImageBackground source={require("../assets/iss_bg.jpg")}/>
<Text> IssLocationSCREEN</Text>
<View>
<MapView region={{latitude:this.state.location.latitude,
longitude:this.state.location.longitude,
latitudeDelta:100,
longitudeDelta:100

}}>
<Marker coordinate={{latitude:this.state.location.latitude,longitude:this.state.location.longitude}}>
<Image source={require("../assets/iss_icon.png")}/>
</Marker>
</MapView>
</View>
</View>

)

}

}

}
