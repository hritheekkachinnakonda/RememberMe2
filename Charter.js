// Charter.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Charter = ({ onBack }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to the Charter Feature</Text>
            <Button title="Back" onPress={onBack} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default Charter;
