import React from "react";
import styled from "styled-components";

const ContainerWraperStyled = styled.main`
  margin: 0 auto;
  min-height: calc(
    100vh - ${(props) => (props.topSide ? props.topSide : 0)}px -
      ${(props) => (props.topSide ? props.topSide : 0)}px
  );
  border: 1px solid black;
  // width: ${({ theme }) => theme.width.lg};
  width: 100%;
`;

const ContainerWraper = ({ children, navigationHeight, footerHeight }) => {
  return (
    <ContainerWraperStyled topSide={navigationHeight} bottomSide={footerHeight}>
      {children}
    </ContainerWraperStyled>
  );
};

export default ContainerWraper;
