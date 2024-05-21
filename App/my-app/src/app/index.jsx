import React, { useState,  useEffect  } from 'react';
import {Image, StyleSheet, Pressable, Text,  TextInput, View, Alert} from 'react-native';
import { Link, router } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Login() {
  const [email, setEmail] = useState(''); // State variable for name
  const [password, setPassword] = useState(''); // State variable for password
  const [isLoggedIn, setIsLoggedIn] = useState(false);// State variable the verify if the user is already logged in

  async function getData() {
    const data = await AsyncStorage.getItem('isLoggedIn');
    console.log(data,'at index.jsx');
    setIsLoggedIn(data);
  }

  useEffect(() => {
    getData();
  });

  function handleSubmit() {
    console.log(email, password);
    const userData = {
      email,
      password,
    };
    axios.post('http://10.0.0.176:3000/login-user', userData).
    then((res) => {console.log(res.data);
      if (res.data.status == 'ok') {
        Alert.alert('Logged in Successfully!!');
        AsyncStorage.setItem('token', res.data.data);
        AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
        router.replace("/home");;
      } else {
        Alert.alert(JSON.stringify(res.data));
      }
  
    })
  }

  if(isLoggedIn){
    return(
      router.replace("/home")
    )
  }

  else{
    return(
      <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('./img/Wolvesprojeto 1.png')} />
      </View>
      <View style={styles.containerFields}>
        <TextInput style={styles.inputFields}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput style={styles.inputFields}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        /> 
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.buttons} title="Login" onPress={() => handleSubmit()}>
          <Text>Login</Text>
        </Pressable>
        <Text style={styles.text}>Don't have an account?</Text>
        <Pressable style={styles.buttons} title="Sign Up" onPress={() => router.replace("/signUp")}>
          <Text >Sing Up</Text>
        </Pressable>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1869B2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Roboto',
    color: 'white',
    fontSize: 16,
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',  /* 10% margin top */
    marginBottom: '10%', /* 10% margin bottom */
    marginLeft: 0,       /* No margin left */
    marginRight: 0,      /* No margin right */
    width: 289,
    height: 223,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginLeft: 0,       /* No margin left */
    marginRight: 0,    /* No margin right */
  },
  containerFields: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20%',       /* No margin left */
    marginRight: '20%', 
    marginBottom: '5%', /* 10% margin bottom */
    
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 30,
    backgroundColor: '#3394EC',
    borderRadius: 5,
    padding: 5,
    margin: 15,
  },
  inputFields: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    textAlign: 'center',
    width: 250,
    height: 35,
    marginTop: 10,  /* 10% margin top */
    marginBottom: 10, /* 10% margin bottom */
    marginLeft: 0,       /* No margin left */
    marginRight: 0,      /* No margin right */
    borderRadius: 15,
    padding: 10,
  },

});

export default Login;