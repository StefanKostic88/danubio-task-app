import styled from "styled-components";

const InputActionsStyled = styled.div`
  display: flex;
  width: 100%;
`;

const InputStyled = styled.input`
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

const InputButton = styled.button`
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

const CustomInput = ({ onChange, type, searchVal }) => {
  return (
    <InputActionsStyled>
      <InputStyled value={searchVal} type={type} onChange={onChange} />
      <InputButton>Search</InputButton>
    </InputActionsStyled>
  );
};

export default CustomInput;
