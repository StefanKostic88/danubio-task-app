import CharacterCard from "./CharacterCard/CharacterCard";
import { MainCardsContainerStyled } from "../../assets/styles/componentStyles/characterCardStyles";

const MainCardsContainer = ({ arrData, onOpenModal, onBookmarkCharacter }) => {
  return (
    <MainCardsContainerStyled style={{ zIndex: 1, position: "relative" }}>
      {arrData.map((el, index) => (
        <CharacterCard
          {...el}
          key={index}
          onOpenModal={onOpenModal}
          onBookmarkCharacter={onBookmarkCharacter}
        />
      ))}
    </MainCardsContainerStyled>
  );
};

export default MainCardsContainer;
