import styled from "styled-components";

export const Btn = styled.button`
  font-family: ${(p) => p.theme.fonts.body};
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: ${(p) => p.theme.lineHeights.body};

  cursor: pointer;
  text-align: center;

  color: ${(p) => p.theme.colors.black};
  background: ${(p) => p.theme.colors.primaryColor};
  border-radius: ${(p) => p.theme.radii.button};
  border-color: transparent;

  padding-left: ${({ children, theme }) => {
    switch (children) {
      case "Users": {
        return theme.spaces[12];
      }
      case "Sign up": {
        return theme.spaces[10];
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
        return theme.spaces[12];
      }
      case "Sign up": {
        return theme.spaces[10];
      }
      case "Show more": {
        return "19px";
      }
      default:
        return;
    }
  }};
  padding-top: ${(p) => p.theme.spaces[1]};
  padding-bottom: ${(p) => p.theme.spaces[1]};

  &:hover,
  &:focus {
    background: ${(p) => p.theme.colors.buttonHover};
  }

  &:disabled {
    background: ${(p) => p.theme.colors.buttonDisabled};
  }

  &:not(:last-child) {
    margin-right: ${(p) => p.theme.spaces[2]};
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
