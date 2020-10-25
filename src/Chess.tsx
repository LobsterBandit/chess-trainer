import React, { useReducer } from "react";
import styled from "styled-components/macro";
import { Board, ChessBoard } from "./Board";
import { History } from "./History";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid red;
  color: red;
  margin: 0.5rem 1rem;
  padding: 0.25rem 1rem;
  text-align: center;

  &:hover {
    background: red;
    color: white;
  }
`;

const initialBoard: ChessBoard = {
  a8: "RB1",
  b8: "NB1",
  c8: "BB1",
  d8: "KB1",
  e8: "QB1",
  f8: "BB2",
  g8: "NB2",
  h8: "RB2",
  a7: "PB1",
  b7: "PB2",
  c7: "PB3",
  d7: "PB4",
  e7: "PB5",
  f7: "PB6",
  g7: "PB7",
  h7: "PB8",
  a6: null,
  b6: null,
  c6: null,
  d6: null,
  e6: null,
  f6: null,
  g6: null,
  h6: null,
  a5: null,
  b5: null,
  c5: null,
  d5: null,
  e5: null,
  f5: null,
  g5: null,
  h5: null,
  a4: null,
  b4: null,
  c4: null,
  d4: null,
  e4: null,
  f4: null,
  g4: null,
  h4: null,
  a3: null,
  b3: null,
  c3: null,
  d3: null,
  e3: null,
  f3: null,
  g3: null,
  h3: null,
  a2: "PW1",
  b2: "PW2",
  c2: "PW3",
  d2: "PW4",
  e2: "PW5",
  f2: "PW6",
  g2: "PW7",
  h2: "PW8",
  a1: "RW1",
  b1: "NW1",
  c1: "BW1",
  d1: "KW1",
  e1: "QW1",
  f1: "BW2",
  g1: "NW2",
  h1: "RW2",
};

export type ChessHistory = {
  board: ChessBoard;
  move: string;
};

export type ChessState = {
  board: ChessBoard;
  history: ChessHistory[];
  pointer: number;
};

const initialState: ChessState = {
  board: initialBoard,
  history: [{ board: initialBoard, move: "start" }],
  pointer: 0,
};

function historyReducer(
  state: ChessState,
  action: { type: "reset" } | { type: "remove"; payload: string }
) {
  switch (action.type) {
    case "remove":
      if (state.board[action.payload] === null) {
        return state;
      }

      const newBoard = { ...state.board, [action.payload]: null };

      return {
        pointer: state.pointer + 1,
        history: [
          ...state.history,
          { board: newBoard, move: `x${state.board[action.payload]}` },
        ],
        board: newBoard,
      };
    case "reset":
      return {
        pointer: 0,
        history: [{ board: initialBoard, move: "start" }],
        board: initialBoard,
      };
    default:
      return state;
  }
}

const Container = styled.main`
  width: 80%;
  display: flex;
  flex: 0 1 auto;
`;

export function Chess() {
  const [{ board, history }, dispatch] = useReducer(
    historyReducer,
    initialState
  );

  const reset = () => {
    dispatch({ type: "reset" });
  };

  const handleClick = (name: string) => {
    dispatch({ type: "remove", payload: name });
  };

  return (
    <>
      <Button onClick={reset}>Reset</Button>
      <Container>
        <div
          css={`
            flex: 2 0;
          `}
        >
          <Board state={board} onSquareClick={handleClick} />
        </div>
        <History history={history} />
      </Container>
    </>
  );
}
