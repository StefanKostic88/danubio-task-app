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

  if (!ctx.curPageCharactersArr) return;
  console.log();
  return (
    <ContainerWraper
      navigationHeight={ctx.navigationHeight}
      footerHeight={ctx.footerHeight}
    >
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "2rem",
          marginBottom: "4rem",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <h2>Characters</h2>
        <div style={{ display: "flex", width: "80%" }}>
          <input
            type="text"
            style={{
              // borderRadius:
              borderTopLeftRadius: " 0.75rem",
              borderBottomLeftRadius: " 0.75rem",
              padding: "0.75rem",
              fontSize: "16px",
              background: "none",
              outline: "none",
              width: "100%",
              height: "100%",
              boxShadow: `rgb(255 255 255) 0px 0px 1px,             
              // #0C6EFD 0px 0px 3px,
              // #0C6EFD 0px 0px 3px,
              #0C6EFD 0px 0px 3px,rgb(255 255 255) 0px 0px 6px`,
              border: "none",
              // color: var(--title-color);
              // font-family: var(--title-font);
            }}
          />
          <button
            style={{
              width: " max-content",
              display: " inline-flex",
              alignItems: "center",
              columnGap: "0.5rem",
              padding: "0.75rem 1.75rem",
              // borderRadius: "0.5rem",
              textRransform: "uppercase",
              cursor: "pointer",
              letterSpacing: "1px",
              fontSize: "16px",
              borderTopRightRadius: " 0.75rem",
              borderBottomRightRadius: " 0.75rem",
              boxShadow: ` #0C6EFD 0px 0px 1px,             
              #0C6EFD 0px 0px 2px,
              #0C6EFD 0px 0px 3px,
              #0C6EFD 0px 0px 5px, #0C6EFD 0px 0px 6px`,
              border: "none",
              background: " #0C6EFD",
              color: "#fff",
              // font-size: var(--normal-font-size);
              // background-color: var(--first-color);
              // border: 2px solid var(--text-color-light);
              // color: var(--white-color);
            }}
          >
            Search
          </button>
        </div>
      </div> */}
      {console.log(ctx.isLoading)}
      {!ctx.isLoading && (
        <MainCardsContainer arrData={ctx.curPageCharactersArr} />
      )}
      {ctx.isLoading && <Loading />}
      {/* <ErrorComponent /> */}
    </ContainerWraper>
  );
};

export default MainContainer;
