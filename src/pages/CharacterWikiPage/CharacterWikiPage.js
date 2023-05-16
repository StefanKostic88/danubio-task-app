import { useEffect, useState } from "react";
import { ContainerWraper } from "../../components";
import { getCharacterInfo, getEpisode } from "../../services/fetchData";

import GlobalContext from "../../store/global-context";
import { useContext } from "react";
import { WikiPageSection } from "../../components";

import { useParams } from "react-router";

const CharacterWikiPage = () => {
  const [wikiPageData, setWikiPageData] = useState({});

  const ctx = useContext(GlobalContext);
  const { id } = useParams();
  const characterId = +id.slice(1);

  useEffect(() => {
    const getCharacterPageEpisodesInfo = async (episode) => {
      return await getEpisode(episode);
    };

    const getWikiPageData = async () => {
      const pageData = await getCharacterInfo(characterId);
      const { episode } = pageData;
      const episodeListData = await Promise.all([
        ...(await episode.map((el) => {
          return getCharacterPageEpisodesInfo(el);
        })),
      ]);
      setWikiPageData(() => ({ ...pageData, episodeListData }));
    };
    getWikiPageData();
  }, []);

  if (!wikiPageData) return;

  return (
    <ContainerWraper
      navigationHeight={ctx.navigationHeight}
      footerHeight={ctx.footerHeight}
    >
      <WikiPageSection pageDetails={{ ...wikiPageData }} />
    </ContainerWraper>
  );
};

export default CharacterWikiPage;
