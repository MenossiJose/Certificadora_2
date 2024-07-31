import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Treinos</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.subHeader}>MEUS TREINOS</Text>
          <View style={styles.workoutBox}>
            <Text style={styles.workoutTitle}>Costas</Text>
            {Array(5).fill().map((_, i) => (
              <Text key={i} style={styles.workoutText}>2x - Lat Pulldown</Text>
            ))}
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>INICIAR UM TREINO VAZIO</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.subHeader}>MODELOS DE TREINO PRONTOS</Text>
          <View style={styles.workoutBox}>
            <Text style={styles.workoutTitle}>Workout A</Text>
            {Array(5).fill().map((_, i) => (
              <Text key={i} style={styles.workoutText}>2x - Lat Pulldown</Text>
            ))}
          </View>
          <View style={styles.workoutBox}>
            <Text style={styles.workoutTitle}>Workout B</Text>
            {Array(5).fill().map((_, i) => (
              <Text key={i} style={styles.workoutText}>2x - Lat Pulldown</Text>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>👤</Text>
        <Text style={styles.footerText}>🏋️</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2F38',
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
  section: {
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  workoutBox: {
    backgroundColor: '#3E4149',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  workoutTitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  workoutText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1E2127',
    paddingVertical: 10,
  },
  footerText: {
    color: '#fff',
    fontSize: 24,
  },
});