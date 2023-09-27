import styled from "styled-components";

export const ProfileStyled = styled.section`
  grid-area: content;
  background-color: cornflowerblue;
  max-width: 1170px;
  width: 100%;
  min-height: 100%;
  padding: 0 15px;
  margin: 0 auto;

  div img {
    max-width: 100%;
    max-height: 100%;
  }
`
export  const InputNewsField = styled.input`
  width: 50%; //ширина поля ввода равна ширине формы
  border: 1px solid #4A4A4A;
  background-color: whitesmoke;
  padding: 7px 15px;

  color: #4A4A4A;
  font-family: Poppins, sans-serif;
  font-size: 12px;
  letter-spacing: 0.6px;
  
  &::placeholder {
    color: #495057;
    text-transform: capitalize;
  }
  
  &:focus-visible {
    outline: 1px solid #4A4A4A;
  }
`