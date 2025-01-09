import styled from "styled-components";
import { fadeIn } from "../../styles/Common.styled.ts";

export const DialogWrapper = styled.dialog`
  width: 350px;
  place-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  background-color: #111827;
  border: 1px solid #ff8906;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px 0 #ff8906;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 480px) {
    width: 300px;
    padding: 0.5rem;
  }
`;

export const DialogCloseButton = styled.button`
  padding: 0.7rem;
  font-weight: 600;
  color: white;
  background-color: transparent;
  border: 1px solid crimson;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: crimson;
  }
`;
