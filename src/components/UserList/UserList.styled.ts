import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem;
  background-color: ghostwhite;
  border-bottom: 1px solid gainsboro;
`;

export const List = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  filter: grayscale(1.5);

  &:hover {
    filter: grayscale(0);
    text-decoration: underline;
    color: crimson;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const Login = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
`;
