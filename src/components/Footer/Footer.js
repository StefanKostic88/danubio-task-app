import React from "react";
import GlobalContext from "../../store/global-context";
import { useContext, useEffect, useRef } from "react";
import { generatePaginationData } from "../../assets";
import FooterPagination from "./FooterPagination/FooterPagination";
import { FooterStyled } from "../../assets";

const Footer = () => {
  const footerRef = useRef();
  const ctx = useContext(GlobalContext);

  useEffect(() => {
    ctx.getfooterHeight(footerRef.current.clientHeight);
  }, []);

  if (!ctx.paginationData) return;

  const generatedPagData = generatePaginationData(
    ctx.paginationData,
    ctx.maxPages
  );

  const {
    prevFourPages,
    prevThreePages,
    prevTwoPages,
    prevPage,
    curPage,
    nextPage,
    nextTwoPages,
    nextThreePages,
    nextFourPages,
  } = generatedPagData;

  const paginationValues = [
    prevFourPages,
    prevThreePages,
    prevTwoPages,
    prevPage,
    curPage,
    nextPage,
    nextTwoPages,
    nextThreePages,
    nextFourPages,
  ];

  return (
    <FooterStyled ref={footerRef}>
      {!ctx.hasError && ctx.maxPages && (
        <FooterPagination
          paginationNumbbersArr={paginationValues}
          getCurrentPage={ctx.selectPage}
          curPage={curPage}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      )}
    </FooterStyled>
  );
};

export default Footer;
