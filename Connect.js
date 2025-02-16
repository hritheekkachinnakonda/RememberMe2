import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenWidth = Dimensions.get("window").width;

const ConnectScreen = () => {
    const [activeButton, setActiveButton] = useState('Connect');
    const navigation = useNavigation();

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
        </SafeAreaView>
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
});

export default ConnectScreen;
