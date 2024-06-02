import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";
import { GlobalLayout } from "../components/layout";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <GlobalLayout>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Welcome to Dreamy,
            </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.message}>
              
            </Text>
            <TouchableOpacity
              style={styles.cloudButtonContainer}
              onPress={() => navigation.navigate('JournalScreen')}
            >
              <Image
                source={require('../assets/cloud.png')} 
                style={styles.cloudButton}
              />
              <Text style={styles.buttonText}>Add Dream</Text>
            </TouchableOpacity>
          </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  cloudButtonContainer: {
    alignItems: 'center',
  },
  cloudButton: {
    width: 110,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
