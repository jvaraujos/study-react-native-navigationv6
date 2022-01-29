import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExploreScreen from './pages/Explore';
import RestaurantsScreen from './pages/Restaurants';
import RestaurantScreen from './pages/Restaurant';
import ProfileScreen from './pages/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialIcons';
import LoginScreen from './pages/Login';
import SignUpScreen from './pages/SignUp';
import 'react-native-gesture-handler'


export type RootNativeStackParams={
  AuthStack:undefined;
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
const RootBottom = createBottomTabNavigator<RootNativeStackParams>();

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

export type AuthNativestackParams={
  Login:undefined;
  SignUp:undefined;
}

const AuthStack = createNativeStackNavigator<AuthNativestackParams>();

const AuthScreenStack = () =>{
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginScreen}/> 
      <AuthStack.Screen name="SignUp" component={SignUpScreen}/> 
    </AuthStack.Navigator> 
  )
}

const AppTabNavigator = () => {
  const renderContent = ()=>{
    const isLoggedIn=false
    if(isLoggedIn){
       return <RootBottom.Navigator initialRouteName='ExploreStack' screenOptions={{
          headerShown:false}}>
      <RootBottom.Screen name="ExploreStack" component={ExploreScreenStack}
      options={{
        tabBarLabel: 'Explore',
        tabBarIcon: ({ color, size }) => (
          <Icons name="explore" color={color} size={size} />
        ),
      }}/>
      <RootBottom.Screen name="RestaurantsStack" component={RestaurantScreenStack} 
      options={{
        tabBarLabel: 'Restaurants',
        tabBarIcon: ({ color, size }) => (
          <Icons name="restaurant" color={color} size={size} />
        ),
      }}/>
      <RootBottom.Screen name="Profile" component={ProfileScreen}  
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <Icons name="account-circle" color={color} size={size} />
        ),
      }}/>
    </RootBottom.Navigator>      
     }
    return <AuthScreenStack/>
  }
  return (
    <NavigationContainer> 
     {renderContent()}
    </NavigationContainer>
  );
};


export default AppTabNavigator;
