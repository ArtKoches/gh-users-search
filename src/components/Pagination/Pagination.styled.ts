import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 1.1rem;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const Button = styled.button<{ $isActive?: boolean }>`
  width: 42px;
  height: 42px;
  margin-right: 0.3rem;
  color: ${(props) => (props.$isActive ? "#fff" : "#000")};
  background-color: ${(props) => (props.$isActive ? "#ff8906" : "#fff")};
  border: 1px solid ${(props) => (props.$isActive ? "transparent" : "#ff8906")};
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: ${(props) => props.$isActive && "not-allowed"};
  transition: background-color 0.3s ease-in-out;

  &:hover {
    color: white;
    background-color: #ff8906;
    border-color: transparent;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
    margin-right: 0.2rem;
  }
  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    font-size: 0.8rem;
    margin-right: 0.1rem;
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
