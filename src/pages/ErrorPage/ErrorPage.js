import {
  ErrorPageStyled,
  ErrorMessageContainerStyled,
  ErrorMessageStyled,
  ErrorButtonStyled,
} from "../../assets/styles/pagesStyles/errorPageStyles";

import GlobalContext from "../../store/global-context";
import { useContext } from "react";

const ErrorPage = () => {
  const { navigateToHome } = useContext(GlobalContext);

  return (
    <ErrorPageStyled>
      <ErrorMessageContainerStyled>
        <ErrorMessageStyled>
          <h1>404 Error</h1>
          <h3>
            Burp Oh geez, Morty, looks like we stumbled into a 404 Error
            Dimension. You know what that means, right? Some interdimensional
            goof-up happened, and we're here to fix it. Get ready for some
            science, Morty!
          </h3>
          <ErrorButtonStyled
            onClick={() => {
              navigateToHome();
            }}
          >
            Portal back
          </ErrorButtonStyled>
        </ErrorMessageStyled>
      </ErrorMessageContainerStyled>
    </ErrorPageStyled>
  );
};

export default ErrorPage;
