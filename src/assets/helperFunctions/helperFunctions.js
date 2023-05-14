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

export const generatePaginationData = ({
  curPage,
  prevPage,
  prevTwoPages,
  prevThreePages,
  prevFourPages,
  nextPage,
  nextTwoPages,
  nextThreePages,
  nextFourPages,
}) => {
  return {
    prevFourPages: prevFourPages < 38 ? null : curPage - 4,
    prevThreePages: prevThreePages < 38 ? null : curPage - 3,
    prevTwoPages: prevTwoPages <= -1 ? null : curPage - 2,
    prevPage: prevPage <= 0 ? null : curPage - 1,
    curPage: curPage,
    nextPage: nextPage > 42 ? null : curPage + 1,
    nextTwoPages: nextTwoPages > 42 ? null : curPage + 2,
    nextThreePages: nextThreePages >= 6 ? null : curPage + 3,
    nextFourPages: nextFourPages >= 6 ? null : curPage + 4,
  };
};

// prevFourPages,
// prevThreePages,
// prevTwoPages,
// prevPage,
// curPage,
// nextPage,
// nextTwoPages,
// nextThreePages,
// nextFourPages,
