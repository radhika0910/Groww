// Path: components\screens\crypto.jsx
import React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function Crypto() {
  const cryptoData = [
    { id: '1', name: 'Bitcoin', price: '$30,000', change: '+2.5%' },
    { id: '2', name: 'Ethereum', price: '$2,000', change: '+1.8%' },
    { id: '3', name: 'Ripple', price: '$0.50', change: '-0.5%' },
    { id: '4', name: 'Litecoin', price: '$100', change: '+0.7%' },
    { id: '5', name: 'Cardano', price: '$0.30', change: '-1.2%' },
  ];

  const chartData = {
    labels: cryptoData.map((item) => item.name), // Names for the x-axis
    datasets: [
      {
        data: cryptoData.map((item) =>
          parseFloat(item.price.replace('$', '').replace(',', ''))
        ), // Prices for the y-axis
        color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`, // Line color
        strokeWidth: 2, // Line thickness
      },
    ],
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
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
      <Text style={styles.title}>Crypto</Text>
      <Text style={styles.subtitle}>Price Trend</Text>

      {/* Graph */}
      <LineChart
        data={chartData}
        width={Dimensions.get('window').width - 32} // Full width minus padding
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#f5f5f5',
          backgroundGradientTo: '#f5f5f5',
          decimalPlaces: 2, // Two decimal places
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={styles.chart}
      />

      {/* List of Cryptocurrencies */}
      <FlatList
        data={cryptoData}
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
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
    textAlign: 'center',
  },
  chart: {
    marginVertical: 16,
    borderRadius: 16,
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
  price: {
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