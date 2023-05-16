import { useContext } from "react";
import GlobalContext from "../../store/global-context";
import { MainContainer, Modal } from "../../components";

const HomePage = () => {
  const { modalIsOpened } = useContext(GlobalContext);

  return (
    <>
      {modalIsOpened && <Modal />}
      <MainContainer />
    </>
  );
};

export default HomePage;
