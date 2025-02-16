import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from 'react-native-vector-icons';

// Sample memory data
const memories = [
    { id: '1', name: 'Wedding Day', mediaType: 'image', mediaUrl: require('./assets/wedding.jpg') },
    { id: '2', name: 'Family Trip to Paris', mediaType: 'video', mediaUrl: require('./assets/paris_trip.mp4') },
    { id: '3', name: 'Childhood Birthday', mediaType: 'image', mediaUrl: require('./assets/birthday.jpg') },
    { id: '4', name: 'Summer Vacation', mediaType: 'video', mediaUrl: require('./assets/summer_vacation.mp4') },
];

// Capture Screen
const Capture = ({ navigation }) => {
    const [selectedMemory, setSelectedMemory] = useState(null);

    const handleMemoryPress = (memory) => {
        setSelectedMemory(memory);
        // Navigate to a screen to display the selected memory (you can implement a dedicated media screen here)
        // For now, it's just logged.
        console.log('Selected memory:', memory);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Capture Memories</Text>
            <FlatList
                data={memories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.memoryCard}
                        onPress={() => handleMemoryPress(item)}
                    >
                        <View style={styles.memoryCardContent}>
                            <Text style={styles.memoryLabel}>{item.name}</Text>
                            <Ionicons name="play-circle" size={30} color="#4CAF50" />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

// Menu bar styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    memoryCard: {
        backgroundColor: "#ffffff",
        padding: 15,
        marginBottom: 15,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    memoryCardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    memoryLabel: {
        fontSize: 18,
        fontWeight: "bold",
    },
    // Bottom menu styles
    bottomMenu: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    menuButton: {
        width: 77,
        height: 77,
        justifyContent: 'center',
        alignItems: 'center',
    },
    plusButton: {
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2,
        marginBottom: 10,
    },
    buttonImage: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
    },
    plusButtonImage: {
        width: 130,
        height: 130,
        resizeMode: 'contain',
    },
});

// Navigation setup
const Stack = createStackNavigator();
const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Capture" component={Capture} />
                {/* Other screens like Charter, Connect can be added here */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
