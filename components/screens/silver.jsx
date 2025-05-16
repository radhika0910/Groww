// Path: components\screens\silver.jsx
import React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function Silver() {
  const silverData = [
    { id: '1', date: '2023-05-01', price: '₹70,000' },
    { id: '2', date: '2023-05-02', price: '₹71,200' },
    { id: '3', date: '2023-05-03', price: '₹69,800' },
    { id: '4', date: '2023-05-04', price: '₹70,500' },
    { id: '5', date: '2023-05-05', price: '₹72,000' },
  ];

  const chartData = {
    labels: silverData.map((item) => item.date), // Dates for the x-axis
    datasets: [
      {
        data: silverData.map((item) => parseInt(item.price.replace('₹', '').replace(',', ''))), // Prices for the y-axis
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Line color
        strokeWidth: 2, // Line thickness
      },
    ],
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Silver</Text>
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
          decimalPlaces: 0, // No decimal places
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

      {/* List of Prices */}
      <FlatList
        data={silverData}
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
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});