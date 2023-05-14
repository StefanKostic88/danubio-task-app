import React from "react";
import GlobalContext from "../../store/global-context";
import { useContext, useEffect, useRef } from "react";

import styled from "styled-components";
import CustomButton from "../ui/CustomButton/CustomButton";

export const generatePaginationData = ({
  curPage,
  prevPage,
  prevTwoPages,
  prevThreePages,
  prevFourPages,
  nextPage,
  nextTwoPages,
  nextThreePages,
  nextFourPages,
}) => {
  return {
    prevFourPages: prevFourPages < 38 ? null : curPage - 4,
    prevThreePages: prevThreePages < 38 ? null : curPage - 3,
    prevTwoPages: prevTwoPages <= -1 ? null : curPage - 2,
    prevPage: prevPage <= 0 ? null : curPage - 1,
    curPage: curPage,
    nextPage: nextPage > 42 ? null : curPage + 1,
    nextTwoPages: nextTwoPages > 42 ? null : curPage + 2,
    nextThreePages: nextThreePages >= 6 ? null : curPage + 3,
    nextFourPages: nextFourPages >= 6 ? null : curPage + 4,
  };
};
const FooterStyled = styled.footer`
  // margin: 0 auto;
  z-index: 10;
  position: fixed;
  bottom: 0;
  width: ${({ theme }) => theme.width.lg};
  left: 50%;
  transform: translateX(-50%);
  padding: 2rem;
  background: black;
`;

const TestStyled = styled.li`
  color: ${({ theme }) => theme.fontColor.primaryDark};
  border: 3px solid ${({ theme }) => theme.color.primaryGreen};
  padding: 0.5rem 2rem;
  // background: ${(props) => (props.isActive ? "red" : "black")};
  // display: ${(props) => (props.isVsible ? null : "none")};

  a {
    span {
      color: #fff;
      font-size: 1.8rem;
    }
  }
`;

const PaginationBUttonStyled = styled.li`
  font-size: 1.8rem;

  color: ${({ theme }) => theme.fontColor.primaryDark};
  border: 3px solid ${({ theme }) => theme.color.primaryGreen};
  padding: 0.5rem 2rem;
  background: ${(props) => (props.isActive ? "red" : "black")};
  display: ${(props) => (props.isVsible ? null : "none")};

  a {
    color: #fff;
  }
`;

const Footer = () => {
  const footerRef = useRef();
  const ctx = useContext(GlobalContext);

  useEffect(() => {
    ctx.getfooterHeight(footerRef.current.clientHeight);
  }, []);
  // prevPage
  // prevFourPages

  const xxx = generatePaginationData(ctx.paginationData);

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
  } = xxx;

  const arr = [
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
      <ul style={{ display: "flex", justifyContent: "center" }}>
        <>
          <TestStyled
            onClick={() => {
              // console.log(el);
              ctx.selectPage(prevPage);
            }}
          >
            <a class="page-link" href="#">
              <span>&laquo;</span>
            </a>
          </TestStyled>

          {arr.map((el, index) => (
            <PaginationBUttonStyled
              isVsible={el}
              isActive={el === curPage}
              onClick={() => {
                // console.log(el);
                ctx.selectPage(el);
              }}
            >
              <a class="page-link" href="#" data-page="${prevFourPages}">
                {el}
              </a>
            </PaginationBUttonStyled>
          ))}
          <TestStyled
            onClick={() => {
              // console.log(el);
              ctx.selectPage(nextPage);
            }}
          ></TestStyled>
        </>
      </ul>
    </FooterStyled>
  );
};

export default Footer;

//  <PaginationBUttonStyled
//           isActive={true}
//           // className={`page-item bg-dark ${null ? "" : "disabled"}`}
//         >
//           <a
//             href="#"
//             class="page-link bg-dark text-light"
//             data-page="${prevPage}"
//           >
//             <span>&laquo;</span>
//           </a>
//         </PaginationBUttonStyled>
//         <PaginationBUttonStyled className={`page-item ${null ? "" : "d-none"}`}>
//           <a class="page-link" href="#" data-page="${prevFourPages}">
//             -3
//           </a>
//         </PaginationBUttonStyled>
//         <PaginationBUttonStyled className={`page-item ${null ? "" : "d-none"}`}>
//           <a class="page-link" href="#" data-page="${prevFourPages}">
//             -2
//           </a>
//         </PaginationBUttonStyled>
//         <PaginationBUttonStyled className={`page-item ${null ? "" : "d-none"}`}>
//           <a class="page-link" href="#" data-page="${prevFourPages}">
//             -1
//           </a>
//         </PaginationBUttonStyled>
//         <PaginationBUttonStyled className={`page-item ${null ? "" : "d-none"}`}>
//           <a class="page-link" href="#" data-page="${prevFourPages}">
//             0
//           </a>
//         </PaginationBUttonStyled>
//         <PaginationBUttonStyled className={`page-item ${null ? "" : "d-none"}`}>
//           <a class="page-link" href="#" data-page="${prevFourPages}">
//             1
//           </a>
//         </PaginationBUttonStyled>
//         <PaginationBUttonStyled className={`page-item ${null ? "" : "d-none"}`}>
//           <a class="page-link" href="#" data-page="${prevFourPages}">
//             2
//           </a>
//         </PaginationBUttonStyled>
//         <PaginationBUttonStyled className={`page-item ${null ? "" : "d-none"}`}>
//           <a class="page-link" href="#" data-page="${prevFourPages}">
//             3
//           </a>
//         </PaginationBUttonStyled>
//         <PaginationBUttonStyled className={`page-item ${null ? "" : "d-none"}`}>
//           <a class="page-link" href="#" data-page="${prevFourPages}">
//             4
//           </a>
//         </PaginationBUttonStyled>
//         <PaginationBUttonStyled className={`page-item ${null ? "" : "d-none"}`}>
//           <a class="page-link" href="#" data-page="${prevFourPages}">
//             5
//           </a>
//         </PaginationBUttonStyled>
//         <PaginationBUttonStyled
//           className={`page-item bg-dark ${null ? "" : "disabled"}`}
//         >
//           <a
//             href="#"
//             class="page-link bg-dark text-light"
//             data-page="${prevPage}"
//           >
//             <span>&laquo;</span>
//           </a>
//         </PaginationBUttonStyled>

{
  /* <li class="page-item bg-dark ${prevPage ? "" : "disabled"}">
                  <a href="#" class="page-link bg-dark text-light" data-page="${prevPage}">
                    <span >&laquo;</span>
                  </a>
                </li>
                  <li class="page-item ${
                    prevFourPages ? "" : "d-none"
                  }"><a class="page-link" href="#" data-page="${prevFourPages}">${prevFourPages}</a></li>
                  <li class="page-item ${
                    prevThreePages ? "" : "d-none"
                  }"><a class="page-link" href="#" data-page="${prevThreePages}">${prevThreePages}</a></li>
                  <li class="page-item ${
                    prevTwoPages ? "" : "d-none"
                  }"><a class="page-link" href="#" data-page="${prevTwoPages}">${prevTwoPages}</a></li>
                <li class="page-item ${
                  prevPage ? "" : "d-none"
                }"><a class="page-link" href="#"  data-page="${prevPage}">${prevPage}</a></li>
                  <li class="page-item">
                    <a class="page-link active success" href="#">${curPage}</a>
                  </li>
                  <li class="page-item ${
                    nextPage ? "" : "d-none"
                  }"><a class="page-link" href="#" data-page="${nextPage}">${nextPage}</a></li>
                  <li class="page-item ${
                    nextTwoPages ? "" : "d-none"
                  }"><a class="page-link" href="#" data-page="${nextTwoPages}">${nextTwoPages}</a></li>
                  <li class="page-item ${
                    nextThreePages ? "" : "d-none"
                  }"><a class="page-link" href="#" data-page="${nextThreePages}">${nextThreePages}</a></li>
                  <li class="page-item ${
                    nextFourPages ? "" : "d-none"
                  }"><a class="page-link" href="#"  data-page="${nextFourPages}">${nextFourPages}</a></li>
                
                  <li class="page-item bg-dark  ${nextPage ? "" : "disabled"}">
                    <a class="page-link bg-dark text-light" href="#"  aria-label="Next"  data-page="${nextPage}">
                      <span>&raquo;</span>
                    </a>
                  </li> */
}
