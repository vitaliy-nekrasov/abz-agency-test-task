import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.img`
  animation-name: spin;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
