import {View,Text, ScrollView,StyleSheet} from 'react-native'
import RestaurantCard from '../components/RestaurantCard'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootNativeStackParams } from '../AppTabNavigator'
import TopDrawerNavigation from '../components/TopDrawerNavigation'

type Props = NativeStackScreenProps<RootNativeStackParams,'RestaurantsStack'>

const RestaurantsScreen = ({navigation}:Props) =>{
    return (
        <View style={styles.container}>
            <TopDrawerNavigation/>
            <Text style={styles.screenTitle}>Restaurants Screen</Text>
            <ScrollView>
            <RestaurantCard name="Sushi restaurant" onPress={name=>{
                navigation.navigate('Restaurant',{name})
            }}/>
            <RestaurantCard name="Burger restaurant" onPress={name=>{
                navigation.navigate('Restaurant',{name})
            }}/>
            <RestaurantCard name="Fine dining restaurant" onPress={name=>{
                navigation.navigate('Restaurant',{name})
            }}/>
            <RestaurantCard name="Dinner restaurant" onPress={name=>{
                navigation.navigate('Restaurant',{name})
            }}/>
            <RestaurantCard name="Fast Food restaurant" onPress={name=>{
                navigation.navigate('Restaurant',{name})
            }}/>
            <RestaurantCard name="Churrascaria restaurant" onPress={name=>{
                navigation.navigate('Restaurant',{name})
            }}/>
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        padding:16,
        marginTop:24
    },
    screenTitle:{
        fontSize:24,
        marginTop:8,
        fontWeight:'bold',
    }

})


export default RestaurantsScreen