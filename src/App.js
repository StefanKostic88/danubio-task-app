import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import GlobalContext from "./store/global-context";
import { Root, HomePage } from "./pages";
import { getCharactersPage } from "./services/fetchData";

export const generateCurentPaginationState = (curentPage) => {
  return {
    prevFourPages: curentPage - 4,
    prevThreePages: curentPage - 3,
    prevTwoPages: curentPage - 2,
    prevPage: curentPage - 1,
    curPage: curentPage,
    nextPage: curentPage + 1,
    nextTwoPages: curentPage + 2,
    nextThreePages: curentPage + 3,
    nextFourPages: curentPage + 4,
  };
};

const Pag = generateCurentPaginationState(1);

const App = () => {
  const [curPageCharactersArr, setCurPageCharactersArr] = useState(null);
  const [navigationHeight, setNavigationHeigth] = useState();
  const [footerHeight, setFooterHeight] = useState();
  const [currentPageObject, setCurrentPageObject] = useState(
    generateCurentPaginationState(1)
  );
  const getCurrentPageData = async () => {
    const { curPage: currentPage } = currentPageObject;
    const currentPageData = await getCharactersPage(currentPage);
    setCurPageCharactersArr(() => [...currentPageData]);
  };

  useEffect(() => {
    getCurrentPageData();
  }, []);

  const selectPage = (curPage) => {
    console.log(curPage);
    setCurrentPageObject(() => generateCurentPaginationState(curPage));
  };
  // getCurrentPageData();

  // console.log(currentPageObject);

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
        paginationData: currentPageObject,
        selectPage,
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
