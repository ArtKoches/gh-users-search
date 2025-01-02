import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 400px;

  @media (max-width: 480px) {
    max-width: 350px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 0 8px 0 #fff;
`;

export const Search = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 45px;
  padding: 1rem;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;

  &:focus {
    border-color: #ff8906;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    height: 40px;
  }
`;

export const ResultCounter = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  text-wrap: nowrap;
  text-decoration: underline;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
