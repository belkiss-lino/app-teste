import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';


export default function Notificacoes() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLista}>

        <TouchableOpacity style={styles.containerText}>
          <View style={styles.direction}>
            <View style={styles.icons}>
              <Ionicons
                style={styles.checkIcon}
                name="checkmark-circle"
                size={29}
                color="#000"
              />
            </View>
              <Text style={styles.text}>Atestado aprovado</Text>
          </View>
            <Text>O atestado foi analisado pelo RH e aprovado.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.containerText}>
          <View style={styles.direction}>
            <View style={styles.icons}>
              <Ionicons
                  style={styles.checkIcon}
                  name="checkmark-circle"
                  size={29}
                  color="#000"
                />
            </View>
            <Text style={styles.text}>Ponto aprovado</Text>
          </View>
            <Text>O lançamento do ponto foi analisado pelo RH e aprovado.</Text>
        </TouchableOpacity>
            
        <TouchableOpacity style={styles.containerText}>
          <View style={styles.direction}>
            <View style={styles.icons}>
              <Ionicons
                  style={styles.alertIcon}
                  name="alert-circle"
                  size={29}
                  color="#000"
                />
            </View>
            <Text style={styles.text}>Lembrete de ponto</Text>
          </View>
            <Text>Não houve lançamento de ponto para a saída do dia 16/08/2022</Text>
        </TouchableOpacity>
            
        <TouchableOpacity style={styles.containerText}>
          <View style={styles.direction}>
            <View style={styles.icons}>
              <Ionicons
                  style={styles.alertIcon}
                  name="alert-circle"
                  size={29}
                  color="#000"
                />
            </View>
            <Text style={styles.text}>Lembrete de ponto</Text>
          </View>
            <Text>Não houve lançamento de ponto para a saída do dia 16/08/2022</Text>
        </TouchableOpacity>
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
    marginTop: '1%',
    paddingTop: 10,
  },
  direction: {
    flexDirection: 'row',
  },
    containerText: {
      paddingStart: 20,
      paddingEnd: 20,
      marginRight: 20,
      marginLeft: 20,
      backgroundColor: '#fff',
      marginBottom: '2%',
      borderRadius: 8,
      padding: 15,
      borderWidth: 1,
      borderColor: '#e2dede',
  },
  text: {
    paddingTop: 2,
    paddingBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  icons: {
    paddingRight: 5,
  },
  icons2: {
    paddingRight: 5,
  },
  checkIcon: {
    color: '#41b829',
  },
  alertIcon: {
    color: '#e79b22',
  }
});

