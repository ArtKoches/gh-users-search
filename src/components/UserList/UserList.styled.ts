import styled from "styled-components";

export const User = styled.div`
  margin-left: 400px;
  inset: 0;
  position: fixed;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding: 3rem;
`;

export const Wrapper = styled.ul`
  padding: 0.4rem;
  border: 1px solid #7f5af0;
  border-radius: 0.5rem;
  transition: background-color 0.4s ease-in-out;

  &:hover {
    background-color: #7f5af0;
    box-shadow: 0 0 10px 6px rgba(127, 90, 240, 0.2);

    a {
      color: white;
    }
  }
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const Avatar = styled.img`
  width: 90px;
  border-radius: 50%;
`;

export const Login = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  text-wrap: nowrap;
`;
