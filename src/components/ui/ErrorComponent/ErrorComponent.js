import {
  ErrorWindowStyled,
  ErrorInnerStyled,
  ErrorMessageStyled,
} from "../../../assets";
import { dialogArr } from "../../../assets/helperData/helperData";

const ErrorComponent = () => {
  return (
    <ErrorWindowStyled>
      <ErrorInnerStyled>
        {dialogArr.map((el, index) => (
          <ErrorMessageStyled key={index}>{el}</ErrorMessageStyled>
        ))}
      </ErrorInnerStyled>
    </ErrorWindowStyled>
  );
};

export default ErrorComponent;
