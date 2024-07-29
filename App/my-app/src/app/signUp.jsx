import React, { useState} from 'react';
import {Image, StyleSheet, Button, Pressable, Text, TextInput, View, Alert  } from 'react-native';
import {router, Link } from 'expo-router';
import axios from 'axios';

function SignUp() {
  const [name, setName] = useState(''); // State variable for name
  const [email, setEmail] = useState(''); // State variable for email
  const [password, setPassword] = useState(''); // State variable for password
  const [errors, setErrors] = useState({}); // State for validation errors

  const validate = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = 'Name is required';
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password || password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = () => {
    if (!validate()) return; // Prevent submission if validation fails

    const userData = {
      name,
      email,
      password,
    };

    axios.
    post('http://192.168.3.4:3000/signup', userData)
      .then((res) => {
        console.log(res.data);
        if (res.data.status == 'ok') {
          Alert.alert('Registered Successfully!!');
          router.replace("/");
        } else {
          Alert.alert(JSON.stringify(res.data));
        }
      })
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('./img/Wolvesprojeto 1.png')} />
      </View>
        <Text style={styles.text}>Sign Up</Text>
        <View style={styles.containerFields}>
        {errors.name && <Text style={{ color: 'red' }}>{errors.name}</Text>}
        <TextInput style={styles.inputFields}
          placeholder="Username"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
        <TextInput style={styles.inputFields}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        {errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
        <TextInput style={styles.inputFields}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonContainer}>
      <Pressable style={styles.buttons} title="Sign Up" onPress={handleSubmit}>
          <Text >Sing Up</Text>
        </Pressable>
      </View>
      <Link style={styles.text} href={"/"}>Go Back</Link>
    </View>
  );
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
    marginTop: '5%',  
    marginBottom: '10%', 
    marginLeft: 0,       
    marginRight: 0,      
    width: 289,
    height: 223,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginLeft: 0,       
    marginRight: 0,   
  },
  containerFields: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20%',       
    marginRight: '20%', 
    marginBottom: '5%', 
  },
  inputFields: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    textAlign: 'center',
    width: 250,
    height: 35,
    marginTop: 10, 
    marginBottom: 10, 
    marginLeft: 0,      
    marginRight: 0,      
    borderRadius: 15,
    padding: 10,
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
});

export default SignUp;