import styled from "styled-components";

export const Wrapper = styled.main`
  background-color: ${(p) => p.theme.colors.backgroundColor};
  padding-left: ${(p) => p.theme.spaces[7]};
  padding-right: ${(p) => p.theme.spaces[7]};
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Form = styled.form`
  max-width: 380px;
`;

export const InputLabel = styled.label`
  position: relative;
`;

export const Input = styled.input`
  padding-left: ${(p) => p.theme.spaces[7]};
  padding-top: 14px;
  padding-bottom: 14px;
  margin-bottom: 50px;

  font-family: "Nunito";
  font-weight: 400;
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};

  color: #7e7e7e;
  width: calc(100% - 16px);

  background: inherit;
  border: 1px solid #d0cfcf;
  border-radius: 4px;
  outline: none;

  &::placeholder {
    font-family: "Nunito";
    font-weight: 400;
    font-size: ${(p) => p.theme.fontSizes.s};
    line-height: ${(p) => p.theme.lineHeights.body};

    color: #7e7e7e;
  }

  &:focus:invalid {
    border-color: #cb3d40;
  }
`;

export const Span = styled.span`
  position: absolute;
  left: ${(p) => p.theme.spaces[7]};
  top: -25px;

  font-family: "Nunito";
  font-weight: 500;
  font-size: 12px;
  line-height: ${(p) => p.theme.lineHeights.heading};
  width: ${({ children, theme }) => {
    switch (children) {
      case "Your name": {
        return theme.spaces[20];
      }
      case "Email": {
        return "33px";
      }
      case "Phone": {
        return "35px";
      }
      default:
        return;
    }
  }};

  color: #7e7e7e;
  background-color: ${(p) => p.theme.colors.backgroundColor};
  transform: scale(0);
  transition: all 250ms ease;

  .input ~ & {
    transform: scale(1);
    transition: all 250ms ease;
  }

  .input:invalid ~ & {
    color: #cb3d40;
  }
`;

export const HelperText = styled.span`
  position: absolute;
  left: ${(p) => p.theme.spaces[7]};
  top: 40px;

  font-family: "Nunito";
  font-weight: 500;
  font-size: 12px;
  line-height: ${(p) => p.theme.lineHeights.heading};
  width: 320px;

  color: #7e7e7e;
  background-color: ${(p) => p.theme.colors.backgroundColor};
  transform: scale(0);
  transition: all 250ms ease;

  .input ~ & {
    transform: scale(1);
    transition: all 250ms ease;
  }

  .input:invalid ~ & {
    color: #cb3d40;
  }
`;

export const PhoneInput = styled.input`
  padding-left: ${(p) => p.theme.spaces[7]};
  padding-top: 14px;
  padding-bottom: 14px;
  margin-bottom: 43px;

  font-family: "Nunito";
  font-weight: 400;
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};

  color: #7e7e7e;
  width: calc(100% - 16px);
  background-color: ${(p) => p.theme.colors.backgroundColor};

  background: inherit;
  border: 1px solid #d0cfcf;
  border-radius: ${(p) => p.theme.radii.normal};
  outline: none;

  &:focus:invalid {
    border-color: #cb3d40;
  }

  &::placeholder {
    font-family: "Nunito";
    font-weight: 400;
    font-size: 16px;
    line-height: ${(p) => p.theme.lineHeights.body};

    color: #7e7e7e;
  }
`;

export const Select = styled.p`
  font-family: "Nunito";
  font-weight: 400;
  font-size: 16px;
  line-height: ${(p) => p.theme.lineHeights.body};

  color: rgba(0, 0, 0, 0.87);
  margin: 0;
  margin-bottom: 11px;
`;

export const Radio = styled.input`
  margin: 0;
  margin-right: 12px;
  margin-bottom: ${(p) => p.theme.spaces[5]};
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
    width: ${(p) => p.theme.spaces[2]};
    height: ${(p) => p.theme.spaces[2]};
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
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};
  color: rgba(0, 0, 0, 0.87);
`;

export const FileInput = styled.input`
  margin-top: 47px;
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: inline;
  width: 0;
  height: 0;
`;
export const FileLabel = styled.label`
  position: relative;
  display: inline-block;
  background: #f8f8f8;
  margin-top: 47px;
  margin-bottom: 50px;
  width: 0;
`;
export const FileButton = styled.span`
  position: relative;
  display: inline-block;
  cursor: pointer;

  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: ${(p) => p.theme.fontSizes.s};

  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.87);
  border-radius: ${(p) => p.theme.radii.normal} 0px 0px
    ${(p) => p.theme.radii.normal};
  background-color: #e5e5e5;
  padding: 15px 15px;
  box-sizing: border-box;
  margin: 0;
`;
export const FileText = styled.span`
  padding-left: ${(p) => p.theme.spaces[7]};
  position: relative;
  top: -54px;
  left: 84px;
  padding-top: ${(p) => p.theme.spaces[5]};
  padding-bottom: ${(p) => p.theme.spaces[5]};
  display: inline-block;
  font-family: "Nunito";
  font-weight: 400;
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};
  width: 235px;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (min-width: 576px) {
    width: 290px;
  }

  color: #7e7e7e;
  background-color: #e5e5e5;
  border-top: 1px solid #d0cfcf;
  border-bottom: 1px solid #d0cfcf;
  border-right: 1px solid #d0cfcf;
  border-radius: 0px ${(p) => p.theme.radii.normal}
    ${(p) => p.theme.radii.normal} 0px;
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

  @media screen and (min-width: ${(p) => p.theme.spaces[41]}) {
    width: 760px;
  }
  @media screen and (min-width: ${(p) => p.theme.spaces[42]}) {
    width: 1000px;
  }
  @media screen and (min-width: ${(p) => p.theme.spaces[45]}) {
    width: 1150px;
  }
`;
