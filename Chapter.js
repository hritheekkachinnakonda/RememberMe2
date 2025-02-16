import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Charter from './Charter';
import Connect from './Connect';

const Chapter = () => {
    const navigation = useNavigation();
    const [activeButton, setActiveButton] = useState(null);

    const handlePress = (buttonName) => {
        setActiveButton(buttonName);
        if (buttonName === 'Chapter') {
            navigation.navigate('Chapter'); // Navigate to Chapter screen
        }
        else if (buttonName === 'Charter') {
            navigation.navigate('Charter');
        }
        else if (buttonName === 'Connect') {
            navigation.navigate('Connect');
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
        <View style={styles.container}>
            <Text style={styles.title}>Chapter</Text>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Emotion-Based Storytelling</Text>
                    <Text style={styles.sectionContent}>
                        Analyzes tone/emotion in their voice to suggest uplifting storytelling prompts. This
                        feature helps evoke positive memories and emotions, guiding the user to recall
                        their happiest moments, significant milestones, or meaningful connections.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Memory Journal Timeline</Text>
                    <Text style={styles.sectionContent}>
                        Creates a visual/audio timeline to reinforce recollection. This timeline captures
                        key events in the user's life, enhancing memory recall through visual and auditory
                        prompts that highlight important moments and milestones over time.
                    </Text>
                </View>
            </ScrollView>

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

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Chapter" component={Chapter} />
                <Stack.Screen name="Charter" component={Charter} />
                <Stack.Screen name="Connect" component={Connect} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    content: {
        paddingBottom: 20,
    },
    section: {
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
        width: '100%',
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 10,
    },
    sectionContent: {
        fontSize: 16,
        color: '#555',
        lineHeight: 24,
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

export default Chapter;
