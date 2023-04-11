import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  View,
  StatusBar,
} from "react-native";

const DATA = [
  {
    dt_txt: "2021-03-01 00:00:00",
    main: {
      temp_max: 6.5,
      temp_min: 4.5,
    },
    weather: [
      {
        main: "Clouds",
      },
    ],
  },
  {
    dt_txt: "2021-04-01 00:00:00",
    main: {
      temp_max: 12.5,
      temp_min: 8.5,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2021-05-01 00:00:00",
    main: {
      temp_max: 18.5,
      temp_min: 14.5,
    },
    weather: [
      {
        main: "Clear",
      },
    ],
  },
];

const Item = (props) => {
  const { dt_txt, min, max, condition } = props;

  return (
    <View style={styles.item}>
      <Feather name="sun" size={50} color="white" />
      <Text style={styles.date}>{dt_txt}</Text>
      <Text style={styles.temp}>{max}</Text>
      <Text style={styles.temp}>{min}</Text>
    </View>
  );
};

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    marginTop: StatusBar.currentHeight || 0,
  },
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
  temp: {
    fontSize: 20,
    color: "white",
  },
  date: {
    fontSize: 15,
    color: "white",
  },
});

export default UpcomingWeather;
