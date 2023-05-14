import styled from "styled-components";

export const NavigationStyled = styled.nav`
  background: #e0e0e0;
  position: fixed;
  width: 100%;
  z-index: 10;
  min-height: 35px;
`;

export const InnerNavStyled = styled.div`
  max-width: ${({ theme }) => theme.width.xl};
  padding: 1.75rem 0;
  display: flex;
  margin: 0 auto;
  @media ${({ theme }) => theme.breakpoints.xl} {
    padding: 1.75rem 2rem;
  }
`;

export const NavigationHeadingStyled = styled.h3`
  // letter-spacing: 0.25px;
  font-weight: 700;
  cursor: pointer;
  transition: all 300ms ease;
  &:hover {
    transition: all 300ms ease;
    color: ${({ theme }) => theme.color.primaryGreen};
  }
  @media ${({ theme }) => theme.breakpoints.mobile} {
    text-align: center;
    width: 100%;
  }
`;
