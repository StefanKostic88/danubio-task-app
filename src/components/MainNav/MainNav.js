import GlobalContext from "../../store/global-context";
import useMainNav from "../../hooks/use-main-nav";
import CustomForm from "../ui/CustomForm/CustomForm";
import {
  NavigationStyled,
  InnerNavStyled,
  NavigationHeadingStyled,
} from "../../assets";

const MainNav = () => {
  const {
    NavRef,
    validPath,
    characterSearch,
    searchCharacterOnchangeHandler,
    onSubmitHandler,
    refreshCardsHandler,
    navigateToHomePageHandler,
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
