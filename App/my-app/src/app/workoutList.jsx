import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';

const exercises = [
  { id: '1', name: 'Lat Pull Down (Máquina)', muscleGroup: 'Costas' },
  { id: '2', name: 'Lat Pull Down (Máquina)', muscleGroup: 'Costas' },
  { id: '3', name: 'Lat Pull Down (Máquina)', muscleGroup: 'Costas' },
  { id: '4', name: 'Lat Pull Down (Máquina)', muscleGroup: 'Costas' },
  { id: '5', name: 'Lat Pull Down (Máquina)', muscleGroup: 'Costas' },
  { id: '6', name: 'Lat Pull Down (Máquina)', muscleGroup: 'Costas' },
  { id: '7', name: 'Lat Pull Down (Máquina)', muscleGroup: 'Costas' },
  { id: '8', name: 'Lat Pull Down (Máquina)', muscleGroup: 'Costas' },
  { id: '9', name: 'Lat Pull Down (Máquina)', muscleGroup: 'Costas' },
];

export default function App() {
  const [selectedId, setSelectedId] = useState(null);

  const handleBack = () => {
    router.replace("/workoutCreation");
    };

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#3A3D54' : '#2D2F3A';
    const borderColor = item.id === selectedId ? 'white' : '#2D2F3A';
    const icon = item.id === selectedId ? <Ionicons name="checkmark" size={24} color="white" /> : null;

    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item.id)}
        style={[styles.exerciseItem, { backgroundColor, borderColor }]}
      >
        <Image source={{uri: 'https://img.icons8.com/ios-filled/50/ffffff/lat-pulldown.png'}} style={styles.exerciseIcon} />
        <View style={styles.exerciseDetails}>
          <Text style={styles.exerciseText}>{item.name}</Text>
          <Text style={styles.muscleGroup}>{item.muscleGroup}</Text>
        </View>
        {icon}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleBack}>
            <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
      <Text style={styles.header}>Exercícios</Text>
      
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        extraData={selectedId}
      />
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
  header: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2D2F3A',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  exerciseIcon: {
    width: 32,
    height: 32,
  },
  exerciseDetails: {
    flex: 1,
    marginLeft: 10,
  },
  exerciseText: {
    color: 'white',
    fontSize: 16,
  },
  muscleGroup: {
    color: '#6C6D7A',
    fontSize: 14,
  },
});
