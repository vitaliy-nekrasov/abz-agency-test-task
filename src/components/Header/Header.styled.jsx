import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${(p) => p.theme.spaces[5]};
  padding-bottom: ${(p) => p.theme.spaces[5]};
  padding-left: ${(p) => p.theme.spaces[7]};
  padding-right: ${(p) => p.theme.spaces[7]};

  @media screen and (min-width: ${(p) => p.theme.spaces[41]}) {
    padding-left: ${(p) => p.theme.spaces[13]};
    padding-right: ${(p) => p.theme.spaces[13]};
  }
  @media screen and (min-width: ${(p) => p.theme.spaces[42]}) {
    padding-left: ${(p) => p.theme.spaces[20]};
    padding-right: ${(p) => p.theme.spaces[20]};
  }
  @media screen and (min-width: ${(p) => p.theme.spaces[45]}) {
    max-width: ${(p) => p.theme.spaces[45]};
    margin-left: auto;
    margin-right: auto;
  }
`;
