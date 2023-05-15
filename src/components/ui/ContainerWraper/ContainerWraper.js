import React from "react";
import { ContainerWraperStyled } from "../../../assets";

const ContainerWraper = ({ children, navigationHeight, footerHeight }) => {
  return (
    <ContainerWraperStyled topSide={navigationHeight} bottomSide={footerHeight}>
      {children}
    </ContainerWraperStyled>
  );
};

export default ContainerWraper;
