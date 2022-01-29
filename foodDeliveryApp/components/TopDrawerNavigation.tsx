
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, TouchableHighlight,View } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons';
import { RootNativeStackParams } from '../AppTabNavigator';

const TopDrawerNavigation = () => {
    const navigation = useNavigation<DrawerNavigationProp<RootNativeStackParams>>()

    return <View style={styles.container}>
        <TouchableHighlight 
        underlayColor='#F0ddcc'
        style={styles.backButton} 
        onPress={()=>{
            navigation.openDrawer()
        }}>
            <Icons name="menu" color='#3333' size={20}/>
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

export default TopDrawerNavigation