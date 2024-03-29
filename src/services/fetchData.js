import {
  generateCharacterData,
  generateModalData,
  generateEpisodeData,
} from "../assets";
const API__URL = "https://rickandmortyapi.com/api/character/";

export const getCharactersPage = async (curPage, status = null) => {
  const str = status ? `&status=${status}` : null;

  try {
    const res = await fetch(`${API__URL}?page=${curPage}${str}`);
    if (!res.ok) throw new Error();

    const { results, info } = await res.json();

    const charArr = results.map((el) => generateCharacterData(el));

    const { pages: pagesCount } = info;
    console.log(results);

    return { charArr, pagesCount };
  } catch (error) {
    throw error;
  }
};

export const getCharacterInfo = async (id) => {
  try {
    const res = await fetch(`${API__URL}${id}`);
    const data = await res.json();
    if (!res.ok) throw new Error();
    return generateModalData(data);
  } catch (error) {
    throw error;
  }
};

export const searchCharacter = async (name, curPage = 1, status = null) => {
  const str = status ? `&status=${status}` : null;
  try {
    const res = await fetch(`${API__URL}?name=${name}&page=${curPage}${str}`);
    if (!res.ok) throw new Error();

    const { results, info } = await res.json();

    const charArr = results.slice(0, 10).map((el) => generateCharacterData(el));
    const { pages: pagesCount } = info;
    return { charArr, pagesCount };
  } catch (error) {
    throw error;
  }
};

export const getEpisode = async (episode) => {
  const res = await fetch(episode);
  const data = await res.json();

  return generateEpisodeData(data);
};
