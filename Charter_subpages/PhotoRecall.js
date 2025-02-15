import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import axios from "axios"; // For API calls
import stringSimilarity from "string-similarity";


const PhotoRecall = () => {
  const [photo, setPhoto] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    fetchPhoto();
  }, []);

  const fetchPhoto = async () => {
    try {
      const response = await axios.get("https://your-api-url/fetch-random-photo");
      setPhoto(response.data.photo);
      setQuestion(response.data.question);
    } catch (error) {
      console.error("Error fetching photo:", error);
      setFeedback("❌ Could not fetch the photo. Try again.");
    }
  };
  
  const checkAnswer = () => {
    const similarity = stringSimilarity.compareTwoStrings(answer.toLowerCase(), photo.correctAnswer.toLowerCase());
    if (similarity > 0.7) {
      setFeedback("✅ Correct!");
    } else {
        setFeedback(`❌ Give it another try! Hint: ${response.data.hint}`);
    }
  };

  const feedbackStyle = feedback.includes("✅") ? styles.correct : styles.incorrect;

  return (
    <View style={styles.container}>
      {photo && <Image source={{ uri: photo.url }} style={styles.image} />}
      <Text style={styles.question}>{question}</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your answer..."
        value={answer}
        onChangeText={setAnswer}
      />
      <TouchableOpacity style={styles.button} onPress={checkAnswer}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      {feedback ? <Text style={[styles.feedback, feedbackStyle]}>{feedback}</Text> : null}
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  feedback: {
    fontSize: 16,
    marginTop: 10,
  },
  correct: {
    color: "green",
  },
  incorrect: {
    color: "red",
  },


});

export default PhotoRecall;
