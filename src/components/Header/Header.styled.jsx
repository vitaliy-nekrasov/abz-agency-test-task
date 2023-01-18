import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: ${(p) => p.theme.space[4]};
  padding-right: ${(p) => p.theme.space[4]};

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 60px;
    padding-right: 60px;
  }
`;
