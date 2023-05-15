import { ContainerWraper } from "../../components";

import styled from "styled-components";

const PageTopSideStyled = styled.div`
  display: flex;
  padding: 2rem;
`;

const PageTopDetailsSection = styled.div`
  display: flex;
`;

const ImageContainerStyled = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid blue;
  img {
    object-fit: cover;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  span {
    position: absolute;

    bottom: 0%;
    right: 0%;
    z-index: 10;
    background: blue;
    color: #fff;
    width: 100px;
    height: 50px;
    border-radius: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CharacterWikiPage = () => {
  return (
    <ContainerWraper>
      <div
        style={{
          color: "#fff",
          // background: "red",

          zIndex: 1,
          position: "relative",
        }}
      >
        <PageTopSideStyled>
          <ImageContainerStyled>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
            <span>Alive</span>
          </ImageContainerStyled>
          <PageTopDetailsSection>
            <div>
              <h3>Name</h3>
              <h3>Origin</h3>
              <h3>Status</h3>
            </div>
            <div>
              <h3>Name</h3>
              <h3>Origin</h3>
              <h3>Status</h3>
            </div>
          </PageTopDetailsSection>
        </PageTopSideStyled>
      </div>
    </ContainerWraper>
  );
};

export default CharacterWikiPage;
