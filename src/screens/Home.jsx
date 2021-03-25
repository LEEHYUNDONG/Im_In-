import React, { Component, useLayoutEffect } from "react";
import styled from "styled-components/native";
import { Text, SafeAreaView, Button } from "react-native";
import MaterialIcons from "@expo/vector-icons";
import AuthStack from '../navigations';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;


const Home=({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: "#000000",
      headerRight: ({ tintColor }) => {
        <Button
          title="Login"
          color={tintColor}
          onPress={()=> navigation.navigate('Login')}
        />;
      }
    });
  }, []);
  return (
    <Container>
      <Text style={{fontSize: 24}}>Home</Text>
    </Container>
  );
};

export default Home;
