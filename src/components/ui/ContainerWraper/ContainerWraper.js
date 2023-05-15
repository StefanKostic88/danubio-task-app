import React from "react";
import styled from "styled-components";

const ContainerWraperStyled = styled.main`
  margin: 0 auto;
  min-height: calc(
    100vh - ${(props) => (props.topSide ? props.topSide : 0)}px -
      ${(props) => (props.bottomSide ? props.bottomSide : 0)}px
  );
  border: 1px solid red;
  width: 100%;
  margin-top: ${(props) => (props.topSide ? props.topSide : 0)}px;
  margin-bottom: ${(props) => (props.bottomSide ? props.bottomSide : 0)}px;
  position: relative;
  z-index: 1;
`;

const ContainerWraper = ({ children, navigationHeight, footerHeight }) => {
  return (
    <ContainerWraperStyled topSide={navigationHeight} bottomSide={footerHeight}>
      {children}
    </ContainerWraperStyled>
  );
};

export default ContainerWraper;
