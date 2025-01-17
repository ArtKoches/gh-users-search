import styled from "styled-components";
import { fadeIn } from "../../styles/Common.styled.ts";

export const User = styled.div`
  padding: 1.1rem;
  background-color: #3f4273;
  border: 1px solid #7e4bde;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px 0 #7e4bde;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 768px) {
    min-width: 300px;
  }
  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`;

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.8rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #252746;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #ff8906;
  }

  @media (max-width: 480px) {
    border-radius: 0;
    border-bottom: 1px solid #252746;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
  border: 1px solid #ccc;
`;

export const Login = styled.h3`
  font-size: 0.9rem;
  font-weight: 500;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  word-break: break-word;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
