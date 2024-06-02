import React from "react";
import { Text, Switch, View, StyleSheet, ImageBackground } from "react-native";
import { GlobalLayout } from "../components/layout";
import { useTheme } from "../context/theme"; // Ensure the path to `useTheme` is correct
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const { isLargeText, setIsLargeText } = useTheme(); // Destructure correctly from useTheme

  return (
    <GlobalLayout>
      <ImageBackground
        source={require('../assets/background.png')} // Ensure this path is correct
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.settingsContainer}>
            <Switch
              value={isLargeText}
              onValueChange={newVal => setIsLargeText(newVal)}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
            />
            <Text style={[styles.innerText, isLargeText ? styles.largeText : null]}>
              Large Text
            </Text>
          </View>
          <Text style={styles.comingSoonText}>More features coming soon</Text>
        </SafeAreaView>
      </ImageBackground>
    </GlobalLayout>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  backgroundImage: {
    opacity: 0.8,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  settingsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  innerText: {
    color: 'white',
    marginLeft: 10,
  },
  largeText: {
    fontSize: 24, // Increase font size for large text
  },
  comingSoonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 'auto', // Pushes the text to the bottom of the view
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
