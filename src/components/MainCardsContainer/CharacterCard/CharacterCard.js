import React from "react";
import styled, { keyframes } from "styled-components";
import { CustomButton } from "../../";
import { svgStatusOptions } from "../../../assets";
import CharacterCardStatusSvg from "./CharacterCardStatusSvg/CharacterCardStatusSvg";

const WraperStyled = styled.div`
  border: 5px solid #fff;
  padding: 1rem;
  // background: #0000008a;
  background: #000000db;
  border-radius: 10px;
  transition: all 200ms linear;

  &:hover {
    background: #000000db;
    // box-shadow: 1px 1px 20px -6px #1b1b1b;
    box-shadow: 1px 1px 20px -6px ${({ theme }) => theme.color.primaryGreen};
  }
`;

const IconStyled = styled.div`
  transform: scale(1);
  height: 24rem;
  transition: all 0.2s linear;
  ${WraperStyled}:hover & {
    transform: scale(1.1);
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%
    // border-radius: 58%;
    // border-radius: 20%;
    // height: 200px;
    border: 4px solid #fff;
    // width: 200px;
    transition: all 0.2s linear;
    // ${WraperStyled}:hover & {
    //   width: 100%;
    //   height: 100%;
    // }
  }
`;

const dash_682 = keyframes`
72.5% {
  opacity: 0;
}

to {
  stroke-dashoffset: 0;
}
`;

const AnimationStyledContainer = styled.div`
  width: 64px;
  height: 48px;
  background: #000000db;
  position: absolute;
  right: -13px;
  top: -10px;
  z-index: 1;
  transform: scale(0.6);
`;

const SvgPolylineStyledFirst = styled.polyline`
  fill: none;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  // stroke: #ff4d5033;
  stroke: #007400;
`;
const SvgPolylineStyledSecond = styled.polyline`
  fill: none;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  // stroke: #ff4d4f;
  stroke: #00ff00;
  stroke-dasharray: 48, 144;
  stroke-dashoffset: 192;
  animation: ${dash_682} 1.4s linear infinite;
`;

const SvgLineStyled = styled.line`
  fill: none;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  stroke: #ff4d5033;
`;
const SvgLineSecondStyled = styled.line`
  fill: none;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  // stroke: #ff4d4f;
  stroke: red;
  stroke-dasharray: 10, 90;
  stroke-dashoffset: 100;
  animation: ${dash_682} 1.4s linear infinite;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding-left: 1rem;
`;

const CharacterNameTitleStyled = styled.div`
  margin: 2rem 0;

  h3 {
    line-height: 20px;
  }
`;

const CharacterDeitails = styled.h4`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 2rem;
  }
`;

const CharacterCard = ({
  id,
  image,
  lastLocation,
  name,
  status,
  svgStatusRender,
}) => {
  console.log(svgStatusRender);

  let xxx;

  if (svgStatusOptions.RED === svgStatusRender) {
    // console.log("red");
    xxx = (
      <AnimationStyledContainer>
        <svg width="100%" height="100%">
          <SvgPolylineStyledFirst points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"></SvgPolylineStyledFirst>
          <SvgPolylineStyledSecond points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"></SvgPolylineStyledSecond>
        </svg>
      </AnimationStyledContainer>
    );
  }
  if (svgStatusOptions.MIA === svgStatusRender) {
    xxx = (
      <AnimationStyledContainer>
        <div
          style={{
            // position: "abstolute",
            width: "100%",
            height: "100%",
            left: "1rem",
            color: "white",
            fontSize: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // marginLeft: "1rem",
            // top: "2rem",
          }}
        >
          MIA
        </div>
      </AnimationStyledContainer>
    );
  }
  if (svgStatusOptions.RED === svgStatusRender) {
    xxx = <div></div>;
  }

  return (
    <figure style={{ maxWidth: "300px" }}>
      <WraperStyled>
        <div
          style={{ position: "relative" }}
          // minHeight: " 450px"
        >
          <div style={{ overflow: "hidden", position: "relative" }}>
            {/* <AnimationStyledContainer>
              <div
                style={{
                  // position: "abstolute",
                  width: "100%",
                  height: "100%",
                  left: "1rem",
                  color: "white",
                  fontSize: "25px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // marginLeft: "1rem",
                  // top: "2rem",
                }}
              >
                MIA
              </div>
            </AnimationStyledContainer> */}
            <CharacterCardStatusSvg />
            <IconStyled>
              <img src={image} />
            </IconStyled>
          </div>

          <CardContent>
            <CharacterNameTitleStyled>
              <h3>{name}</h3>
            </CharacterNameTitleStyled>
            <CharacterDeitails>
              Status:<span> {status}</span>
            </CharacterDeitails>
            <CharacterDeitails>
              Last Location: <span> {lastLocation}</span>
            </CharacterDeitails>
          </CardContent>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: "1rem",
            // paddingBottom: "1rem",
            padding: "0 1rem 1rem 1rem",
          }}
        >
          <CustomButton>More</CustomButton>
          <CustomButton>Save</CustomButton>
        </div>
      </WraperStyled>
    </figure>
  );
};

export default CharacterCard;

{
}
