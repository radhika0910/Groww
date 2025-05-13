// Path: app\(tabs)\mutualfunds.jsx
import { StyleSheet, Text, View } from 'react-native';

const MutualFunds = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mutual Funds</Text>
      {/* Add your components or logic here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default MutualFunds;