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
        .post('http:////25.5.187.167:3000/userdata', {token: token})
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
        <View style={styles.cardContainer}>
          <View style={styles.cardStats}>
            <Image style={styles.icons} source={require('./img/peso.png')} />
            <Text style={styles.textStats} >Peso</Text>
          </View>
          <View>
          <Pressable>
            <Text style={styles.dataInput}>+</Text>
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
            <Text style={styles.dataInput}>+</Text>
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
            <Text style={styles.dataInput}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.navContainer}>

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
    justifyContent: 'start',
    backgroundColor: '#2B2F3A',
    
  },
  cardContainer : {
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
    bottom: 0,
    height: 44,
  },
  
});