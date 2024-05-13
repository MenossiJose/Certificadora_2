import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});