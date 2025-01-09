import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const Avatar = styled.img`
  width: 150px;
  border: 3px solid #ff8906;
  border-radius: 50%;

  @media (max-width: 600px) {
    width: 100px;
  }
`;

export const DescList = styled.dl`
  display: grid;
  grid-template-columns: max-content auto;
  gap: 0.3rem;
  padding: 0.3rem;
  background-color: white;
  border-radius: 0.5rem;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const DescTitle = styled.dt`
  grid-column-start: 1;
  font-weight: bold;

  &:after {
    content: ":";
  }
`;

export const DescDetails = styled.dd`
  grid-column-start: 2;
  font-style: italic;
`;

export const GoToProfileLink = styled(Link)`
  color: white;

  &:hover {
    color: #ff8906;
    text-decoration: none;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
