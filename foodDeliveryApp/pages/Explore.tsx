import {View,Text, StyleSheet} from 'react-native'
import RestaurantCard from '../components/RestaurantCard'
import React from 'react'
import { RootNativeStackParams } from '../AppTabNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import TopDrawerNavigation from '../components/TopDrawerNavigation'

type Props = NativeStackScreenProps<RootNativeStackParams,'ExploreStack'>

const ExploreScreen = ({navigation}:Props) =>{
    return (
        <View style={styles.container}>
        <TopDrawerNavigation/>
        <Text style={styles.screenTitle}>Restaurants</Text>
        <View>
            <Text style={styles.sectionTitle}>Restaurants Near You</Text>
            <RestaurantCard name="Sushi restaurant" onPress={(()=>{
                navigation.navigate('RestaurantsStack',{
                    screen:'Restaurant',
                    params:{name:"Hello from explore"}
                })
            })}/>
            <RestaurantCard name="Burger restaurant" onPress={(()=>{
                navigation.navigate('Restaurant',{name:"Burger restaurant"})
            })}/>
            <RestaurantCard name="Fine dining restaurant" onPress={(()=>{
                navigation.navigate('Restaurant',{name:"Fine dining restaurant"})
            })}/>

            <Text style={styles.sectionTitle}>Most Popular Restaurants</Text>
            <RestaurantCard name="Sushi restaurant" onPress={(()=>{
                navigation.navigate('Restaurant',{name:"Sushi restaurant"})
            })}/>
            <RestaurantCard name="Burger restaurant" onPress={(()=>{
                navigation.navigate('Restaurant',{name:"Burger restaurant"})
            })}/>
        </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        padding:16,
        marginTop:24
    },
    restaurantCard:{
        backgroundColor:'#efefef'
    },
    sectionTitle:{
        fontSize:16,
        marginTop:16
    },
    screenTitle:{
        fontSize:24,
        marginTop:8,
        fontWeight:'bold'
    }

})


export default ExploreScreen