import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";

const City = () => {
  const {
    container,
    imageLayout,
    cityName,
    countryName,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/city_bg.jpg")}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>KualaLumpur</Text>
        <Text style={[countryName, cityText]}>Malaysia</Text>
        <View style={populationWrapper}>
          <Feather name="user" size={50} color="red" />
          <Text style={populationText}>8000</Text>
        </View>
        <View style={riseSetWrapper}>
          <Text style={riseSetText}>07:09:58</Text>
          <Feather name="sunrise" size={50} color="white" />
          <Feather name="sunset" size={50} color="white" />
          <Text style={riseSetText}>19:20:24</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
  },
  populationWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
    fontWeight: "bold",
  },
  riseSetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
});

export default City;
