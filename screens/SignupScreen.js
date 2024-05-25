import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, TextInput, Button, Image, Text } from "react-native";
import { GlobalLayout } from '../components/layout';


export default function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Handle submit logic here
    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Password:', password);
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
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Name"
            placeholderTextColor="white"
        />
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
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
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
});