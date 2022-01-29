import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react'

interface Props{
    name:string
    onPress: (name:string)=> void
}

const RestaurantCard: React.FC<Props>=({name,onPress})=>{
    return (
        <TouchableOpacity onPress={()=>onPress(name)}>
        <View style={styles.container}>
            <Text>{name}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    container:{
        backgroundColor:'#efefef'
    },
})

export default RestaurantCard