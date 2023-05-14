import React from "react";
import GlobalContext from "../../store/global-context";
import { useContext, useEffect, useRef } from "react";

import styled from "styled-components";

const FooterStyled = styled.footer`
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  width: ${({ theme }) => theme.width.lg};
  padding: 2rem;
  background: black;
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
