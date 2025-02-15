import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handlePress = (buttonName) => {
        setActiveButton(buttonName);
    };

    const getButtonImage = (buttonName) => {
        // Return different images for each button in both active and inactive states
        switch (buttonName) {
            case 'Charter':
                return activeButton === 'Charter'
                    ? require('./assets/yellowCharter.png') // Active (yellow) state image
                    : require('./assets/greyCharter.png');  // Inactive (grey) state image
            case 'Chapter':
                return activeButton === 'Chapter'
                    ? require('./assets/yellowChapter.png')
                    : require('./assets/greyChapter.png');
            case 'Capture':
                return activeButton === 'Capture'
                    ? require('./assets/yellowCapture.png')
                    : require('./assets/greyCapture.png');
            case 'Connect':
                return activeButton === 'Connect'
                    ? require('./assets/yellowConnect.png')
                    : require('./assets/greyConnect.png');
            case 'Plus':
                return require('./assets/purpleplus.png'); // Plus button stays purple
            default:
                return null;
        }
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

                <TouchableOpacity
                    style={styles.plusButton}
                    onPress={() => handlePress('Plus')}
                >
                    <Image
                        source={getButtonImage('Plus')}
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
