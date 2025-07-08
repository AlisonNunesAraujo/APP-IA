import { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifiqued, setVerifiqued] = useState(true);

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
            <TextInput placeholder="Email" style={styles.inputs} />
            <Text style={styles.label}>Senha:</Text>
            <TextInput placeholder="Senha" style={styles.inputs} />
            <TouchableOpacity style={styles.button}>
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
            <TextInput placeholder="Email" style={styles.inputs} />
            <Text style={styles.label}>Senha:</Text>
            <TextInput placeholder="Senha" style={styles.inputs} />
            <TouchableOpacity style={styles.button}>
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
