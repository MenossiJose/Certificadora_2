import react from 'react';
import {Text,  TextInput,  View} from 'react-native';

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

    </View>
  );
}

export default Login;