// Path: components\tile.jsx
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'; // Added TouchableOpacity

export default function Tile() {
  return (
    <View style={styles.tilesContainer}>
      
      <TouchableOpacity style={styles.tile}>
        <Text style={styles.tileTitle}>Nifty 50</Text>
        <Text style={styles.tileValue}>₹18,200.35</Text>
        <Text style={styles.tileChange}>+0.45% ▲</Text>
      </TouchableOpacity>

     
      <TouchableOpacity style={styles.tile}>
        <Text style={styles.tileTitle}>Sensex</Text>
        <Text style={styles.tileValue}>₹61,500.25</Text>
        <Text style={styles.tileChange}>+0.38% ▲</Text>
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
});