import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Feather } from 'react-native-vector-icons';

export default function Header() {
  return (
    
    <View style={styles.container}>

      <View style={styles.textContainer}>
        <TouchableOpacity style={{ position: 'absolute', left: 0, alignSelf: 'center'}}>
          <Feather 
            name="menu"
            size={35}
            color="#000"
          />
        </TouchableOpacity>
        <Image style={styles.image}
            source={require ('../../assets/images/img1.jpeg')}
            
            />
          <Image style={styles.image1}
            source={require ('../../assets/images/img2.jpg')}
            />
        </View>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: "#FFF"
    },
    textContainer: {
      flexDirection: 'row',
      marginBottom: '14%',
      marginTop: '22%',
      marginVertical: '5%',
      marginHorizontal: '5%'
    },
    image: {
      position: 'absolute', 
      right: 120, 
      alignSelf: 'center', 
     
    },
    image1: {
      width: 50,
      height: 50,
      position: 'absolute',
      left: 310,
      alignSelf: 'center',
      borderRadius: 50
    },
    line: {
      borderBottomColor: "#e2dede",
      borderBottomWidth: 1,
    }
  });
