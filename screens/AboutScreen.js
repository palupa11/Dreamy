// AboutScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { GlobalLayout } from '../components/layout'; // Adjust the import path as necessary
import * as FileSystem from 'expo-file-system';

export default function AboutScreen() {
  const [licenses, setLicenses] = useState([]);

  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        const licensesUri = FileSystem.documentDirectory + 'licenses.json';
        const response = await fetch(licensesUri);
        const data = await response.json();
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
      <View style={styles.container}>
        <Text style={styles.headerText}>Open Source Licenses</Text>
        <FlatList
          data={licenses}
          keyExtractor={(item) => item.name}
          renderItem={renderLicense}
        />
      </View>
    </GlobalLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#21325E',
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
