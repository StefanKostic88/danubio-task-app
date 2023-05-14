import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import GlobalContext from "./store/global-context";
import { Root, HomePage } from "./pages";
import { getCharactersPage } from "./services/fetchData";

const App = () => {
  const [curPageCharactersArr, setCurPageCharactersArr] = useState(null);
  const [navigationHeight, setNavigationHeigth] = useState();
  const [footerHeight, setFooterHeight] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getCurrentPageData = async () => {
      const currentPageData = await getCharactersPage(currentPage);
      setCurPageCharactersArr(() => [...currentPageData]);
    };
    getCurrentPageData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        curPageCharactersArr: curPageCharactersArr,
        navigationHeight: navigationHeight,
        footerHeight: footerHeight,
        getNavigationHeight: (height) => {
          setNavigationHeigth(() => height);
        },
        getfooterHeight: (height) => {
          setFooterHeight(() => height);
        },
      }}
    >
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </GlobalContext.Provider>
  );
};

export default App;
