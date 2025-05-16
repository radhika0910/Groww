// Path: components\screens\gold.jsx
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Gold() {
  const handleGoldFeature = () => {
    alert('Gold Feature Triggered!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gold</Text>
      <Text style={styles.content}>This is the Gold screen with its own features.</Text>
      <Button title="Do Gold Feature" onPress={handleGoldFeature} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 16,
  },
});