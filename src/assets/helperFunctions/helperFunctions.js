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
