import react from 'react';
import {Button, Text,  TextInput,  View} from 'react-native';

function SignUp() {
  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Username"
      />
      <TextInput
        placeholder="Email"
      />
      <TextInput
        placeholder="Password"
      />
      <Button title="Sign Up" />

    </View>
  );
}

export default SignUp;