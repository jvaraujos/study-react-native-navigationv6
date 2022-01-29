
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, TouchableHighlight,View } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons';

const TopBackNavigation = () => {
    const navigation = useNavigation()

    return <View style={styles.container}>
        <TouchableHighlight 
        underlayColor='#F0ddcc'
        style={styles.backButton} 
        onPress={()=>{
            navigation.goBack()
        }}>
            <Icons name="arrow-back" color='#3333' size={20}/>
        </TouchableHighlight>
    </View>
    
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
    },
    backButton:{
        borderRadius:8,
        width:40,
        height:40,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default TopBackNavigation