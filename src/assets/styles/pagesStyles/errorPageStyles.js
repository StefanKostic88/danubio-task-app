import styled from "styled-components";
import { CustomButtonStyled } from "../componentStyles/uiStyles";

import errorImage from "../../images/rickandmortyerror.jpg";

export const ErrorPageStyled = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessageContainerStyled = styled.div`
  position: relative;
  background-image: url(${errorImage});
  background-position: center;
  background-size: cover;
  width: 50%;
  height: 50%;
  border-radius: 50px;

  box-shadow: inset 0 0 40px 30px rgba(0, 0, 0, 0.75);

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
    height: 50%;
  }

  &:before {
    content: "";
    // background: #23232380;
    background: rgba(0, 0, 0, 0.75);
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 40px 30px rgba(0, 0, 0, 0.85);
    border-radius: 50px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessageStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  // background: rgba(0, 0, 0, 0.5);

  @media ${({ theme }) => theme.breakpoints.md} {
    // width: 100%;
    // height: 50%;
  }

  border-radius: 50px;
  padding: 2rem 1rem;
  h1,
  h3 {
    color: #5cad4a;
    max-width: 40ch;
    text-align: center;
    line-height: 40px;
  }
`;

export const ErrorButtonStyled = styled(CustomButtonStyled)`
  background: transparent;
  width: fit-content;
  padding: 1rem 2rem;
  font-size: 2.4rem;
  font-weight: 600;
  color: #5cad4a;
  border: 1px solid #5cad4a;
  border-radius: 10px;
  &:hover {
    border: 1px solid black;
    background: #5cad4a;
    color: black;
  }
`;
