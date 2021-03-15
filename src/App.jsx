import React from "react";
import { ImageBackground } from "react-native";
import styled from "styled-components/native";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components/native";
import Navigation from "../navigations/index";

//const backIMG = { uri: "../assets/backgroundIMG/loading.png" };
//
//background-image: url("../assets/backgroundIMG/loading.png");
const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 400px;
  top: 450px;
`;

/*
const Image = styled.Image`
  flex: 1;
  resizemode: "cover";
  justifycontent: "center";
`;
*/

const App = () => {
  /*
  return (
    <Container>
      <IconButton type={images.homeScr} />
      <IconButton type={images.checkOne} />
      <IconButton type={images.checkTwo} />
      <IconButton type={images.checkList} />
      <IconButton type={images.setting} />
    </Container>
  );*/
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
};
export default App;
