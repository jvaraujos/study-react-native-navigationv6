import  {View,Text,TouchableHighlight} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthNativestackParams } from '../AppTabNavigator';

const testeff =()=>{
    console.warn('CLicado')
}

const LoginScreen = () =>{
    const navigation =  useNavigation<NativeStackNavigationProp<AuthNativestackParams>>();

return (
    <View>
    <Text>LoginScreen</Text>
    <TouchableHighlight onPress={()=>testeff()}>
    <Icon name='account-circle' size={20} color="#3333"/>
    </TouchableHighlight>
    </View>
    );
};
export default LoginScreen