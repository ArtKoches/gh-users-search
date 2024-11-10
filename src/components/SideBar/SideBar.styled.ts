import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 600px;
  padding: 4rem;
  background-color: gainsboro;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  inset: 0;
`;

export const Logo = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const Search = styled.input`
  width: 100%;
  height: 55px;
  padding: 1rem;
  border: 2px solid transparent;
  border-radius: 10px;
  font-size: 18px;
  outline: none;

  &:focus {
    border-color: cornflowerblue;
  }
`;
