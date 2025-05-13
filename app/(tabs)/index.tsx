// Path: app\(tabs)\index.tsx
import MostRated from '@/components/MostRated';
import Tile from '@/components/tile';
import ToggelGL from '@/components/ToggelG&l';
import Watchlists from '@/components/watchlists';

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
   const scrollItems = [
    { id: '1', title: 'Explore' },
    { id: '2', title: 'Sensex' },
    { id: '3', title: 'Nifty 50' },
    { id: '4', title: 'Silver' },
    { id: '5', title: 'Crypto' },
  ];
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        {/* Left Section: Logo and Page Name */}
        <View style={styles.leftSection}>
          <Image
            source={require('@/assets/images/glogo.png')} 
            style={styles.logo}
          />
          <Text style={styles.pageName}>Groww</Text>
        </View>

        {/* Right Section: Icons */}
        <View style={styles.rightSection}>
          <Ionicons name="search" size={24} color="#fff" style={styles.icon} />
          <Ionicons name="qr-code-outline" size={24} color="#fff" style={styles.icon} />
          <Image
            source={{ uri: 'https://via.placeholder.com/40' }} 
            style={styles.profilePicture}
          />
        </View>
      </View>

      <Tile/>

      <View style
      ={styles.Watchlist}>
       <Watchlists  items={scrollItems} />
      </View>
          <MostRated  />
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
  topBar: {
    backgroundColor: '#4caf50',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  pageName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 8,
  },
  profilePicture: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 8,
  },
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
  Watchlist : {
    flexGrow :0,
    flexShrink: 0,
  },
});