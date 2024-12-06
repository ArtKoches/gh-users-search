import styled from "styled-components";

export const User = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  background-color: white;
  border-radius: 1rem;
  margin-top: 2rem;
  padding: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
`;

export const Wrapper = styled.ul`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid cornflowerblue;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease-in-out;

  a {
    color: black;
  }

  &:hover {
    background-color: cornflowerblue;
  }
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: filter 0.3s ease-in-out;

  &:hover {
    color: white;
  }
`;

export const Avatar = styled.img`
  width: 70px;
  border-radius: 50%;
`;

export const Login = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  text-wrap: nowrap;
`;
