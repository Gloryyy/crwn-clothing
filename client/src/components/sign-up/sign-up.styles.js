import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
  @media screen and (max-width: 800px) {
    padding: 0 20px;
  }
`;

export const SignUpSubTitle = styled.span`
  @media screen and (max-width: 800px) {
    padding: 0 20px;
  }
`;
