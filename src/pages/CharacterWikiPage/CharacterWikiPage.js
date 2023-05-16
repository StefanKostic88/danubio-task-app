import GlobalContext from "../../store/global-context";
import useWikiPage from "../../hooks/use-wiki-page";
import { ContainerWraper, WikiPageSection } from "../../components";

const CharacterWikiPage = () => {
  const { navigationHeight, footerHeight, wikiPageData } =
    useWikiPage(GlobalContext);

  if (!wikiPageData) return;

  return (
    <ContainerWraper
      navigationHeight={navigationHeight}
      footerHeight={footerHeight}
    >
      <WikiPageSection pageDetails={{ ...wikiPageData }} />
    </ContainerWraper>
  );
};

export default CharacterWikiPage;
