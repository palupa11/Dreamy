import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { GlobalLayout } from '../components/layout';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { SwipeListView } from 'react-native-swipe-list-view';

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

  const deleteDream = async (dreamId) => {
    const userId = 2; // Example userId, ensure this is dynamically set based on the logged-in user
    try {
      const response = await fetch(`http://10.88.11.94:3000/api/dreams/${userId}/${dreamId}`, {
        method: 'DELETE',
      });
      const json = await response.json();
      if (json.error) {
        throw new Error(json.error);
      }
      setDreams(dreams.filter(dream => dream.dreamId !== dreamId));
      alert('Dream deleted successfully');
    } catch (error) {
      alert('Failed to delete dream. Please try again.');
    }
  };

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteDream(data.item.dreamId)}
      >
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <GlobalLayout>
      <ImageBackground
        source={require('../assets/background.png')} // Ensure this path is correct
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>
          <Text style={styles.headerText}>Your Dreams</Text>
          {error && <Text style={styles.errorText}>Error: {error}</Text>}
          <SwipeListView
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
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-75}
            ListEmptyComponent={<Text style={styles.emptyText}>No dreams logged yet.</Text>}
          />
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
    // opacity: 0.8,
  },
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: 'rgba(33, 50, 94, 0.8)', // Semi-transparent background to enhance text readability
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
    backgroundColor: '#617F99',
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
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: '#FCC931',
    right: 0,
  },
  backTextWhite: {
    color: 'black',
    fontWeight: 'bold',
  },
});
