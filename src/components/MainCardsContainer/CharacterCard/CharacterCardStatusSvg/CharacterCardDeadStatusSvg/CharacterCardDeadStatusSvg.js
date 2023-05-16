import {
  SvgLineStyled,
  SvgLineSecondStyled,
} from "../../../../../assets/styles/componentStyles/characterCardStyles";

const CharacterCardDeadStatusSvg = () => {
  return (
    <svg width="100%" height="100%">
      <SvgLineStyled x1="0" y1="20" x2="100" y2="20" />
      <SvgLineSecondStyled x1="0" y1="20" x2="100" y2="20" />
    </svg>
  );
};

export default CharacterCardDeadStatusSvg;
