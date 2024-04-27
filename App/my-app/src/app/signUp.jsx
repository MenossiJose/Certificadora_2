import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Link } from 'expo-router';
import axios from 'axios';

function SignUp() {
  const [name, setName] = useState(''); // State variable for name
  const [email, setEmail] = useState(''); // State variable for email
  const [password, setPassword] = useState(''); // State variable for password
  const [errors, setErrors] = useState({}); // State for validation errors

  const validate = () => {
    const newErrors = {};

    if (!name) {
      newErrors.name = 'Name is required';
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password || password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = () => {
    if (!validate()) return; // Prevent submission if validation fails

    const userData = {
      name,
      email,
      password,
    };

    axios.post('http://192.168.3.4:3000/signup', userData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <View>
      <Text>Sign Up</Text>
      {errors.name && <Text style={{ color: 'red' }}>{errors.name}</Text>}
      <TextInput
        placeholder="Username"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      {errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Button title="Sign Up" onPress={handleSubmit} />
      <Link href={"/login"}>Go Back</Link>
    </View>
  );
}

export default SignUp;