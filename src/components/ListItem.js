import { Feather } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Item = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { dt_txt, min, max, condition } = props;
  const { item, date, temp } = styles;

  return (
    <View style={item}>
      <Feather name="sun" size={50} color="white" />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{max}</Text>
      <Text style={temp}>{min}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "pink",
  },
  date: {
    fontSize: 15,
    color: "white",
  },
  temp: {
    fontSize: 20,
    color: "white",
  },
});

export default Item;
