import React from "react";
import {
  SafeAreaView,
  Text,
  ImageBackground,
  StyleSheet,
  View,
  StatusBar,
} from "react-native";

import IconText from "../components/IconText";

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
    rowDirection,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/city_bg.jpg")}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>KualaLumpur</Text>
        <Text style={[countryName, cityText]}>Malaysia</Text>
        <View style={[populationWrapper, rowDirection]}>
          <IconText
            iconName="user"
            iconColor="red"
            bodyText="8000"
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowDirection]}>
          <IconText
            iconName="sunrise"
            iconColor="white"
            bodyText="07:09:28"
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName="sunset"
            iconColor="white"
            bodyText="19:20:58"
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 25,
    color: "white",
  },
  rowDirection: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
