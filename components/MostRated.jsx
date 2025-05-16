// Path: components\MostRated.jsx
import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useGetStocksQuery } from '../features/api/apiSlice'; // Import the RTK Query hook

export default function MostRated() {
  const query = useGetStocksQuery();
  const { data: stocks, isLoading, error } = query; // Fetch stock data

  // Handle loading and error states
  if (isLoading) {
    console.log('query : ' + query);
    console.log('stocks:', stocks, 'error:', error);
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4caf50" />
        <Text>Loading stocks...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load stocks. Please try again later.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Section Heading */}
      <Text style={styles.heading}>Most Rated</Text>

      {/* Grid of Cards */}
      <FlatList
        data={stocks} // Use the fetched stock data
        keyExtractor={(item) => item.symbol}
        numColumns={2} // Display cards in a 2-column grid
        renderItem={({ item }) => (
          <TouchableOpacity key={item.symbol} style={styles.card}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardDescription}>Symbol: {item.symbol}</Text>
            <Text style={styles.cardDescription}>Sector: {item.sector}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  grid: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    width: '48%', // Ensures two cards fit in a row with spacing
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
});