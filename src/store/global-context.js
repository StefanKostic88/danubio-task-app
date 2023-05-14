import { createContext } from "react";

const GlobalContext = createContext({
  navigationHeight: 0,
  footerHeight: 0,
  getNavigationHeight: () => {},
  getfooterHeight: () => {},
});

export default GlobalContext;
