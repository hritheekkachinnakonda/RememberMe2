// Charter.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

/* const Charter = ({ onBack }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome to the Charter Feature</Text>
            <Button title="Back" onPress={onBack} />
        </View>
    );
}; */
const MenuBar = () => {
    const [activeButton, setActiveButton] = useState(null);
    const [isSplashVisible, setIsSplashVisible] = useState(true); // For splash screen

    useEffect(() => {
        // Hide splash screen after 3 seconds
        setTimeout(() => {
            setIsSplashVisible(false);
        }, 3000); // 3 seconds delay for splash screen
    }, []);

    const handlePress = (buttonName) => {
        setActiveButton(buttonName);
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
            {/* Display Splash Screen */}
            {isSplashVisible ? (
                <View style={styles.splashContainer}>
                    <Image
                        source={require('./assets/Logo.png')} // Replace with your actual logo path
                        style={styles.logoImage}
                    />
                </View>
            ) : (
                <View style={styles.mainContent}>
                    {/* Main Content */}
                    <View style={styles.mainContent}>
                        {/* Additional content */}
                    </View>

                    {/* Horizontal Line above the menu bar */}
                    <View style={styles.separator} />

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
                            style={styles.menuButton}
                            onPress={() => handlePress('Chapter')}
                        >
                            <Image
                                source={getButtonImage('Chapter')}
                                style={styles.buttonImage}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.plusButton}
                            onPress={() => handlePress('Plus')}
                        >
                            <Image
                                source={getButtonImage('Plus')}
                                style={styles.plusButtonImage}
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
            )}
        </View>
    );
};

const games = [
    { id: "1", name: "Photo Recall", description: "Identify people and places in old photos." },
    { id: "2", name: "Story Completion", description: "Fill in missing details of past events." },
    { id: "3", name: "Memory Flashback", description: "Test your memory of past events." },
  ];
  
  const Charter = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>AI Memory Games</Text>
        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.gameCard}
              onPress={() => navigation.navigate(item.name)}
            >
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#f5f5f5",
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
    },
    gameCard: {
      backgroundColor: "#ffffff",
      padding: 15,
      marginBottom: 10,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
    },
    description: {
      fontSize: 14,
      color: "#666",
    },
    
    //Menu bar
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 10,
    },
    splashContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,  // Take up the whole screen for splash
    },
    logoImage: {
        width: 150,  // Adjust the logo size
        height: 150, // Adjust the logo size
        resizeMode: 'contain',
    },
    mainContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc', // Light grey color for the line
        marginBottom: 10,  // Adjust space above the menu bar
    },
    bottomMenu: {
        flexDirection: 'row',
        justifyContent: 'center', // Center all buttons within the menu
        alignItems: 'center',
        width: '100%', // Ensures the menu takes the full width
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
        marginBottom: 10,  // Aligns the Plus button better vertically with other buttons
    },
    buttonImage: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
    },
    plusButtonImage: {
        width: 130,  // Larger image size for Plus button
        height: 130,
        resizeMode: 'contain',
    },
  });
  

export default Charter;
