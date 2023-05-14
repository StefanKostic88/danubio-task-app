import { useContext } from "react";
import GlobalContext from "../../store/global-context";
import { MainContainer, Modal } from "../../components";

const HomePage = () => {
  const ctx = useContext(GlobalContext);
  console.log(ctx.modalIsOpened);
  return (
    <>
      {ctx.modalIsOpened && <Modal />}
      <MainContainer />
    </>
  );
};

export default HomePage;
