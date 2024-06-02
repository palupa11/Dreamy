// AboutScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { GlobalLayout } from '../components/layout'; // Adjust the import path as necessary
import licensesData from '../licenses.json'; // Adjust the import path as necessary

export default function AboutScreen() {
  const [licenses, setLicenses] = useState([]);

  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        // Assuming licenses.json is located in the root directory of the project and bundled with the app
        const data = licensesData;
        setLicenses(Object.keys(data).map(key => ({ name: key, ...data[key] })));
      } catch (error) {
        console.error('Error fetching licenses:', error);
      }
    };

    fetchLicenses();
  }, []);

  const renderLicense = ({ item }) => (
    <View style={styles.licenseItem}>
      <Text style={styles.packageName}>{item.name}</Text>
      <Text style={styles.licenseText}>{item.licenses}</Text>
      <Text style={styles.repository}>{item.repository}</Text>
    </View>
  );

  return (
    <GlobalLayout>
      <ImageBackground
        source={require('../assets/background.png')} // Ensure this path is correct
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.container}>
          <Text style={styles.appDescription}>
            Dreamy is a dream journaling app designed to help you record and reflect on your dreams.
          </Text>
          <Text style={styles.headerText}>Open Source Licenses</Text>
          <FlatList
            data={licenses}
            keyExtractor={(item) => item.name}
            renderItem={renderLicense}
          />
        </View>
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
  appDescription: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
     fontWeight: 'bold',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  licenseItem: {
    padding: 15,
    backgroundColor: '#333',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#617F99'
  },
  packageName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  licenseText: {
    color: 'white',
    fontSize: 16,
  },
  repository: {
    color: 'white',
    fontSize: 14,
  },
});
