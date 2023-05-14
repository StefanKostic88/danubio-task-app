import React, { useEffect, useRef, useContext } from "react";
import GlobalContext from "../../store/global-context";

import {
  NavigationStyled,
  InnerNavStyled,
  NavigationHeadingStyled,
} from "../../assets";

const MainNav = () => {
  const NavRef = useRef();
  const ctx = useContext(GlobalContext);
  useEffect(() => {
    ctx.getNavigationHeight(NavRef.current.clientHeight);
  }, []);

  return (
    <NavigationStyled ref={NavRef}>
      <InnerNavStyled>
        <NavigationHeadingStyled>Rick & Morty</NavigationHeadingStyled>
      </InnerNavStyled>
    </NavigationStyled>
  );
};

export default MainNav;
