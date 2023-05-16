import {
  ContainerWraper,
  MainCardsContainer,
  ErrorComponent,
  Loading,
} from "../";
import GlobalContext from "../../store/global-context";
import { useContext } from "react";
import { TitleStyled } from "../../assets";

const MainContainer = () => {
  const {
    navigationHeight,
    footerHeight,
    isLoading,
    hasError,
    curPageCharactersArr,
    openModal,
    bookmarkCharacter,
  } = useContext(GlobalContext);

  return (
    <ContainerWraper
      navigationHeight={navigationHeight}
      footerHeight={footerHeight}
    >
      {!isLoading && !hasError && (
        <>
          <TitleStyled>
            <h1>Characters</h1>
          </TitleStyled>
          <MainCardsContainer
            arrData={curPageCharactersArr}
            onOpenModal={openModal}
            onBookmarkCharacter={bookmarkCharacter}
          />
        </>
      )}
      {isLoading && <Loading />}
      {hasError && <ErrorComponent />}
    </ContainerWraper>
  );
};

export default MainContainer;
