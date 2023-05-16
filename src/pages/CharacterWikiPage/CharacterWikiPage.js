import { useEffect, useState } from "react";
import { ContainerWraper } from "../../components";
import { getCharacterInfo, getEpisode } from "../../services/fetchData";

import GlobalContext from "../../store/global-context";
import { useContext } from "react";

import styled from "styled-components";

const WikiPageStyled = styled.div`
  color: ${({ theme }) => theme.fontColor.primary};
  position: relative;
  z-index: 1;
  border: 1px solid ${({ theme }) => theme.color.primaryBlue};
  padding: 4rem 2rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

const PageTopSideStyled = styled.div`
  display: flex;
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
    font-size: 2.2rem;
    letter-spacing: 2.5px;
    line-height: 30px;
    font-weight: 500;
  }
`;

const ImageContainerStyled = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.color.primaryBlue};
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
    background: ${({ theme }) => theme.color.primaryBlue};
    color: #fff;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const BottomSideStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

const EpisodesCountStyled = styled.div`
  margin-bottom: 5rem;
  display: flex;
  // align-items: center;
  justify-content: center;
  h3 {
    font-weight: 500;
  }
  // background: red;
`;

const EpisodesLIstSyled = styled.ul`
  display: flex;
  // flex-direction: column;
  // gap: 0.75rem;
  margin-top: 2rem;

  flex-wrap: wrap;
  justify-content: center;

  gap: 5rem;
`;

const EpisodesLIstItem = styled.li`
  flex: 25%;
  div {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-items: center;
  }
  h3 {
    font-weight: 500;
    font-size: 2.2rem;
    margin-bottom: 0.75rem;
  }
  p {
    font-size: 18px;
  }
`;

const CharacterWikiPage = () => {
  const [wikiPageData, setWikiPageData] = useState({});

  const ctx = useContext(GlobalContext);

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
    episodeCount,
  } = wikiPageData;

  if (!episodeListData) return;

  return (
    <ContainerWraper
      navigationHeight={ctx.navigationHeight}
      footerHeight={ctx.footerHeight}
    >
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

        <BottomSideStyled>
          <EpisodesCountStyled>
            <h3>Episode Count: {episodeCount}</h3>
          </EpisodesCountStyled>
          <EpisodesLIstSyled>
            {episodeListData.map(({ airDate, name, seasonEpisode }, index) => {
              return (
                <EpisodesLIstItem key={index}>
                  <div>
                    <h3> {seasonEpisode}</h3>
                    <p>{name}</p>
                    <p> Air Date: {airDate}</p>
                  </div>
                </EpisodesLIstItem>
              );
            })}
          </EpisodesLIstSyled>
        </BottomSideStyled>
      </WikiPageStyled>
    </ContainerWraper>
  );
};

export default CharacterWikiPage;
