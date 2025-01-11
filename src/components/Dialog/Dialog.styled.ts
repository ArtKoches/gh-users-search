import styled from "styled-components";
import { fadeIn } from "../../styles/Common.styled.ts";

export const DialogWrapper = styled.dialog`
  width: 400px;
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
  @media (min-width: 480px) and (max-width: 768px) and (orientation: landscape) {
    width: 80%;
    max-height: 80%;
    overflow-y: auto;
  }
`;

export const DialogCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.3rem;
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  background-color: transparent;
  border: 1px solid crimson;
  border-radius: 0.3rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: crimson;
  }

  @media (max-width: 480px) {
    position: static;
    display: block;
    margin: 0 auto;
    font-size: 0.8rem;
  }
  @media (min-width: 480px) and (max-width: 768px) and (orientation: landscape) {
    position: static;
    display: block;
    margin: 0 auto;
    font-size: 0.8rem;
  }
`;
