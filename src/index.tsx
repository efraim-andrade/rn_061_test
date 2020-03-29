import React, { useEffect } from "react";
import axios from "axios";
import { StatusBar } from "react-native";
import styled from "styled-components/native";

export default function App() {
  useEffect(() => {
    async function fetchSomething() {
      try {
        const response = await axios.get("https://swapi.co/api/people/1/");

        console.log(`fetchSomething`, response.data);
      } catch (error) {
        console.log(`error`, error);
      }
    }

    fetchSomething();
  }, []);

  return (
    <>
      <StatusBar />

      <Container>
        <Text>boilerplate ?</Text>
      </Container>
    </>
  );
}

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;

  background: #333;
`;

const Text = styled.Text`
  color: #fff;
  font-size: 24px;
`;
