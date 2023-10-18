import styled from "styled-components";

export const AppWrapperStyled = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 
          'label0 label0 label0'
          'label2 label1 label1'
          'label2 label1 label1';
  gap: 0;
  height: 100%;
`