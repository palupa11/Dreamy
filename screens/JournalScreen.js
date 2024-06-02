import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image, Alert, ImageBackground } from 'react-native';
import { GlobalLayout } from '../components/layout';
import { useNavigation } from '@react-navigation/native';

export default function JournalScreen() {
  const [title, setTitle] = useState('');
  const [journal, setJournal] = useState('');
  const navigation = useNavigation();

  const handleEmotionPress = (emotion) => {
    Alert.alert(`Emotion selected: ${emotion}`);
  };

  const handleSavePress = async () => {
    const userId = 2; // Example userId
    try {
      const url = `http://10.88.11.94:3000/api/dreams`;
      const result = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "userId": userId,
          "dreamTitle": title,
          "dreamContent": journal,
        }),
      });
      const json = await result.json();
      if (json) {
        console.warn(json);
      }
    } catch (err) {
      console.error("Error saving dream:", err);
    }
  };

  return (
    <GlobalLayout>
      <View style={styles.container}>
        <TextInput
          editable
          numberOfLines={1}
          onChangeText={(text) => setTitle(text)}
          value={title}
          placeholder="Title of the dream"
          placeholderTextColor="#888"
          style={styles.titleInput}
        />
        <TextInput
          editable
          multiline
          numberOfLines={10}
          onChangeText={(text) => setJournal(text)}
          value={journal}
          placeholder="Write your journal here..."
          placeholderTextColor="#888"
          style={styles.journalInput}
        />
        <View style={styles.emotionBar}>
          <Text style={styles.emotionQuestion}>How did your dream make you feel?</Text>
          <View style={styles.emotionButtonsContainer}>
            <TouchableOpacity
              style={styles.emotionButton}
              onPress={() => handleEmotionPress('Joy')}
            >
              <Image
                source={require('../assets/happy.png')}
                style={styles.emotionImage}
              />
              <Text style={styles.emotionText}>Happy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.emotionButton}
              onPress={() => handleEmotionPress('Fear')}
            >
              <Image
                source={require('../assets/fear.png')}
                style={styles.emotionImage}
              />
              <Text style={styles.emotionText}>Scared</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.emotionButton}
              onPress={() => handleEmotionPress('Confusion')}
            >
              <Image
                source={require('../assets/confused.png')}
                style={styles.emotionImage}
              />
              <Text style={styles.emotionText}>Confused</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.emotionButton}
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
    backgroundColor: '#617F99',
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

      
    
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         userId: userId,
//         dreamTitle: title,
//         dreamContent: journal,
//       }),
//     };
//     response = await response.json();
//     if (response.ok) {
//       Alert.alert('Dream saved!');
//       // await navigation.navigate('Dreams');
//     } else {
//       Alert.alert('Failed to save dream');
//     }
//   // } catch (error) {
//   //   Alert.alert('Error', error.toString());
//   };
// // };
  





// const handleSavePress = async() => {
//   console.warn(title);
//   console.warn(journal);
//   try {
//     const userId = 2; // Example userId
//     const response = await fetch(`http://10.88.11.94:3000/api/dreams/${userId}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         userId: userId,
//         dreamTitle: title,
//         dreamContent: journal,
//       }),
//     });
//     response = await response.json();
//     if (response.ok) {
//       Alert.alert('Dream saved!');
//       // await navigation.navigate('Dreams');
//     } else {
//       Alert.alert('Failed to save dream');
//     }
//   } catch (error) {
//     Alert.alert('Error', error.toString());
//   }
// };
//   return (
 

 
//     <GlobalLayout>
//       <View style={styles.container}>
//         <TextInput
//           editable
//           numberOfLines={1}
//           onChangeText={(text) => setTitle(text)}
//           value={title}
//           placeholder="Title of the dream"
//           placeholderTextColor="#888"
//           style={styles.titleInput}
//         />
//         <TextInput
//           editable
//           multiline
//           numberOfLines={10}
//           onChangeText={(text) => setJournal(text)}
//           value={journal}
//           placeholder="Write your journal here..."
//           placeholderTextColor="#888"
//           style={styles.journalInput}
//         />
//         <View style={styles.emotionBar}>
//           <Text style={styles.emotionQuestion}>How did your dream make you feel?</Text>
//           <View style={styles.emotionButtonsContainer}>
//             <TouchableOpacity
//               style={styles.emotionButton}
//               onPress={() => handleEmotionPress('Joy')}
//             >
//               <Image
//                 source={require('../assets/happy.png')}
//                 style={styles.emotionImage}
//               />
//               <Text style={styles.emotionText}>Happy</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.emotionButton}
//               onPress={() => handleEmotionPress('Fear')}
//             >
//               <Image
//                 source={require('../assets/fear.png')}
//                 style={styles.emotionImage}
//               />
//               <Text style={styles.emotionText}>Scared</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.emotionButton}
//               onPress={() => handleEmotionPress('Confusion')}
//             >
//               <Image
//                 source={require('../assets/confused.png')}
//                 style={styles.emotionImage}
//               />
//               <Text style={styles.emotionText}>Confused</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.emotionButton}
//               onPress={() => handleEmotionPress('Sadness')}
//             >
//               <Image
//                 source={require('../assets/sad.png')}
//                 style={styles.emotionImage}
//               />
//               <Text style={styles.emotionText}>Sad</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <TouchableOpacity style={styles.saveButton} onPress={handleSavePress}>
//           <Text style={styles.saveButtonText}>Save Dream</Text>
//         </TouchableOpacity>
//       </View>
//     </GlobalLayout>
   
//   );
// }

// const styles = StyleSheet.create({  
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#21325E',
//   },
//   titleInput: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 10,
//     fontSize: 16,
//     backgroundColor: 'white',
//     marginBottom: 20,
//   },
//   journalInput: {
//     flex: 1,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 10,
//     fontSize: 16,
//     backgroundColor: 'white',
//     textAlignVertical: 'top',
//     marginBottom: 20,
//   },
//   emotionBar: {
//     alignItems: 'center',
//     paddingVertical: 10,
//   },
//   emotionQuestion: {
//     fontSize: 16,
//     marginBottom: 10,
//     color: 'white',
//   },
//   emotionButtonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//   },
//   emotionButton: {
//     alignItems: 'center',
//     paddingVertical: 10,
//   },
//   emotionImage: {
//     width: 70,
//     height: 70,
//     marginBottom: 5,
//     resizeMode: 'contain',
//   },
//   emotionText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   saveButton: {
//     marginTop: 20,
//     backgroundColor: '#A4C2DB',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   saveButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });
