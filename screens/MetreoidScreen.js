import React,{Component} from 'react'
import { Text,View,SafeAreaView ,StyleSheet,StatusBar,Platform,TouchableOpacity,ImageBackground,Image} from 'react-native'

export default class MetreoidScreen extends Component{
    constructor(){
        super()
        this.state={
            meteors:{}
        }
    }
    componentDidMount(){
        this.getMeteoridsLocation()
    }
    getMeteoridsLocation=()=>{
axios
.get("https://api.nasa.gov/neo/rest/v1/feed?api_key=OIv0aEBfnQbgyRYavvYPdKZvllQgaxhgjnhwOLtw")
.then(response=>{
this.setState({meteors:response.data.near_earth_objects})
})
.catch(error=>{
    Alert.alert(error.message)
})


}

    
    
render(){
    if(Object.keys(this.state.meteors).length===0){
return(
    <View> 
        <Text> LOADING....</Text>
    </View>
)
    }
    else{
var meteor_arr =Object.keys(this.state.meteors).map((meteor_data)=>{
return this.state.meteors[meteor_data]
})
var meteors=[].concat.apply([],meteor_arr) 
meteors.forEach(function (element)
 { let diameter = (element.estimated_diameter.kilometers.estimated_diameter_min + element.estimated_diameter.kilometers.estimated_diameter_max) / 2
    let threatScore = (diameter / element.close_approach_data[0].miss_distance.kilometers) * 1000000000 
     element.threat_score = threatScore; });

    return(
<View>
<Text>Metreoid Screen</Text>
</View>

    )
    
}
}
}

 