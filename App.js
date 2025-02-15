import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handlePress = (buttonName) => {
        setActiveButton(buttonName);
    };

    const getButtonImage = (buttonName) => {
        if (buttonName === activeButton) {
            return require('./assets/yellowButtonImage.png'); // Image for the active (yellow) state
        }
        return require('./assets/greyButtonImage.png'); // Image for the inactive (grey) state
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
                    style={styles.menuButton}
                    onPress={() => handlePress('Charter')}
                >
                    <Image
                        source={getButtonImage('Charter')}
                        style={styles.buttonImage}
                    />
                </TouchableOpacity>

                {/* Plus button stays purple */}
                <TouchableOpacity
                    style={styles.plusButton}
                    onPress={() => handlePress('Plus')}
                >
                    <Image
                        source={require('./assets/purpleplus.png')} // Image for the purple plus button
                        style={styles.buttonImage}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => handlePress('Chapter')}
                >
                    <Image
                        source={getButtonImage('Chapter')}
                        style={styles.buttonImage}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => handlePress('Capture')}
                >
                    <Image
                        source={getButtonImage('Capture')}
                        style={styles.buttonImage}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => handlePress('Connect')}
                >
                    <Image
                        source={getButtonImage('Connect')}
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
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
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
