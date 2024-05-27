import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { GlobalLayout } from '../components/layout';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DreamsScreen() {
  const [dreams, setDreams] = useState([]);
  const [error, setError] = useState(null);

  const fetchDreams = async () => {
    try {
      const response = await fetch('http://10.88.11.94:3000/api/dreams'); // Update the URL as necessary
      const json = await response.json();
      setDreams(json.dreams);
    } catch (error) {
      setError(error.toString());
    }
  };

  useEffect(() => {
    fetchDreams();
  }, []);

  return (
    <GlobalLayout>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Your Dreams</Text>
        {error && <Text style={styles.errorText}>Error: {error}</Text>}
        <FlatList
          data={dreams}
          keyExtractor={(item) => item.dreamId.toString()}
          renderItem={({ item }) => (
            <View style={styles.dreamItem}>
              <Text style={styles.dreamTitle}>{item.dreamTitle}</Text>
              <Text style={styles.dreamContent}>{item.dreamContent}</Text>
            </View>
          )}
          ListEmptyComponent={<Text style={styles.emptyText}>No dreams logged yet.</Text>}
        />
      </SafeAreaView>
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
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  dreamItem: {
    padding: 15,
    backgroundColor: '#333',
    borderRadius: 5,
    marginBottom: 10,
  },
  dreamTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dreamContent: {
    color: 'white',
    fontSize: 16,
  },
  emptyText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
});
