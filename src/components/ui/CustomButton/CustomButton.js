import React from "react";

import styled from "styled-components";

const CustomButtonStyled = styled.button`
  font-size: 1.8rem;

  color: ${({ theme }) => theme.fontColor.primaryDark};
  border: 1px solid ${({ theme }) => theme.color.primaryGreen};

  padding: 0.5rem 2rem;
  border-radius: 3px;

  // width: 100%;
  width: fit-content;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.primaryGreen};
    color: ${({ theme }) => theme.fontColor.primary};
  }
`;

const CustomButton = ({ children, onClick }) => {
  return <CustomButtonStyled onClick={onClick}>{children}</CustomButtonStyled>;
};

export default CustomButton;
