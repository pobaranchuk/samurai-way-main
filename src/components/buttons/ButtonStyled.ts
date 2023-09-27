import styled from "styled-components";

export const Button = styled.button`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  width: 170px;
  height: 32px;

  position: relative;
  z-index: 0;

  &:hover {
    &::before {
      height: 100%;
      width: 100%;
    }

  }

  &::before {
    content: "";
    display: inline-block;
    height: 10px;
    width: 50%;
    background-color: #7572D5;
    transition: .2s ease-in-out;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`