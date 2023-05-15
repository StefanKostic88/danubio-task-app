import { CustomButtonStyled } from "../../../assets";

const CustomButton = ({ children, onClick, isActive }) => {
  console.log(isActive);
  return (
    <CustomButtonStyled onClick={onClick} isActive={isActive}>
      {children}
    </CustomButtonStyled>
  );
};

export default CustomButton;
