import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.backgroundColor};
  padding-top: 140px;
  padding-bottom: 140px;
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
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-family: "Nunito";
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;

  display: flex;
  align-items: flex-end;
  text-align: center;

  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 50px;
`;
export const List = styled.ul`
  margin: 0;
  padding-left: 0;
  margin-bottom: 50px;
  list-style: none;
  @media screen and (min-width: ${(p) => p.theme.spaces[41]}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const Item = styled.li`
  background: #ffffff;
  border-radius: ${(p) => p.theme.radii.custom};
  padding: 20px;
  width: 328px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 20px;
    @media screen and (min-width: ${(p) => p.theme.spaces[41]}) {
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: ${(p) => p.theme.spaces[41]}) {
    width: 344px;
    &:nth-child(odd) {
      margin-right: ${(p) => p.theme.spaces[7]};
      @media screen and (min-width: ${(p) => p.theme.spaces[42]}) {
        margin-right: 0;
      }
    }
    &:not(:nth-last-child(-n + 2)) {
      margin-bottom: ${(p) => p.theme.spaces[7]};
      @media screen and (min-width: ${(p) => p.theme.spaces[42]}) {
        margin-bottom: 0;
      }
    }
  }
  @media screen and (min-width: ${(p) => p.theme.spaces[42]}) {
    width: 282px;
    &:not(:nth-child(3n + 3)) {
      margin-right: ${(p) => p.theme.spaces[12]};
    }
    &:not(:nth-last-child(-n + 3)) {
      margin-bottom: ${(p) => p.theme.spaces[12]};
    }
  }
  @media screen and (min-width: ${(p) => p.theme.spaces[45]}) {
    width: 370px;
  }
`;
export const Photo = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Div = styled.div`
  width: 288px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserName = styled.p`
  font-family: "Nunito";
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};

  margin: 0;
  margin-bottom: 20px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;

  color: rgba(0, 0, 0, 0.87);
`;

export const UserInfo = styled.p`
  font-family: "Nunito";
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};

  margin: 0;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;

  color: rgba(0, 0, 0, 0.87);
`;
