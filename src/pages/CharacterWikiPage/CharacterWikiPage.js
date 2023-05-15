import { useEffect, useState } from "react";
import { ContainerWraper } from "../../components";
import { getCharacterInfo, getEpisode } from "../../services/fetchData";

import styled from "styled-components";

const WikiPageStyled = styled.div`
  color: ${({ theme }) => theme.fontColor.primary};
  position: relative;
  z-index: 1;
  border: 1px solid ${({ theme }) => theme.color.primaryGreen};
`;

const PageTopSideStyled = styled.div`
  display: flex;
  padding: 2rem;
  // background: rgba(0, 0, 0, 0.86);
`;

const PageTopDetailsSection = styled.div`
  display: flex;
  // justify-content: center;
  // align-items: center;

  flex: 1;
  gap: 3rem;
  padding-left: 5rem;
  padding-top: 3rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  h3 {
    font-size: 2.4rem;
    letter-spacing: 0.5px;
    line-height: 30px;
  }
`;

const ImageContainerStyled = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.color.primaryGreen};
  img {
    object-fit: cover;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  span {
    position: absolute;

    bottom: -5%;
    right: -7.5%;
    z-index: 10;
    background: ${({ theme }) => theme.color.primaryGreen};
    color: #fff;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CharacterWikiPage = () => {
  const [wikiPageData, setWikiPageData] = useState({});

  useEffect(() => {
    const xxx = async (episode) => {
      return await getEpisode(episode);
    };

    const getWikiPageData = async () => {
      const pageData = await getCharacterInfo(4);
      const { episode } = pageData;
      const episodeListData = await Promise.all([
        ...(await episode.map((el, index) => {
          return xxx(el);
        })),
      ]);

      setWikiPageData(() => ({ ...pageData, episodeListData }));
    };
    getWikiPageData();
  }, []);
  if (!wikiPageData) return;
  const {
    name,
    origin,
    status,
    image,
    species,
    lastLocation,
    gender,
    episodeListData,
  } = wikiPageData;

  if (!episodeListData) return;

  return (
    <ContainerWraper>
      <WikiPageStyled>
        <PageTopSideStyled>
          <ImageContainerStyled>
            <img src={image} />
            <span>{status}</span>
          </ImageContainerStyled>
          <PageTopDetailsSection>
            <div>
              <h3>Name: {name}</h3>
              <h3>Origin: {origin}</h3>
              <h3>Gender: {gender}</h3>
              <h3>Species: {species}</h3>
            </div>
            <div>
              <h3>Last Locaton: {lastLocation}</h3>
              <h3>Status: {status}</h3>
            </div>
          </PageTopDetailsSection>
        </PageTopSideStyled>
        <div>Episodes</div>
        <ul>
          {episodeListData.map(({ airDate, name, seasonEpisode }) => {
            return (
              <li>
                {seasonEpisode}
                {name}
                {airDate}
              </li>
            );
          })}
        </ul>
      </WikiPageStyled>
    </ContainerWraper>
  );
};

export default CharacterWikiPage;
