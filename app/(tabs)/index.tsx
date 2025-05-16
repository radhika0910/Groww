// Path: app\(tabs)\index.tsx
import Crypto from '@/components/screens/crypto';
import ExploreScreen from '@/components/screens/explore';
import Nifty50 from '@/components/screens/nifty50';
import SensexScreen from '@/components/screens/sensex';
import Silver from '@/components/screens/silver';
import Tile from '@/components/tile';
import Watchlists from '@/components/watchlists';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [selectedItem, setSelectedItem] = useState('Explore'); // State to track the selected item

  const scrollItems = [
    { id: '1', title: 'Explore', screen: 'Explore' },
    { id: '2', title: 'Sensex', screen: 'Sensex' },
    { id: '3', title: 'Nifty 50', screen: 'Nifty' },
    { id: '4', title: 'Silver', screen: 'Silver' },
    { id: '5', title: 'Crypto', screen: 'Crypto' },
  ];

  const renderContent = () => {
    switch (selectedItem) {
      case 'Explore':
        return <ExploreScreen />;
      case 'Sensex':
        return <SensexScreen />;
      case 'Nifty':
        return <Nifty50/>;
      case 'Silver':
        return <Silver/>;
      case 'Crypto':
        return <Crypto/>;
      
      default:
        return <Text style={styles.placeholderText}>Select an item to view content</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <View style={styles.leftSection}>
          <Image
            source={require('@/assets/images/glogo.png')}
            style={styles.logo}
          />
          <Text style={styles.pageName}>Groww</Text>
        </View>
        <View style={styles.rightSection}>
          <Ionicons name="search" size={24} color="#fff" style={styles.icon} />
          <Ionicons name="qr-code-outline" size={24} color="#fff" style={styles.icon} />
          <Image
            source={{ uri: 'https://via.placeholder.com/40' }}
            style={styles.profilePicture}
          />
        </View>
      </View>

      {/* Tile Section */}
      <Tile />

      {/* Watchlists */}
      <View style={styles.Watchlist}>
        <Watchlists items={scrollItems} onItemPress={(screen: React.SetStateAction<string>) => setSelectedItem(screen)} />
      </View>

      {/* Dynamic Content */}
      <View style={styles.dynamicContent}>
        {renderContent()}
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
  Watchlist: {
    flexGrow: 0,
    flexShrink: 0,
  },
  dynamicContent: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  placeholderText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
});