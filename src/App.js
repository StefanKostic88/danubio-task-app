import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import GlobalContext from "./store/global-context";

import { Root, HomePage } from "./pages";
const App = () => {
  const [navigationHeight, setNavigationHeigth] = useState();
  const [footerHeight, setFooterHeight] = useState();
  const xxx = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character?page=1");
    const data = await res.json();
    console.log(data);
  };
  useEffect(() => {
    xxx();
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        navigationHeight: navigationHeight,
        footerHeight: footerHeight,
        getNavigationHeight: (height) => {
          setNavigationHeigth(() => height);
        },
        getfooterHeight: (height) => {
          setFooterHeight(() => height);
        },
      }}
    >
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </GlobalContext.Provider>
  );
};

export default App;
