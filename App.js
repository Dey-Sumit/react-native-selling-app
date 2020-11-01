import React from 'react';
import { StyleSheet } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';


export default function App() {

  return (
    <LoginScreen />
  );
}

const styles = StyleSheet.create({

  view: {
    backgroundColor: 'yellow',
    flex: 0.5,
  }
});
