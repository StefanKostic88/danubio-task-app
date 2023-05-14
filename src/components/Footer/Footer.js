import React from "react";
import GlobalContext from "../../store/global-context";
import { useContext, useEffect, useRef } from "react";

import styled from "styled-components";

const FooterStyled = styled.footer`
  // width: ${({ theme }) => theme.width.lg};
  margin: 0 auto;
  width: 100%;
`;

const Footer = () => {
  const footerRef = useRef();
  const ctx = useContext(GlobalContext);
  useEffect(() => {
    ctx.getfooterHeight(footerRef.current.clientHeight);
  }, []);

  return <FooterStyled ref={footerRef}>Footer</FooterStyled>;
};

export default Footer;
