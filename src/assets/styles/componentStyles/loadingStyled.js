import styled from "styled-components";

export const LoadingStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const LoadingInnerStyled = styled.div`
  width: 30%;
  transform: translateY(50%);
  img {
    object-fit: cover;
    width: 100%;
  }
`;
