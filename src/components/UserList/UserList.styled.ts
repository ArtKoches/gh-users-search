import styled from "styled-components";
import { fadeIn } from "../../styles/Common.styled.ts";

export const User = styled.div`
  padding: 1.5rem;
  border: 1px solid transparent;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0 8px 0 #ff8906;
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
  grid-template-columns: repeat(5, 1fr);
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
  gap: 0.3rem;
  padding: 0.3rem;
  border: 1px solid #ff8906;
  border-radius: 0.5rem;

  @media (max-width: 768px) {
    padding: 0.2rem;
  }
  @media (max-width: 480px) {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #282c34;
  }
`;

export const Avatar = styled.img`
  width: 70px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 60px;
  }
  @media (max-width: 480px) {
    width: 50px;
  }
`;

export const Login = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  text-wrap: nowrap;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
