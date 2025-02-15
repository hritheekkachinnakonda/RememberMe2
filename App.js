// import React, { useState, useEffect } from 'react';
// import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import ChapterScreen from './Chapter';  // Import ChapterScreen

// const Stack = createStackNavigator();

// const HomeScreen = ({ navigation }) => {
//     const [activeButton, setActiveButton] = useState(null);
//     const [isSplashVisible, setIsSplashVisible] = useState(true); // For splash screen

//     useEffect(() => {
//         console.log('Splash screen showing...');
//         setTimeout(() => {
//             console.log('Hiding splash screen...');
//             setIsSplashVisible(false);
//         }, 3000); // 3 seconds delay for splash screen
//     }, []);

//     const handlePress = (buttonName) => {
//         setActiveButton(buttonName);
//         if (buttonName === 'Chapter') {
//             console.log('Navigating to Chapter Screen...');
//             navigation.navigate('ChapterScreen');  // Navigate to ChapterScreen on button press
//         }
//     };

//     const getButtonImage = (buttonName) => {
//         switch (buttonName) {
//             case 'Charter':
//                 return activeButton === 'Charter'
//                     ? require('./assets/charteryellow.png')
//                     : require('./assets/chartergrey.png');
//             case 'Chapter':
//                 return activeButton === 'Chapter'
//                     ? require('./assets/chapteryellow.png')
//                     : require('./assets/chaptergrey.png');
//             case 'Capture':
//                 return activeButton === 'Capture'
//                     ? require('./assets/captureyellow.png')
//                     : require('./assets/capturegrey.png');
//             case 'Connect':
//                 return activeButton === 'Connect'
//                     ? require('./assets/connectyellow.png')
//                     : require('./assets/connectgrey.png');
//             case 'Plus':
//                 return require('./assets/purpleplus.png');
//             default:
//                 return null;
//         }
//     };

//     return (
//         <View style={styles.container}>
//             {/* Display Splash Screen */}
//             {isSplashVisible ? (
//                 <View style={styles.splashContainer}>
//                     <Image
//                         source={require('./assets/Logo.png')} // Replace with your actual logo path
//                         style={styles.logoImage}
//                     />
//                 </View>
//             ) : (
//                 <View style={styles.mainContent}>
//                     <View style={styles.mainContent}>
//                         {/* Additional content */}
//                     </View>

//                     {/* Horizontal Line above the menu bar */}
//                     <View style={styles.separator} />

//                     {/* Bottom Menu Bar */}
//                     <View style={styles.bottomMenu}>
//                         <TouchableOpacity
//                             style={styles.menuButton}
//                             onPress={() => handlePress('Charter')}
//                         >
//                             <Image
//                                 source={getButtonImage('Charter')}
//                                 style={styles.buttonImage}
//                             />
//                         </TouchableOpacity>

//                         <TouchableOpacity
//                             style={styles.menuButton}
//                             onPress={() => handlePress('Chapter')}
//                         >
//                             <Image
//                                 source={getButtonImage('Chapter')}
//                                 style={styles.buttonImage}
//                             />
//                         </TouchableOpacity>

//                         <TouchableOpacity
//                             style={styles.plusButton}
//                             onPress={() => handlePress('Plus')}
//                         >
//                             <Image
//                                 source={getButtonImage('Plus')}
//                                 style={styles.plusButtonImage}
//                             />
//                         </TouchableOpacity>

//                         <TouchableOpacity
//                             style={styles.menuButton}
//                             onPress={() => handlePress('Capture')}
//                         >
//                             <Image
//                                 source={getButtonImage('Capture')}
//                                 style={styles.buttonImage}
//                             />
//                         </TouchableOpacity>

//                         <TouchableOpacity
//                             style={styles.menuButton}
//                             onPress={() => handlePress('Connect')}
//                         >
//                             <Image
//                                 source={getButtonImage('Connect')}
//                                 style={styles.buttonImage}
//                             />
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             )}
//         </View>
//     );
// };

// const ChapterScreen = () => {
//     console.log('Rendering ChapterScreen...');
//     return (
//         <View style={styles.container}>
//             <Text style={styles.screenTitle}>Chapter</Text>
//             <View style={styles.rectanglesContainer}>
//                 <View style={styles.rectangle}>
//                     <Text style={styles.rectangleText}>
//                         Emotion-Based Storytelling: Analyzes tone/emotion in their voice to suggest uplifting storytelling prompts.
//                     </Text>
//                 </View>
//                 <View style={styles.rectangle}>
//                     <Text style={styles.rectangleText}>
//                         Memory Journal Timeline: Creates a visual/audio timeline to reinforce recollection.
//                     </Text>
//                 </View>
//             </View>
//         </View>
//     );
// };

// const Stack = createStackNavigator();

// const App = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Home">
//                 <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
//                 <Stack.Screen name="ChapterScreen" component={ChapterScreen} options={{ headerShown: false }} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'space-between',
//         padding: 10,
//     },
//     splashContainer: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         flex: 1,  // Take up the whole screen for splash
//     },
//     logoImage: {
//         width: 150,  // Adjust the logo size
//         height: 150, // Adjust the logo size
//         resizeMode: 'contain',
//     },
//     mainContent: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     separator: {
//         height: 1,
//         backgroundColor: '#ccc', // Light grey color for the line
//         marginBottom: 10,  // Adjust space above the menu bar
//     },
//     bottomMenu: {
//         flexDirection: 'row',
//         justifyContent: 'center', // Center all buttons within the menu
//         alignItems: 'center',
//         width: '100%', // Ensures the menu takes the full width
//         paddingHorizontal: 20,
//         paddingBottom: 10,
//     },
//     menuButton: {
//         width: 77,
//         height: 77,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     plusButton: {
//         width: 90,
//         height: 90,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginHorizontal: 2,
//         marginBottom: 10,  // Aligns the Plus button better vertically with other buttons
//     },
//     buttonImage: {
//         width: 90,
//         height: 90,
//         resizeMode: 'contain',
//     },
//     plusButtonImage: {
//         width: 130,  // Larger image size for Plus button
//         height: 130,
//         resizeMode: 'contain',
//     },
//     screenTitle: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     rectanglesContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     rectangle: {
//         width: '90%',
//         height: 100,
//         backgroundColor: '#f0f0f0',
//         marginBottom: 20,
//         padding: 10,
//         justifyContent: 'center',
//         borderRadius: 10,
//     },
//     rectangleText: {
//         fontSize: 16,
//         color: '#333',
//     },
// });

// export default App;
