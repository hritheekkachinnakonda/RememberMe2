import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ChapterScreen = () => {
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
        </View>
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
});

export default ChapterScreen;
