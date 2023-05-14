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

// const Pag = generateCurentPaginationState(1);

const App = () => {
  const [curPageCharactersArr, setCurPageCharactersArr] = useState(null);
  const [navigationHeight, setNavigationHeigth] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [currentPageObject, setCurrentPageObject] = useState({});
  const [isLoading, setIsloading] = useState(true);

  const selectPage = (curPage) => {
    setCurrentPageObject(() => generateCurentPaginationState(curPage));
  };

  useEffect(() => {
    setCurrentPageObject(() => generateCurentPaginationState(1));
  }, []);

  useEffect(() => {
    const getCurrentPageData = async () => {
      const { curPage: currentPage } = currentPageObject;
      const currentPageData = await getCharactersPage(currentPage);
      setCurPageCharactersArr(() => [...currentPageData]);
    };

    setIsloading(() => true);
    getCurrentPageData();
    const timer = setTimeout(() => {
      setIsloading(() => false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentPageObject]);
  console.log();

  const getNavigationHeight = (height) => {
    setNavigationHeigth(() => height);
  };

  console.log(navigationHeight);

  return (
    <GlobalContext.Provider
      value={{
        curPageCharactersArr: curPageCharactersArr,
        navigationHeight: navigationHeight,
        footerHeight: footerHeight,
        getNavigationHeight: getNavigationHeight,
        getfooterHeight: (height) => {
          setFooterHeight(() => height);
        },
        paginationData: currentPageObject,
        selectPage: selectPage,
        isLoading,
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
