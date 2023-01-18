import styled from "styled-components";
import background from "../../img/hero.jpg";

export const Main = styled.main`
  background-color: ${(p) => p.theme.colors.backgroundColor};
`;

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.lightGray};
  background-image: url(${background});
  padding-top: ${(p) => p.theme.spaces[16]};
  padding-bottom: ${(p) => p.theme.spaces[22]};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${(p) => p.theme.spaces[41]}) {
    padding-top: ${(p) => p.theme.spaces[24]};
    padding-bottom: ${(p) => p.theme.spaces[23]};
  }
  @media screen and (min-width: ${(p) => p.theme.spaces[42]}) {
    padding-top: ${(p) => p.theme.spaces[28]};
    padding-bottom: ${(p) => p.theme.spaces[27]};
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
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: ${(p) => p.theme.spaces[16]};

  padding-left: ${(p) => p.theme.spaces[7]};
  padding-right: ${(p) => p.theme.spaces[7]};
  margin-top: ${(p) => p.theme.spaces[0]};
  margin-bottom: ${(p) => p.theme.spaces[9]};
  max-width: ${(p) => p.theme.spaces[34]};

  text-align: center;

  color: ${(p) => p.theme.colors.white};

  @media screen and (min-width: ${(p) => p.theme.spaces[41]}) {
    max-width: ${(p) => p.theme.spaces[38]};
  }
`;

export const Description = styled.p`
  margin: ${(p) => p.theme.spaces[0]};
  font-family: "Nunito";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};

  padding-left: ${(p) => p.theme.spaces[7]};
  padding-right: ${(p) => p.theme.spaces[7]};
  margin-top: ${(p) => p.theme.spaces[0]};
  margin-bottom: ${(p) => p.theme.spaces[13]};
  max-width: ${(p) => p.theme.spaces[34]};

  text-align: center;

  color: ${(p) => p.theme.colors.white};

  @media screen and (min-width: ${(p) => p.theme.spaces[41]}) {
    max-width: ${(p) => p.theme.spaces[38]};
  }
`;
