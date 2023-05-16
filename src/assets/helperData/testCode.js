//old App code

// const [curPageCharactersArr, setCurPageCharactersArr] = useState(null);
// const [navigationHeight, setNavigationHeigth] = useState(92);
// const [footerHeight, setFooterHeight] = useState(0);
// const [currentPageObject, setCurrentPageObject] = useState({});
// const [isLoading, setIsloading] = useState(true);
// const [modalIsOpened, setModalIsOpened] = useState(false);
// const [isSearched, setIsSearched] = useState(false);
// const [hasError, setHasError] = useState(false);
// const [maxPages, setMaxPages] = useState(0);
// const [modalInfoData, setModalInfoData] = useState({});
// const [searchedChar, setSearchedChar] = useState("");

// const navigate = useNavigate();

// const selectPage = (curPage) => {
//   setCurrentPageObject(() => generateCurentPaginationState(curPage));
// };

// useEffect(() => {
//   setCurrentPageObject(() => generateCurentPaginationState(1));
//   setIsSearched(() => false);
//   setHasError(() => false);
// }, []);

// useEffect(() => {
//   const bookmarkArr = getBookmarks();
//   const getCurrentPageData = async () => {
//     const { curPage: currentPage } = currentPageObject;
//     const { charArr: currentPageData, pagesCount } = await getCharactersPage(
//       currentPage
//     );
//     const mutatedData = checkAndUpdateBookmarkedStatus(
//       currentPageData,
//       bookmarkArr
//     );
//     setMaxPages(() => pagesCount);
//     setCurPageCharactersArr(() => [...mutatedData]);
//   };

//   const getSearchedData = async () => {
//     const { curPage: currentPage } = currentPageObject;
//     const { charArr: currentPageData, pagesCount } = await searchCharacter(
//       searchedChar,
//       currentPage
//     );
//     const data = localStorage.getItem("bookmarkedCharacters");
//     const bookmarkArr = JSON.parse(data);
//     const mutatedData = checkAndUpdateBookmarkedStatus(
//       currentPageData,
//       bookmarkArr
//     );
//     setCurPageCharactersArr(() => [...mutatedData]);
//   };

//   let timer;

//   if (!isSearched) {
//     setIsloading(() => true);
//     getCurrentPageData();
//     timer = setTimeout(() => {
//       setIsloading(() => false);
//     }, 1000);
//   }
//   if (isSearched) {
//     setIsloading(() => true);
//     getSearchedData();
//     timer = setTimeout(() => {
//       setIsloading(() => false);
//     }, 1000);
//   }

//   return () => {
//     clearTimeout(timer);
//   };
// }, [currentPageObject]);

// const getNavigationHeight = (height) => {
//   setNavigationHeigth(() => height);
// };
// const getfooterHeight = (height) => {
//   setFooterHeight(() => height);
// };

// const getSearchedCharacters = async (searchedCharacter) => {
//   setHasError(() => false);
//   setSearchedChar(() => searchedCharacter);

//   try {
//     const { charArr: currentPageData, pagesCount } = await searchCharacter(
//       searchedCharacter
//     );
//     setMaxPages(() => pagesCount);
//     setCurrentPageObject(() => generateCurentPaginationState(1));
//     setIsSearched(() => true);
//     setIsloading(() => true);

//     const timer = setTimeout(() => {
//       setIsloading(() => false);
//       clearTimeout(timer);
//     }, 1000);
//   } catch (error) {
//     setHasError(() => true);
//   }
// };

// const openModal = async (modalInfo) => {
//   const generatedModalData = await getCharacterInfo(modalInfo);
//   setModalInfoData(() => ({ ...generatedModalData }));
//   setModalIsOpened(() => true);
// };

// const closeModal = () => {
//   setModalInfoData(() => ({}));
//   setModalIsOpened(() => false);
// };

// const reset = () => {
//   setCurrentPageObject(() => generateCurentPaginationState(1));
//   setIsSearched(() => false);
//   setHasError(() => false);
// };

// const navigateToWikiPage = (id) => {
//   navigate(`/character-details/:${id}`);
// };

// const bookmarkCharacter = (id) => {
//   const data = getBookmarks();
//   let mutatedObj;
//   let bookmarkArr = data === null ? [] : [...data];

//   const updatedArr = curPageCharactersArr.map((el) => {
//     if (el.id === id) {
//       mutatedObj = { ...el, bookmarked: !el.bookmarked };
//       return mutatedObj;
//     } else {
//       return el;
//     }
//   });
//   bookmarkArr = updateBookmark(bookmarkArr, mutatedObj, mutatedObj.id);
//   localStorage.setItem("bookmarkedCharacters", JSON.stringify(bookmarkArr));
//   setCurPageCharactersArr(() => [...updatedArr]);
// };

//old wiik data

// const [wikiPageData, setWikiPageData] = useState({});

// const { navigationHeight, footerHeight } = useContext(GlobalContext);
// const { id } = useParams();
// const characterId = +id.slice(1);

// useEffect(() => {
//   const getCharacterPageEpisodesInfo = async (episode) => {
//     return await getEpisode(episode);
//   };

//   const getWikiPageData = async () => {
//     const pageData = await getCharacterInfo(characterId);
//     const { episode } = pageData;
//     const episodeListData = await Promise.all([
//       ...(await episode.map((el) => {
//         return getCharacterPageEpisodesInfo(el);
//       })),
//     ]);
//     setWikiPageData(() => ({ ...pageData, episodeListData }));
//   };
//   getWikiPageData();
// }, []);

// old nav

// const [characterSearch, setCharacterSearch] = useState("");
// const NavRef = useRef();
// const ctx = useContext(GlobalContext);

// const { pathname } = useLocation();

// const navigate = useNavigate();

// const validPath = pathname === "/";

// useEffect(() => {
//   ctx.getNavigationHeight(NavRef.current.clientHeight);
// }, []);

// const searchCharacterOnchangeHandler = (e) => {
//   setCharacterSearch(() => e.target.value);
// };

// const onSubmitHandler = (e) => {
//   e.preventDefault();
//   if (!characterSearch) return;
//   ctx.getSearchedCharacters(characterSearch);
//   setCharacterSearch(() => "");
// };

// const refreshCardsHandler = () => {
//   console.log("refresh");
//   ctx.reset();
// };

// const navigateToHomePageHandler = () => {
//   navigate("/");
// };

// old footer
// const footerRef = useRef();
// const ctx = useContext(GlobalContext);
// const { pathname } = useLocation();
// const validPath = pathname === "/";

// useEffect(() => {
//   if (!footerRef.current) return;
//   ctx.getfooterHeight(footerRef.current.clientHeight);
// }, []);

// if (!ctx.paginationData) return;

// const generatedPagData = generatePaginationData(
//   ctx.paginationData,
//   ctx.maxPages
// );

// const {
//   prevFourPages,
//   prevThreePages,
//   prevTwoPages,
//   prevPage,
//   curPage,
//   nextPage,
//   nextTwoPages,
//   nextThreePages,
//   nextFourPages,
// } = generatedPagData;

// const paginationValues = [
//   prevFourPages,
//   prevThreePages,
//   prevTwoPages,
//   prevPage,
//   curPage,
//   nextPage,
//   nextTwoPages,
//   nextThreePages,
//   nextFourPages,
// ];
