import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Section1 from "./src/Section1/Main";
import Section2 from "./src/Section2/Main";
import Section3 from "./src/Section3/Main";
import Section4 from "./src/Section4/Main";
import Section5 from "./src/Section5/Main";
import Section6 from "./src/Section6/Main";
import Section7 from "./src/Section7/Main";
import Section8 from "./src/Section8/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
