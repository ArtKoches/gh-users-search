import styled from "styled-components";
import { fadeIn } from "../../styles/Common.styled.ts";

export const User = styled.div`
  padding: 1.1rem;
  background-color: #fffffe;
  border-radius: 0.5rem;
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

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ff8906;
  border-radius: 0.3rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: #ff8906;
  }

  @media (max-width: 480px) {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #282c34;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
  border: 1px solid #ccc;
`;

export const Login = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  word-break: break-word;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
