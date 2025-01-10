import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 1rem;
  padding: 0.5rem 0;

  @media (orientation: landscape) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }
  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

export const Avatar = styled.img`
  width: 150px;
  border: 3px solid #ff8906;
  border-radius: 50%;

  @media (orientation: landscape) {
    width: 100px;
  }
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

  @media (orientation: landscape) {
    font-size: 0.8rem;
  }
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
  color: #fff;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff8906;
    text-decoration: none;
  }

  @media (orientation: landscape) {
    font-size: 0.8rem;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
