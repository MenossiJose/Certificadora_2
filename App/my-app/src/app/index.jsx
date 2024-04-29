import react from 'react';
import {Image, StyleSheet, Pressable, Text,  TextInput,  View} from 'react-native';
import { Link, router } from 'expo-router';

function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('./img/Wolvesprojeto 1.png')} />
      </View>
      <View style={styles.containerFields}>
        <TextInput style={styles.inputFields}
          placeholder="Username"
        />
        <TextInput style={styles.inputFields}
          placeholder="Password"
        /> 
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.buttons} title="Login">
          <Text>Login</Text>
        </Pressable>
        <Text style={styles.text}>Don't have an account?</Text>
        <Pressable style={styles.buttons} title="Sign Up" onPress={() => router.replace("/signUp")}>
          <Text >Sing Up</Text>
        </Pressable>
      </View>
      
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