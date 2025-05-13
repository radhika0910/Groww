// Path: components\ToggelG&l.tsx
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ToggelGL() {
  const [isGain, setIsGain] = useState(true); // State to toggle between Gain and Loss

  // Sample data for Gain and Loss
  const gainList = [
    { id: '1', name: 'Stock A', value: '+₹500' },
    { id: '2', name: 'Stock B', value: '+₹300' },
  ];

  const lossList = [
    { id: '1', name: 'Stock C', value: '-₹200' },
    { id: '2', name: 'Stock D', value: '-₹150' },
  ];

  return (
    <View style={styles.container}>
     
      <View style={styles.toggleContainer}>
        <TouchableOpacity onPress={() => setIsGain(true)} style={styles.toggleOption}>
          <Text style={[styles.toggleText, isGain && styles.activeText]}>Gain</Text>
          {isGain && <View style={styles.activeUnderline} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsGain(false)} style={styles.toggleOption}>
          <Text style={[styles.toggleText, !isGain && styles.activeText]}>Loss</Text>
          {!isGain && <View style={styles.activeUnderline} />}
        </TouchableOpacity>
      </View>

      
      <FlatList
        data={isGain ? gainList : lossList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={isGain ? styles.gainValue : styles.lossValue}>{item.value}</Text>
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
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 16,
  },
  toggleOption: {
    alignItems: 'center',
    marginHorizontal: 16,
  },
  toggleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000', // Default text color
  },
  activeText: {
    color: '#4caf50', // Green color for active text
  },
  activeUnderline: {
    marginTop: 4,
    height: 2,
    width: '100%',
    backgroundColor: '#4caf50', // Green underline for active state
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  },
  gainValue: {
    fontSize: 16,
    color: '#4caf50', // Green for Gain
    fontWeight: 'bold',
  },
  lossValue: {
    fontSize: 16,
    color: '#f44336', // Red for Loss
    fontWeight: 'bold',
  },
});