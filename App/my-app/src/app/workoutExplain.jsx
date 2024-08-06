import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import { router } from 'expo-router';

export default function App() {
  const [reps, setReps] = useState(['REPETIÇÕES', '10', '10']);
  const [weights, setWeights] = useState(['PESO', '45KG', '45KG']);
  const handleBack = () => {
    router.replace("/workouts");
};

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>

      <Image
        source={{ uri: 'https://www.example.com/lat-pull-down.png' }} // Substitute with your image URL
        style={styles.exerciseImage}
      />

      <Text style={styles.exerciseTitle}>Lat Pull Down (Máquina)</Text>

      {[1, 2, 3].map((series, index) => (
        <View key={index} style={styles.seriesContainer}>
          <Text style={styles.seriesTitle}>{`${series}° Série`}</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={reps[index]}
              style={styles.picker}
              onValueChange={(itemValue) => {
                const newReps = [...reps];
                newReps[index] = itemValue;
                setReps(newReps);
              }}
            >
              <Picker.Item label="REPETIÇÕES" value="REPETIÇÕES" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="12" value="12" />
              <Picker.Item label="15" value="15" />
            </Picker>
            <Picker
              selectedValue={weights[index]}
              style={styles.picker}
              onValueChange={(itemValue) => {
                const newWeights = [...weights];
                newWeights[index] = itemValue;
                setWeights(newWeights);
              }}
            >
              <Picker.Item label="PESO" value="PESO" />
              <Picker.Item label="40KG" value="40KG" />
              <Picker.Item label="45KG" value="45KG" />
              <Picker.Item label="50KG" value="50KG" />
            </Picker>
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1E2E',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  exerciseImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  exerciseTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  seriesContainer: {
    marginBottom: 20,
  },
  seriesTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2D2F3A',
    borderRadius: 10,
    padding: 10,
  },
  picker: {
    flex: 1,
    color: 'white',
    marginRight: 10,
    backgroundColor: '#3A3D54',
  },
  addButton: {
    backgroundColor: '#353746',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 50,
    height: 50,
  },
});