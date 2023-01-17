import styled from "styled-components";

export const Wrapper = styled.main`
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

export const Radio = styled.input`
  margin: 0;
  margin-right: 12px;
  margin-bottom: 13px;
  position: relative;
  height: 20px;
  width: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;

  &::before {
    content: "";
    position: absolute;
    top: 62%;
    left: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: #e5e5e5;
    border: 1px solid #d0cfcf;
  }

  &:checked::before {
    border: 1px solid #00bdd3;
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 62%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #00bdd3;
    transform: translate(-50%, -50%);
    visibility: visible;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  font-family: "Nunito";
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.87);
`;

export const FileInput = styled.input`
  margin-top: 47px;
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
`;
export const FileLabel = styled.label`
  position: relative;
  display: inline-block;
  background: #f8f8f8;
  margin-top: 47px;
  margin-bottom: 50px;
`;
export const FileButton = styled.span`
  position: relative;
  display: inline-block;
  cursor: pointer;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  /* outline: none; */
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.87);
  border-radius: 4px 0px 0px 4px;
  background-color: #e5e5e5;
  padding: 15px 15px;
  box-sizing: border-box;
  margin: 0;
  transition: background-color 0.2s;
`;
export const FileText = styled.span`
  padding-left: 16px;
  /* padding-right: 92px; */
  padding-top: 13px;
  padding-bottom: 13px;
  display: inline-block;
  font-family: "Nunito";
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  width: 225px;

  color: #7e7e7e;
  background-color: #e5e5e5;
  border-top: 1px solid #d0cfcf;
  border-bottom: 1px solid #d0cfcf;
  border-right: 1px solid #d0cfcf;
  border-radius: 0px 4px 4px 0px;
`;

export const Div = styled.div`
  text-align: center;
  padding-bottom: 100px;
  background: #e5e5e5;
`;

export const Img = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  width: 340px;
  height: auto;
`;

export const InputLabel = styled.label``;
export const Form = styled.form``;
