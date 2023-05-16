import styled from "styled-components";

export const WikiPageStyled = styled.div`
  color: ${({ theme }) => theme.fontColor.primary};
  position: relative;
  z-index: 1;
  border: 1px solid ${({ theme }) => theme.color.primaryBlue};
  padding: 4rem 2rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

export const PageTopSideStyled = styled.div`
  display: flex;
`;

export const PageTopDetailsSection = styled.div`
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

export const ImageContainerStyled = styled.div`
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

export const BottomSideStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

export const EpisodesCountStyled = styled.div`
  margin-bottom: 5rem;
  display: flex;
  // align-items: center;
  justify-content: center;
  h3 {
    font-weight: 500;
  }
  // background: red;
`;

export const EpisodesLIstSyled = styled.ul`
  display: flex;
  // flex-direction: column;
  // gap: 0.75rem;
  margin-top: 2rem;

  flex-wrap: wrap;
  justify-content: center;

  gap: 5rem;
`;

export const EpisodesLIstItem = styled.li`
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
