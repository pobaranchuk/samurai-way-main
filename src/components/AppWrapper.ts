import styled from "styled-components";

export const AppWrapperStyled = styled.section`
  display: grid;
  grid-template-areas:
          "header header"
          "n content";
  grid-template-rows: 75px 1fr;
  grid-template-columns: 2fr 10fr;
  width: 1200px;
  margin: 0 auto;
`