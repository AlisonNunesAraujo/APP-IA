import { createContext, ReactNode, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../services/firebase';

type User = {
  user: {
    email: string;
    uid: string;
  };
  verifiqued: boolean | string;
  Register: () => void;
  Login: () => void;
};

export const ContextApi = createContext({} as User);

export default function AuthContex({ children }: { children: ReactNode }) {
  const [user, setUser] = useState({
    email: '',
    uid: '',
  });
  const verifiqued = user?.email && user?.uid;

  async function Register() {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        'a@gmail.com',
        '123456',
      ).then(() => {
        Alert.alert('cadastrado com sucesso');
        setUser({
          email: 'a@gmail.com',
          uid: '123456',
        });
      });
    } catch (error) {
      Alert.alert('erro ao cadastrar');
    }
  }

  async function Login() {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        'a@gmail.com',
        '123456',
      ).then(() => {
        Alert.alert('entrou com sucesso');
        setUser({
          email: 'a@gmail.com',
          uid: '123456',
        });
      });
    } catch (error) {
      Alert.alert('erro ao cadastrar');
    }
  }

  return (
    <ContextApi.Provider value={{ user, Register, Login, verifiqued }}>
      {children}
    </ContextApi.Provider>
  );
}
