import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import {Image, StyleSheet, Pressable, Text,  TextInput, View, Alert} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

    async function getData(){
        const token = await AsyncStorage.getItem('token');
        console.log(token);
        axios
        .post('http:////10.0.0.176:3000/userdata', {token: token})
        .then((res) => {
            console.log(res.data);
        });
    }

    useEffect(() => {
        getData();
    }, []);

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
          }>Fulano</Text>
          <Text
          style={
            {
              fontSize: 14,
              fontWeight: 'bold',
            }
          }
          >POS</Text>
          <Text
          style={
            {
              color: '#1869B2',
              fontSize: 12,
              fontWeight: 'bold',
            }
          }>QB</Text>
        </View>
      </View>
      <View style={styles.bodyContent}>
        <View>
          <Text>Peso</Text>
        </View>
        <View>
          <Text>Altura</Text>
        </View>
        <View>
          <Text>Idade</Text>
        </View>
      </View>
      <StatusBar style="auto" />
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
    display: 'flex',
    flexDirection: 'row',
    height: 86,
    alignItems: 'center',
    paddingLeft: 20,
  },
  playerInfo: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginLeft: '10%',
  },
  bodyContent: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: '#2B2F3A',
    
  },
  iconPlayer: {
    width: 70,
    height: 70,
  },
  
});