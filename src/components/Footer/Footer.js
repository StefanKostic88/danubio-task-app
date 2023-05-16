import GlobalContext from "../../store/global-context";
import useFooter from "../../hooks/use-footer";
import FooterPagination from "./FooterPagination/FooterPagination";
import { FooterStyled } from "../../assets";

const Footer = () => {
  const {
    footerRef,
    validPath,
    paginationValues,
    selectPage,
    hasError,
    maxPages,
    curPage,
    prevPage,
    nextPage,
  } = useFooter(GlobalContext);

  return (
    <>
      {validPath && (
        <FooterStyled ref={footerRef}>
          {!hasError && maxPages && (
            <FooterPagination
              paginationNumbbersArr={paginationValues}
              getCurrentPage={selectPage}
              curPage={curPage}
              prevPage={prevPage}
              nextPage={nextPage}
            />
          )}
        </FooterStyled>
      )}
    </>
  );
};

export default Footer;
