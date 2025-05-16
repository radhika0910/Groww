// Path: components\screens\nifty50.jsx
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function Nifty50() {
  const niftyData = [
    { id: '1', name: 'Reliance Industries', value: '₹2,500', change: '+1.2%' },
    { id: '2', name: 'Tata Consultancy Services', value: '₹3,200', change: '-0.8%' },
    { id: '3', name: 'HDFC Bank', value: '₹1,600', change: '+0.5%' },
    { id: '4', name: 'Infosys', value: '₹1,450', change: '+0.3%' },
    { id: '5', name: 'ICICI Bank', value: '₹950', change: '-0.4%' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.value}>{item.value}</Text>
      <Text
        style={[
          styles.change,
          item.change.startsWith('+') ? styles.positiveChange : styles.negativeChange,
        ]}
      >
        {item.change}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nifty 50</Text>
      <FlatList
        data={niftyData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 16,
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
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 8,
  },
  change: {
    fontSize: 14,
  },
  positiveChange: {
    color: '#4caf50', // Green for positive change
  },
  negativeChange: {
    color: '#f44336', // Red for negative change
  },
});