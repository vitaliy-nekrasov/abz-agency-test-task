import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 60px;
    padding-right: 60px;
  }
  @media screen and (min-width: 1170px) {
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
  }
`;
