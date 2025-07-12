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
  Register:(info: createUser) => Promise<void>;
  Login: (info: LoginUser) => Promise<void>;
};

type createUser = {
  email: string;
  password: string;
}
type LoginUser = {
  email: string;
  password: string;
}

export const ContextApi = createContext({} as User);

export default function AuthContex({ children }: { children: ReactNode }) {
  const [user, setUser] = useState({
    email: '',
    uid: '',
  });
  const verifiqued = user?.email && user?.uid;

  async function Register({ email, password }: createUser) {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      ).then(() => {
       
        setUser({
          email: email,
          uid: password,
        });
         Alert.alert('cadastrado com sucesso');
      });
    } catch (error) {
      Alert.alert('erro ao cadastrar');
    }
  }

  async function Login({ email, password }: LoginUser) {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      ).then(() => {
        Alert.alert('entrou com sucesso');
        setUser({
          email: email,
          uid: password,
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
