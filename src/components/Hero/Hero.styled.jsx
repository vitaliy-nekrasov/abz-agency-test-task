import styled from "styled-components";
import background from "../../img/hero.jpg";

export const Main = styled.main`
  background-color: #e5e5e5;
`;

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.lightGray};
  background-image: url(${background});
  padding-top: 40px;
  padding-bottom: 71px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${(p) => p.theme.spaces[41]}) {
    padding-top: 89px;
    padding-bottom: 88px;
  }
  @media screen and (min-width: ${(p) => p.theme.spaces[42]}) {
    padding-top: 164px;
    padding-bottom: 163px;
    background-size: cover;
  }
  @media screen and (min-width: ${(p) => p.theme.spaces[45]}) {
    text-align: center;
    width: ${(p) => p.theme.spaces[45]};
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Title = styled.h1`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;

  padding-left: ${(p) => p.theme.spaces[7]};
  padding-right: ${(p) => p.theme.spaces[7]};
  margin-top: 0;
  margin-bottom: 21px;
  max-width: 328px;

  text-align: center;

  color: #ffffff;

  @media screen and (min-width: ${(p) => p.theme.spaces[41]}) {
    max-width: 380px;
  }
`;

export const Description = styled.p`
  margin: 0;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};

  padding-left: ${(p) => p.theme.spaces[7]};
  padding-right: ${(p) => p.theme.spaces[7]};
  margin-top: 0;
  margin-bottom: ${(p) => p.theme.spaces[13]};
  max-width: 328px;

  text-align: center;

  color: #ffffff;

  @media screen and (min-width: ${(p) => p.theme.spaces[41]}) {
    max-width: 380px;
  }
`;
