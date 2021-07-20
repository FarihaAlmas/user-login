import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Modal, TouchableWithoutFeedback, ScrollView, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from '../../Redux/action';
import { styles } from '../../styles/styles';
import Cookies from 'js-cookie';

export default function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [securepass, setsecurepass] = useState(true);
  const [modalopen, setmodalopen] = useState(false);
    const {errorMessage} = useSelector(state => state);
   const dispatch = useDispatch();
   useEffect(() => {
    const isLoggedIn = Cookies.get('loggedIn') || false
    if(isLoggedIn === 'true'){
        navigation.navigate('welcome');
        setEmail('');
        setPassword('');
    }
}, [])
const selected= (email, password) => {
  setEmail(email);
  setPassword(password);
  setmodalopen(false);
}
  return (
    <SafeAreaView style={styles.container}>
        <Modal 
          animationType="fade"
           transparent={true}
          visible= {modalopen}
          onRequestClose={() => {setmodalopen(false)}}
        >
          <TouchableOpacity 
           activeOpacity={1} 
            onPressOut={() => {setmodalopen(false)}}
          >
            <ScrollView 
                directionalLockEnabled={true} 
                contentContainerStyle={styles.scrollModal}
              >
              <TouchableWithoutFeedback>
                <View style ={{height: 550, marginTop:95, backgroundColor: '#E8E9EB'}}>
                    <Text style={styles.emltxt}>Email</Text>
                  <TextInput 
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder= "Enter Your Email"
                    style={styles.modalinut}
                    value={email}
                    onChangeText={setEmail}
                    />
                    <Text style={styles.emltxt}> Password</Text>
                    <TextInput 
                    secureTextEntry = {securepass}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder= "Enter Password"
                    style={styles.modalinut}  
                    value={password}
                    onChangeText={setPassword}   
                  />
                  <Feather name="eye" onPress= {() => setsecurepass((prev) => !prev)}
                    style={{fontSize: 30, marginLeft: 280, marginTop: -60 }} 
                  />
                  <TouchableOpacity onPress={() =>selected(email, password)}>
                    <Text style= {styles.modalbtn}>DONE</Text>
                  </TouchableOpacity>
                </View>
                </TouchableWithoutFeedback>
            </ScrollView>
          </TouchableOpacity>   
      </Modal> 
           <Image style={styles.bgimg} source={require('../../assets/images/hdr.jpg')} />
           <Text style={styles.emltxt}> Enter Email </Text>
           <TouchableOpacity onPress={() => setmodalopen(true)} >
             <View style={styles.emailcon} >
               <Feather name="user" style={styles.iconStyle} />
               <TextInput value={email}  editable={false} style={{color: 'black', fontSize: 16}} />
             </View>
            </TouchableOpacity>  
            <Text style={styles.passTxt}>Enter Password </Text>
            <TouchableOpacity onPress={() => setmodalopen(true)} >
              <View style={styles.emailcon} >
                <Feather name="lock" style={styles.iconStyle} />
                <TextInput value={password} secureTextEntry = {securepass}  editable={false} style={{color: 'black'}} />
                <Feather name="eye" onPress= {() => setsecurepass((prev) => !prev)}
                style={{fontSize: 30, marginVertical: 10, marginLeft: 210}} />
            </View>
          </TouchableOpacity> 
          <Text style={styles.error} >{errorMessage} </Text>
          <TouchableOpacity onPress={() => dispatch(userLogin(email, password, () => {navigation.navigate('welcome')} ))}>
            <Text style={styles.btn}> SignIn</Text>  
          </TouchableOpacity>  
         <StatusBar style="auto" />
    </SafeAreaView>
  );
}
SignIn.navigationOptions = {
  header: () => false,
};




