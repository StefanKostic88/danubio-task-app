import styled from "styled-components";
import errorImage from "../../assets/images/rickandmortyerror.jpg";

const ErrorPageStyled = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorMessageContainerStyled = styled.div`
  position: relative;
  background-image: url(${errorImage});
  background-position: center;
  background-size: cover;
  width: 50%;
  height: 50%;

  box-shadow: inset 0 0 40px 30px rgba(0, 0, 0, 0.75);

  &:before {
    content: "";
    background: #23232380;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 40px 30px rgba(0, 0, 0, 0.85);
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorMessageStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background: rgba(0, 0, 0, 0.5);

  border-radius: 50px;
  padding: 2rem 1rem;
  h1,
  h2 {
    color: #5cad4a;
    width: 25ch;
    text-align: center;
  }
`;

const ErrorPage = () => {
  return (
    <ErrorPageStyled>
      <ErrorMessageContainerStyled>
        <ErrorMessageStyled>
          <h1>404 Error</h1>
          <h2>C'mon Morty we have to go back, nothing usefull here</h2>
          <h2>Portal back</h2>
        </ErrorMessageStyled>
      </ErrorMessageContainerStyled>
      {/* <img src={errorImage} /> */}
    </ErrorPageStyled>
  );
};

export default ErrorPage;
