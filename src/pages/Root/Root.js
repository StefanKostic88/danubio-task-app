import { Outlet } from "react-router";
import { MainNav, Footer } from "../../components";
import { RootStyled } from "../../assets";

const Root = () => {
  return (
    <>
      <MainNav />
      <RootStyled>
        <Outlet />
      </RootStyled>
      <Footer />
    </>
  );
};

export default Root;
