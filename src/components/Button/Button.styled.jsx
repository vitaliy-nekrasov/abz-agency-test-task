import styled from "styled-components";

export const Btn = styled.button`
  font-family: ${(p) => p.theme.fonts.body};
  font-size: ${(p) => p.theme.space[4]};
  line-height: ${(p) => p.theme.space[5]};

  cursor: pointer;
  text-align: center;

  color: ${(p) => p.theme.colors.black};
  background: ${(p) => p.theme.colors.primaryColor};
  border-radius: 80px;
  border-color: transparent;

  padding-left: ${({ children, theme }) => {
    switch (children) {
      case "Users": {
        return theme.space[7];
      }
      case "Sign up": {
        return theme.space[6];
      }
      case "Show more": {
        return "19px";
      }
      default:
        return;
    }
  }};
  padding-right: ${({ children, theme }) => {
    switch (children) {
      case "Users": {
        return theme.space[7];
      }
      case "Sign up": {
        return theme.space[6];
      }
      case "Show more": {
        return "19px";
      }
      default:
        return;
    }
  }};
  padding-top: 4px;
  padding-bottom: 4px;

  &:hover,
  &:focus {
    background: ${(p) => p.theme.colors.buttonHover};
  }

  &:disabled {
    background: ${(p) => p.theme.colors.buttonDisabled};
  }

  &:not(:last-child) {
    margin-right: 10px;
  }

  margin: ${({ children }) => {
    switch (children) {
      case "Show more": {
        return "0 auto";
      }
      default:
        return;
    }
  }};
  display: ${({ children }) => {
    switch (children) {
      case "Show more": {
        return "block";
      }
      default:
        return;
    }
  }};
`;
