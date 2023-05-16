import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  checkAndUpdateBookmarkedStatus,
  generateCurentPaginationState,
  updateBookmark,
  getBookmarks,
} from "../assets";

import {
  getCharactersPage,
  searchCharacter,
  getCharacterInfo,
} from "../services/fetchData";

const useAppGlobal = () => {
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
  const navigate = useNavigate();

  const selectPage = (curPage) => {
    setCurrentPageObject(() => generateCurentPaginationState(curPage));
  };
  const getNavigationHeight = (height) => {
    setNavigationHeigth(() => height);
  };
  const getfooterHeight = (height) => {
    setFooterHeight(() => height);
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

  const navigateToWikiPage = (id) => {
    navigate(`/character-details/:${id}`);
  };

  const bookmarkCharacter = (id) => {
    const data = getBookmarks();
    let mutatedObj;
    let bookmarkArr = data === null ? [] : [...data];

    const updatedArr = curPageCharactersArr.map((el) => {
      if (el.id === id) {
        mutatedObj = { ...el, bookmarked: !el.bookmarked };
        return mutatedObj;
      } else {
        return el;
      }
    });
    bookmarkArr = updateBookmark(bookmarkArr, mutatedObj, mutatedObj.id);
    localStorage.setItem("bookmarkedCharacters", JSON.stringify(bookmarkArr));
    setCurPageCharactersArr(() => [...updatedArr]);
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

      const timer = setTimeout(() => {
        setIsloading(() => false);
        clearTimeout(timer);
      }, 1000);
    } catch (error) {
      setHasError(() => true);
    }
  };

  useEffect(() => {
    setCurrentPageObject(() => generateCurentPaginationState(1));
    setIsSearched(() => false);
    setHasError(() => false);
  }, []);

  useEffect(() => {
    const bookmarkArr = getBookmarks();
    const getCurrentPageData = async () => {
      const { curPage: currentPage } = currentPageObject;
      const { charArr: currentPageData, pagesCount } = await getCharactersPage(
        currentPage
      );
      const mutatedData = checkAndUpdateBookmarkedStatus(
        currentPageData,
        bookmarkArr
      );
      setMaxPages(() => pagesCount);
      setCurPageCharactersArr(() => [...mutatedData]);
    };

    const getSearchedData = async () => {
      const { curPage: currentPage } = currentPageObject;
      const { charArr: currentPageData, pagesCount } = await searchCharacter(
        searchedChar,
        currentPage
      );
      const data = localStorage.getItem("bookmarkedCharacters");
      const bookmarkArr = JSON.parse(data);
      const mutatedData = checkAndUpdateBookmarkedStatus(
        currentPageData,
        bookmarkArr
      );
      setCurPageCharactersArr(() => [...mutatedData]);
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

  const contextObject = {
    curPageCharactersArr,
    navigationHeight,
    footerHeight,
    paginationData: currentPageObject,
    isLoading,
    modalIsOpened,
    isSearched,
    hasError,
    maxPages,
    modalInfoData,
    getNavigationHeight,
    getfooterHeight,
    selectPage,
    getSearchedCharacters,
    openModal,
    closeModal,
    reset,
    navigateToWikiPage,
    bookmarkCharacter,
  };

  return contextObject;
};

export default useAppGlobal;
