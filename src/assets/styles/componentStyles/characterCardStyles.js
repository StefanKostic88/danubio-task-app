import styled, { keyframes } from "styled-components";

export const MainCardsContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  padding: 2rem 0;
  gap: 2rem;
  @media ${({ theme }) => theme.breakpoints.lg} {
    gap: 0;
    padding: 2rem 1rem;
  }

  @media (max-width: 975px) {
    grid-template-columns: repeat(2, auto);
    gap: 2rem;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    gap: 1.5rem;
    padding: 2rem 1rem;
  }
  @media (max-width: 655px) {
    grid-template-columns: repeat(1, auto);
    padding: 2rem 0;
  }
`;

export const WraperStyled = styled.figure`
  display: flex;
  flex-direction: column;
  // border: 5px solid #fff;
  border: 5px solid ${({ theme }) => theme.color.primaryGreen};
  padding: 1rem;
  background: #000000db;
  border-radius: 10px;
  transition: all 200ms linear;
  min-height: 485px;
  min-width: 320px;

  &:hover {
    background: #000000db;
    // box-shadow: 1px 1px 20px -6px #1b1b1b;
    box-shadow: 1px 1px 20px -6px ${({ theme }) => theme.color.primaryGreen};
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    min-height: 485px;
    min-width: 80%;
  }

  @media (max-width: 655px) {
    grid-template-columns: repeat(1, auto);
    padding: 2rem 0;
  }
`;

export const IconStyled = styled.div`
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

export const dash_682 = keyframes`
72.5% {
  opacity: 0;
}

to {
  stroke-dashoffset: 0;
}
`;

export const AnimationStyledContainer = styled.div`
  width: 64px;
  height: 48px;
  background: #000000db;
  position: absolute;
  right: -13px;
  top: -10px;
  z-index: 1;
  transform: scale(0.6);
`;

export const SvgPolylineStyledFirst = styled.polyline`
  fill: none;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  // stroke: #ff4d5033;
  stroke: #007400;
`;
export const SvgPolylineStyledSecond = styled.polyline`
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

export const SvgLineStyled = styled.line`
  fill: none;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  stroke: #ff4d5033;
`;
export const SvgLineSecondStyled = styled.line`
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

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding-left: 1rem;
`;

export const CharacterNameTitleStyled = styled.div`
  margin: 4rem 0 2rem 0;

  h3 {
    line-height: 20px;
  }
`;

export const CharacterDeitails = styled.h4`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 2rem;
  }
`;

export const CardIconOuterStyled = styled.div`
  overflow: hidden;
  position: relative;
`;

export const CardActionsStyled = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  padding: 0 1rem 1rem 1rem;
  margin-top: auto;
`;

export const CardDetailsStyled = styled.div`
  position: relative;
`;

export const MiaStatusStyled = styled.div`
  width: 100%;
  height: 100%;
  left: 1rem;
  color: #fff;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
