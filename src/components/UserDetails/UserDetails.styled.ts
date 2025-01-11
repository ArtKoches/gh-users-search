import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  place-items: center;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
  @media (min-width: 480px) and (max-width: 768px) and (orientation: landscape) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 0.5rem;
  }
`;

export const Avatar = styled.img`
  width: 150px;
  border: 3px solid #ff8906;
  border-radius: 50%;

  @media (max-width: 480px) {
    width: 100px;
  }
  @media (min-width: 480px) and (max-width: 768px) and (orientation: landscape) {
    width: 110px;
  }
`;

export const DescList = styled.dl`
  display: grid;
  grid-template-columns: max-content auto;
  gap: 0.5rem;
  padding: 1rem;
  font-size: 0.9rem;
  background-color: white;
  border-radius: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
  @media (min-width: 480px) and (max-width: 768px) and (orientation: landscape) {
    max-width: 70%;
    padding: 0.5rem;
    font-size: 0.8rem;
    gap: 0.3rem;
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
  word-break: break-word;
`;

export const GoToProfileLink = styled(Link)`
  font-size: 0.9rem;
  color: #fff;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff8906;
    text-decoration: none;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
  @media (min-width: 480px) and (max-width: 768px) and (orientation: landscape) {
    font-size: 0.8rem;
  }
`;
