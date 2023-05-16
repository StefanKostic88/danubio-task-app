import Overlay from "../Overlay/Overlay";
import CustomButton from "../CustomButton/CustomButton";
import GlobalContext from "../../../store/global-context";
import { useContext } from "react";

import {
  ModalyStyled,
  ModalTopSideStyled,
  ModalBottomSideStyled,
  ButtonActionStyled,
} from "../../../assets";

const Modal = () => {
  const ctx = useContext(GlobalContext);

  console.log(ctx.navigateToWikiPage);

  if (!ctx.modalInfoData) return;
  const {
    name,
    gender,
    status,
    origin,
    lastLocation,
    episodeCount,
    created,
    image,
    id,
  } = ctx.modalInfoData;

  return (
    <>
      <Overlay />
      <ModalyStyled>
        <ModalTopSideStyled>
          <div>
            <img src={image} style={{ objectFit: "cover", width: "100%" }} />
          </div>
          <div>
            <h4>Name: {name}</h4>
            <h4>Gender: {gender}</h4>
            <h4>Status: {status}</h4>
          </div>
        </ModalTopSideStyled>
        <ModalBottomSideStyled>
          <div>
            <h4>Origin: {origin}</h4>
            <h4>Last seen location: {lastLocation}</h4>
          </div>
          <div>
            <h4>Created: {created}</h4>
            <h4>Epizodes count: {episodeCount}</h4>
          </div>
        </ModalBottomSideStyled>

        <ButtonActionStyled>
          <CustomButton
            isActive={true}
            onClick={() => {
              ctx.closeModal();
            }}
          >
            Back
          </CustomButton>
          <CustomButton
            onClick={() => {
              ctx.navigateToWikiPage(id);
              ctx.closeModal();
            }}
          >
            View More
          </CustomButton>
        </ButtonActionStyled>
      </ModalyStyled>
    </>
  );
};

export default Modal;
