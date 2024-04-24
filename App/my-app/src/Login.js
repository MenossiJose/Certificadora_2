import react from 'react';
import {Button, Text,  TextInput,  View} from 'react-native';

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
        <Button title="Sign Up" />
    </View>
  );
}

export default Login;