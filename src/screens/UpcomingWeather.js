import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";

import Item from "../components/ListItem";

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

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  const { image, container } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/upcoming_bg.jpg")}
        style={image}
      >
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "royalBlue",
    marginTop: 0,
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
