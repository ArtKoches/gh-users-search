import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 400px;
  height: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  position: fixed;
  left: 0;
  background-color: #0f0e17;
`;

export const Logo = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 45px;
  padding: 1rem;
  border: 2px solid transparent;
  border-radius: 10px;
  font-size: 18px;
  outline: none;

  &:focus {
    border-color: #ff8906;
  }
`;

export const ResultCounter = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  text-wrap: nowrap;
  text-decoration: underline;
`;
