import React from "react";
import loadingImage from "../../../assets/images/rick-and.gif";
import { LoadingStyled, LoadingInnerStyled } from "../../../assets";

const Loading = () => {
  return (
    <LoadingStyled>
      <LoadingInnerStyled>
        <img src={loadingImage} />
      </LoadingInnerStyled>
    </LoadingStyled>
  );
};

export default Loading;
