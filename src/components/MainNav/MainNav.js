import React, { useEffect, useRef, useContext, useState } from "react";
import GlobalContext from "../../store/global-context";
import CustomForm from "../ui/CustomForm/CustomForm";

import { useLocation, useNavigate } from "react-router";

import {
  NavigationStyled,
  InnerNavStyled,
  NavigationHeadingStyled,
} from "../../assets";

const MainNav = () => {
  const [characterSearch, setCharacterSearch] = useState("");
  const NavRef = useRef();
  const ctx = useContext(GlobalContext);

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const validPath = pathname === "/";

  useEffect(() => {
    ctx.getNavigationHeight(NavRef.current.clientHeight);
  }, []);

  const searchCharacterOnchangeHandler = (e) => {
    setCharacterSearch(() => e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!characterSearch) return;
    ctx.getSearchedCharacters(characterSearch);
    setCharacterSearch(() => "");
  };

  const refreshCardsHandler = () => {
    console.log("refresh");
    ctx.reset();
  };

  const navigateToHomePageHandler = () => {
    navigate("/");
  };

  return (
    <NavigationStyled ref={NavRef}>
      <InnerNavStyled>
        <NavigationHeadingStyled>
          <img
            onClick={
              validPath ? refreshCardsHandler : navigateToHomePageHandler
            }
            src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png"
          />
        </NavigationHeadingStyled>
        {validPath && (
          <CustomForm
            onSubmit={onSubmitHandler}
            type={"text"}
            onChange={searchCharacterOnchangeHandler}
            searchVal={characterSearch}
          />
        )}
      </InnerNavStyled>
    </NavigationStyled>
  );
};

export default MainNav;

// onSubmit, onChange, type
