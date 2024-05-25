import React from 'react';
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity, ImageBackground } from "react-native";
import { GlobalLayout } from "../components/layout";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <GlobalLayout>
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.innerText}>Welcome to Dreamy, </Text>
          <Text style={styles.innerText}>Hope you had a good night's sleep </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.innerText}>Click to log your dream!!!!</Text>          
        </View>
        <View style={styles.row}>
          <Text style={styles.innerText}>Row 3</Text>
        </View>
        <TouchableOpacity
          style={styles.cloudButtonContainer}
          onPress={() => Alert.alert('Log Dream Button Pressed')}
        >
          <ImageBackground
            source={require('../assets/cloud.png')}
            style={styles.cloudButton}
            imageStyle={styles.cloudImage}
          >
            <Text style={styles.buttonText}>Add dream</Text>
          </ImageBackground>
        </TouchableOpacity>
      </SafeAreaView>
    </GlobalLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", // Vertical layout
    justifyContent: "space-between", // Distribute rows evenly along the vertical axis
    alignItems: "center", // Center items horizontally
    paddingHorizontal: 4, // Adjust as needed
    paddingVertical: 10, // Adjust as needed
  },
  row: {
    width: "100%", 
     
    marginBottom: 10, // Adjust vertical spacing between rows as needed
    padding: 10, // Adjust padding inside each row as needed
  },
  innerText: {
    color: 'white',
    fontSize: 30,
  },
  cloudButtonContainer: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 110,
    height: 100,
  },
  cloudButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cloudImage: {
    resizeMode: 'contain',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
});