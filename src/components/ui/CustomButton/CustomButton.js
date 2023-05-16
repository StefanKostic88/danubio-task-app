import { CustomButtonStyled } from "../../../assets";

const CustomButton = ({ children, onClick, isActive }) => {
  return (
    <CustomButtonStyled onClick={onClick} isActive={isActive}>
      {children}
    </CustomButtonStyled>
  );
};

export default CustomButton;
