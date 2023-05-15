import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import GlobalContext from "./store/global-context";
import { Root, HomePage, CharacterWikiPage } from "./pages";
import {
  getCharactersPage,
  searchCharacter,
  getCharacterInfo,
} from "./services/fetchData";
import { generateCurentPaginationState } from "./assets";

const App = () => {
  const [curPageCharactersArr, setCurPageCharactersArr] = useState(null);
  const [navigationHeight, setNavigationHeigth] = useState(92);
  const [footerHeight, setFooterHeight] = useState(0);
  const [currentPageObject, setCurrentPageObject] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [maxPages, setMaxPages] = useState(0);
  const [modalInfoData, setModalInfoData] = useState({});

  const [searchedChar, setSearchedChar] = useState("");

  const selectPage = (curPage) => {
    setCurrentPageObject(() => generateCurentPaginationState(curPage));
  };

  useEffect(() => {
    setCurrentPageObject(() => generateCurentPaginationState(1));
    setIsSearched(() => false);
    setHasError(() => false);
  }, []);

  useEffect(() => {
    const getCurrentPageData = async () => {
      const { curPage: currentPage } = currentPageObject;
      const { charArr: currentPageData, pagesCount } = await getCharactersPage(
        currentPage
      );
      setMaxPages(() => pagesCount);
      setCurPageCharactersArr(() => [...currentPageData]);
    };

    const getSearchedData = async () => {
      const { curPage: currentPage } = currentPageObject;
      const { charArr: currentPageData, pagesCount } = await searchCharacter(
        searchedChar,
        currentPage
      );
      setCurPageCharactersArr(() => [...currentPageData]);
    };

    let timer;

    if (!isSearched) {
      setIsloading(() => true);
      getCurrentPageData();
      timer = setTimeout(() => {
        setIsloading(() => false);
      }, 1000);
    }
    if (isSearched) {
      setIsloading(() => true);
      getSearchedData();
      timer = setTimeout(() => {
        setIsloading(() => false);
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [currentPageObject]);

  const getNavigationHeight = (height) => {
    setNavigationHeigth(() => height);
  };
  const getfooterHeight = (height) => {
    setFooterHeight(() => height);
  };

  const getSearchedCharacters = async (searchedCharacter) => {
    setHasError(() => false);
    setSearchedChar(() => searchedCharacter);

    try {
      const { charArr: currentPageData, pagesCount } = await searchCharacter(
        searchedCharacter
      );
      setMaxPages(() => pagesCount);
      setCurrentPageObject(() => generateCurentPaginationState(1));
      setIsSearched(() => true);
      setIsloading(() => true);
      setCurPageCharactersArr(() => [...currentPageData]);
      const timer = setTimeout(() => {
        setIsloading(() => false);
        clearTimeout(timer);
      }, 1000);
    } catch (error) {
      setHasError(() => true);
    }
  };

  const openModal = async (modalInfo) => {
    const generatedModalData = await getCharacterInfo(modalInfo);
    setModalInfoData(() => ({ ...generatedModalData }));
    setModalIsOpened(() => true);
  };

  const closeModal = () => {
    setModalInfoData(() => ({}));
    setModalIsOpened(() => false);
  };

  const reset = () => {
    setCurrentPageObject(() => generateCurentPaginationState(1));
    setIsSearched(() => false);
    setHasError(() => false);
  };

  return (
    <GlobalContext.Provider
      value={{
        curPageCharactersArr: curPageCharactersArr,
        navigationHeight: navigationHeight,
        footerHeight: footerHeight,
        paginationData: currentPageObject,
        isLoading,
        modalIsOpened,
        isSearched,
        hasError,
        maxPages,
        modalInfoData,
        getNavigationHeight: getNavigationHeight,
        getfooterHeight: getfooterHeight,
        selectPage: selectPage,
        getSearchedCharacters: getSearchedCharacters,
        openModal,
        closeModal,
        reset,
      }}
    >
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/character-details/:id"
            element={<CharacterWikiPage />}
          />
        </Route>
      </Routes>
    </GlobalContext.Provider>
  );
};

export default App;
