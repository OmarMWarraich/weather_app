import { Feather } from "@expo/vector-icons";
import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text>Current Weather</Text>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's sunny</Text>
        <Text style={styles.message}>it's perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    fontSize: 50,
    color: "black",
  },
  feels: {
    fontSize: 40,
    color: "black",
  },
  highLow: {
    fontSize: 30,
    color: "black",
  },
  highLowWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 20,
    paddingBottom: 40,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});

export default CurrentWeather;
