import styled from "styled-components";
import background from "../../img/hero.jpg";

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

  text-align: center;

  color: #ffffff;
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

  text-align: center;

  color: #ffffff;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.lightGray};
  background-image: url(${background});
  padding-top: 40px;
  padding-bottom: 71px;
`;
