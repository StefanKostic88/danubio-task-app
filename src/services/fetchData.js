import { generateCharacterData } from "../assets";
const API__URL = "https://rickandmortyapi.com/api/character/";

export const getCharactersPage = async (curPage) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${curPage}`
  );
  const { results } = await res.json();
  return results.map((el) => generateCharacterData(el));
};

// const generateCharacterData = ({
//   name,
//   image,
//   id,
//   location: { name: lastLocation },
//   status,
// }) => {
//   return {
//     name,
//     image,
//     id,
//     lastLocation,
//     status,
//   };
// };

//za modal

// const generateCharacterData = ({
//     created,
//     episode,
//     gender,
//     id,
//     image,

//     location,
//     name,
//     origin,
//     status,
//   }) => {
//     console.log(
//       created,
//       episode,
//       gender,
//       id,
//       image,
//       image,
//       location,
//       name,
//       origin,
//       status
//     );
//   };

// const getCharacterInfo = async (id) => {
//   try {
//     const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
//     const data = await res.json();
//     if (!res.ok) throw new Error();
//     return generateCharacterInfo(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// const getCharacterInfo = async (id) => {
//   try {
//     const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
//     const data = await res.json();
//     if (!res.ok) throw new Error();
//     return generateCharacterInfo(data);
//   } catch (err) {
//     console.log(err);
//   }
// };
