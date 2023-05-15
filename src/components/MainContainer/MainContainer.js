import {
  ContainerWraper,
  MainCardsContainer,
  ErrorComponent,
  Loading,
} from "../";
import GlobalContext from "../../store/global-context";
import { useContext } from "react";

const MainContainer = () => {
  const ctx = useContext(GlobalContext);

  return (
    <ContainerWraper
      navigationHeight={ctx.navigationHeight}
      footerHeight={ctx.footerHeight}
    >
      {!ctx.isLoading && !ctx.hasError && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "2rem",
              marginBottom: "4rem",
              alignItems: "center",
              gap: "1rem",
              color: "#fff",
              zIndex: 1,
              position: "relative",
            }}
          >
            <h1>Characters</h1>
          </div>
          <MainCardsContainer
            arrData={ctx.curPageCharactersArr}
            onOpenModal={ctx.openModal}
          />
        </>
      )}
      {ctx.isLoading && <Loading />}
      {ctx.hasError && <ErrorComponent />}
    </ContainerWraper>
  );
};

export default MainContainer;
