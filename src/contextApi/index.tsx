<<<<<<< HEAD
import { createContext, ReactNode, useState, useEffect } from 'react';
import { Alert } from 'react-native';
=======
import { createContext, useState } from 'react';
>>>>>>> login
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../services/firebase';
<<<<<<< HEAD

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
=======
import { Alert } from 'react-native';
import { db } from '../services/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';

type States = {
  user: User;
  createUser: (name: string, email: string, password: string) => Promise<void>;
  verifiqued: boolean;
  Login: (email: string, password: string) => Promise<void>;
};

type User = {
  email: string;
  uid: string;
};

export const AppContext = createContext({} as States);

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User>({
    email: '',
    uid: '',
  });

  const verifiqued = !!user?.email && !!user.uid;

  async function createUser(name: string, email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const data = await addDoc(collection(db, 'users'), {
        name: name,
        email: email,
        mobile: true,
        createdAt: Timestamp.now(),
      });
      setUser({
        email: userCredential.user.email || '',
        uid: userCredential.user.uid,
      });

      Alert.alert('Conta criada com sucesso!');
    } catch (error) {
      Alert.alert('Erro ao criar conta, tente novamente.');
      console.error('Error creating user: ', error);
    }
  }

  async function Login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      setUser({
        email: userCredential.user.email || '',
        uid: userCredential.user.uid,
      });
      Alert.alert('Login realizado com sucesso!');
    } catch (error) {
      Alert.alert('Erro ao fazer login, tente novamente.');
      console.error('Error logging in: ', error);
>>>>>>> login
    }
  }

  return (
<<<<<<< HEAD
    <ContextApi.Provider value={{ user, Register, Login, verifiqued }}>
      {children}
    </ContextApi.Provider>
=======
    <AppContext.Provider value={{ user, createUser, verifiqued, Login }}>
      {children}
    </AppContext.Provider>
>>>>>>> login
  );
}
