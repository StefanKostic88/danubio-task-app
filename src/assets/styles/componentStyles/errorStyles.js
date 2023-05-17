import styled from "styled-components";

export const ErrorWindowStyled = styled.div`
  width: 100%;
  padding: 2rem 0;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  background: black;
`;

export const ErrorInnerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ErrorMessageStyled = styled.h2`
  text-align: center;
  line-height: 3rem;
  font-size: 2rem;
  padding: 1rem;
  color: #5cad4a;
  max-width: 85ch;
`;
