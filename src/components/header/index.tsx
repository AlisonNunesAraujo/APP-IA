import { Text, View } from 'react-native';
import { styles } from './styles';
export default function header() {
 return (
   <View style={styles.container}>
    <Text style={styles.text}>Header</Text>
    <Text style={styles.text}>Iniciar chat</Text>
    <Text style={styles.text}>Icone</Text>
   </View>
  );
}