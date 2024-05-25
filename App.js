import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingsScreen from "./screens/SettingsScreen";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import { ThemeProvider } from "./context/theme"
import { Text, Switch, View, StyleSheet } from "react-native";
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
      <Tab.Navigator
        screenOptions={({ route }) => {
          return {
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = "house-user";
              } else if (route.name === "About") {
                iconName = "cloud";
              } else if (route.name === "Settings") {
                iconName = "cog";
              }
               else if (route.name === "SignUp") {
                iconName = "phone";
              }
              
              return <FontAwesome5 name={iconName} size={size} color={color} />;
            },
          };
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="SignUp" component={SignupScreen} />
      </Tab.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}