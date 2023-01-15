import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: ${(p) => p.theme.space[4]};
  padding-right: ${(p) => p.theme.space[4]};
`;
