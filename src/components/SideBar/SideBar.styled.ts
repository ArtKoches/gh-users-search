import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 500px;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  margin-top: 2rem;
`;

export const Logo = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 1rem;
  border: 2px solid gainsboro;
  border-radius: 10px;
  font-size: 18px;
  outline: none;

  &:focus {
    border-color: cornflowerblue;
  }
`;

export const ResultCounter = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  font-style: italic;
  color: cornflowerblue;
  text-wrap: nowrap;
  text-decoration: underline;
`;
