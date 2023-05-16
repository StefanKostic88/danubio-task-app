import { useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { generatePaginationData } from "../assets";

const useFooter = (GlobalContext) => {
  const footerRef = useRef();
  const { paginationData, maxPages, getfooterHeight, selectPage, hasError } =
    useContext(GlobalContext);
  const { pathname } = useLocation();
  const validPath = pathname === "/";
  useEffect(() => {
    if (!footerRef.current) return;
    getfooterHeight(footerRef.current.clientHeight);
  }, []);

  if (!paginationData) return;

  const generatedPagData = generatePaginationData(paginationData, maxPages);

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

  return {
    footerRef,
    validPath,
    paginationValues,
    selectPage,
    hasError,
    maxPages,
    curPage,
    prevPage,
    nextPage,
  };
};

export default useFooter;
