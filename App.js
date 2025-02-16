import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Chapter screen
import Chapter from './Chapter'; // Ensure this file exists
import Charter from './Charter';
const Stack = createStackNavigator();

const HomeScreen = () => {
    const [activeButton, setActiveButton] = useState(null);
    const [isSplashVisible, setIsSplashVisible] = useState(true);
    const navigation = useNavigation(); // Use navigation hook

    useEffect(() => {
        setTimeout(() => {
            setIsSplashVisible(false);
        }, 3000); // Hide splash after 3 seconds
    }, []);

    const handlePress = (buttonName) => {
        setActiveButton(buttonName);
        if (buttonName === 'Chapter') {
            navigation.navigate('Chapter'); // Navigate to Chapter screen
        }
        else if (buttonName === 'Charter') {
            navigation.navigate('Charter');
        }
    };

    const getButtonImage = (buttonName) => {
        switch (buttonName) {
            case 'Charter':
                return activeButton === 'Charter'
                    ? require('./assets/charteryellow.png')
                    : require('./assets/chartergrey.png');
            case 'Chapter':
                return activeButton === 'Chapter'
                    ? require('./assets/chapteryellow.png')
                    : require('./assets/chaptergrey.png');
            case 'Capture':
                return activeButton === 'Capture'
                    ? require('./assets/captureyellow.png')
                    : require('./assets/capturegrey.png');
            case 'Connect':
                return activeButton === 'Connect'
                    ? require('./assets/connectyellow.png')
                    : require('./assets/connectgrey.png');
            case 'Plus':
                return require('./assets/purpleplus.png');
            default:
                return null;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {isSplashVisible ? (
                <View style={styles.splashContainer}>
                    <Image source={require('./assets/Logo.png')} style={styles.logoImage} />
                </View>
            ) : (
                <View style={styles.mainContent}>
                    {/* Home Page Section Above the Menu */}
                    <View style={styles.homePageContainer}>
                        <Text style={styles.homePageText}>Welcome to MemoirAI</Text>
                        <Text style={styles.descriptionText}>Start capturing memories with your personalized journey</Text>
                    </View>

                    {/* Horizontal Line above the menu bar */}
                    <View style={styles.separator} />

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
            )}
        </SafeAreaView>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Chapter" component={Chapter} />
                <Stack.Screen name="Charter" component={Charter} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 10,
    },
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    mainContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    homePageContainer: {
        alignItems: 'center',
        marginBottom: 20, // space between the home page section and the menu
    },
    homePageText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    descriptionText: {
        fontSize: 16,
        color: '#777',
        marginTop: 10,
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
        marginBottom: 10,
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

export default App;
