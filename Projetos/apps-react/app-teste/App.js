
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import Header from './src/components/header';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Header/>
      <Routes/>
    </NavigationContainer>
  );
}
