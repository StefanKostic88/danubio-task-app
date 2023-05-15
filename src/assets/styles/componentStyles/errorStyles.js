import styled from "styled-components";

export const ErrorWindowStyled = styled.div`
  width: 100%;
  padding: 2rem 0;
  margin-top: 20%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  background: #e0e0e0;
`;

export const ErrorInnerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ErrorMessageStyled = styled.h2`
  text-align: center;
  line-height: 5rem;
`;
