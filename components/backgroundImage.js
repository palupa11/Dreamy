import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

const Background = ({ children }) => {
  return (
    <ImageBackground
      source={require('../assets/background.png')} // Adjust the path to your background image
      style={styles.background}
    >
      <View style={styles.overlay}>
        {children}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Optional: add a semi-transparent overlay
  },
});

export default Background;
