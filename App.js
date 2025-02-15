import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handlePress = (buttonName) => {
        setActiveButton(buttonName);
    };

    const getButtonStyle = (buttonName) => {
        if (buttonName === activeButton) {
            return [styles.menuButton, styles.activeButton];
        }
        return styles.menuButton;
    };

    return (
        <View style={styles.container}>
            {/* Main Content */}
            <View style={styles.mainContent}>
                {/* Additional content */}
            </View>

            {/* Bottom Menu Bar */}
            <View style={styles.bottomMenu}>
                <TouchableOpacity
                    style={getButtonStyle('Charter')}
                    onPress={() => handlePress('Charter')}
                >
                    <Image
                        source={require('./assets/charter.png')} // Replace with your image path
                        style={styles.buttonImage}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.plusButton}
                    onPress={() => handlePress('Plus')}
                >
                    <Image
                        source={require('./assets/plus.png')} // Replace with your image path
                        style={styles.buttonImage}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={getButtonStyle('Chapter')}
                    onPress={() => handlePress('Chapter')}
                >
                    <Image
                        source={require('./assets/chapter.png')} // Replace with your image path
                        style={styles.buttonImage}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={getButtonStyle('Capture')}
                    onPress={() => handlePress('Capture')}
                >
                    <Image
                        source={require('./assets/capture.png')} // Replace with your image path
                        style={styles.buttonImage}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={getButtonStyle('Connect')}
                    onPress={() => handlePress('Connect')}
                >
                    <Image
                        source={require('./assets/connect.png')} // Replace with your image path
                        style={styles.buttonImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between', // Main content at the top, menu at the bottom
        padding: 20,
    },
    mainContent: {
        flex: 1,
        justifyContent: 'center', // Centering main content
        alignItems: 'center',
    },
    bottomMenu: {
        flexDirection: 'row',
        justifyContent: 'space-around', // Distribute buttons evenly
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    menuButton: {
        backgroundColor: '#808080', // Grey color initially
        padding: 10,
        borderRadius: 20,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeButton: {
        backgroundColor: '#FFD700', // Yellow when active
    },
    plusButton: {
        backgroundColor: '#800080', // Purple for the plus button
        padding: 15,
        borderRadius: 50,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonImage: {
        width: 50, // Adjust size as needed
        height: 50, // Adjust size as needed
        resizeMode: 'contain',
    },
});

export default App;
