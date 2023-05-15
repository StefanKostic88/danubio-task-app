import {
  ContainerWraper,
  MainCardsContainer,
  ErrorComponent,
  Loading,
} from "../";
import GlobalContext from "../../store/global-context";
import { useContext } from "react";

const MainContainer = () => {
  //filter i loding spinner ovde
  const ctx = useContext(GlobalContext);

  // if (!ctx.curPageCharactersArr || ctx.hasError) return;
  // console.log(ctx.hasError);
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
            <h2>Characters</h2>
          </div>
          <MainCardsContainer arrData={ctx.curPageCharactersArr} />
        </>
      )}
      {ctx.isLoading && <Loading />}
      {ctx.hasError && <ErrorComponent />}
    </ContainerWraper>
  );
};

export default MainContainer;
