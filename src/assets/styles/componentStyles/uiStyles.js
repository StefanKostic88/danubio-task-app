import styled from "styled-components";

export const ContainerWraperStyled = styled.main`
  margin: 0 auto;
  min-height: calc(
    100vh - ${(props) => (props.topSide ? props.topSide : 0)}px -
      ${(props) => (props.bottomSide ? props.bottomSide : 0)}px
  );
  border: 1px solid red;
  width: 100%;
  margin-top: ${(props) => (props.topSide ? props.topSide : 92)}px;
  margin-bottom: ${(props) => (props.bottomSide ? props.bottomSide : 92)}px;
  position: relative;
  z-index: 1;
`;

export const CustomButtonStyled = styled.button`
  font-size: 1.8rem;
  // color: ${({ theme }) => theme.fontColor.primaryDark};
  border: 1px solid ${({ theme }) => theme.color.primaryGreen};
  padding: 0.5rem 2rem;
  border-radius: 3px;
  width: 100%;
  cursor: pointer;
  background: ${(props) => (props.isActive ? "#00B2C8" : null)};
  color: ${(props) => (props.isActive ? "#fff" : "#000")};

  &:hover {
    background: ${({ theme }) => theme.color.primaryGreen};
    color: ${({ theme }) => theme.fontColor.primary};
  }
`;

export const InputActionsStyled = styled.div`
  display: flex;
  width: 100%;
`;

export const InputStyled = styled.input`
  padding: 0.75rem;
  border-top-left-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
  font-size: 16px;
  background: none;
  outline: none;
  width: 100%;
  height: 100%;
  border: none;
  box-shadow: 0 0 1px 1px ${({ theme }) => theme.color.primaryBlue};
  color: #fff;
`;

export const InputButton = styled.button`
  width: max-content;
  display: inline-flex;
  align-items: center;
  column-gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1px;
  font-size: 16px;
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
  box-shadow: 0 0 1px 1px ${({ theme }) => theme.color.primaryBlue};
  border: none;
  color: #fff;
  background: #0c6efd;
`;

export const OverlayStyled = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 100;
`;

export const ModalyStyled = styled.div`
  min-width: 600px;
  min-height: 500px;
  position: fixed;
  z-index: 150;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: black;
  color: #fff;
  border: 2px solid ${({ theme }) => theme.color.primaryGreen};
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  h4 {
    font-weight: 500;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
    min-width: unset;
  }
  @media ${({ theme }) => theme.breakpoints.mobile} {
  }
`;

export const ModalTopSideStyled = styled.div`
  display: flex;
  div {
    flex: 1;
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0 0 1rem;
  }
`;

export const ModalBottomSideStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem 2rem;
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ButtonActionStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 2rem 2rem 2rem;
  gap: 0.25rem;
  @media (max-width: 300px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;
