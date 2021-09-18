import React,{Component} from 'react'
import { Text,View,SafeAreaView ,StyleSheet,StatusBar,Platform,TouchableOpacity,ImageBackground,Image} from 'react-native'

export default class HomeScreen  extends Component{
render(){
return(
<View style={styles.container}>
    <SafeAreaView style={styles.safeArea}/>
    <ImageBackground source={require("../assets/bg_image.png")} style={styles.backGroundImage }/>
    <View style={styles.titleBar}>
<Text style={styles.titleText}> ISS TRACKER APP</Text>
</View>
<TouchableOpacity style={styles.routeCard} onPress={()=>{
this.props.navigation.navigate("IssLocationScreen")

}}>
<Text style={styles.routeText}>ISS LOCATION</Text>
<Image source={require("../assets/iss_icon.png")}/>
</TouchableOpacity>
<TouchableOpacity style={styles.routeCard} onPress={()=>{
this.props.navigation.navigate("MetreoidScreen")
}}>
<Text style={styles.routeText}>METEORS</Text>
<Image source={require("../assets/meteor_icon.png")}/>
</TouchableOpacity>
<TouchableOpacity style={styles.routeCard}>
<Text style={styles.routeText}>UPDATES</Text>
<Image source={require("../assets/rocket_icon.png")}/>
</TouchableOpacity>
</View>

)

}



}
const styles=StyleSheet.create({
container:{
    flex:1
},
safeArea:{
marginTop:Platform.OS==="android"?StatusBar.currentHeight:0

},
titleBar:{
flex:0.5,
justifyContent:"center",
alignItems:"center"


},
titleText:{
fontSize:20,
fontWeight:"bold",
color:"purple",


},
routeCard:{
flex:0.25,
marginLeft:50,
marginTop:50,
marginRight:50,
borderRadius:30,
backgroundColor:"blue"


},
routeText:{
fontSize:20,
fontWeight:"bold",
color:"pink",
padding:20,
marginTop:75,


},
backGroundImage:{
flex:1,


}


})
