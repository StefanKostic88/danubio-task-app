import React, { useEffect, useRef, useContext, useState } from "react";
import GlobalContext from "../../store/global-context";
import CustomForm from "../ui/CustomForm/CustomForm";

import {
  NavigationStyled,
  InnerNavStyled,
  NavigationHeadingStyled,
} from "../../assets";

const MainNav = () => {
  const [characterSearch, setCharacterSearch] = useState("");
  const NavRef = useRef();
  const ctx = useContext(GlobalContext);
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

  return (
    <NavigationStyled ref={NavRef}>
      <InnerNavStyled>
        <NavigationHeadingStyled>
          <img
            onClick={() => {
              ctx.reset();
            }}
            src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png"
          />
        </NavigationHeadingStyled>
        <CustomForm
          onSubmit={onSubmitHandler}
          type={"text"}
          onChange={searchCharacterOnchangeHandler}
          searchVal={characterSearch}
        />
      </InnerNavStyled>
    </NavigationStyled>
  );
};

export default MainNav;

// onSubmit, onChange, type
