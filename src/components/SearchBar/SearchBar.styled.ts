import styled from "styled-components";
import { spin } from "../../styles/Common.styled.ts";

export const Wrapper = styled.div`
  width: 450px;

  @media (max-width: 480px) {
    width: 300px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  border: 1px solid #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px 0 #fff;
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
  color: white;
  background-color: #3f4273;
  border: 1px solid transparent;
  border-radius: 0.3rem;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #7e4bde;
  }
  &::placeholder {
    font-size: 0.9rem;
    color: darkgray;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Spinner = styled.div`
  position: absolute;
  top: 17%;
  right: 6%;
  padding: 0.5rem;
  border: 4px solid #000;
  border-top-color: #ff8906;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;

  @media (max-width: 480px) {
    right: 8%;
  }
`;

export const Sort = styled.div`
  display: ${(props) => (props.hidden ? "none" : "flex")};
  align-items: center;
  gap: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #7e4bde;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

export const SortTitle = styled.h4`
  font-weight: 400;
  font-size: 0.8rem;
  color: white;
  text-wrap: nowrap;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const SortButton = styled.button<{ $isActive?: boolean }>`
  padding: 0.5rem;
  color: white;
  background-color: ${(props) => (props.$isActive ? "#ff8906" : "transparent")};
  border: 1px solid #ff8906;
  border-radius: 0.3rem;
  font-size: 0.8rem;
  font-weight: 600;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ff8906;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.4rem;
  }
`;

export const ResultCounter = styled.p`
  font-style: italic;
  color: #ffd803;
  text-decoration: underline;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
