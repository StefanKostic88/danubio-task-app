import {
  CharacterCardAliveStatusSvg,
  CharacterCardMiaStatusSvg,
  CharacterCardDeadStatusSvg,
} from "./";
import { svgStatusOptions } from "../../../../assets";
import { AnimationStyledContainer } from "../../../../assets/styles/componentStyles/characterCardStyles";

const CharacterCardStatusSvg = ({ svgStatusRender }) => {
  const alive =
    svgStatusOptions.GREEN === svgStatusRender ? (
      <CharacterCardAliveStatusSvg />
    ) : null;
  const dead =
    svgStatusOptions.RED === svgStatusRender ? (
      <CharacterCardDeadStatusSvg />
    ) : null;

  const unknown =
    svgStatusOptions.MIA === svgStatusRender ? (
      <CharacterCardMiaStatusSvg />
    ) : null;
  return (
    <AnimationStyledContainer>
      {alive || dead || unknown}
    </AnimationStyledContainer>
  );
};

export default CharacterCardStatusSvg;
