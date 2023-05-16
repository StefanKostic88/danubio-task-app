import { Route, Routes } from "react-router";
import GlobalContext from "./store/global-context";
import { Root, HomePage, CharacterWikiPage, ErrorPage } from "./pages";
import useAppGlobal from "./hooks/use-app-global";

const App = () => {
  const contextObject = useAppGlobal();

  return (
    <GlobalContext.Provider value={contextObject}>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/character-details/:id"
            element={<CharacterWikiPage />}
          />
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </GlobalContext.Provider>
  );
};

export default App;
