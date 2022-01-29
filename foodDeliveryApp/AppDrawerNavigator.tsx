import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExploreScreen from './pages/Explore';
import RestaurantsScreen from './pages/Restaurants';
import RestaurantScreen from './pages/Restaurant';
import ProfileScreen from './pages/Profile';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icons from 'react-native-vector-icons/MaterialIcons';
import 'react-native-gesture-handler'


export type RootNativeStackParams={
  ExploreStack:NavigatorScreenParams<ExploreNativestackParams>;
  RestaurantsStack:NavigatorScreenParams<RestaurantsNativeStackParams>;
  Profile:undefined;
  Restaurant:{
    name:string;
  };
}

export type RestaurantsNativeStackParams={
  Restaurants:undefined;
  Restaurant:{
    name:string;
  };}


const RestaurantsNativeStack = createNativeStackNavigator<RestaurantsNativeStackParams>();
const RootDrawer = createDrawerNavigator<RootNativeStackParams>();

const RestaurantScreenStack = () => {
  return (
    <RestaurantsNativeStack.Navigator initialRouteName='Restaurants' screenOptions={{
      headerShown:false
      }}>
      <RestaurantsNativeStack.Screen name="Restaurants" component={RestaurantsScreen}/>
      <RestaurantsNativeStack.Screen name="Restaurant" component={RestaurantScreen}/>
    </RestaurantsNativeStack.Navigator>
  )
}

export type ExploreNativestackParams={
  Explore:undefined;
  Restaurant:{
    name:string;
  };}
const ExploreStack = createNativeStackNavigator<ExploreNativestackParams>();

const ExploreScreenStack = () => {
  return (
    <ExploreStack.Navigator  screenOptions={{
      headerShown:false
      }}>
      <ExploreStack.Screen name="Explore" component={ExploreScreen}/>
      <ExploreStack.Screen name="Restaurant" component={RestaurantScreen}/>
    </ExploreStack.Navigator>
  )
}

const AppDrawerNavigator = () => {
 
  return (
    <NavigationContainer>
      <RootDrawer.Navigator initialRouteName='ExploreStack' screenOptions={{
        headerShown:false,
        }}>
      <RootDrawer.Screen name="ExploreStack" component={ExploreScreenStack}
      options={{
        drawerLabel: 'Explore',
        drawerIcon: ({ color, size }) => (
          <Icons name="explore" color={color} size={size} />
        ),
      }}/>
      <RootDrawer.Screen name="RestaurantsStack" component={RestaurantScreenStack} 
      options={{
        drawerLabel: 'Restaurants',
        drawerIcon: ({ color, size }) => (
          <Icons name="restaurant" color={color} size={size} />
        ),
      }}/>
      <RootDrawer.Screen name="Profile" component={ProfileScreen}  
      options={{
        drawerLabel: 'Profile',
        drawerIcon: ({ color, size }) => (
          <Icons name="account-circle" color={color} size={size} />
        ),
      }}/>
      </RootDrawer.Navigator>
    </NavigationContainer>
  );
};


export default AppDrawerNavigator;
