import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { GlobalLayout } from '../components/layout';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function DreamsScreen() {
  const [dreams, setDreams] = useState([]);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  const fetchDreams = async () => {
    const userId = 2; // Example userId, ensure this is dynamically set based on the logged-in user
    try {
      const response = await fetch(`http://10.88.11.94:3000/api/dreams/${userId}`);
      const json = await response.json();
      if (json.error) {
        throw new Error(json.error);
      }
      setDreams(json.dreams);
    } catch (error) {
      setError(error.toString());
    }
  };

  useEffect(() => {
    fetchDreams();
  }, []);

  const handleDreamPress = (dreamId) => {
    navigation.navigate('DreamDetails', { dreamId });
  };

  return (
    <GlobalLayout>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Your Dreams</Text>
        {error && <Text style={styles.errorText}>Error: {error}</Text>}
        <FlatList
          data={dreams}
          keyExtractor={(item) => item.dreamId.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleDreamPress(item.dreamId)}>
              <View style={styles.dreamItem}>
                <Text style={styles.dreamTitle}>{item.dreamTitle}</Text>
                <Text style={styles.dreamContent}>{item.dreamContent}</Text>
                <Text style={styles.createdAt}>{item.createdAt}</Text>
              </View>
            </TouchableOpacity>
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
  createdAt: {
    color: 'white',
    fontSize: 10,
  },
  emptyText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
});
