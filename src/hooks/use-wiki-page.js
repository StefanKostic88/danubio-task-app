import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { getCharacterInfo, getEpisode } from "../services/fetchData";

const useWikiPage = (GlobalContext) => {
  const [wikiPageData, setWikiPageData] = useState({});

  const { navigationHeight, footerHeight } = useContext(GlobalContext);
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

  return { navigationHeight, footerHeight, wikiPageData };
};

export default useWikiPage;
