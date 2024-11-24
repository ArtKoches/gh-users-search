import styled from "styled-components";

export const User = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  border: 2px solid gainsboro;
  border-radius: 1rem;
  margin-top: 2rem;
  padding: 1rem;
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
  filter: grayscale(1.5);
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: grayscale(0);
    color: white;
  }
`;

export const Avatar = styled.img`
  width: 90px;
  border-radius: 50%;
`;

export const Login = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  text-wrap: nowrap;
`;
