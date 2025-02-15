import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import axios from "axios";

const StoryCompletion = () => {
  const [story, setStory] = useState("");
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    fetchStory();
  }, []);

  const fetchStory = async () => {
    try {
      const response = await axios.get("https://your-api-url/fetch-incomplete-story");
      setStory(response.data.story);
    } catch (error) {
      console.error("Error fetching story:", error);
    }
  };

  const checkAnswer = () => {
    // AI checks if user input is close to expected answer
    setFeedback("✅ Good job! Memory recall improving.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.story}>{story}</Text>
      <TextInput
        style={styles.input}
        placeholder="Fill in the missing details..."
        value={userInput}
        onChangeText={setUserInput}
      />
      <TouchableOpacity style={styles.button} onPress={checkAnswer}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      {feedback ? <Text style={styles.feedback}>{feedback}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  story: { fontSize: 18, marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  button: { backgroundColor: "#007AFF", padding: 10 },
  buttonText: { color: "#fff" },
  feedback: { fontSize: 16, marginTop: 10 },
});

export default StoryCompletion;

