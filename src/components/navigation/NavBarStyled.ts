import styled from "styled-components";

export const NavBarStyled = styled.div`
  width: 25%;
  background-color: azure;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > li {
    display: inline-flex;
    background: gray;
    margin: 10px;

    &:is(:hover, :focus-within) > button:not(:active) {
      --distance: -8px;
    }
  }

  & button {
    appearance: none;
    outline: none;
    font-size: 5vmin;
    border: 2px solid black;
    background: white;

    --distance: 0;
    transform: translateX(var(--distance)) translateY(var(--distance));

    @media (prefers-reduced-motion: no-preference) {
      will-change: transform;
      transition: transform .1s ease ;
    }
  }
`