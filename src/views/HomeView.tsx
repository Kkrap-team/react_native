import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeView: React.FC = ({ }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome to the Home!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default HomeView;
