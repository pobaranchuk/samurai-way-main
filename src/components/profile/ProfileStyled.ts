import styled from "styled-components";

export const ProfileStyled = styled.div`
  background-color: #5BD5A9;
  grid-area: label1;
`
export  const InputStyled = styled.input`
  width: 50%; //ширина поля ввода равна ширине формы
  border: 1px solid #4A4A4A;
  background-color: whitesmoke;
  padding: 7px 15px;
  margin-left: 20px;

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