import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
 import React, {useState} from 'react';

 import Input from '../Components/Input';
 import Button from '../Components/Button';
 import {Color} from '../Utlis/Color';
 import Strings from '../Utlis/String';
import {useNavigation} from '@react-navigation/native';
 import {showToast, regex} from '../Utlis/CommonFunctions';
 import MainContainer from '../Components/MainContainer';
 import ScreenName from '../Constants/ScreenName';

 const Login = () => {
   const navigation = useNavigation();
   const [login, setLogin] = useState({
    
     email: '',
     password: '',
   });

   const submit = () => {
     const {email, password} = login;

     if (email == '') {
       showToast(Strings.emailAlert, 'error');
     } else if (!regex.test(email)) {
       showToast(Strings.invalidEmail, 'error');
     } else if (password == '') {
       showToast(Strings.passwordAlert, 'error');
     } else if (password.length < 6) {
       showToast(Strings.passwordLength, 'error');
     }
   };

   return (
     <MainContainer>
       <View style={styles.mainContainer}>
         <Text style={styles.textstyle}>{Strings.hey}</Text>
         <Text style={styles.textstyle}>{Strings.welcomeBack}</Text>
         <Text style={{fontSize: 13, color: Color.lightgray}}>
           {Strings.loginSubHedding}
         </Text>
       </View>

       <Input
         Value={login.email}
         onChangeText={mail => setLogin({...login, email: mail})}
         placeholder={Strings.email}
       />

       <Input
         Value={login.password}
         onChangeText={val => setLogin({...login, password: val})}
         placeholder={Strings.password}
         secureTextEntry={true}
         isPassword={true}
         maxlength={10}
       />

       <View style={styles.forgotContainer}>
         <TouchableOpacity
           onPress={() => navigation.navigate(ScreenName.ForgotPassword)}>
           <Text style={{color: Color.Primary, fontSize: 13,}}>
             {Strings.ForgotPassword}
           </Text>
         </TouchableOpacity>
         <View style={styles.line}></View>
       </View>

       <Button
         onPress={submit}
         backgroundColor={Color.Primary}
         title={Strings.login}
       />

       <Button
         onPress={() => navigation.navigate(ScreenName.createAccount)}
         title={Strings.create}
         backgroundColor={Color.black}
       />
     </MainContainer>
   );
 };

 export default Login;

 const styles = StyleSheet.create({
   mainContainer: {
     marginTop: '30%',
   },
   textstyle: {
     color: Color.black,
     fontSize: 25,
     fontWeight: 'bold',
   
   
    
   },
   forgotContainer: {
     marginTop: 10,
     alignItems: 'flex-end',
   },
   line: {
     height: 1.5,
     width: '34%',
     backgroundColor: Color.Primary,
     borderRadius: 2,
   },
 })

