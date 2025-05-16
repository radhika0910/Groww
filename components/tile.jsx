// Path: components\tile.jsx
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useGetStockBySymbolQuery } from '../features/api/apiSlice'; // Import the RTK Query hook

export default function Tile() {
  // Fetch data for Nifty 50 and Sensex
  const { data: niftyData, isLoading: isLoadingNifty, error: niftyError } = useGetStockBySymbolQuery('META');
  const { data: sensexData, isLoading: isLoadingSensex, error: sensexError } = useGetStockBySymbolQuery('AMZN');

  // Handle loading and error states
  if (isLoadingNifty || isLoadingSensex) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4caf50" />
        <Text>Loading data...</Text>
      </View>
    );
  }

  if (niftyError || sensexError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load data. Please try again later.</Text>
      </View>
    );
  }

  return (
    <View style={styles.tilesContainer}>
      {/* Nifty 50 Tile */}
      <TouchableOpacity style={styles.tile}>
        <Text style={styles.tileTitle}>Nifty 50</Text>
        <Text style={styles.tileValue}>₹{niftyData?.value || 'N/A'}</Text>
        <Text style={styles.tileChange}>{niftyData?.change || 'N/A'}</Text>
      </TouchableOpacity>

      {/* Sensex Tile */}
      <TouchableOpacity style={styles.tile}>
        <Text style={styles.tileTitle}>Sensex</Text>
        <Text style={styles.tileValue}>₹{sensexData?.value || 'N/A'}</Text>
        <Text style={styles.tileChange}>{sensexData?.change || 'N/A'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tilesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  tile: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  tileTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tileValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  tileChange: {
    fontSize: 14,
    color: '#4caf50',
    marginTop: 4,
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