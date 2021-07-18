import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from '../../Redux/action';
import Cookies from 'js-cookie';


export default function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const {errorMessage} = useSelector(state => state);
   const {token, auth} = useSelector(state => state);
   const dispatch = useDispatch();
    
   useEffect(() => {
    const isLoggedIn = Cookies.get('loggedIn') || false
    if(isLoggedIn === 'true'){
        navigation.navigate('welcome');

    }
}, [])
   
  return (
    <View style={styles.container}>
      
      <Text style={{fontSize: 18, marginTop: 40}}>Enter Email</Text>
      <View style={styles.emailcon} >
        <Feather name="user" style={styles.iconStyle} />
        <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder= "Enter Your Email"
            style={styles.txtinput}
            value={email}
            onChangeText={setEmail}
          />
     </View>
       
     <Text style={{fontSize: 18, }}>Enter Password</Text>
     <View style={styles.emailcon} >
        <Feather name="lock" style={styles.iconStyle} />
        <TextInput 
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            placeholder= "Enter Password"
            style={styles.txtinput}   
            value={password}
            onChangeText={setPassword}
          />
     </View>
       <Text style={styles.error} >{errorMessage} </Text>
        <TouchableOpacity onPress={() => dispatch(userLogin(email, password, () => {navigation.navigate('welcome')} ))}>
          <Text style={styles.btn}> SignIn</Text>  
        </TouchableOpacity>  
  
      <StatusBar style="auto" />
    </View>
  );
}

SignIn.navigationOptions = {
  header: () => false,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bgimg: {
    marginTop: 20,  
     height:335,
     width: 415,
     marginHorizontal: 2
  },
  txtinput: {
      height: 50,
      width: 320,
      borderBottomEndRadius: 1,
      borderBottomWidth: 1,
      borderBottomColor: "#969595",
      marginBottom: 20,
     

  },
  iconStyle: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 15,
    // opacity: 10
    borderBottomColor: "red",
  
  },
  emailcon: {
    marginTop: 10,
    height: 50,
    width: 360,
    borderRadius: 5,
    borderBottomEndRadius: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#969595",
    marginHorizontal: 20,
    flexDirection: 'row',
    marginBottom: 20
  },
  btn: {
    borderRadius: 8,
    backgroundColor: "#ADD8E6",
    marginTop: 10,
    height: 50,
    width: 320,
    marginHorizontal: 50,
    fontSize: 18,
    paddingTop: 10,
    textAlign: 'center'
  },
  btmcontainer: {
   // marginTop: 80,
    marginHorizontal: 30
  },
  register: {
    color: 'blue',
  },
  error: {
    fontSize: 14,
    marginHorizontal:30,
    marginTop: 10
  }


});





