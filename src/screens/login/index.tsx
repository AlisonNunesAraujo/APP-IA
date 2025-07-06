import { useState } from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const verifiqued = false;
  
  return (
    <SafeAreaView>
      {verifiqued ? (
        <View>
          <View>
            <Text>Login</Text>
            <TextInput placeholder="Emaillaaaa" />
            <TextInput placeholder="Senha" />
          </View>
          <View>
            <Text>Foto</Text>
          </View>
        </View>
      ) : (
        <View>
          <View>
            <Text>Crie sua conta</Text>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Senha" />
          </View>
          <View>
            <Text>Foto</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
