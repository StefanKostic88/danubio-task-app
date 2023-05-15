import { CustomButton } from "../../";

import CharacterCardStatusSvg from "./CharacterCardStatusSvg/CharacterCardStatusSvg";

import {
  WraperStyled,
  IconStyled,
  CharacterDeitails,
  CharacterNameTitleStyled,
  CardContent,
  CardIconOuterStyled,
  CardActionsStyled,
  CardDetailsStyled,
} from "../../../assets";

const CharacterCard = ({
  id,
  image,
  lastLocation,
  name,
  status,
  svgStatusRender,
  onOpenModal,
}) => {
  return (
    <WraperStyled>
      <CardDetailsStyled>
        <CardIconOuterStyled>
          <CharacterCardStatusSvg svgStatusRender={svgStatusRender} />
          <IconStyled>
            <img src={image} />
          </IconStyled>
        </CardIconOuterStyled>

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
      </CardDetailsStyled>
      <CardActionsStyled>
        <CustomButton
          onClick={() => {
            onOpenModal(id);
          }}
        >
          More
        </CustomButton>
        <CustomButton>Save</CustomButton>
      </CardActionsStyled>
    </WraperStyled>
  );
};

export default CharacterCard;
