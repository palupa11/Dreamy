import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { GlobalLayout } from "../components/layout";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AboutScreen() {
  const [dreams, setDreams] = useState([]);
  const [error, setError] = useState(null);

  const getDreams = async () => {
    try {
      const response = await fetch('http://10.88.11.94:3000/api/dreams', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      console.log('Response JSON:', json); // Log the response to debug
      if (!json.error) {
        setDreams(json.dreams);
      } else {
        setError("Error fetching dreams");
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      setError(error.toString());
    }
  };

  useEffect(() => {
    getDreams();
  }, []);

  return (
    <GlobalLayout>
      <SafeAreaView style={styles.view}>
        <Text style={styles.innerText}>About Screen</Text>
        {error && <Text style={styles.errorText}>Error: {error}</Text>}
        {dreams.length > 0 ? (
          dreams.map((dream) => (
            <View key={dream.dreamId} style={styles.dreamContainer}>
              <Text style={styles.dreamTitle}>{dream.dreamTitle}</Text>
              <Text style={styles.dreamContent}>{dream.dreamContent}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.innerText}>No dreams logged.</Text>
        )}
      </SafeAreaView>
    </GlobalLayout>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  innerText: {
    color: 'white',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  dreamContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 5,
  },
  dreamTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dreamContent: {
    color: 'white',
    fontSize: 14,
  },
});
