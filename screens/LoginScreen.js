import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, TextInput, Button, Image, Text } from "react-native";
import { GlobalLayout } from '../components/layout';
import { useNavigation } from '@react-navigation/native';  // Import useNavigation
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();  

  const handleSubmit = async () => {
    try {
      const url = `http://10.88.11.94:3000/users/login`; // Ensure this URL is correct and reachable
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,  // Ensure these values are being updated from input
          password: password         
        })
      });
      const result = await response.json();
      if (response.ok) {
        await AsyncStorage.setItem("token", result.token); // Use AsyncStorage for storing the token
      } else {
        throw new Error(result.message || "Authentication failed");
      }
    } catch (err) {
      console.error("Error logging in:", err);
    }
  };    
  const handleSignUp = () => {
    navigation.navigate('SignUp');  // Ensure this navigation target is correctly configured
  };

  return (
    <GlobalLayout>
        <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.logoContainer}>
            <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            />
        </View>
        <Text style={styles.title}>Welcome dreamer!</Text>
        <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            placeholderTextColor="white"
            keyboardType="email-address"
        />
        <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
        />
        <Button
            title="Submit"
            onPress={handleSubmit}
        />
        <Text style={styles.signupText}>Not a dreamer yet?</Text>  
        <Button
            title="Sign Up"
            onPress={handleSignUp}  // This button navigates to the sign-up screen
        />
        </SafeAreaView>
    </GlobalLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'white',
  },
  signupText: {  // Style for the prompt text
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 12,
    color: 'white',
  }
});