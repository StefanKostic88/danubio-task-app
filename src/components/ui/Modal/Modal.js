import React from "react";
import Overlay from "../Overlay/Overlay";

import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";

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
  return (
    <>
      <Overlay />
      <OverlayStyled>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <img
              src="https://rickandmortyapi.com/api/character/avatar/21.jpeg"
              style={{ objectFit: "cover", width: "100%" }}
            />
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
            <h4>Name: Rick</h4>
            <h4>Gender: Male</h4>
            <h4>Status: Alive</h4>
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
          <div>Origin: Earth</div>
          <div>location: dsadadasd</div>
          <h4>Epizodez count: 50</h4>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "1rem 2rem 2rem 2rem",
          }}
        >
          <CustomButton>Back</CustomButton>
          <CustomButton>View More</CustomButton>
        </div>
      </OverlayStyled>
    </>
  );
};

export default Modal;
