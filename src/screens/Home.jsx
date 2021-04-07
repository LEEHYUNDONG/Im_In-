import React, { Component, useLayoutEffect } from "react";
import styled from "styled-components/native";
import { Text, StyleSheet, View } from "react-native";
import MaterialIcons from "@expo/vector-icons";
import AuthStack from '../navigations';
import { ImageBackground } from "react-native";

const Container = styled.SafeAreaView`
  flex: 1;
  flexDirection: 'column';
  background-color: ${({ theme }) => theme.background};
`;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});

const image = { uri: "../assets/backgroundIMG/loading.png" };

const Home = ({}) => {
  return (
    <View>
      <ImageBackground source={image} style>
        <Text style={{   fontSize: 24   }}>Home</Text>
      </ImageBackground>
    </View>
  );
};

export default Home;
