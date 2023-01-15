import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.backgroundColor};
  padding-top: 140px;
  padding-bottom: 140px;
  padding-left: 16px;
  padding-right: 16px;
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
`;
export const Item = styled.li`
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 328px;

  &:not(:last-child) {
    margin-bottom: 20px;
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
`;
