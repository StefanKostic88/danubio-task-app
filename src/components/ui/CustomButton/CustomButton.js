import React from "react";

import styled from "styled-components";

const CustomButtonStyled = styled.button`
  font-size: 1.8rem;

  color: ${({ theme }) => theme.fontColor.primaryDark};
  border: 3px solid ${({ theme }) => theme.color.primaryGreen};

  padding: 0.5rem 2rem;
  border-radius: 3px;
  // border: none;
  // width: 100%;

  &:hover {
    background: ${({ theme }) => theme.color.primaryGreen};
    color: ${({ theme }) => theme.fontColor.primary};
  }
`;

const CustomButton = ({ children }) => {
  return <CustomButtonStyled>{children}</CustomButtonStyled>;
};

export default CustomButton;
