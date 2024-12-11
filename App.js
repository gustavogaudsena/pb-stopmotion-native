import { } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Navigation from './navigation/navigation';
import AppProvider from './context/appContext';

export default function App() {
  return (
    <AppProvider>
        <Navigation />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
