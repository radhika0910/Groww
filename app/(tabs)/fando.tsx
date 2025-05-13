// Path: app\(tabs)\fando.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Fando = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Fando Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default Fando;