import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image, Alert } from 'react-native';
import { GlobalLayout } from '../components/layout';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function DreamDetails() {
  const [title, setTitle] = useState('');
  const [journal, setJournal] = useState('');
  const [emotion, setEmotion] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { dreamId } = route.params;

  useEffect(() => {
    fetchDreamDetails(dreamId);
  }, [dreamId]);

  const fetchDreamDetails = async (dreamId) => {
    userId = 2;
    try {
      const response = await fetch(`http://10.88.11.94:3000/api/dreams/${userId}/${dreamId}`);
      const json = await response.json();
      if (json.error) {
        throw new Error(json.error);
      }
      const dream = json.dream;
      setTitle(dream.dreamTitle);
      setJournal(dream.dreamContent);
      setEmotion(dream.dreamEmotion);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch dream details');
    }
  };

  const handleSavePress = async () => {
    // userId =2;
    try {
      const response = await fetch(`http://10.88.11.94:3000/api/dreams/${userId}/${dreamId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          dreamTitle: title,
          dreamContent: journal,
          dreamEmotion: emotion,
        }),
      });
      if (response.ok) {
        Alert.alert('Success', 'Dream updated!');
        navigation.navigate('Dreams');
      } else {
        const errorText = await response.text();
        throw new Error(errorText);
      }
    } catch (error) {
      Alert.alert('Error', error.toString());
    }
  };

  const handleEmotionPress = (selectedEmotion) => {
    setEmotion(selectedEmotion);
  };

  return (
    <GlobalLayout>
      <View style={styles.container}>
        <TextInput
          editable
          numberOfLines={1}
          onChangeText={text => setTitle(text)}
          value={title}
          placeholder="Title of the dream"
          placeholderTextColor="#888"
          style={styles.titleInput}
        />
        <TextInput
          editable
          multiline
          numberOfLines={10}
          onChangeText={text => setJournal(text)}
          value={journal}
          placeholder="Write your journal here..."
          placeholderTextColor="#888"
          style={styles.journalInput}
        />
        <View style={styles.emotionBar}>
          <Text style={styles.emotionQuestion}>How did your dream make you feel?</Text>
          <View style={styles.emotionButtonsContainer}>
            <TouchableOpacity
              style={[
                styles.emotionButton,
                emotion === 'Joy' && styles.selectedEmotionButton
              ]}
              onPress={() => handleEmotionPress('Joy')}
            >
              <Image
                source={require('../assets/happy.png')}
                style={styles.emotionImage}
              />
              <Text style={styles.emotionText}>Happy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.emotionButton,
                emotion === 'Fear' && styles.selectedEmotionButton
              ]}
              onPress={() => handleEmotionPress('Fear')}
            >
              <Image
                source={require('../assets/fear.png')}
                style={styles.emotionImage}
              />
              <Text style={styles.emotionText}>Scared</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.emotionButton,
                emotion === 'Confusion' && styles.selectedEmotionButton
              ]}
              onPress={() => handleEmotionPress('Confusion')}
            >
              <Image
                source={require('../assets/confused.png')}
                style={styles.emotionImage}
              />
              <Text style={styles.emotionText}>Confused</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.emotionButton,
                emotion === 'Sadness' && styles.selectedEmotionButton
              ]}
              onPress={() => handleEmotionPress('Sadness')}
            >
              <Image
                source={require('../assets/sad.png')}
                style={styles.emotionImage}
              />
              <Text style={styles.emotionText}>Sad</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.saveButton} onPress={() => {handleSavePress()}}>
          <Text style={styles.saveButtonText}>Save Dream</Text>
        </TouchableOpacity>
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
  titleInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  journalInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: 'white',
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  emotionBar: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  emotionQuestion: {
    fontSize: 16,
    marginBottom: 10,
    color: 'white',
  },
  emotionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  emotionButton: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  selectedEmotionButton: {
    borderColor: '#A4C2DB',
    borderWidth: 2,
    borderRadius: 10,
  },
  emotionImage: {
    width: 70,
    height: 70,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  emotionText: {
    color: 'white',
    fontSize: 16,
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: '#A4C2DB',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
