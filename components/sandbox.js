import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
       paddingTop:70,
       backgroundColor:"#ddd",
       flexDirection:'row',
       justifyContent:'space-around',
       alignItems:'center',
        // flex:1,
    },
    boxOne:{
        backgroundColor:'violet',
        flex:1,
        padding:10,
    },
    boxTwo:{
        backgroundColor:'orange',
        flex:1,
        padding:20,
    },
    boxThree:{
        backgroundColor:'lightgreen',
        flex:1,
        padding:30,
    }
    ,boxFour:{
        backgroundColor:'silver',
        flex:1,
        padding:40,
    },
    boxFive:{
        backgroundColor:'lightblue',
        flex:1,
        padding:50,
    }
})


