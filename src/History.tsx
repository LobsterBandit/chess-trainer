import React from "react";
import styled from "styled-components/macro";
import { ChessState } from "./Chess";

type HistoryProps = Pick<ChessState, "history">;

const HistoryContainer = styled.div`
  flex: 1 1;
  margin: 1rem 0;
  padding-left: 1rem;
`;

export function History({ history }: HistoryProps) {
  return (
    <HistoryContainer>
      {history.map(({ move }, idx) => (
        <div key={`${idx}-${move}`}>{`${idx}) ${move}`}</div>
      ))}
    </HistoryContainer>
  );
}
