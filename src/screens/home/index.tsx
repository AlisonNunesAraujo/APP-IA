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

type laista = {
  mensagemUser: string;
  uid: string;
  resposta: string;
};

export default function Home() {
  const [mensagens, setMensagens] = useState('');
  const [resposta, setResposta] = useState<string | undefined>();
  const [list, setList] = useState<laista[]>([]);
  const [loading, setLoading] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  const ai = new GoogleGenAI({
    apiKey: 'AIzaSyCveaBX494NX4tYaWkwMjxC0lRpIVr9L6A',
  });
  async function PostMensagens() {
    if (mensagens === '') {
      Alert.alert('Digite uma mensagem');
      return;
    }
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
      });
  }

  useEffect(() => {
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
              <Text style={styles.send}>{item.mensagemUser}</Text>
              <Text style={styles.resIA}>{item.resposta}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.footer}>
        <TextInput
          placeholder="Mensagem"
          value={mensagens}
          onChangeText={setMensagens}
          style={styles.input}
        />

        <TouchableOpacity style={styles.icon} onPress={() => PostMensagens()}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.textEnv}>Enviar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
