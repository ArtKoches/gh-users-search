import styled from "styled-components";

export const User = styled.div`
  margin-left: 400px;
  padding: 1.5rem;
  border: 1px solid white;
  border-radius: 0 0 0.5rem 0;
  background-color: white;
  box-shadow: 0 0 8px 12px rgba(34, 60, 80, 0.2);
`;

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem;
  border: 1px solid #ff8906;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ff8906;
    color: white;
  }
`;

export const Avatar = styled.img`
  width: 70px;
  border-radius: 50%;
`;

export const Login = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  text-wrap: nowrap;
`;
