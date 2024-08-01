import { useEffect, useState } from 'react';
import { Image, StyleSheet, Pressable, Button, Text, TextInput, View, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, router } from 'expo-router';

export default function App() {

  const [email, setEmail] = useState('');
  const [position, setPos] = useState(''); // State variable for position
  const [height, setHeight] = useState(''); // State variable for height
  const [weight, setWeight] = useState(''); // State variable for weight
  const [age, setAge] = useState(''); // State variable for age
  const [username, setUsername] = useState(''); // State variable for username

  const getData = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log(token);
    axios
      .post('http://192.168.3.4:3000/userdata', { token: token })
      .then((res) => {
        if (res.data.status === 'ok') {
          const userData = res.data.data;
          setUsername(userData.name);
          setEmail(userData.email);
          setWeight(userData.weight);
          setHeight(userData.height);
          setAge(userData.age);
          setPos(userData.position);
        } else {
          Alert.alert('Error fetching user data');
        }
        console.log(res.data);
      })
      .catch((error) => {
        Alert.alert('An error occurred', error.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  function handlePress() {
    console.log(email, age, weight, height, position, "O que vai ser adicionado");

    const userData = {
      email,
      age,
      weight,
      height,
      position,
    };
    
    axios.post('http://192.168.3.4:3000/update-profile', userData).
      then((res) => {
        console.log(res.data, "aqui e o perfil no update");
        if (res.data.status == 'ok') {
          Alert.alert('Profile updated Successfully!!');
        } else {
          Alert.alert(JSON.stringify(res.data));
        }

      })

  };

  const handleLogout = async () => {
    Alert.alert(
      "Logout",
      "You have been logged out!",
      [
        {
          text: "OK",
          onPress: async () => {
            // Clear tokens and user data
            await AsyncStorage.clear();
            router.replace("/")
          }
        }
      ]
    );
  };

  const handleButton = () => {
    router.replace("/workouts")
  };



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.iconPlayer} source={require('./img/icon.png')} />
        <View style={styles.playerInfo}>
          <Text
            style={
              {
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 5,
              }
            }>{username ? username : 'Carregando...'}</Text>
          <Text
            style={
              {
                fontSize: 14,
                fontWeight: 'bold',
              }
            }
          >POS</Text>
          <TextInput style={{
            color: '#1869B2',
            fontSize: 12,
            fontWeight: 'bold',
          }}
            placeholder="+"
            value={position}
            onChangeText={(text) => setPos(text)}
          />

          <Pressable style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>⎋</Text>
          </Pressable>

        </View>
      </View>
      <View style={styles.bodyContent}>
        <View style={styles.cardContainer}>
          <View style={styles.cardStats}>
            <Image style={styles.icons} source={require('./img/peso.png')} />
            <Text style={styles.textStats} >Peso</Text>
          </View>
          <View>
            <Pressable>
              <TextInput style={styles.dataInput}
                placeholder={weight ? weight : '+'}
                value={weight}
                onChangeText={(text) => setWeight(text)}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardStats}>
            <Image style={styles.icons} source={require('./img/altura.png')} />
            <Text style={styles.textStats}>Altura</Text>
          </View>
          <View>
            <Pressable>
              <TextInput style={styles.dataInput}
                placeholder="+"
                value={height}
                onChangeText={(text) => setHeight(text)}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardStats}>
            <Image style={styles.icons} source={require('./img/idade.png')} />
            <Text style={styles.textStats}>Idade</Text>
          </View>
          <View>
            <Pressable>
              <TextInput style={styles.dataInput}
                placeholder="+"
                value={age}
                onChangeText={(text) => setAge(text)}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.saveContainer}>
          <Pressable onPress={() => handlePress()}>
            <Text style={styles.saveButton}>Salvar</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.navContainer}>
        <Image source={require('./img/user_nav.png')} />
        <Pressable  onPress={handleButton}>
          <Image source={require('./img/dumbell_nav.png')} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Roboto',
  },
  header: {
    backgroundColor: '#E9E9E9',
    flexDirection: 'row',
    height: 86,
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  playerInfo: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginLeft: '10%',
  },
  bodyContent: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'start',
    backgroundColor: '#2B2F3A',

  },
  cardContainer: {
    height: 73,
    weight: 336,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 12,
    marginRight: 12,
    marginTop: 40,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 25,
  },
  iconPlayer: {
    width: 70,
    height: 70,
  },
  icons: {
    width: 52,
    height: 48,
  },
  cardStats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'start',
  },
  textStats: {
    fontSize: 18,
    color: 'white',
    marginTop: 10,
    marginLeft: 10,
  },
  dataInput: {
    backgroundColor: '#D9D9D9',
    fontSize: 18,
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 5,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 15,
  },
  navContainer: {
    backgroundColor: '#1869B2',
    position: 'absolute',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    bottom: 0,
    width: '100%',
    height: 44,
    paddingTop: 7,
  },
  saveContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  saveButton: {
    color: '#1869B2',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    backgroundColor: '#D9D9D9',
    padding: 7,
  },
  logoutButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    position: 'absolute',
    top: 20,
    left: 200,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },

});