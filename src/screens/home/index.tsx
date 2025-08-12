import { useState, useEffect, useRef } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard,
  Alert,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { styles } from './styles';
import Header from '../../components/header';
import { db } from '../../services/firebase';
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { GoogleGenAI } from '@google/genai';

<<<<<<< HEAD
type laista = {
  mensagemUser: string;
=======
type DataUsers = {
  messageUser: string;
  messageIA: string;
>>>>>>> login
  uid: string;
  created: Date;
};

export default function Home() {
<<<<<<< HEAD
  const [mensagens, setMensagens] = useState('');
  const [resposta, setResposta] = useState<string | undefined>();
  const [list, setList] = useState<laista[]>([]);
  const [loading, setLoading] = useState(false);
  const flatListRef = useRef<FlatList>(null);
=======
 
  const [list, setList] = useState<DataUsers[]>([]);
  const [message, setMessage] = useState<string>('');
>>>>>>> login

  const ai = new GoogleGenAI({
    apiKey: 'AIzaSyCveaBX494NX4tYaWkwMjxC0lRpIVr9L6A',
  });
  async function postMessage() {
    if (message === '') {
      Alert.alert('Por favor, insira uma mensagem.');
      return;
    }
<<<<<<< HEAD
    Keyboard.dismiss();
    setLoading(true);
    Main();

    const mensagensRef = addDoc(collection(db, 'mensagens'), {
      mensagemUser: mensagens,
      uid: '123',
      resposta: resposta,
      createdAt: serverTimestamp(),
    })
      .then(() => {
        setMensagens('');
        setLoading(false);
      })
      .catch(error => {
        console.error('Error adding document: ', error);
        setLoading(false);
      });
    setLoading(false);
  }
  async function Main() {
    const response = await ai.models
      .generateContent({
        model: 'gemini-2.5-flash',
        contents: mensagens,
      })

      .then(response => {
        setResposta(response.text);
      })
      .catch(error => {
        Alert.alert('erro na main ');
=======

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: message,
>>>>>>> login
      });

      await addDoc(collection(db, 'message'), {
        messageUser: message,
        messageIA: response.text,
        created: serverTimestamp(),
        mobile: true,
        // uid: user.uid,
      });
      Alert.alert('Mensagem enviada com sucesso!');
      setMessage('');
    } catch (error) {
      console.error('Erro ao enviar mensagem: ', error);
      Alert.alert('Erro ao enviar mensagem. Tente novamente.');
    }
  }
 

  useEffect(() => {
<<<<<<< HEAD
    async function getData() {
      const dataQuery = query(
        collection(db, 'mensagens'),
        orderBy('createdAt', 'asc'),
      );
      getDocs(dataQuery)
        .then(snapshot => {
          let list = [];
          snapshot.forEach(doc => {
            list.push({
              mensagemUser: doc.data().mensagemUser,
              uid: doc.data().uid,
              resposta: doc.data().resposta,
              createdAt: serverTimestamp(),
            });
            setList(list);
          });

          setTimeout(() => {
            flatListRef.current?.scrollToEnd({ animated: true });
          }, 600);
        })
        .catch(error => {
          Alert.alert('Algo deu errado!');
        });
    }
    getData();
  }, [Main, PostMensagens]);
=======
    async function getMessages() {
      const dataRef = collection(db, 'message');

      getDocs(dataRef).then(snapshot => {
        let list: DataUsers[] = [];

        snapshot.forEach(doc =>
          list.push({
            messageUser: doc.data().messageUser,
            messageIA: doc.data().messageIA,
            uid: doc.data().uid,
            created: doc.data().created,
          }),
          setList(list)
        );
      });
    }
    getMessages();
  }, [list]);
>>>>>>> login

  return (
    <View style={styles.container} onTouchStart={() => Keyboard.dismiss()}>
      <Header />
      <View>
        <FlatList
          style={styles.list}
          ref={flatListRef}
          data={list}
          renderItem={({ item }) => (
            <View style={styles.areaText}>
              <Text style={styles.send}>{item.messageUser}</Text>
              <Text style={styles.resIA}>{item.messageIA}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.footer}>
        <TextInput
          placeholder="Mensagem"
          value={message}
          onChangeText={setMessage}
          style={styles.input}
        />

<<<<<<< HEAD
        <TouchableOpacity style={styles.icon} onPress={() => PostMensagens()}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.textEnv}>Enviar</Text>
          )}
=======
        <TouchableOpacity style={styles.icon} onPress={() => postMessage()}>
          <Text style={styles.textEnv}>Enviar</Text>
>>>>>>> login
        </TouchableOpacity>
      </View>
    </View>
  );
}
