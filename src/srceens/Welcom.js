import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { styles } from '../../styles/styles';
import { useSelector} from 'react-redux';
import Cookies from 'js-cookie';
  
export default function Welcom({navigation}) {
  const {users} = useSelector(state => state);
  useEffect(() => {
        const isLoggedIn = Cookies.get('loggedIn') || true
        if(isLoggedIn === 'false' || !isLoggedIn){
            navigation.navigate('signin');
        }
  }, []);
   const logoutHandler = () => {
   Cookies.set('loggedIn', false)
   navigation.navigate('signin');
   
};
  return (
    <View style={styles.wlcmContainer}>
        <Text style={styles.hdertxt}>Welcome</Text>
        <Text style={styles.nametxt}>{users.user.fullName}</Text>
        <Text style={styles.nametxt}>{users.user.email}</Text>
        <TouchableOpacity onPress= {() => logoutHandler()}>
          <Text style={styles.wlcmBtn}> Logout</Text>  
        </TouchableOpacity> 
        <StatusBar style="auto" />
    </View>
  );
};   
Welcom.navigationOptions = {
  header: () => false,
};