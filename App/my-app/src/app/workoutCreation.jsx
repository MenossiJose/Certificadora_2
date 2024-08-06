import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';

const exercises = [
  { id: '1', name: 'Lat Pull Down (Máquina)', sets: '3 x', muscleGroup: 'Costas' }
];

const handleBack = () => {
    router.replace("/workouts");
};

const handleAddButton = () => {
    router.replace("/workoutList");
};

const handleEnd = () => {
    router.replace("/workoutExplain");
};

export default function App() {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleBack}>
            <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
      <Text style={styles.header}>Costas</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.exerciseItem}>
            <Ionicons name="barbell-outline" size={32} color="white" />
            <View style={styles.exerciseDetails}>
              <Text style={styles.exerciseText}>{item.sets} {item.name}</Text>
              <Text style={styles.muscleGroup}>{item.muscleGroup}</Text>
            </View>
          </View>
        )}
      />
      
      <TouchableOpacity style={styles.addButton} onPress={handleAddButton}>
        <Ionicons name="add" size={24} color="white" />
        <Text style={styles.addButtonText}>Adicionar Exercício</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.finalizeButton} onPress={handleEnd}>
        <Text style={styles.finalizeButtonText}>FINALIZAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2F3A',
    paddingHorizontal: 20,
    paddingTop: 20,
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
  },
  exerciseDetails: {
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
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#353746',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    marginLeft: 10,
  },
  finalizeButton: {
    backgroundColor: '#1869B2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  finalizeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
});