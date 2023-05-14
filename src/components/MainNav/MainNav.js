import React, { useEffect, useRef, useContext, useState } from "react";
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
    if (NavRef.current.clientHeight === 35) return;
    ctx.getNavigationHeight(NavRef.current.clientHeight);
  }, []);

  return (
    <NavigationStyled ref={NavRef}>
      <InnerNavStyled>
        {/* <NavigationHeadingStyled>Rick & Morty</NavigationHeadingStyled> */}
        <NavigationHeadingStyled>
          <img
            style={{ width: "150px" }}
            src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png"
          />
        </NavigationHeadingStyled>
      </InnerNavStyled>
    </NavigationStyled>
  );
};

export default MainNav;
