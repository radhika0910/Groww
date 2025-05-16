// Path: components\screens\explore.jsx
import MostRated from '@/components/MostRated';
import Tile from '@/components/tile';
import ToggelGL from '@/components/ToggelG&l';
import Watchlists from '@/components/watchlists';
import { StyleSheet, View } from 'react-native';

export default function ExploreScreen() {
  

  return (
    <View style={styles.container}>
      
      <MostRated />
      <View style={{ flex: 1 }}>
        <ToggelGL />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  
});