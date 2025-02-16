import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Adjust according to your environment
import { useNavigation } from '@react-navigation/native';

// Sample memory data
const memories = [
    { id: '1', name: 'Wedding Day', mediaType: 'image', mediaUrl: require('./assets/captureyellow.png') },
    { id: '2', name: 'Family Trip to Paris', mediaType: 'video', mediaUrl: require('./assets/captureyellow.png') },
    { id: '3', name: 'Childhood Birthday', mediaType: 'image', mediaUrl: require('./assets/captureyellow.png') },
    { id: '4', name: 'Summer Vacation', mediaType: 'video', mediaUrl: require('./assets/captureyellow.png') },
];

// Capture Screen
const Capture = ({ navigation }) => {
    const [selectedMemory, setSelectedMemory] = useState(null);
    const [activeButton, setActiveButton] = useState('Capture');

    const handleMemoryPress = (memory) => {
        setSelectedMemory(memory);
        console.log('Selected memory:', memory);
    };

    const handlePress = (buttonName) => {
        setActiveButton(buttonName);
        navigation.navigate(buttonName);
    };

    const getButtonImage = (buttonName) => {
        switch (buttonName) {
            case 'Charter':
                return activeButton === 'Charter' ? require('./assets/charteryellow.png') : require('./assets/chartergrey.png');
            case 'Chapter':
                return activeButton === 'Chapter' ? require('./assets/chapteryellow.png') : require('./assets/chaptergrey.png');
            case 'Capture':
                return activeButton === 'Capture' ? require('./assets/captureyellow.png') : require('./assets/capturegrey.png');
            case 'Connect':
                return activeButton === 'Connect' ? require('./assets/connectyellow.png') : require('./assets/connectgrey.png');
            case 'Plus':
                return require('./assets/purpleplus.png');
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Capture</Text>
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

            {/* Bottom Menu Bar */}
            <View style={styles.bottomMenu}>
                <TouchableOpacity style={styles.menuButton} onPress={() => handlePress('Charter')}>
                    <Image source={getButtonImage('Charter')} style={styles.buttonImage} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuButton} onPress={() => handlePress('Chapter')}>
                    <Image source={getButtonImage('Chapter')} style={styles.buttonImage} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.plusButton} onPress={() => handlePress('Plus')}>
                    <Image source={getButtonImage('Plus')} style={styles.plusButtonImage} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuButton} onPress={() => handlePress('Capture')}>
                    <Image source={getButtonImage('Capture')} style={styles.buttonImage} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuButton} onPress={() => handlePress('Connect')}>
                    <Image source={getButtonImage('Connect')} style={styles.buttonImage} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
        backgroundColor: "#f5f5f5",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        marginTop: '35',
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

export default Capture;
