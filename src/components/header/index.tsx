import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import RemixIcon from 'react-native-remix-icon';

export default function header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Header</Text>
      <Text style={styles.text}>Iniciar chat</Text>
      <TouchableOpacity>
        <RemixIcon name="settings-3-line" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
