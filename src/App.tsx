import React from "react";
import styled from "styled-components/macro";
import { Chess } from "./Chess";

const Main = styled.div`
  box-sizing: border-box;
  height: 100vh;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 0;
`;

const Nav = styled.nav`
  padding-bottom: 0.5rem;
`;

const Header = () => <Title>Chess Trainer</Title>;

function App() {
  return (
    <Main>
      <Header />
      <Nav>Nav Bar</Nav>
      <Chess />
    </Main>
  );
}

export default App;
