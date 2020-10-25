import React from "react";
import styled from "styled-components/macro";
import { Square } from "./Square";

export type ChessBoard = {
  [key: string]: string | null;
};

const BoardContainer = styled.div`
  display: grid;
  grid-gap: 0.25rem;
  grid-template-columns: repeat(8, 1fr);
  margin: 1rem 0;
`;

type BoardProps = {
  state: ChessBoard;
  onSquareClick?: (name: string) => void;
};

export function Board({ state, onSquareClick }: BoardProps) {
  return (
    <BoardContainer>
      {Object.entries(state).map(([name, piece]) => (
        <Square key={name} name={name} piece={piece} onClick={onSquareClick} />
      ))}
    </BoardContainer>
  );
}
