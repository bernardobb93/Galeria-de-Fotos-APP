import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { WebView } from 'react-native-webview';




export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <WebView 
      style={styles.container}
      source={{ uri: 'https://expo.dev' }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
