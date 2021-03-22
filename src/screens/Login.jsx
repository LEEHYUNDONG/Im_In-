import React from "react";
import styled from "styled-components/native";
import { Text, Button } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const Login = ({ navigation }) => {
  return (
    <Container>
      <Text style={{ fontSize: 24, alignItems: "center" }}>Login Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate("Signup")} />
    </Container>
  );
};

export default Login;
