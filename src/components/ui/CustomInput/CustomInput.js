import { InputActionsStyled, InputStyled, InputButton } from "../../../assets";

const CustomInput = ({ onChange, type, searchVal }) => {
  return (
    <InputActionsStyled>
      <InputStyled value={searchVal} type={type} onChange={onChange} />
      <InputButton>Search</InputButton>
    </InputActionsStyled>
  );
};

export default CustomInput;
