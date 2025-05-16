// Path: components\watchlists.jsx
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Watchlists({ items, onItemPress }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {items.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() => onItemPress(item.screen)}
        >
          <Text style={styles.cardText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 16,
    marginVertical: 16,
    flexGrow: 0,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    width: 100,
    height: 50,
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});