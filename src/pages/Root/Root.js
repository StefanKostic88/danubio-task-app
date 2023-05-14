import { Outlet } from "react-router";
import { MainNav, Footer } from "../../components";
import { RootStyled } from "../../assets";

const Root = () => {
  return (
    <>
      <MainNav />
      <RootStyled>
        <Outlet />
        <Footer />
      </RootStyled>
    </>
  );
};

export default Root;
