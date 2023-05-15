export const generateCharacterData = ({
  name,
  image,
  id,
  location: { name: lastLocation },
  status,
}) => {
  const svgStatusRender = getSvgStatus(status);

  return {
    name,
    image,
    id,
    lastLocation,
    status,
    svgStatusRender,
    bookmarked: false,
  };
};

export const generateModalData = ({
  episode,
  created,
  gender,
  id,
  image,
  location: { name: lastLocation },
  origin: { name: originLocation },
  species,
  status,
  name,
}) => {
  return {
    name,
    gender,
    species,
    image,
    lastLocation,
    origin: originLocation,
    status,
    created: new Date(created).toLocaleString("US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
    episode,
    episodeCount: episode.length,
    id,
  };
};

export const svgStatusOptions = {
  GREEN: "greenSvgRender",
  RED: "redSvgRender",
  MIA: "miaSvgRender",
};

const getSvgStatus = (status) => {
  switch (status) {
    case "Alive":
      return svgStatusOptions.GREEN;

    case "Dead":
      return svgStatusOptions.RED;

    case "unknown":
      return svgStatusOptions.MIA;
  }
};

export const generateCurentPaginationState = (curentPage) => {
  return {
    prevFourPages: curentPage - 4,
    prevThreePages: curentPage - 3,
    prevTwoPages: curentPage - 2,
    prevPage: curentPage - 1,
    curPage: curentPage,
    nextPage: curentPage + 1,
    nextTwoPages: curentPage + 2,
    nextThreePages: curentPage + 3,
    nextFourPages: curentPage + 4,
  };
};

export const generatePaginationData = (
  {
    curPage,
    prevPage,
    prevTwoPages,
    prevThreePages,
    prevFourPages,
    nextPage,
    nextTwoPages,
    nextThreePages,
    nextFourPages,
  },
  maxPages
) => {
  return {
    prevFourPages:
      prevFourPages < maxPages - 4
        ? null
        : curPage - 4 <= 0
        ? null
        : curPage - 4,
    prevThreePages:
      prevThreePages < maxPages - 4
        ? null
        : curPage - 3 <= 0
        ? null
        : curPage - 3,
    prevTwoPages: prevTwoPages <= -1 ? null : curPage - 2,
    prevPage: prevPage <= 0 ? null : curPage - 1,
    curPage: curPage,
    nextPage: nextPage > maxPages ? null : curPage + 1,
    nextTwoPages: nextTwoPages > maxPages ? null : curPage + 2,
    nextThreePages:
      nextThreePages >= 6
        ? null
        : nextThreePages > maxPages
        ? null
        : curPage + 3,
    nextFourPages:
      nextFourPages >= 6 ? null : nextFourPages > maxPages ? null : curPage + 4,
  };
};
