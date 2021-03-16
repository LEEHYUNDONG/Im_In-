import React, { Component } from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.background};

`;

/*class Home extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}>
        <Text style={{ fontSize: 24 }}>Home</Text>
      </View>
    );
  }
}
*/

const Home = () => {
  return (
    <Container>
      <Text style={{ fontSize: 24 }}>Home</Text>
    </Container>
  );
};

export default Home;
