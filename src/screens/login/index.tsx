<<<<<<< HEAD
import { useState,useContext } from 'react';
=======
import { useState, useContext } from 'react';
>>>>>>> login
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
<<<<<<< HEAD
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';

import { ContextApi } from '../../contextApi';
=======
  TouchableOpacity,
  Alert,
} from 'react-native';
import { styles } from './styles';

import { AppContext } from '../../contextApi';
>>>>>>> login

export default function Login() {
  const { createUser, Login } = useContext(AppContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifiqued, setVerifiqued] = useState(true);
<<<<<<< HEAD
  

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
=======

  async function handleCreateUser() {
    if (name === '' || email === '' || password === '') {
      Alert.alert('Preencha todos os campos');
      return;
    }
    await createUser(name, email, password);
    setName('');
    setEmail('');
    setPassword('');
    
  }

  async function handleLogin() {
    if (email === '' || password === '') {
      Alert.alert('Preencha todos os campos');
      return;
    }
   
    Login(email, password)
    setEmail('');
    setPassword('');
  }

  return (
    <SafeAreaView style={styles.container}>
      {verifiqued ? (
        <View style={styles.form}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <TextInput
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setVerifiqued(false)}
          >
            <Text style={styles.buttonText}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.form}>
          <Text style={styles.title}>Crie sua conta</Text>
          <TextInput
            placeholder="Nome"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <TextInput
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
          <TouchableOpacity style={styles.button} onPress={handleCreateUser}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setVerifiqued(true)}
          >
            <Text style={styles.buttonText}>Já tenho conta</Text>
          </TouchableOpacity>
>>>>>>> login
        </View>
      )}
      <View>
        <Text>Foto</Text>
      </View>
    </SafeAreaView>
  );
}
