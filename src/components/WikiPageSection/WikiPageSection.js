import {
  WikiPageStyled,
  PageTopSideStyled,
  PageTopDetailsSection,
  ImageContainerStyled,
  BottomSideStyled,
  EpisodesCountStyled,
  EpisodesLIstSyled,
  EpisodesLIstItem,
} from "../../assets";

const WikiPageSection = ({
  pageDetails: {
    image,
    status,
    name,
    origin,
    gender,
    species,
    lastLocation,
    episodeCount,
    episodeListData,
  },
}) => {
  return (
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
          {episodeListData?.map(({ airDate, name, seasonEpisode }, index) => {
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
  );
};

export default WikiPageSection;
