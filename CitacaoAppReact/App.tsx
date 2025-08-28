import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground 
      source={require('./assets/foto_nossa.jpeg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>FALA COMIGO COUTINHO E FELIPE</Text>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue', 
    fontSize: 18,
  }
});
