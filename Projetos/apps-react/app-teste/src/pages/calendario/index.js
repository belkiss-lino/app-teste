import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/header';

export default function Calendario() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLista}>
        <Text style={styles.text}>Calendário</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  containerLista: {
    marginTop: '20%',
    paddingTop: 10,
    alignSelf: 'center'
  },
  direction: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  }
});
