import react from 'react';
import {Button, Text,  TextInput,  View} from 'react-native';
import { Link, router } from 'expo-router';

function Login() {
  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Username"
      />
      <TextInput
        placeholder="Password"
      />
      <Button title="Login" />
      <Text>Don't have an account?</Text>

      <Button title="Sign Up" onPress={() => router.replace("/signUp")} />

      <Link href={"/"}>Go Back</Link>
      
    </View>
  );
}

export default Login;