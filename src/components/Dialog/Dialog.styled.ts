import styled from "styled-components";
import { fadeIn } from "../../styles/Common.styled.ts";

export const DialogWrapper = styled.dialog`
  width: 350px;
  position: fixed;
  top: 50%;
  left: 50%;
  text-align: right;
  transform: translate(-50%, -50%);
  padding: 1rem;
  background-color: #111827;
  border: 1px solid #ff8906;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px 0 #ff8906;
  animation: ${fadeIn} 1s ease-in-out;

  @media (orientation: landscape) {
    width: 300px;
    padding: 0.5rem;
    text-align: center;
  }
  @media (max-width: 480px) {
    width: 300px;
    padding: 0.5rem;
    text-align: center;
  }
`;

export const DialogCloseButton = styled.button`
  font-size: 1rem;
  font-weight: 400;
  color: white;
  background-color: transparent;
  border: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff8906;
  }

  @media (orientation: landscape) {
    font-size: 0.7rem;
  }
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
