import GlobalContext from "../../store/global-context";
import useMainNav from "../../hooks/use-main-nav";
import CustomForm from "../ui/CustomForm/CustomForm";
import {
  NavigationStyled,
  InnerNavStyled,
  NavigationHeadingStyled,
} from "../../assets";
import CustomButton from "../ui/CustomButton/CustomButton";

const MainNav = () => {
  const {
    NavRef,
    validPath,
    characterSearch,
    searchCharacterOnchangeHandler,
    onSubmitHandler,
    refreshCardsHandler,
    navigateToHomePageHandler,
    filterCharacters,
  } = useMainNav(GlobalContext);

  return (
    <NavigationStyled ref={NavRef}>
      <InnerNavStyled>
        <NavigationHeadingStyled>
          <img
            onClick={
              validPath ? refreshCardsHandler : navigateToHomePageHandler
            }
            src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png"
          />
        </NavigationHeadingStyled>

        <div
          style={{
            marginLeft: "auto",
            paddingRight: "2rem",
            display: "flex",
            gap: "1rem",
          }}
        >
          <CustomButton
            onClick={() => {
              filterCharacters("alive");
            }}
          >
            Alive
          </CustomButton>
          <CustomButton
            onClick={() => {
              filterCharacters("dead");
            }}
          >
            dead
          </CustomButton>
          <CustomButton
            onClick={() => {
              filterCharacters("unknown");
            }}
          >
            unknown
          </CustomButton>
        </div>

        {validPath && (
          <CustomForm
            onSubmit={onSubmitHandler}
            type={"text"}
            onChange={searchCharacterOnchangeHandler}
            searchVal={characterSearch}
          />
        )}
      </InnerNavStyled>
    </NavigationStyled>
  );
};

export default MainNav;
