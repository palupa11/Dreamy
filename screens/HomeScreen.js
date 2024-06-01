import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { GlobalLayout } from "../components/layout";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <GlobalLayout>
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.innerText}>Welcome to Dreamy, </Text>
          <Text style={styles.innerText}>Hope you had a good night's sleep </Text>
        </View>
        <View style={[styles.row, styles.cloudButtonRow]}>
          <Text style={styles.innerText}>Click to log your dream!!!!</Text>
          <TouchableOpacity
            style={styles.cloudButtonContainer}
            onPress={() => navigation.navigate('JournalScreen')}
          >
            <ImageBackground
              source={require('../assets/cloud.png')}
              style={styles.cloudButton}
              imageStyle={styles.cloudImage}
            >
              <Text style={styles.buttonText}>Add dream</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          {/* <Text style={styles.innerText}>Dreams Logged: {dreamCount}</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: `${dreamCount * 10}%` }]}></View>
          </View> */}
        </View>
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
  cloudButtonRow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cloudButtonContainer: {
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
  progressBar: {
    height: 30,
    width: '100%',
    backgroundColor: 'gray',
    borderRadius: 5,
    marginTop: 5,
  },
  progress: {
    height: '100%',
    backgroundColor: '#A4C2DB',
    borderRadius: 5,
  },
});
