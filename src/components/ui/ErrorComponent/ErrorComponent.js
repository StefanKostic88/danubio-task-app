import {
  ErrorWindowStyled,
  ErrorInnerStyled,
  ErrorMessageStyled,
} from "../../../assets";

const ErrorComponent = () => {
  return (
    <ErrorWindowStyled>
      <ErrorInnerStyled>
        <ErrorMessageStyled>
          Aw geez Rick...
          <br />I don't know if we are able to find any more characters!
        </ErrorMessageStyled>
        <ErrorMessageStyled>
          Allright Morty...
          <br />
          Guess we have to go back and find them...
        </ErrorMessageStyled>
      </ErrorInnerStyled>
    </ErrorWindowStyled>
  );
};

export default ErrorComponent;
