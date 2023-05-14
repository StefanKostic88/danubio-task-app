import CharacterCard from "./CharacterCard/CharacterCard";
import { MainCardsContainerStyled } from "../../assets/styles/componentStyles/characterCardStyles";

const MainCardsContainer = ({ arrData }) => {
  return (
    <MainCardsContainerStyled>
      {arrData.map((el, index) => (
        <CharacterCard {...el} key={index} />
      ))}
    </MainCardsContainerStyled>
  );
};

export default MainCardsContainer;
