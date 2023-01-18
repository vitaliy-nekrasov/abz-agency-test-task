import styled from "styled-components";
import background from "../../img/hero.jpg";

export const Main = styled.main`
  /* display: flex; */
  /* justify-content: center; */
  background-color: #e5e5e5;
`;

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.lightGray};
  background-image: url(${background});
  padding-top: 40px;
  padding-bottom: 71px;
  /* height: 500px; */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding-top: 89px;
    padding-bottom: 88px;
  }
  @media screen and (min-width: 1024px) {
    /* height: 650px; */
    padding-top: 164px;
    padding-bottom: 163px;
    background-size: cover;
    /* max-width: 1024px; */
  }
  @media screen and (min-width: 1170px) {
    text-align: center;
    width: 1170px;
    margin-left: auto;
    margin-right: auto;
    /* padding-top: 164px; */
    /* background-size: cover; */
  }
`;

export const Title = styled.h1`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;

  padding-left: 16px;
  padding-right: 16px;
  margin-top: 0;
  margin-bottom: 21px;
  max-width: 328px;

  text-align: center;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    max-width: 380px;
  }
`;

export const Description = styled.p`
  margin: 0;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;

  padding-left: 16px;
  padding-right: 16px;
  margin-top: 0;
  margin-bottom: 32px;
  max-width: 328px;

  text-align: center;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    max-width: 380px;
  }
`;
