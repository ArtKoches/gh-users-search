import styled from "styled-components";
import { spin } from "../../styles/Common.styled.ts";

export const Wrapper = styled.div`
  max-width: 450px;

  @media (max-width: 480px) {
    max-width: 300px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  border-radius: 1rem;
`;

export const Search = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (max-width: 480px) {
    margin: 0.9rem 0;
    gap: 0.6rem;
  }
`;

export const SearchBlock = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;

  &:focus {
    border-color: #ff8906;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Spinner = styled.div`
  position: absolute;
  top: 18%;
  right: 11%;
  width: 27px;
  height: 27px;
  border: 4px solid #282c34;
  border-top-color: #ff8906;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const Sort = styled.div`
  display: ${(props) => (props.hidden ? "none" : "flex")};
  align-items: center;
  gap: 1rem;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

export const SortTitle = styled.h4`
  font-weight: 400;
  font-size: 0.9rem;
  color: white;
  text-wrap: nowrap;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const SortButton = styled.button<{ $isActive?: boolean }>`
  width: 100%;
  padding: 0.7rem;
  color: white;
  background-color: ${(props) => (props.$isActive ? "#ff8906" : "transparent")};
  border: 1px solid #ff8906;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ff8906;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
`;

export const ResultCounter = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: white;
  text-wrap: nowrap;
  text-decoration: underline;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
