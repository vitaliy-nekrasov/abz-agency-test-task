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
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.l};
  line-height: ${(p) => p.theme.spaces[16]};

  display: flex;
  align-items: flex-end;
  text-align: center;
  margin: ${(p) => p.theme.spaces[0]};
  margin-bottom: ${(p) => p.theme.spaces[19]};

  color: ${(p) => p.theme.colors.black};
`;

export const Form = styled.form`
  max-width: ${(p) => p.theme.spaces[38]};
`;

export const InputLabel = styled.label`
  position: relative;
`;

export const Input = styled.input`
  padding-left: ${(p) => p.theme.spaces[7]};
  padding-top: ${(p) => p.theme.spaces[46]};
  padding-bottom: ${(p) => p.theme.spaces[46]};
  margin-bottom: ${(p) => p.theme.spaces[19]};

  font-family: "Nunito";
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};

  color: ${(p) => p.theme.colors.inputTextColor};
  width: calc(100% - 16px);

  background: inherit;
  border: 1px solid ${(p) => p.theme.colors.lightGray};
  border-radius: ${(p) => p.theme.radii.normal};
  outline: none;

  &::placeholder {
    font-family: "Nunito";
    font-weight: ${(p) => p.theme.fontWeights.normal};
    font-size: ${(p) => p.theme.fontSizes.s};
    line-height: ${(p) => p.theme.lineHeights.body};

    color: ${(p) => p.theme.colors.inputTextColor};
  }

  &:focus:invalid {
    border-color: ${(p) => p.theme.colors.error};
  }
`;

export const Span = styled.span`
  position: absolute;
  left: ${(p) => p.theme.spaces[7]};
  top: ${(p) => p.theme.spaces[11]};

  font-family: "Nunito";
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.spaces[4]};
  line-height: ${(p) => p.theme.lineHeights.heading};
  width: ${({ children, theme }) => {
    switch (children) {
      case "Your name": {
        return theme.spaces[20];
      }
      case "Email": {
        return theme.spaces[14];
      }
      case "Phone": {
        return theme.spaces[15];
      }
      default:
        return;
    }
  }};

  color: ${(p) => p.theme.colors.inputTextColor};
  background-color: ${(p) => p.theme.colors.backgroundColor};
  transform: scale(0);
  transition: all 250ms ease;

  .input ~ & {
    transform: scale(1);
    transition: all 250ms ease;
  }

  .input:invalid ~ & {
    color: ${(p) => p.theme.colors.error};
  }
`;

export const HelperText = styled.span`
  position: absolute;
  left: ${(p) => p.theme.spaces[7]};
  top: ${(p) => p.theme.spaces[16]};

  font-family: "Nunito";
  font-weight: ${(p) => p.theme.fontWeights.medium};
  font-size: ${(p) => p.theme.spaces[4]};
  line-height: ${(p) => p.theme.lineHeights.heading};
  width: ${(p) => p.theme.spaces[33]};

  color: ${(p) => p.theme.colors.inputTextColor};
  background-color: ${(p) => p.theme.colors.backgroundColor};
  transform: scale(0);
  transition: all 250ms ease;

  .input ~ & {
    transform: scale(1);
    transition: all 250ms ease;
  }

  .input:invalid ~ & {
    color: ${(p) => p.theme.colors.error};
  }
`;

export const PhoneInput = styled.input`
  padding-left: ${(p) => p.theme.spaces[7]};
  padding-top: ${(p) => p.theme.spaces[46]};
  padding-bottom: ${(p) => p.theme.spaces[46]};
  margin-bottom: ${(p) => p.theme.spaces[17]};

  font-family: "Nunito";
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};

  color: ${(p) => p.theme.colors.inputTextColor};
  width: calc(100% - 16px);
  background-color: ${(p) => p.theme.colors.backgroundColor};

  background: inherit;
  border: 1px solid ${(p) => p.theme.colors.lightGray};
  border-radius: ${(p) => p.theme.radii.normal};
  outline: none;

  &:focus:invalid {
    border-color: ${(p) => p.theme.colors.error};
  }

  &::placeholder {
    font-family: "Nunito";
    font-weight: ${(p) => p.theme.fontWeights.normal};
    font-size: ${(p) => p.theme.fontSizes.s};
    line-height: ${(p) => p.theme.lineHeights.body};

    color: ${(p) => p.theme.colors.inputTextColor};
  }
`;

export const Select = styled.p`
  font-family: "Nunito";
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};

  color: ${(p) => p.theme.colors.black};
  margin: ${(p) => p.theme.spaces[0]};
  margin-bottom: ${(p) => p.theme.spaces[3]};
`;

export const Radio = styled.input`
  margin: ${(p) => p.theme.spaces[0]};
  margin-right: ${(p) => p.theme.spaces[4]};
  margin-bottom: ${(p) => p.theme.spaces[5]};
  position: relative;
  height: ${(p) => p.theme.spaces[8]};
  width: ${(p) => p.theme.spaces[8]};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;

  &::before {
    content: "";
    position: absolute;
    top: 62%;
    left: 50%;
    width: ${(p) => p.theme.spaces[8]};
    height: ${(p) => p.theme.spaces[8]};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: ${(p) => p.theme.colors.backgroundColor};
    border: 1px solid ${(p) => p.theme.colors.lightGray};
  }

  &:checked::before {
    border: 1px solid ${(p) => p.theme.colors.secondaryColor};
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 62%;
    left: 50%;
    width: ${(p) => p.theme.spaces[2]};
    height: ${(p) => p.theme.spaces[2]};
    border-radius: 50%;
    background-color: ${(p) => p.theme.colors.secondaryColor};
    transform: translate(-50%, -50%);
    visibility: visible;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  font-family: "Nunito";
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};
  color: ${(p) => p.theme.colors.black};
`;

export const FileInput = styled.input`
  margin-top: ${(p) => p.theme.spaces[18]};
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: inline;
  width: ${(p) => p.theme.spaces[0]};
  height: ${(p) => p.theme.spaces[0]};
`;
export const FileLabel = styled.label`
  position: relative;
  display: inline-block;
  background: ${(p) => p.theme.colors.inputFileBackground};
  margin-top: ${(p) => p.theme.spaces[18]};
  margin-bottom: ${(p) => p.theme.spaces[19]};
  width: ${(p) => p.theme.spaces[0]};
`;
export const FileButton = styled.span`
  position: relative;
  display: inline-block;
  cursor: pointer;

  font-family: "Nunito";
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.s};

  text-decoration: none;
  color: ${(p) => p.theme.colors.black};
  text-align: center;
  border: 1px solid ${(p) => p.theme.colors.black};
  border-radius: ${(p) => p.theme.radii.normal} 0px 0px
    ${(p) => p.theme.radii.normal};
  background-color: ${(p) => p.theme.colors.backgroundColor};
  padding: ${(p) => p.theme.spaces[6]} ${(p) => p.theme.spaces[6]};
  box-sizing: border-box;
  margin: ${(p) => p.theme.spaces[0]};
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
  font-weight: ${(p) => p.theme.fontWeights.normal};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};
  width: ${(p) => p.theme.spaces[29]};
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (min-width: ${(p) => p.theme.spaces[39]}) {
    width: ${(p) => p.theme.spaces[32]};
  }

  color: ${(p) => p.theme.colors.inputTextColor};
  background-color: ${(p) => p.theme.colors.backgroundColor};
  border-top: 1px solid ${(p) => p.theme.colors.lightGray};
  border-bottom: 1px solid ${(p) => p.theme.colors.lightGray};
  border-right: 1px solid ${(p) => p.theme.colors.lightGray};
  border-radius: 0px ${(p) => p.theme.radii.normal}
    ${(p) => p.theme.radii.normal} 0px;
`;

export const Div = styled.div`
  text-align: center;
  padding-bottom: ${(p) => p.theme.spaces[25]};
  background: ${(p) => p.theme.colors.backgroundColor};
`;

export const Img = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${(p) => p.theme.spaces[25]};
  width: ${(p) => p.theme.spaces[35]};
  height: auto;

  @media screen and (min-width: ${(p) => p.theme.spaces[41]}) {
    width: ${(p) => p.theme.spaces[40]};
  }
  @media screen and (min-width: ${(p) => p.theme.spaces[42]}) {
    width: ${(p) => p.theme.spaces[43]};
  }
  @media screen and (min-width: ${(p) => p.theme.spaces[45]}) {
    width: ${(p) => p.theme.spaces[44]};
  }
`;
