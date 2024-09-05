import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Link, router, useLocalSearchParams, useRouter } from 'expo-router';
import { fetchExercisesByBodypart } from '../../api/exerciseDB';

export default function App() {
  const handleButton = () => {
    router.replace("/home")
  };

  const handlePress = () => {
    router.replace("/workoutCreation");
  };

  export default function Workouts() {
    const router = useRouter();
    const { selectedExerciseId } = useSearchParams(); // Recebe o ID do exercício selecionado
    const [selectedExercise, setSelectedExercise] = useState(null);
  
    // Função para buscar o exercício selecionado
    const getSelectedExercise = async (id) => {
      if (id) {
        const exercise = await fetchExerciseById(id);
        setSelectedExercise(exercise);
      }
    };
  
    useEffect(() => {
      if (selectedExerciseId) {
        getSelectedExercise(selectedExerciseId);
      }
    }, [selectedExerciseId]);
  
    const handleButton = () => {
      router.replace("/home");
    };
  
    const handlePress = () => {
      router.replace("/workoutCreation");
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Treinos</Text>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.section}>
            <Text style={styles.subHeader}>MEUS TREINOS</Text>
            <View>
              {selectedExercise && (
                <View style={styles.workoutBox}>
                  <Text style={styles.workoutTitle}>Exercício Selecionado</Text>
                  <Text style={styles.workoutText}>{selectedExercise.name}</Text>
                  <Text style={styles.workoutText}>Grupo Muscular: {selectedExercise.target}</Text>
                  <Image source={{ uri: selectedExercise.gifUrl }} style={styles.exerciseImage} />
                </View>
              )}
            </View>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text style={styles.buttonText}>INICIAR UM TREINO VAZIO</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <Text style={styles.subHeader}>MODELOS DE TREINO PRONTOS</Text>
            <View style={styles.workoutBox}>
              <Text style={styles.workoutTitle}>Workout A</Text>
              <View style={styles.container}>
                <Text style={styles.workoutText}>2x - Lat Pulldown</Text>
                <Text style={styles.workoutText}>3x - Bench Press</Text>
                <Text style={styles.workoutText}>4x - Squat</Text>
                <Text style={styles.workoutText}>2x - Deadlift</Text>
                <Text style={styles.workoutText}>3x - Bicep Curl</Text>
              </View>
            </View>
            <View style={styles.workoutBox}>
              <Text style={styles.workoutTitle}>Workout B</Text>
              <View style={styles.container}>
                <Text style={styles.workoutText}>2x - Shoulder Press</Text>
                <Text style={styles.workoutText}>3x - Leg Press</Text>
                <Text style={styles.workoutText}>4x - Pull-Up</Text>
                <Text style={styles.workoutText}>3x - Tricep Dips</Text>
                <Text style={styles.workoutText}>2x - Bulgarian Split Squat</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity onPress={handleButton}>
            <Image source={require('./img/user_nav.png')} />
          </TouchableOpacity>
          <Image source={require('./img/dumbell_nav.png')} />
        </View>
      </View>
    );
  }
  
}

 /*
  const router = useRouter();
  const item = useLocalSearchParams();
  console.log('got item', item);

  useEffect(() => {
    if(item) getExercises(item.name);
  },[item]);

  const getExercises = async(bodypart) => {
    let data = await fetchExercisesByBodypart(bodypart);
    console.log('got data', data);
  }*/



const styles = StyleSheet.create({
  container: {
    fontFamily: 'Roboto',
    flex: 1,
    backgroundColor: '#2B2F3A',
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
    borderTopWidth: 1.5,
    borderColor: 'white',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
  section: {
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 10,
    color: '#fff',
    marginBottom: 10,
  },
  workoutBox: {
    backgroundColor: '#2B2F3A',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: 'white',
    borderWidth: 1.5,
  },
  workoutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  workoutText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#3394EC',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    backgroundColor: '#1869B2',
    position: 'absolute',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    bottom: 0,
    width: '100%',
    height: 44,
    paddingTop: 7,
  },
  footerText: {
    color: '#fff',
    fontSize: 24,
  },
});