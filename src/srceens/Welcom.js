import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Button, View, TouchableOpacity, Modal } from 'react-native';
import Cookies from 'js-cookie';
  
export default function Welcom({navigation}) {

  useEffect(() => {
    console.log('Invoked')
        const isLoggedIn = Cookies.get('loggedIn') || true
        if(isLoggedIn === 'false' || !isLoggedIn){
            
            navigation.navigate('signin');
        }
    }, []);


  const logoutHandler = () => {
   Cookies.set('loggedIn', false)
    navigation.navigate('signin');
}

  return (
    <View style={styles.container}>
      
        <Text style={styles.headertxt}>Welcome</Text>
        <Text style={styles.nametxt}>NAME</Text>
        
        <TouchableOpacity onPress= {() => logoutHandler()}>
          <Text style={styles.btn}> Logout</Text>  
        </TouchableOpacity> 

      <StatusBar style="auto" />
    </View>
  );
}   
Welcom.navigationOptions = {
  header: () => false,
};

const styles = StyleSheet.create({
  container: {
     flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  headertxt: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  nametxt: {
    fontSize: 18,
    marginBottom: 15,
  },
  btn: {
    borderRadius: 8,
    backgroundColor: "#ADD8E6",
    marginTop: 30,
    height: 50,
    width: 320,
    marginHorizontal: 50,
    fontSize: 18,
    paddingTop: 10,
    textAlign: 'center'
  },
 
});
