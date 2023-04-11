import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

const UpcomingWeather = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
});

export default UpcomingWeather;
