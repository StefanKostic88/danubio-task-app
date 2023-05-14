import {
  SideButtonsStyled,
  PaginationButtonStyled,
  PaginationListStyled,
} from "../../../assets";

import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const FooterPagination = ({
  paginationNumbbersArr,
  getCurrentPage,
  curPage,
  prevPage,
  nextPage,
}) => {
  return (
    <PaginationListStyled>
      <>
        <SideButtonsStyled
          disabled={prevPage ? true : false}
          onClick={
            prevPage
              ? () => {
                  getCurrentPage(prevPage);
                }
              : null
          }
        >
          <span>
            <MdOutlineKeyboardDoubleArrowLeft />
          </span>
        </SideButtonsStyled>

        {paginationNumbbersArr.map((el, index) =>
          el ? (
            <PaginationButtonStyled
              key={index}
              isVsible={el}
              isActive={el === curPage}
              onClick={
                el === curPage
                  ? null
                  : () => {
                      getCurrentPage(el);
                    }
              }
            >
              {el}
            </PaginationButtonStyled>
          ) : null
        )}
        <SideButtonsStyled
          disabled={nextPage ? true : false}
          onClick={
            nextPage
              ? () => {
                  getCurrentPage(nextPage);
                }
              : null
          }
        >
          <span>
            <MdOutlineKeyboardDoubleArrowRight />
          </span>
        </SideButtonsStyled>
      </>
    </PaginationListStyled>
  );
};

export default FooterPagination;
