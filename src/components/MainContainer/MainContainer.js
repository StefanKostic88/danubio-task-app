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
  const ctx = useContext(GlobalContext);

  console.log();

  return (
    <ContainerWraper
      navigationHeight={ctx.navigationHeight}
      footerHeight={ctx.footerHeight}
    >
      {!ctx.isLoading && !ctx.hasError && (
        <>
          <TitleStyled>
            <h1>Characters</h1>
          </TitleStyled>
          <MainCardsContainer
            arrData={ctx.curPageCharactersArr}
            onOpenModal={ctx.openModal}
            onBookmarkCharacter={ctx.bookmarkCharacter}
          />
        </>
      )}
      {ctx.isLoading && <Loading />}
      {ctx.hasError && <ErrorComponent />}
    </ContainerWraper>
  );
};

export default MainContainer;
