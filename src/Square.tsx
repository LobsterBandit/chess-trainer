import React, { useCallback } from "react";
import styled from "styled-components/macro";

const Cell = styled.div`
  border: 1px solid brown;
  background-color: white;
  padding-top: 100%;
  position: relative;

  &:hover {
    background-color: papayawhip;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  display: flex;
`;

const Name = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const Piece = styled.div`
  display: flex;
  flex: 1 0;
  justify-content: center;
  align-items: center;
`;

type SquareProps = {
  name: string;
  piece?: string | null;
  onClick?: (name: string) => void;
};

export function Square({ name, piece, onClick }: SquareProps) {
  const handleClick = useCallback(() => {
    onClick && onClick(name);
  }, [onClick, name]);

  return (
    <Cell>
      <Content onClick={handleClick}>
        <Name>{name}</Name>
        <Piece>{piece}</Piece>
      </Content>
    </Cell>
  );
}
