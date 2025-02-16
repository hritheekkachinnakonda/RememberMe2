import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Chapter from './Chapter';
import Charter from './Charter';
import Capture from './Capture';


const screenWidth = Dimensions.get("window").width;

const ConnectScreen = () => {
    const [activeButton, setActiveButton] = useState('Connect');
    const navigation = useNavigation();

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
        else if (buttonName === 'Capture') {
            navigation.navigate('Capture');
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

    const comments = [
        { id: 1, text: "Jessica: GREAT JOB!", date: "Feb 14, 2025 10:30 AM", icon: "thumbs-up" },
        { id: 2, text: "Chilli: Scored 4/10 on photo memory", date: "Feb 13, 2025 2:15 PM", icon: "brain" },
        { id: 3, text: "Saarah: Nice Work!", date: "Feb 12, 2025 5:45 PM", icon: "star" },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerTitle}>Connect</Text>

            {/* Comments Section */}
            <ScrollView style={styles.commentsContainer}>
                {comments.map((comment) => (
                    <View key={comment.id} style={styles.commentBox}>
                        <Icon name={comment.icon} size={24} color="#ff9800" style={styles.commentIcon} />
                        <View>
                            <Text style={styles.commentText}>{comment.text}</Text>
                            <Text style={styles.commentDate}>{comment.date}</Text>
                        </View>
                    </View>
                ))}
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
                <Stack.Screen name="Connect" component={Connect} />
                <Stack.Screen name="Capture" component={Capture} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    commentsContainer: {
        flex: 1,
        marginBottom: 15,
    },
    commentBox: {
        backgroundColor: '#f8f8f8',
        padding: 10,
        marginVertical: 5,
        borderRadius: 8,
        flexDirection: 'row',  // Align items in a row
        alignItems: 'center',   // Center vertically
    },
    commentIcon: {
        marginRight: 10,  // Space between icon and text
    },
    commentText: {
        fontSize: 16,
    },
    commentDate: {
        fontSize: 12,
        color: '#777',
        marginTop: 5,
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

export default ConnectScreen;
