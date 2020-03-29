import React, { useEffect, useState } from "react";
import axios from "axios";
import { StatusBar } from "react-native";
import styled from "styled-components/native";

export default function App() {
  const [name, setName] = useState();

  useEffect(() => {
    async function fetchSomething() {
      try {
        const { data } = await axios.get("https://swapi.co/api/people/4/");

        setName(data.name);
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
        <Label>Character</Label>
        <Char>{name}</Char>
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

const Label = styled.Text`
  color: #ccc;
  font-size: 18px;
`;

const Char = styled.Text`
  color: #fff;
  font-size: 24px;
`;
