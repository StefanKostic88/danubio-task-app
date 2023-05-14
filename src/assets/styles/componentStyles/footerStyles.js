import styled from "styled-components";

export const FooterStyled = styled.footer`
  z-index: 10;
  position: fixed;
  bottom: 0;
  width: ${({ theme }) => theme.width.lg};
  left: 50%;
  transform: translateX(-50%);
  padding: 2rem;
  background: black;
`;

export const PaginationListStyled = styled.ul`
  display: flex;
  justify-content: center;
`;
export const SideButtonsStyled = styled.li`
  color: ${({ theme }) => theme.fontColor.primary};
  border: 1px solid ${({ theme }) => theme.color.primaryGreen};
  background: ${(props) => (props.disabled ? "#00B2C8" : "#212529")};
  padding: 0.6rem 1.75rem;
  cursor: pointer;
  font-size: 1.8rem;
  cursor: ${(props) => (props.disabled ? "pointer" : "not-allowed")};
  &:hover {
    background: ${(props) => (props.disabled ? "#00B2C8" : null)};
  }
`;

export const PaginationButtonStyled = styled.li`
  font-size: 1.8rem;

  color: ${({ theme }) => theme.fontColor.primary};
  border: 1px solid ${({ theme }) => theme.color.primaryGreen};
  padding: 0.6rem 1.4rem;
  background: ${(props) => (props.isActive ? "#00B2C8" : "black")};
  display: ${(props) => (props.isVsible ? null : "none")};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.color.primaryGreen};
  }
`;
