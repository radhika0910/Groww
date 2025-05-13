// Path: components\MostRated.jsx
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MostRated() {
  const cards = [
    { id: '1', title: 'Card 1', description: 'Description 1' },
    { id: '2', title: 'Card 2', description: 'Description 2' },
    { id: '3', title: 'Card 3', description: 'Description 3' },
    { id: '4', title: 'Card 4', description: 'Description 4' },
  ];

  return (
    <View style={styles.container}>
      {/* Section Heading */}
      <Text style={styles.heading}>Most Rated</Text>

      {/* 2x2 Grid of Cards */}
      <View style={styles.grid}>
        {cards.map((card) => (
          <TouchableOpacity key={card.id} style={styles.card}>
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardDescription}>{card.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
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
});