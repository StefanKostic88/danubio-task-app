import CharacterCard from "./CharacterCard/CharacterCard";
const MainCardsContainer = ({ arrData }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, auto)",
        gridAutoColumns: "600px",
        justifyContent: "center",
        padding: "2rem",
        gap: "2rem",
      }}
    >
      {arrData.map((el, index) => (
        <CharacterCard {...el} key={index} />
      ))}
    </div>
  );
};

export default MainCardsContainer;
