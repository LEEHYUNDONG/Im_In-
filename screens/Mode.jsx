import React from "react";
import styled from "styled-components/native";
import { Text, Button } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const Mode = () => {
  return (
    <Container>
      <Text style={{ fontSize: 24 }}> Mode </Text>
    </Container>
  );
};

export default Mode;
