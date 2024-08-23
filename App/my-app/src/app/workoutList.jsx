import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { fetchExercisesByBodypart } from '../../api/exerciseDB';
import { Dropdown } from 'react-native-element-dropdown';


const bodyPartMap = {
  '1': 'back',
  '2': 'legs',
  '3': 'chest',
  '4': 'shoulders',
  '5': 'biceps',
  // Add more mappings as needed
};

const data = [
  { label: 'Costas', value: '1' },
  { label: 'Pernas', value: '2' },
  { label: 'Peito', value: '3' },
  { label: 'Ombros', value: '4' },
  { label: 'Bíceps', value: '5' },
  // Add more items as needed
];

export default function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [exercises, setExercises] = useState([]);
  const router = useRouter();
  const item = useLocalSearchParams();
  const [value, setValue] = useState(null);

  const getExercises = async(bodyPart) => {
    let data = await fetchExercisesByBodypart(bodyPart);
    setExercises(data);
    console.log('got data', data);
  }

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
        <Image source={{uri: item.gifUrl}} style={styles.exerciseIcon} />
        <View style={styles.exerciseDetails}>
          <Text style={styles.exerciseText}>{item.name}</Text>
          <Text style={styles.muscleGroup}>{item.target}</Text>
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

      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
          getExercises(bodyPartMap[item.value]); // Fetch exercises based on the selected body part
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        )}
      />
      
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
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
  },
  icon: {
    marginRight: 5,
    color: 'white',
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'white',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'white',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});