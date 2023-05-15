import React from "react";
import Overlay from "../Overlay/Overlay";

import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";

import GlobalContext from "../../../store/global-context";
import { useContext } from "react";

import { getCharacterInfo } from "../../../services/fetchData";

const OverlayStyled = styled.div`
  width: 600px;
  min-height: 500px;
  position: fixed;
  z-index: 150;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: black;
  color: #fff;
  border: 2px solid ${({ theme }) => theme.color.primaryGreen};
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  h4 {
    font-weight: 500;
  }
`;

const Modal = () => {
  const ctx = useContext(GlobalContext);

  console.log(ctx.modalInfoData);
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
  console.log(id);
  return (
    <>
      <Overlay />
      <OverlayStyled>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <img src={image} style={{ objectFit: "cover", width: "100%" }} />
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "2rem 0 0 1rem",
            }}
          >
            <h4>Name: {name}</h4>
            <h4>Gender: {gender}</h4>
            <h4>Status: {status}</h4>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "3rem 2rem",
          }}
        >
          <h4>Origin: {origin}</h4>
          <h4>Last seen location: {lastLocation}</h4>
          <div>
            <h4>Created: {created}</h4>
            <h4>Epizodes count: {episodeCount}</h4>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "1rem 2rem 2rem 2rem",
          }}
        >
          <CustomButton
            onClick={() => {
              ctx.closeModal();
            }}
          >
            Back
          </CustomButton>
          <CustomButton>View More</CustomButton>
        </div>
      </OverlayStyled>
    </>
  );
};

export default Modal;
