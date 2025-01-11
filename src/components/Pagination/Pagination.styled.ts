import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 1.1rem;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button<{ $isActive?: boolean }>`
  padding: 0.5rem;
  margin-right: 0.3rem;
  color: ${(props) => (props.$isActive ? "#fff" : "#000")};
  background-color: ${(props) => (props.$isActive ? "#ff8906" : "#fff")};
  border: 1px solid ${(props) => (props.$isActive ? "transparent" : "#ff8906")};
  border-radius: 0.3rem;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: ${(props) => props.$isActive && "not-allowed"};
  transition: background-color 0.3s ease-in-out;

  &:hover {
    color: white;
    background-color: #ff8906;
    border-color: transparent;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    margin-right: 0.2rem;
  }
`;

export const PrevBtn = styled(Button)`
  &:disabled {
    color: #1010104d;
    background-color: #efefef4d;
    border-color: transparent;
    cursor: not-allowed;
  }
`;

export const NextBtn = styled(PrevBtn)``;
