import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.backgroundColor};
  padding-top: 140px;
  padding-bottom: 140px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 60px;
    padding-right: 60px;
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
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const Item = styled.li`
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 360px) {
    max-width: 328px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 28px;
    padding-right: 28px;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }
  /* max-width: 328px; */

  &:not(:last-child) {
    margin-bottom: 20px;
    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 768px) {
    &:nth-child(odd) {
      margin-right: 16px;
      @media screen and (min-width: 1024px) {
        margin-right: 0;
      }
    }
    &:not(:nth-last-child(-n + 2)) {
      margin-bottom: 16px;
      @media screen and (min-width: 1024px) {
        margin-bottom: 0;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    &:not(:nth-child(3n + 3)) {
      margin-right: 29px;
    }
    &:not(:nth-last-child(-n + 3)) {
      margin-bottom: 29px;
    }
    max-width: 282px;
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
  font-size: 16px;
  line-height: 26px;

  margin: 0;
  margin-bottom: 20px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;

  color: rgba(0, 0, 0, 0.87);

  @media screen and (min-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const UserInfo = styled.p`
  font-family: "Nunito";
  font-size: 16px;
  line-height: 26px;

  margin: 0;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;

  color: rgba(0, 0, 0, 0.87);

  @media screen and (min-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
