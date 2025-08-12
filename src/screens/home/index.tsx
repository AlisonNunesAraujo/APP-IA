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

type DataUsers = {
  messageUser: string;
  messageIA: string;
  uid: string;
  created: Date;
};

export default function Home() {
 
  const [list, setList] = useState<DataUsers[]>([]);
  const [message, setMessage] = useState<string>('');


  const ai = new GoogleGenAI({
    apiKey: 'AIzaSyCveaBX494NX4tYaWkwMjxC0lRpIVr9L6A',
  });
  async function postMessage() {
    if (message === '') {
      Alert.alert('Por favor, insira uma mensagem.');
      return;
    }

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: message,
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

  return (
    <View style={styles.container} onTouchStart={() => Keyboard.dismiss()}>
      <Header />
      <View>
        <FlatList
          style={styles.list}
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

        <TouchableOpacity style={styles.icon} onPress={() => postMessage()}>
          <Text style={styles.textEnv}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
