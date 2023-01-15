import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.backgroundColor};
  padding-left: 16px;
  padding-right: 16px;
`;

export const Title = styled.h2`
  font-family: "Nunito";
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;

  display: flex;
  align-items: flex-end;
  text-align: center;
  margin: 0;
  margin-bottom: 50px;

  color: rgba(0, 0, 0, 0.87);
`;

export const Input = styled.input`
  padding-left: 16px;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-bottom: 50px;

  font-family: "Nunito";
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;

  color: #7e7e7e;
  width: calc(100% - 16px);

  background: inherit;
  border: 1px solid #d0cfcf;
  border-radius: 4px;

  &::placeholder {
    font-family: "Nunito";
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;

    color: #7e7e7e;
  }
`;

export const PhoneInput = styled.input`
  padding-left: 16px;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-bottom: 4px;

  font-family: "Nunito";
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;

  color: #7e7e7e;
  width: calc(100% - 16px);

  background: inherit;
  border: 1px solid #d0cfcf;
  border-radius: 4px;

  &::placeholder {
    font-family: "Nunito";
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;

    color: #7e7e7e;
  }
`;

export const PhoneLabel = styled.p`
  font-family: "Nunito";
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  margin: 0;
  margin-bottom: 25px;
  padding-left: 16px;
  color: #7e7e7e;
`;

export const Select = styled.p`
  font-family: "Nunito";
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;

  color: rgba(0, 0, 0, 0.87);
  margin: 0;
  margin-bottom: 11px;
`;
