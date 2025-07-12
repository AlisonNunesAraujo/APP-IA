import { useState,useContext } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';

import { ContextApi } from '../../contextApi';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifiqued, setVerifiqued] = useState(true);
  

  const {Register,Login} = useContext(ContextApi);

  async function handleRegister() {
    Register({ email, password });
    setVerifiqued(!verifiqued);
  }

  async function handleLogin() {
    Login({ email, password });
    setVerifiqued(!verifiqued);
  }

  return (
    <SafeAreaView
      style={styles.container}
      onTouchStart={() => Keyboard.dismiss()}
    >
      {verifiqued ? (
        <View style={styles.form}>
          <View style={styles.formItens}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.label}>Email:</Text>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.inputs} />
            <Text style={styles.label}>Senha:</Text>
            <TextInput placeholder="Senha" value={password} onChangeText={setPassword} style={styles.inputs} />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setVerifiqued(!verifiqued)}
            >
              <Text style={styles.textButton}>Criar conta!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.foto}>
            <Text>Foto</Text>
          </View>
        </View>
      ) : (
        <View style={styles.form}>
          <View style={styles.formItens}>
            <Text style={styles.title}>Crie sua conta</Text>
            <Text style={styles.label}>Email:</Text>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.inputs} />
            <Text style={styles.label}>Senha:</Text>
          <TextInput placeholder="Senha" value={password} onChangeText={setPassword} style={styles.inputs} />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.textButton}>Criar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setVerifiqued(!verifiqued)}
            >
              <Text style={styles.textButton}>Voltar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.foto}>
            <Text>Foto</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
