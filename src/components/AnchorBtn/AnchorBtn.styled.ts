import styled from "styled-components";

export const AnchorButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  border: 1px solid #ff8906;
  border-radius: 0.3rem;
  color: #fff;
  background-color: #ff8906;
  font-size: 0.8rem;
  font-weight: 600;

  @media (max-width: 480px) {
    margin-top: 0.9rem;
    font-size: 0.7rem;
  }
`;
