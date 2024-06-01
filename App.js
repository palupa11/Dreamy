import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingsScreen from "./screens/SettingsScreen";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import { ThemeProvider } from "./context/theme"
import { Text, Switch, View, StyleSheet } from "react-native";
import SignupScreen from "./screens/SignupScreen"; //Si funciona
import LoginScreen from "./screens/LoginScreen"; ///Si funciona
import JournalScreen from "./screens/JournalScreen";//Si functiona
import DreamsScreen from "./screens/DreamsScreen";//Si functiona
import HomeStack from "./components/homestack"; 
import DreamsStack from "./components/dreamstack"; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStack from './components/AuthStack';
import React, { useEffect, useState } from 'react';



import { itim } from "@expo-google-fonts/itim";
import DreamDetails from "./screens/DreamDetails";

const Tab = createBottomTabNavigator();

function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'house-user';
          } else if (route.name === 'About') {
            iconName = 'cloud';
          } else if (route.name === 'Dreams') {
            iconName = 'book';
          } else if (route.name === 'Settings') {
            iconName = 'cog';
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Dreams" component={DreamsStack} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      // Uncomment this line to clear the token for testing purposes
      await AsyncStorage.removeItem('token');

      const token = await AsyncStorage.getItem('token');
      setIsAuthenticated(!!token);
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return null; // Or a loading spinner
  }

  return (
    <NavigationContainer>
      <ThemeProvider>
        {isAuthenticated ? <MainApp /> : <AuthStack />}
      </ThemeProvider>
    </NavigationContainer>
  );
}




// const Tab = createBottomTabNavigator();

// export default function App() {
//   //  const [fontsLoaded] = useFonts({
//   //   itim: require('@expo-google-fonts/itim'),
//   // });

//   // if (!fontsLoaded) {
//   //   return null; // or any loading indicator
  
//   return (
//     <NavigationContainer>
//       <ThemeProvider>
//       <Tab.Navigator
//         screenOptions={({ route }) => {
//           return {
//             tabBarIcon: ({ color, size }) => {
//               let iconName;
//               if (route.name === "Home") {
//                 iconName = "house-user";
//               } else if (route.name === "About") {
//                 iconName = "cloud";
//               }else if (route.name === "Dreams") {
//                 iconName = "book";
//               } else if (route.name === "Settings") {
//                 iconName = "cog";
//               }
              
//               return <FontAwesome5 name={iconName} size={size} color={color} />;
//             },
//           };
//         }}
//       >
//         <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }}  />
//         <Tab.Screen name="About" component={AboutScreen} />
       
//         <Tab.Screen name="Dreams" component={DreamsStack} options={{ headerShown: false }} /> 
//         <Tab.Screen name="Settings" component={LoginScreen} />  
        
            
        
//       </Tab.Navigator>
//       </ThemeProvider>
//     </NavigationContainer>
//   );
// }