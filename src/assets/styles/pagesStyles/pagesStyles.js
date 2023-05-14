import styled from "styled-components";

export const RootStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${({ theme }) => theme.width.lg};
  // width: 100%;
  margin: 0 auto;
  //
  // background: red;

  @media ${({ theme }) => theme.breakpoints.lg} {
    width: 100%;
  }
`;
