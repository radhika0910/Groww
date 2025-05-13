// Path: components\screens\sensex.jsx
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function SensexScreen() {
  
  const sensexData = [
    { id: '1', name: 'Reliance Industries', value: '₹2,500', change: '+1.2%' },
    { id: '2', name: 'Tata Consultancy Services', value: '₹3,200', change: '-0.8%' },
    { id: '3', name: 'HDFC Bank', value: '₹1,600', change: '+0.5%' },
    { id: '4', name: 'Infosys', value: '₹1,450', change: '+0.3%' },
    { id: '5', name: 'ICICI Bank', value: '₹950', change: '-0.4%' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sensex Data</Text>
      <FlatList
        data={sensexData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.itemDetails}>
              <Text style={styles.itemValue}>{item.value}</Text>
              <Text
                style={[
                  styles.itemChange,
                  item.change.startsWith('+') ? styles.positiveChange : styles.negativeChange,
                ]}
              >
                {item.change}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  itemDetails: {
    alignItems: 'flex-end',
  },
  itemValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  itemChange: {
    fontSize: 14,
    marginTop: 4,
  },
  positiveChange: {
    color: '#4caf50', // Green for positive change
  },
  negativeChange: {
    color: '#f44336', // Red for negative change
  },
});