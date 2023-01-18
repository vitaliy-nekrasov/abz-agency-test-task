import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.backgroundColor};
  padding-top: ${(p) => p.theme.spaces[26]};
  padding-bottom: ${(p) => p.theme.spaces[26]};
  padding-left: ${(p) => p.theme.spaces[7]};
  padding-right: ${(p) => p.theme.spaces[7]};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${(p) => p.theme.spaces[41]}) {
    padding-left: ${(p) => p.theme.spaces[13]};
    padding-right: ${(p) => p.theme.spaces[13]};
  }
  @media screen and (min-width: ${(p) => p.theme.spaces[42]}) {
    padding-left: ${(p) => p.theme.spaces[20]};
    padding-right: ${(p) => p.theme.spaces[20]};
  }
  @media screen and (min-width: ${(p) => p.theme.spaces[45]}) {
    padding-left: ${(p) => p.theme.spaces[0]};
    padding-right: ${(p) => p.theme.spaces[0]};
  }
`;

export const Title = styled.h2`
  margin: ${(p) => p.theme.spaces[0]};
  font-family: "Nunito";
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: ${(p) => p.theme.spaces[16]};

  display: flex;
  align-items: flex-end;
  text-align: center;

  color: ${(p) => p.theme.colors.black};
  margin-bottom: ${(p) => p.theme.spaces[19]};
`;
export const List = styled.ul`
  margin: ${(p) => p.theme.spaces[0]};
  padding-left: ${(p) => p.theme.spaces[0]};
  margin-bottom: ${(p) => p.theme.spaces[19]};
  list-style: none;
  @media screen and (min-width: ${(p) => p.theme.spaces[41]}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const Item = styled.li`
  background: ${(p) => p.theme.colors.white};
  border-radius: ${(p) => p.theme.radii.custom};
  padding: ${(p) => p.theme.spaces[8]};
  width: ${(p) => p.theme.spaces[34]};
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: ${(p) => p.theme.spaces[8]};
    @media screen and (min-width: ${(p) => p.theme.spaces[41]}) {
      margin-bottom: ${(p) => p.theme.spaces[0]};
    }
  }
  @media screen and (min-width: ${(p) => p.theme.spaces[41]}) {
    width: ${(p) => p.theme.spaces[36]};
    &:nth-child(odd) {
      margin-right: ${(p) => p.theme.spaces[7]};
      @media screen and (min-width: ${(p) => p.theme.spaces[42]}) {
        margin-right: ${(p) => p.theme.spaces[0]};
      }
    }
    &:not(:nth-last-child(-n + 2)) {
      margin-bottom: ${(p) => p.theme.spaces[7]};
      @media screen and (min-width: ${(p) => p.theme.spaces[42]}) {
        margin-bottom: ${(p) => p.theme.spaces[0]};
      }
    }
  }
  @media screen and (min-width: ${(p) => p.theme.spaces[42]}) {
    width: ${(p) => p.theme.spaces[30]};
    &:not(:nth-child(3n + 3)) {
      margin-right: ${(p) => p.theme.spaces[12]};
    }
    &:not(:nth-last-child(-n + 3)) {
      margin-bottom: ${(p) => p.theme.spaces[12]};
    }
  }
  @media screen and (min-width: ${(p) => p.theme.spaces[45]}) {
    width: ${(p) => p.theme.spaces[37]};
  }
`;
export const Photo = styled.img`
  width: ${(p) => p.theme.spaces[21]};
  height: ${(p) => p.theme.spaces[21]};
  border-radius: 50%;
  margin-bottom: ${(p) => p.theme.spaces[8]};
`;

export const Div = styled.div`
  width: ${(p) => p.theme.spaces[31]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserName = styled.p`
  font-family: "Nunito";
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};

  margin: ${(p) => p.theme.spaces[0]};
  margin-bottom: ${(p) => p.theme.spaces[8]};
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${(p) => p.theme.colors.black};
`;

export const UserInfo = styled.p`
  font-family: "Nunito";
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};

  margin: ${(p) => p.theme.spaces[0]};
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${(p) => p.theme.colors.black};
`;
