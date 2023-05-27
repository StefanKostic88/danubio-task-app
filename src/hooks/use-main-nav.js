import React, { useEffect, useRef, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const useMainNav = (GlobalContext) => {
  const [characterSearch, setCharacterSearch] = useState("");
  const NavRef = useRef();
  const {
    reset,
    getSearchedCharacters,
    getNavigationHeight,
    filterCharacters,
  } = useContext(GlobalContext);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const validPath = pathname === "/";

  useEffect(() => {
    getNavigationHeight(NavRef.current.clientHeight);
  }, []);

  const searchCharacterOnchangeHandler = (e) => {
    setCharacterSearch(() => e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!characterSearch) return;
    getSearchedCharacters(characterSearch);
    setCharacterSearch(() => "");
  };

  const refreshCardsHandler = () => {
    reset();
  };

  const navigateToHomePageHandler = () => {
    navigate("/");
  };

  return {
    NavRef,
    validPath,
    characterSearch,
    searchCharacterOnchangeHandler,
    onSubmitHandler,
    refreshCardsHandler,
    navigateToHomePageHandler,
    filterCharacters,
  };
};

export default useMainNav;
