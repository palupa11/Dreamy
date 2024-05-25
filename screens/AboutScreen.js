import { Text, Switch, View, StyleSheet } from "react-native";

import { GlobalLayout } from "../components/layout";
import { useTheme } from "../context/theme";
import { GlobalStyles } from "../styles/global";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AboutScreen() {
//   const [isLargeText, setIsLargeText] = useTheme();
//   const globalStyles = GlobalStyles();

  return (
    <GlobalLayout>
      <View style={styles.view}>        
        <Text style={styles.innerText}>About Screen</Text>
      </View>
    </GlobalLayout>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
  },
     innerText: {
    color: 'white',
  },

});