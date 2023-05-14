import CharacterCard from "./CharacterCard/CharacterCard";
const MainCardsContainer = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, auto)",
        gridAutoColumns: "600px",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
    </div>
  );
};

export default MainCardsContainer;
