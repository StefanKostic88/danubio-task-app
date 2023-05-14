import { generateCharacterData, generateModalData } from "../assets";
const API__URL = "https://rickandmortyapi.com/api/character/";

export const getCharactersPage = async (curPage) => {
  try {
    const res = await fetch(`${API__URL}?page=${curPage}`);
    if (!res.ok) throw new Error();
    const { results } = await res.json();
    console.log(results);
    return results.map((el) => generateCharacterData(el));
  } catch (error) {
    console.log(error);
  }
};

export const getCharacterInfo = async (id) => {
  try {
    const res = await fetch(`${API__URL}${id}`);
    const data = await res.json();
    if (!res.ok) throw new Error();
    console.log(generateModalData(data));
  } catch (err) {
    console.log(err);
  }
};
